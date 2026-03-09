# Functional Specification Document (FSD)
## BA/PM Productivity & Project Governance Platform

**Document Version:** 1.0  
**Date:** March 9, 2026  
**Project ID:** project_20260309_091827  
**Status:** Draft

---

## 1. Document Overview & Purpose

This Functional Specification Document (FSD) provides a detailed description of the functional requirements, system behavior, user interactions, and specific behaviors of the BA/PM Productivity & Project Governance Platform. It translates the business objectives outlined in the BRD into actionable specifications for the development and testing teams.

The system manages the entire project lifecycle, automating scope drift detection, financial tracking (profitability metrics), standardized documentation generation, and rigorous internal/external review workflows.

---

## 2. User Roles & Permissions

The system implements Role-Based Access Control (RBAC).

| Role | Permissions & Access Level | Key Capabilities |
|------|---------------------------|------------------|
| **System Admin** | Super User | Manage roles, configure industries, master data management, system settings. |
| **Project Manager (PM)** | Project Admin | Create projects, allocate resources, view financial dashboards, approve CRs, risk management. |
| **Business Analyst (BA)** | Creator / Editor | Capture meeting notes, draft BRD/FSD, conduct AI research, manage client approvals. |
| **Sales Pre-Sales** | Read / Create | Create proposals, generate sales SOWs, view profitability alerts, track existing client CRs. |
| **Developer / Tester** | Contributor | Update task status, log hours, view assigned sub-tasks, link tasks to objectives. |
| **Department Head** | Approver / Viewer | View portfolio profitability, review high-risk escalations, budget approval. |
| **Client Sponsor** | External Viewer | Review documents, sign-off on approvals via external secure link, view public progress tracking. |

---

## 3. Detailed Functional Specifications (9 Workflow Areas)

### 3.1 New Project Workflow
- **FSD-1.1:** Users can create instances of "New Project" specifying industry context (Banking, Insurance, etc.).
- **FSD-1.2:** System provides a WYSIWYG editor for capturing meeting notes. Notes are parsed by AI to extract action items, requirements, and dependencies.
- **FSD-1.3:** `Generate Document` button triggers an AI prompt creating a standardized BRD/FSD/SOW using baseline templates based on selected industry.
- **FSD-1.4:** Mandatory internal review flag is set to `Pending` upon document creation. Document cannot be shared externally via the `Share to Client` feature until the internal flag is marked `Approved`.
- **FSD-1.5:** Scrum dashboard automatically provisions upon Client Approval flag changing to `Approved`.

### 3.2 Existing Project Workflow
- **FSD-2.1:** Background service constantly monitors incoming emails (via IMAP/GraphAPI) and Slack/Teams messages linked to the project ID.
- **FSD-2.2:** System compares incoming text against the approved requirement baseline vector database to classify "In-Scope" vs "Potential Change Request."
- **FSD-2.3:** Identified CRs enter a dedicated CR Queue for PM estimation.

### 3.3 Sales & Pre-Sales Workflow
- **FSD-3.1:** Dedicated `Proposal` entity can be created. System suggests competitor benchmark data using pre-configured industry models.
- **FSD-3.2:** State transitions for proposals: Draft -> Internal Review -> Sent to Client -> Negotiating -> Closed Won/Lost.

### 3.4 Industry Coverage & Domain Configuration
- **FSD-4.1:** Admin configuration panel exists to upload custom document templates, terminology dictionaries, and compliance checklists per industry domain.
- **FSD-4.2:** On project creation, selecting "Mutual Funds" conditionally loads checking rules for financial compliance in the BRD editor.

### 3.5 Task Allocation & Resource Planning
- **FSD-5.1:** Kanban and Gantt view for tasks.
- **FSD-5.2:** Drag-and-drop assignment of resources. System prevents assignment if Resource Capacity > 100% for the given sprint/week.
- **FSD-5.3:** Validation rule: Testing tasks cannot enter `In Progress` status until dependent Development tasks are `Completed`.

### 3.6 Project Monitoring & Risk Governance
- **FSD-6.1:** User can add a Risk entry: Title, Description, Severity (Low/Medium/High), Impact, Mitigation.
- **FSD-6.2:** If Severity = `High`, an automated escalation email is sent to the Department Head.
- **FSD-6.3:** Burndown charts are automatically calculated daily based on remaining estimated hours vs. completed tasks.

### 3.7 Scope Drift & Change Request Control
- **FSD-7.1:** CR Detection Dashboard highlights detected deviations.
- **FSD-7.2:** PM can formally convert a "Detected Deviation" into a "CR Profile" containing Estimated Effort (in hours) and Cost Impact.
- **FSD-7.3:** CR Impact Report generates a PDF comparing `Baseline Cost` vs `New Total Cost`.

### 3.8 Financial Governance & Profitability Tracking
- **FSD-8.1:** Daily Cron Job computes: `Total Executed Hours * Role Rate` + `OpEx`.
- **FSD-8.2:** Formula: `Profitability = Project PO Value - Total Cost`. 
- **FSD-8.3:** Traffic Light Indicator on Project Dashboard:
  - **Green:** Margin >= 15x
  - **Yellow:** Margin < 15x and > 10x
  - **Red:** Margin <= 10x
- **FSD-8.4:** Red threshold triggers automatic alert to Department Head.

### 3.9 Continuous Follow-Up
- **FSD-9.1:** System cron jobs identify pending approvals older than 48 hours and send reminder emails.
- **FSD-9.2:** Unified portal shows a "Pending Action Items" widget for the logged-in user.

---

## 4. Use Cases & User Stories

**UC-1: AI-Assisted BRD Generation**
- *As a BA*, I want to paste raw meeting transcripts, *so that* the system can auto-generate a structured BRD draft for me to refine, saving me hours of formatting.

**UC-2: CR Detection Alerts**
- *As a PM*, I want to be alerted when a developer accepts a Slack message to "just add this small button", *so that* I can halt unapproved work and process it as a payable CR.

**UC-3: Profitability Monitoring**
- *As a Department Head*, I want to see a portfolio dashboard highlighting projects falling below 15x profitability margin, *so that* I can intervene before funds erode.

---

## 5. Screen/UI Requirements

1. **Global Navigation Bar:** Search, Project Context Switcher, Notification Bell, User Profile.
2. **Project Dashboard Area:** 
   - Top widgets: Profit Margin (Green/Yellow/Red), Days Until Delivery, Active Risks.
   - Main panel: Sprint Burn down chart, Timeline.
3. **Document Editor View:**
   - Left side: Document outline navigation.
   - Center: Rich-text editor with slash-commands for AI generation.
   - Right side: AI Co-pilot chat panel for research and phrasing suggestions.
4. **CR Queue View:** Table interface listing: ID, Source (Email/Slack), Excerpt, Confidence Score, Status, Action Buttons (Approve/Reject/Estimate).
5. **Resource Matrix:** Matrix showing resources (rows) and weeks (columns) with color-coded utilization heatmaps.

---

## 6. Data Models & Entities

- **Project:** `id, name, po_value, start_date, expected_end_date, target_margin, status, industry_id`
- **User:** `id, name, email, role_id, hourly_cost_rate`
- **Document:** `id, project_id, type (BRD/FSD/SOW), content, status, version`
- **Requirement:** `id, project_id, description, status, classification (Baseline/CR)`
- **Task:** `id, project_id, assignee_id, title, status, estimated_hours, actual_hours, parent_objective_id`
- **Risk:** `id, project_id, description, severity, mitigation_plan, status`
- **TimeLog:** `id, task_id, user_id, hours_spent, logged_date`

---

## 7. Business Rules & Validations

1. **BR-01 (Internal Approval):** Client approval links cannot be generated if `internal_approval_status != 'APPROVED'`.
2. **BR-02 (Margin Cap):** If `calculated_margin < 15`, PM is forced to fill a "Corrective Action Plan" text field before leaving the PM dashboard.
3. **BR-03 (Capacity Limit):** A user cannot be assigned a task if `sum(assigned_estimated_hours) > 40` for the target week.
4. **BR-04 (Traceability):** Every development task must have a `parent_objective_id` linked securely to an approved BRD requirement block.
5. **BR-05 (Immutable Finance):** Timelogs cannot be edited or deleted once the daily financial aggregation cron completes.

---

## 8. Integration Requirements

| System | Integration Endpoint & Protocol | Purpose |
|--------|---------------------------------|---------|
| **Slack / MS Teams** | Webhooks, OAuth Bot Token | Read channels for scope drift detection; post notifications for CR alerts and reminders. |
| **Email (O365 / GSuite)** | IMAP / Graph API | Parse client communications for extraction. |
| **Active Directory / Okta** | SAML 2.0 / OIDC | Single Sign-On, RBAC management. |
| **GitHub / GitLab** | REST / Webhooks | Monitor commit messages to flag unapproved tasks mapped against scope. |
| **JIRA (Optional)** | REST API | Sync tasks for teams opting not to use the native task manager. |

---

## 9. Reporting Requirements

- **Executive Portfolio Report:** Weekly aggregated PDF sent to Department Heads showing overall organization margins, highest-risk projects, and CR pipeline value.
- **CR Impact Report:** On-demand generation detailing specific added scope, timeline shifts, and budget overruns for client-facing negotiation.
- **Developer Utilization Report:** Detailed breakdown of time logged against baseline vs. CR vs. non-billable work.
- **Project Closure Report:** Generated at standard SDLC completion highlighting target margin vs actual margins.

---

## 10. Acceptance Criteria

1. **AC-1:** The system accurately identifies an unapproved feature request in a simulated Slack message and creates a CR alert with >85% accuracy.
2. **AC-2:** A BA can generate a fully structured, 5-page BRD from 30 minutes of transcribed meeting notes in under 60 seconds using the document generator.
3. **AC-3:** Profitability drops below 15.0x trigger immediate email dispatch and dashboard color changes within 5 minutes of logging overflowing time.
4. **AC-4:** The system successfully prevents generating a Client Approval Link when the internal document state is `Draft` or `Pending Internal Review`.
5. **AC-5:** 500 concurrent users can load the Project Dashboard in under 3.0 seconds under simulated load testing.

*End of Document*
