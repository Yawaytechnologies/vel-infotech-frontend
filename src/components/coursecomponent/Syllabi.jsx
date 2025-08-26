// src/content/syllabi.js

export const SYLLABI = {
  java: {
    title: "Java Online Training — Syllabus",
    accent: "#005BAC",
    meta: {
      duration: "10–12 weeks",
      audience: "Students & Working Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Core Java",
      "OOP",
      "Collections",
      "JDBC",
      "Servlets/JSP",
      "Spring",
      "Hibernate",
      "Web Services",
      "XML",
      "SOA",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Java",
        items: [
          "Java Basics",
          "Bytecode & Class Files",
          "Compilation Process",
          "Data types and Operations",
          "if conditions, for/while/do-while loops",
        ],
      },
      {
        title: "Module 2: Data Handling and Functions",
        items: [
          "Single & Multi-dimensional arrays",
          "Functions & arguments",
          "Function overloading",
          "Static polymorphism",
          "String handling, StringBuffer",
        ],
      },
      {
        title: "Module 3: Object Oriented Programming in Java",
        items: [
          "Object orientation concepts",
          "Attributes & methods",
          "Classes and objects",
          "Methods & constructors (default/parameterized)",
          "Inheritance, abstract, final, static",
        ],
      },
      {
        title: "Module 4: Packages and Multi-Threading",
        items: [
          "Packages & interfaces",
          "Access specifiers (public/private/protected/package)",
          "Exception handling (try/catch/finally/throw/throws)",
          "Multithreading: Runnable, extending Thread",
          "Synchronization",
        ],
      },
      {
        title: "Module 5: Java Collections",
        items: [
          "Wrapper & inner classes",
          "java.lang, java.io, java.util basics",
          "Collections overview",
          "ArrayList, Vector, HashSet, TreeSet",
          "HashMap, Hashtable",
        ],
      },
      {
        title: "Module 6: Web Services",
        items: [
          "Introduction to Web Services",
          "WSDL & UDDI",
          "SOAP vs RESTful services",
          "JAX-WS implementation",
        ],
      },
      {
        title: "Module 7: XML",
        items: [
          "XML fundamentals & writing XML",
          "DOM parser: read/write",
          "SAX parser & XSL",
        ],
      },
      {
        title: "Module 8: JDBC",
        items: [
          "SQL basics",
          "CRUD (Connect/Insert/Update/Delete/Select)",
          "JDBC introduction & architecture",
          "Driver types (1/2/3/4)",
          "Batch ops, transactions (commit/rollback)",
        ],
      },
      {
        title: "Module 9: Servlets",
        items: [
          "Web technologies overview",
          "Types of servlets",
          "Generic & HttpServlet",
          "RequestDispatcher (forward/include)",
          "Session tracking (4 types), filters",
        ],
      },
      {
        title: "Module 10: JSP",
        items: [
          "JSP introduction & architecture",
          "Scriptlet/declaration/expression tags",
          "Implicit objects & directives",
          "JSP with JDBC",
        ],
      },
      {
        title: "Module 11: Hibernate",
        items: [
          "Hibernate introduction & architecture",
          "CRUD (Insert/Update/Delete/Select)",
          "Inheritance & collections",
          "HQL & restrictions",
          "Caching",
        ],
      },
      {
        title: "Module 12: Spring",
        items: [
          "Spring overview & architecture",
          "IoC Container & bean definition",
          "Bean scopes & post processors",
          "Dependency Injection & auto-wiring",
        ],
      },
      {
        title: "Module 13: Spring, Ajax, and Design Patterns",
        items: [
          "AOP (Aspect Oriented Programming)",
          "Spring + Hibernate integration",
          "Transaction management",
          "Ajax basics",
          "DAO, DTO, MVC, intercepting filters, front controller, business delegate",
        ],
      },
      {
        title: "Module 14: SOA",
        items: [
          "SOA introduction & architecture",
          "Business layer & advantages",
          "Contract, address, binding",
          "Service composition & relation to Web Services",
        ],
      },
      {
        title: "Module 15: Web Services (Projects)",
        items: [
          "Web Services recap",
          "WSDL & UDDI",
          "SOAP / REST",
          "JAX-WS implementation (project oriented)",
        ],
      },
    ],
  },
    python: {
    title: "Python Online Training — Syllabus",
    accent: "#3776AB", // Python blue
    meta: {
      duration: "8–10 weeks",
      audience: "Students & Working Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Core Python",
      "Data Types",
      "Control Flow",
      "Functions",
      "OOP",
      "File I/O",
      "Error Handling",
      "Testing (pytest)",
      "FastAPI",
      "SQL & ORM",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Python",
        items: [
          "Language overview & use-cases",
          "Installing Python, IDE/Editor setup",
          "Running scripts vs REPL",
          "PEP 8, docstrings, typing basics",
        ],
      },
      {
        title: "Module 2: Data Types & Operators",
        items: [
          "Numbers, booleans, strings",
          "Lists, tuples, dicts, sets",
          "Slicing, mutability, copying",
          "Operators, type casting, f-strings",
        ],
      },
      {
        title: "Module 3: Control Flow & Iteration",
        items: [
          "if / elif / else",
          "for / while, break / continue",
          "Comprehensions (list/dict/set)",
          "Iterators & generators, enumerate/zip",
        ],
      },
      {
        title: "Module 4: Functions & Modules",
        items: [
          "def, return, annotations",
          "*args, **kwargs, keyword-only args",
          "Closures & lambdas",
          "Decorators & higher-order functions",
        ],
      },
      {
        title: "Module 5: Strings & Regular Expressions",
        items: [
          "String methods & formatting",
          "Bytes vs str",
          "re module: patterns & groups",
          "Common text-processing recipes",
        ],
      },
      {
        title: "Module 6: Errors, Exceptions & Logging",
        items: [
          "try / except / else / finally",
          "Raising & custom exceptions",
          "Context managers (with), contextlib",
          "Logging basics & log levels",
        ],
      },
      {
        title: "Module 7: File I/O & Serialization",
        items: [
          "Text/binary I/O, pathlib",
          "CSV/JSON, Pickle",
          "Working with dates & times",
          "OS & subprocess essentials",
        ],
      },
      {
        title: "Module 8: Environments & Packaging",
        items: [
          "virtualenv/venv & pip",
          "requirements.txt & pip-tools",
          "Intro to Poetry / pyproject.toml",
          "Project structure & imports",
        ],
      },
      {
        title: "Module 9: Object-Oriented Programming",
        items: [
          "Classes, objects, attributes",
          "Inheritance & composition",
          "Class/static methods, properties",
          "Dunder methods & dataclasses",
        ],
      },
      {
        title: "Module 10: Testing & Quality",
        items: [
          "unittest vs pytest",
          "Fixtures & parametrization",
          "Coverage & TDD basics",
          "Type hints, mypy, linting (ruff/flake8)",
        ],
      },
      {
        title: "Module 11: Databases & SQL",
        items: [
          "SQL fundamentals, CRUD",
          "sqlite3 & PostgreSQL client",
          "SQLAlchemy ORM & models",
          "Transactions & migrations (Alembic)",
        ],
      },
      {
        title: "Module 12: Web APIs with FastAPI",
        items: [
          "Routing & HTTP methods",
          "Pydantic v2 models (request/response)",
          "Dependency Injection & routers",
          "Auth (JWT), CORS, pagination",
        ],
      },
      {
        title: "Module 13: Django Fundamentals (Optional)",
        items: [
          "MVT architecture",
          "Models, Admin & ORM",
          "Templates & Class-Based Views",
          "Forms, validations, auth basics",
        ],
      },
      {
        title: "Module 14: Async & Concurrency",
        items: [
          "Threading & multiprocessing",
          "asyncio & async/await",
          "Async HTTP clients",
          "Choosing the right concurrency model",
        ],
      },
      {
        title: "Module 15: Final Project & Deployment",
        items: [
          "Build a REST API (FastAPI + SQLAlchemy)",
          "Env vars & settings (.env)",
          "Uvicorn/Gunicorn, Docker basics",
          "Deploy to cloud (Render/AWS) & logging",
        ],
      },
    ],
  },


  // Add more courses like this:
  // python: { title, accent, meta, preview, sections: [...] },
  // fullstack: { ... },
};
