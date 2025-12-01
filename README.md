# CourseMaster — Full-Featured MERN E-Learning Platform

CourseMaster is a modern, scalable, and production-ready **E-learning platform**
built using the **MERN stack**.  
The goal of this project is to simulate a real-world EdTech application that
supports thousands of students, instructors, and administrators — while ensuring
performance, clarity, and maintainability.

This project includes a complete **authentication system**, **course management
module**, **enrollment flow**, **student dashboard**, **admin dashboard**, and
**course consumption features** such as progress tracking, assignments, and
quizzes.

---

## 1. Project Overview

CourseMaster enables:

### **Students**

- Browse, search, filter, and sort courses
- View course details
- Enroll in courses
- Access a student dashboard
- Watch lessons & track progress
- Submit assignments
- Take quizzes with instant scoring

### **Administrators**

- Manage courses (Create, Read, Update, Delete)
- Create and manage batches
- Manage enrollments
- Review student assignments

The platform is designed with **clean architecture**, **secure APIs**,
**optimized queries**, and **scalable data models**, reflecting real-world
EdTech requirements.

---

## 2. Technology Stack (Mandatory)

### **Frontend**

- React.js or Next.js (App Router / Pages Router)
- Redux Toolkit or Context API
- Axios / Fetch API
- TailwindCSS (optional)

### **Backend**

- Node.js
- Express.js
- JWT Authentication
- Bcrypt for password hashing

### **Database**

- MongoDB
- Mongoose ODM

---

## 3. Key Functional Requirements

### A. Authentication & Authorization

#### **Student**

- Register, Login, Logout
- JWT-based authentication
- Hashed passwords (bcrypt)

#### **Admin**

- Separate login
- Can use seeder or secret registration key
- Access protected admin-only routes

#### **Security**

- JWT tokens
- Protected APIs
- Role-based access control
- No access to dashboard without authentication

---

## B. Public Pages (Unprotected)

### **1. Home / Course Listing**

- Display all available courses
- **Server-Side Pagination**
- **Search** (title / instructor)
- **Sorting** (Price Low → High / High → Low)
- **Filtering** (Category / Tags)

### **2. Course Details**

- Full course information (title, description, instructor, syllabus, price)
- “Enroll Now” button
  - If logged in → Enroll
  - If not logged in → Redirect to login

---

## C. Student Features (Protected)

### **1. Student Dashboard**

- Display enrolled courses
- Show course progress (“40% Completed”)

### **2. Course Player / Consumption**

- Play embedded videos (YouTube/Vimeo)
- Mark lessons as completed
- Dynamic progress bar updates

### **3. Assignments & Quizzes**

#### **Assignments**

- Submit a Google Drive link or text-based answer

#### **Quizzes**

- Multiple-choice quiz per module
- Score displayed immediately after submit

---

## D. Admin Features (Protected)

### **1. Course Management**

- CRUD operations
- Upload syllabus
- Add video links
- Add tags & categories
- Create “Batches” (e.g., Batch 1 — Starts Jan 1st)

### **2. Enrollment Management**

- View all students enrolled in a course or batch

### **3. Assignment Review**

- View student-submitted assignments
- Review and update status

---
