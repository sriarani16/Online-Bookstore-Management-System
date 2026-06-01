# Online Bookstore Management System

A full-stack **Book Management Web Application** built using **React (TypeScript) and Spring Boot REST API**.  
This project demonstrates CRUD operations, API integration, and modern frontend UI design.

---

## Project Overview

This application allows users to:

- View all books in a modern UI
- View detailed information for each book
- Add new books
- Edit existing book details
- Delete books with confirmation
- Manage book inventory data

The project simulates a real-world **online bookstore admin system**.

---

## Tech Stack

### Frontend
- React (TypeScript)
- React Router DOM
- Axios (API calls)
- Tailwind CSS / CSS (UI styling)

### Backend
- Spring Boot (REST API)
- Spring Data JPA
- Hibernate
- MySQL / PostgreSQL

---

## Features

### Book Management
- Create new books
- Read all books
- Update book details
- Delete books

### UI/UX
- Responsive card-based layout
- Clean navigation bar
- Book detail page view
- Modern form design for add/edit

### API Integration
- Axios-based communication with backend
- RESTful endpoints

---

## Project Structure
src/
├── components/ # Reusable UI components
├── pages/ # Page-level components
├── services/ # API calls (Axios)
├── types/ # TypeScript interfaces
├── styles/ # CSS/Tailwind styles
├── App.tsx
└── index.tsx


---

## API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| GET    | /books         | Fetch all books    |
| GET    | /books/{id}    | Fetch book by ID   |
| POST   | /books         | Add new book       |
| PUT    | /books/{id}    | Update book        |
| DELETE | /books/{id}    | Delete book        |


---

## How to Run Locally

### 1.Clone repo
```bash
git clone https://github.com/sriarani16/Online-Bookstore-Management-System.git
```

---

### 2.Install dependencies
```bash
npm install
```

---

### 3.Start application
```bash
npm start
```

---

### 4.Backend setup
Spring Boot backend is running at:

```
http://localhost:8080/books
```

---

## Key Learnings

- React functional components
- TypeScript type safety
- REST API integration using Axios
- Component-based architecture
- State management using hooks
- CRUD operations end-to-end system

---

## Future Enhancements

- Authentication (JWT login system)
- Admin dashboard
- Search & filter books
- Pagination
- Cloud deployment (AWS / Vercel / Netlify)

---

## Author

**Arani Suren**

- GitHub: https://github.com/sriarani16
- Location: New Zealand
```

---

