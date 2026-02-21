# medimate-smart-monitoring-system
# [Medimate] 🎯

## Basic Details
**Team Name:** [CodeX]  
**Team Members:**  
- Member 1: [Anamika C Pradeep] – [VISWAJYOTHY COLLEGE OF ENGINEERING AND TECHNOLOGY]  
- Member 2: [Blessy K Shaiju] – [VISWAJYOTHY COLLEGE OF ENGINEERING AND TECHNOLOGY]  

**Hosted Project Link:** [(https://medimate-lac.vercel.app/)]

## Project Description
[MediMate is a smart medicine reminder application that helps users take medicines on time. It supports multiple schedules with AM/ PM, detects missed doses, and alerts caretakers if the patient does not respond.]

## The Problem statement
[Problem Statement

Many patients forget to take medicines on time, and existing reminder systems lack proper tracking and caretaker alerts. A simple and reliable solution is needed to ensure timely medication intake and improve patient safety.]

## The Solution
[]

## Technical Details

### Technologies/Components Used

**For Software:**  
- Languages used: [,HTML,CSS, JavaScript]  

- Tools used: [ VS Code, Git, Docker]  



### Features
- **Feature 1:** [Missed-dose detection with automatic caretaker alert]  
- **Feature 2:** [Timely medicine reminders with AM/PM scheduling]  
- **Feature 3:** [tracking with medication history and guardian contact integration]  
- **Feature 4:** [Support for adding and managing multiple medicines]

## Implementation

**For Software**

**Installation**
[Installation commands – e.g. npm install, pip install -r requirements.txt]## Project Documentation

### For Software

#### Screenshots

![Screenshot1](./screenshots/home.png)  
*Main dashboard – lists all medicines and next due time.*

![Screenshot2](./screenshots/add‑medicine.png)  
*Add‑medicine form where user specifies name, dose, schedule and guardian contact.*

![Screenshot3](./screenshots/alert.png)  
*Example alert displayed when a dose is missed and caretaker notification triggered.*

> *(replace paths with your real images; the captions explain what they show)*

#### Diagrams

**System Architecture:**  
The frontend is a React single‑page app served from static hosting
(Vercel).  It communicates with an Express/Node.js backend via REST
endpoints (`/api/*`).  The backend stores schedules and history in a
MongoDB (or any chosen database) and uses `nodemailer`/SMS API to send
alerts to guardians when a dose is missed.

