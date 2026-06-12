# PromptCraft AI — Backend API 🚀

> **Project 2 | DecodeLabs Full Stack Internship — Batch 2026**
> The nervous system behind PromptCraft AI. A RESTful backend API built with Node.js and Express that handles prompt data delivery and contact form processing with full input validation.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![REST API](https://img.shields.io/badge/REST-API-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

---

## 📌 Table of Contents
- [Overview](#-overview)
- [API Endpoints](#-api-endpoints)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Testing with Thunder Client](#-testing-with-thunder-client)
- [What I Learned](#-what-i-learned)

---

## 🧠 Overview

Project 1 was the **skin** — the frontend interface.
Project 2 is the **nervous system** — the backend brain.

This API was built to demonstrate core backend engineering concepts:
- Designing and implementing RESTful endpoints
- Handling and validating user input server-side
- Communicating clearly with proper HTTP status codes
- Structuring JSON responses consistently

---

## 📡 API Endpoints

### GET /api/prompts
Returns all prompts across all categories.

**Response: 200 OK**
```json
{
  "success": true,
  "data": {
    "study": { "beginner": "...", "intermediate": "...", "advanced": "..." },
    "coding": { "beginner": "...", "intermediate": "...", "advanced": "..." }
  }
}
```

---

### GET /api/prompts/:category
Returns prompts for a specific category.

**Valid categories:** `study` `coding` `writing` `business`

**Response: 200 OK**
```json
{
  "success": true,
  "category": "coding",
  "data": {
    "beginner": "Write a Java program to calculate area of a rectangle.",
    "intermediate": "Build a student record app using OOP concepts.",
    "advanced": "Design a scalable REST API with authentication."
  }
}
```

**Response: 404 Not Found** (invalid category)
```json
{
  "success": false,
  "error": "Category 'gaming' not found. Valid categories: study, coding, writing, business"
}
```

---

### POST /api/contact
Receives and validates contact form submissions.

**Request Body:**
```json
{
  "name": "Alveena",
  "email": "alveena@example.com",
  "message": "Hello from PromptCraft!"
}
```

**Response: 201 Created**
```json
{
  "success": true,
  "message": "Message received successfully!",
  "data": {
    "name": "Alveena",
    "email": "alveena@example.com",
    "message": "Hello from PromptCraft!"
  }
}
```

**Response: 400 Bad Request** (missing fields)
```json
{
  "success": false,
  "error": "All fields required: name, email, message"
}
```

---

## 📁 Project Structure
promptcraft-api/

│

├── server.js            # All routes, validation, and server logic

├── package.json         # Project metadata and dependencies

├── package-lock.json    # Locked dependency versions

├── .gitignore           # node_modules excluded

└── README.md            # You are here

---

## ⚡ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Alveena-Zafar/promptcraft-api.git

# 2. Navigate into the folder
cd promptcraft-api

# 3. Install dependencies
npm install

# 4. Start the server
node server.js

# Server running on http://localhost:3000
```

---

## 🧪 Testing with Thunder Client

All endpoints were tested using **Thunder Client** (VS Code extension).

| Method | Endpoint | Expected Status |
|---|---|---|
| GET | /api/prompts | 200 OK |
| GET | /api/prompts/coding | 200 OK |
| GET | /api/prompts/gaming | 404 Not Found |
| POST | /api/contact (valid) | 201 Created |
| POST | /api/contact (missing fields) | 400 Bad Request |

---

## 📖 What I Learned

- **Resources are nouns, methods are verbs** — `GET /prompts` not `GET /getPrompts`
- **Never trust the client** — always validate on the server side
- **HTTP status codes are the server's tone** — 200, 201, 400, 404 each mean something specific
- **Consistent JSON responses** — always include a `success` boolean so the frontend knows what happened
- **Express middleware** — `express.json()` parses incoming request bodies automatically

---

## 👩‍💻 Author

**Alveena Zafar**
Software Engineering Student — UET Taxila
DecodeLabs Full Stack Internship — Batch 2026

[![GitHub](https://img.shields.io/badge/GitHub-Alveena--Zafar-181717?style=for-the-badge&logo=github)](https://github.com/Alveena-Zafar)

---

<div align="center">
Project 1 was the skin. Project 2 is the life. — DecodeLabs
</div>
