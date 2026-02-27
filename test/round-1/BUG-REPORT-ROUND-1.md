# Bug Report - Round 1
## ACC Cloud Portal React Frontend

**Test Date:** 2026-02-27  
**Project ID:** proj-1772174022  
**Severity:** HIGH (Must fix before production)  
**Total Bugs:** 2  

---

## BUG-001: Fast Refresh Export Violation ⚠️

**Severity:** HIGH  
**File:** `src/context/NavigationContext.tsx` (line 30)  
**Type:** Developer Experience / Build Issue  

### Problem
```typescript
// Line 30:
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  // ...
}
```

Fast Refresh (React Hot Reload) only works when a file exports **only components**. Mixing a component export (`NavigationProvider`) with a hook export (`useNavigation`) breaks Fast Refresh.

### ESLint Error
```
30:14  error  Fast refresh only works when a file only exports components. 
              Use a new file to share constants or functions between components  
              react-refresh/only-export-components
```

### Impact
- Hot Module Replacement (HMR) may fail during development
- Full page reload required on every code change
- Slower development iteration cycle

### Fix
**Move the hook to a separate file:**

1. Create new file: `src/hooks/useNavigation.ts`
```typescript
// src/hooks/useNavigation.ts
import { useContext } from 'react';
import { NavigationContext } from '@/context/NavigationContext';

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};
```

2. Update `src/context/NavigationContext.tsx`:
```typescript
// Remove the useNavigation export
// Keep only:
export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // ... implementation
};
```

3. Update all imports:
```typescript
// Before:
import { useNavigation } from '@/context/NavigationContext';

// After:
import { useNavigation } from '@/hooks/useNavigation';
```

**Files to update:**
- `src/components/layout/Header.tsx`
- `src/components/layout/MobileMenu.tsx`
- Any other components using `useNavigation`

---

## BUG-002: setState in useEffect Causes Cascading Renders ⚠️

**Severity:** HIGH  
**File:** `src/hooks/useMediaQuery.ts` (line 10)  
**Type:** Performance / React Best Practices  

### Problem
```typescript
useEffect(() => {
  const media = window.matchMedia(query);
  
  if (media.matches !== matches) {
    setMatches(media.matches);  // ❌ Synchronous setState in effect
  }

  const listener = () => setMatches(media.matches);
  // ...
}, [matches, query]);  // ❌ 'matches' in dependency array causes re-runs
```

### ESLint Error
```
10:7  error  Calling setState synchronously within an effect can trigger 
             cascading renders. Effects are intended to synchronize state 
             between React and external systems.
             react-hooks/set-state-in-effect
```

### Impact
- **Performance degradation** - Unnecessary re-renders
- **Potential infinite loops** - Effect runs when `matches` changes → sets `matches` → effect runs again
- **React warning in console** - Violates React best practices

### Fix
**Remove synchronous setState and fix dependencies:**

```typescript
// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  // ✅ Initialize with actual media query state
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // ✅ Update state if changed (handles query changes)
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // ✅ Add event listener for future changes
    const listener = () => setMatches(media.matches);
    
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Legacy browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]); // ✅ Remove 'matches' from dependencies

  return matches;
};
```

### Alternative Fix (Simpler)
If the above still triggers lint errors, use this pattern:

```typescript
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // ✅ Set initial state immediately from listener
    const listener = () => setMatches(media.matches);
    listener(); // Initialize
    
    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [query]);

  return matches;
};
```

---

## Verification Steps

After fixing both bugs:

1. **Run linter:**
   ```bash
   cd /Users/accuser/.openclaw/workspace/projects/proj-1772174022/code
   npm run lint
   ```
   Expected output: `✓ No linting errors`

2. **Test Fast Refresh:**
   ```bash
   npm run dev
   ```
   - Make a change to a component
   - Verify page doesn't fully reload
   - Check console for HMR success message

3. **Test Media Query Hook:**
   - Resize browser window
   - Mobile menu should toggle at breakpoint
   - No console warnings about re-renders

4. **Build for production:**
   ```bash
   npm run build
   ```
   Expected: No TypeScript or ESLint errors

---

## Summary

| Bug ID | File | Severity | Fix Time | Impact |
|--------|------|----------|----------|---------|
| BUG-001 | NavigationContext.tsx | HIGH | 15 min | Developer UX |
| BUG-002 | useMediaQuery.ts | HIGH | 10 min | Performance |

**Total Fix Time:** ~25-30 minutes  
**Blocker for Production:** YES  
**Re-test Required:** YES (run `npm run lint`)

---

## Next Steps

1. Developer applies fixes above
2. Run `npm run lint` to verify clean output
3. Test locally with `npm run dev`
4. Push to GitHub
5. Vercel auto-deploys
6. Tester verifies deployed site
7. If clean → **APPROVE FOR PRODUCTION** ✅

---

**Reported by:** Tester Agent (Principal QA, 15+ years)  
**Report Version:** 1.0  
**Date:** 2026-02-27
