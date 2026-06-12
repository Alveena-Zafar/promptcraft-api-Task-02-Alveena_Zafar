const express = require('express');
const app = express();
const PORT = 3000;

// Middleware — JSON body parse karne ke liye
app.use(express.json());

// ── GET /api/prompts ──────────────────────────
// Saare prompts return karta hai
app.get('/api/prompts', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      study: {
        beginner: "Explain the concept of variables using simple examples.",
        intermediate: "Create a 7-day study plan for Data Structures.",
        advanced: "Analyze the impact of AI on modern education."
      },
      coding: {
        beginner: "Write a Java program to calculate area of a rectangle.",
        intermediate: "Build a student record app using OOP concepts.",
        advanced: "Design a scalable REST API with authentication."
      },
      writing: {
        beginner: "Write a short paragraph about your favorite hobby.",
        intermediate: "Draft a professional internship request email.",
        advanced: "Write a persuasive article on the future of AI."
      },
      business: {
        beginner: "Create a simple business idea for a local startup.",
        intermediate: "Develop a marketing strategy for a mobile app.",
        advanced: "Prepare a business growth plan for international markets."
      }
    }
  });
});

// ── GET /api/prompts/:category ────────────────
// Specific category ke prompts return karta hai
app.get('/api/prompts/:category', (req, res) => {
  const { category } = req.params;

  const prompts = {
    study: {
      beginner: "Explain the concept of variables using simple examples.",
      intermediate: "Create a 7-day study plan for Data Structures.",
      advanced: "Analyze the impact of AI on modern education."
    },
    coding: {
      beginner: "Write a Java program to calculate area of a rectangle.",
      intermediate: "Build a student record app using OOP concepts.",
      advanced: "Design a scalable REST API with authentication."
    },
    writing: {
      beginner: "Write a short paragraph about your favorite hobby.",
      intermediate: "Draft a professional internship request email.",
      advanced: "Write a persuasive article on the future of AI."
    },
    business: {
      beginner: "Create a simple business idea for a local startup.",
      intermediate: "Develop a marketing strategy for a mobile app.",
      advanced: "Prepare a business growth plan for international markets."
    }
  };

  // Validation — category exist karti hai?
  if (!prompts[category]) {
    return res.status(404).json({
      success: false,
      error: `Category '${category}' not found. Valid categories: study, coding, writing, business`
    });
  }

  res.status(200).json({
    success: true,
    category: category,
    data: prompts[category]
  });
});

// ── POST /api/contact ─────────────────────────
// Contact form ka data receive karta hai
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validation — saari fields required hain
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "All fields required: name, email, message"
    });
  }

  // Email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Invalid email format"
    });
  }

  // Success response
  res.status(201).json({
    success: true,
    message: "Message received successfully!",
    data: { name, email, message }
  });
});

// ── 404 Handler ───────────────────────────────
// Koi bhi unknown route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});

// ── Server Start ──────────────────────────────
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});