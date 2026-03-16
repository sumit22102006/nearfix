# nearfix

# Local Service Finder (Full Stack Application)

A full stack web application that helps users find and book trusted local service providers such as electricians, plumbers, tutors, and cleaners.

This platform also allows service providers to create profiles and manage their services.

---

## 📌 Problem Statement

Many people struggle to find reliable local services quickly. Small service providers also lack an online platform to promote their services.

This application solves that problem by providing a centralized platform where users can search, filter, and book local service providers easily.

---

## 🚀 Features

### User Features

- User Signup & Login
- Search service providers
- Filter services by category and location
- Sort providers by ratings
- View provider profiles
- Book services
- Leave reviews

### Service Provider Features

- Create service profile
- Add services
- Update service details
- Manage bookings
- Update availability

---

## 🛠 Tech Stack

### Frontend
- ReactJS
- Tailwind CSS
- React Router
- Context API / Redux

### Backend
- Node.js
- Express.js

### Database
- MongoDB

---

## ⚙️ Mandatory Features Implementation

### 1️⃣ Routing & Navigation
- Home Page
- Login Page
- Signup Page
- Dashboard
- Profile Page

Implemented using **React Router**.

---

### 2️⃣ React Hooks Used

- `useState` – manage component state
- `useEffect` – API calls and side effects
- `useRef` – manage input focus
- `useContext` – global state sharing

---

### 3️⃣ State Management

Used **Context API / Redux** for managing:

- Authentication state
- User information
- Global app data

---

### 4️⃣ Authentication System

Includes:

- Signup Page
- Login Page
- Password validation
- LocalStorage authentication
- Protected routes

---

### 5️⃣ Theme Support

- Light Mode
- Dark Mode
- Toggle button
- Theme preference stored in LocalStorage

---

### 6️⃣ Search, Filtering & Sorting

Users can:

- Search service providers
- Filter by category
- Sort by ratings or price

---

### 7️⃣ Debouncing

Debouncing is implemented in:

- Search bar
- API calls triggered by typing

This improves performance by reducing unnecessary API requests.

---

### 8️⃣ Pagination

Pagination is implemented for:

- Service provider listings
- Reviews

Uses MongoDB `limit` and `skip`.

---

### 9️⃣ CRUD Operations

Full CRUD operations supported:

Create → Add service  
Read → View services  
Update → Edit services  
Delete → Remove services

---

### 🔟 API Integration

REST APIs built using **Node.js + Express.js**

Features include:

- Proper error handling
- Loading states
- Structured API responses

---

### 1️⃣1️⃣ Form Handling & Validation

Forms include:

- Input validation
- Error messages
- Controlled components
- Proper user feedback

---

### 1️⃣2️⃣ Responsive UI

Fully responsive UI using **Tailwind CSS**

Supports:

- Desktop
- Tablet
- Mobile devices

---

### 1️⃣3️⃣ Error Handling

Backend:
- Try–catch blocks
- Proper error responses

Frontend:
- Error messages
- User-friendly notifications

---

## 📂 Project Structure
