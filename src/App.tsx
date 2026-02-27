import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from '@/context/NavigationContext';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';
import { ROUTES } from '@/utils/constants';

function App() {
  return (
    <NavigationProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;
