# Cypress Beginner Test Suite 🚀

This repository contains a complete Cypress automation test suite designed for **beginners**. It covers more than 20 essential test cases built around real-world UI components and websites like [DemoQA](https://demoqa.com) and [AutomationExercise](https://automationexercise.com). The tests are structured in a clean, scalable, and modular format, making this a great reference for new QA engineers and frontend testers.

---

## 🔧 Key Features

* ✅ Real-site testing with dynamic content and live forms
* 📂 Organized by test categories (navigation, forms, login, etc.)
* 🧲 Includes negative and positive test scenarios
* 🔐 Secure login credentials via `cypress.env.json`
* ⚙️ Uses Cypress best practices (timeouts, visibility checks, selectors)
* 🚀 Plug-and-play project setup with minimal config

---

## 📂 Folder Structure

```
cypress-beginner-tests/
├── cypress/
│   ├── e2e/                     # All test specs organized by feature
│   │   ├── alertTests.cy.js
│   │   ├── basicNavigation.cy.js
│   │   ├── buttonActions.cy.js
│   │   ├── dropdownCheckbox.cy.js
│   │   ├── formTests.cy.js
│   │   └── loginTests.cy.js
│   ├── support/
│   │   └── e2e.js              # Global exception handling and hooks
├── cypress.config.js           # Cypress project configuration
├── cypress.env.json            # Local env vars (excluded from repo)
├── package.json                # Project dependencies
├── .gitignore                  # Ignore sensitive and auto-generated files
└── README.md                   # Project documentation
```

---

## ▶️ How to Run

```bash
# Clone the repo
$ git clone https://github.com/prince0710/Cypress_Project.git

# Install dependencies
$ cd cypress-beginner-tests
$ npm install

# Create an environment file for secure login testing
$ touch cypress.env.json
```

Add this to your `cypress.env.json` file:

```json
{
  "login_email": "your@email.com",
  "login_password": "your_password"
}
```

Then launch Cypress:

```bash
npx cypress open
```

---




https://github.com/user-attachments/assets/abfeddb3-070e-478b-94c4-d1bd7f1b4f73

