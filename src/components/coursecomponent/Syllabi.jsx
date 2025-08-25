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

  // Add more courses like this:
  // python: { title, accent, meta, preview, sections: [...] },
  // fullstack: { ... },
};
