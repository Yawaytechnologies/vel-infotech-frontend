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
  unix: {
  title: "Unix Shell Scripting Training — Syllabus",
  accent: "#00c8ffff",
  meta: {
    duration: "1–2 Months",
    audience: "Students, IT Professionals, System Administrators, DevOps Engineers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Unix & Linux",
    "Shell Fundamentals & Bash Commands",
    "Variables, Data Types, and Operators",
    "Loops, Conditionals, and Functions",
    "File & Directory Management",
    "Process & Job Control",
    "Text Processing (awk, sed, grep)",
    "Automation of System Tasks",
    "Debugging & Error Handling",
    "Capstone Projects in Shell Scripting",
  ],
  sections: [
    {
      title: "Module 1: Unix & Linux Fundamentals",
      items: [
        "Introduction to Unix and Linux operating systems",
        "Understanding the filesystem structure",
        "Basic Unix commands for file and directory management",
        "File permissions, users, and groups",
      ],
    },
    {
      title: "Module 2: Shell Fundamentals & Bash Commands",
      items: [
        "Introduction to Unix shell and types of shells",
        "Navigating directories and file operations",
        "Command chaining, piping, and redirection",
        "Using man pages and help commands effectively",
      ],
    },
    {
      title: "Module 3: Variables, Data Types & Operators",
      items: [
        "Defining and using variables",
        "String and numeric operations",
        "Positional parameters and command-line arguments",
        "Environment variables and exporting",
      ],
    },
    {
      title: "Module 4: Loops, Conditionals & Functions",
      items: [
        "Using if, else, and case statements",
        "For, while, and until loops",
        "Creating reusable functions",
        "Debugging and flow control techniques",
      ],
    },
    {
      title: "Module 5: File & Directory Management",
      items: [
        "Creating, copying, moving, and deleting files and directories",
        "File compression and archiving",
        "Finding files using `find` and `locate`",
        "Permissions management and file ownership",
      ],
    },
    {
      title: "Module 6: Process & Job Control",
      items: [
        "Understanding processes in Unix/Linux",
        "Foreground, background, and job control commands",
        "Killing and monitoring processes",
        "Scheduling tasks with cron and at jobs",
      ],
    },
    {
      title: "Module 7: Text Processing Tools",
      items: [
        "Using grep, sed, and awk for text processing",
        "Sorting, cutting, and formatting text data",
        "Regular expressions for pattern matching",
        "Automating log file analysis",
      ],
    },
    {
      title: "Module 8: Automation of System Tasks",
      items: [
        "Writing shell scripts for repetitive tasks",
        "System backup and maintenance scripts",
        "Automating user and process management",
        "Best practices for script organization and versioning",
      ],
    },
    {
      title: "Module 9: Debugging & Error Handling",
      items: [
        "Using set -x, set -e for debugging scripts",
        "Error detection and handling techniques",
        "Logging script output and creating reports",
        "Writing robust and reusable scripts",
      ],
    },
    {
      title: "Module 10: Capstone Projects in Shell Scripting",
      items: [
        "End-to-end system automation project",
        "Log monitoring and reporting scripts",
        "Backup and restore automation scripts",
        "Comprehensive shell scripting assignment integrating multiple concepts",
      ],
    },
  ],
}
,
  pythonfullstack: {
  title: "Python Full Stack Developer Online Training — Syllabus",
  accent: "#306998",
  meta: {
    duration: "16–20 weeks",
    audience: "Students, Freshers, Software Developers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Python Programming",
    "OOPs & Advanced Python",
    "Data Structures & Algorithms",
    "Flask / Django Framework",
    "RESTful APIs",
    "Frontend (HTML, CSS, JavaScript, React.js)",
    "Database (MySQL, PostgreSQL, MongoDB)",
    "Version Control & Git",
    "Testing (PyTest, Unittest)",
    "Deployment (Heroku, Docker, AWS)",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: Python Programming Fundamentals",
      items: [
        "Python syntax, variables, and data types",
        "Operators, loops, and conditional statements",
        "Functions, modules, and packages",
        "File handling (read, write, CSV, JSON)",
        "Error & exception handling",
      ],
    },
    {
      title: "Module 2: Object-Oriented Programming (OOP) in Python",
      items: [
        "Classes and objects",
        "Inheritance, polymorphism, encapsulation, abstraction",
        "Magic methods and decorators",
        "Class variables and instance variables",
        "Best practices in OOP",
      ],
    },
    {
      title: "Module 3: Data Structures & Algorithms",
      items: [
        "Lists, tuples, sets, dictionaries",
        "Stacks, queues, linked lists",
        "Searching & sorting algorithms",
        "Recursion & complexity analysis",
        "Practical coding exercises",
      ],
    },
    {
      title: "Module 4: Database & ORM",
      items: [
        "Introduction to SQL & NoSQL databases",
        "CRUD operations in MySQL/PostgreSQL",
        "ORM with SQLAlchemy / Django ORM",
        "Database relationships (One-to-One, One-to-Many, Many-to-Many)",
        "Query optimization & indexing",
      ],
    },
    {
      title: "Module 5: Web Development with Flask / Django",
      items: [
        "Setting up Flask / Django project",
        "Routing & URL mapping",
        "Templates (Jinja2 / Django Templates)",
        "Forms & validations",
        "Authentication & authorization",
        "Session & cookie management",
      ],
    },
    {
      title: "Module 6: RESTful APIs & Backend Integration",
      items: [
        "Introduction to REST API concepts",
        "Creating APIs using Flask / Django REST framework",
        "Request & Response handling",
        "Serialization & deserialization",
        "API testing using Postman",
      ],
    },
    {
      title: "Module 7: Frontend Development",
      items: [
        "HTML5, CSS3, JavaScript fundamentals",
        "Responsive design (Bootstrap/Tailwind)",
        "React.js fundamentals",
        "Components, props, state, hooks",
        "Connecting frontend to backend APIs",
      ],
    },
    {
      title: "Module 8: Version Control & Collaboration",
      items: [
        "Git basics and commands",
        "Branching & merging",
        "Pull requests and collaboration on GitHub",
        "Code review best practices",
      ],
    },
    {
      title: "Module 9: Testing & Debugging",
      items: [
        "Unit testing with PyTest / Unittest",
        "Mocking & test coverage",
        "Debugging techniques & logging",
        "Error handling & troubleshooting",
      ],
    },
    {
      title: "Module 10: Deployment & DevOps Basics",
      items: [
        "Application deployment on Heroku / AWS",
        "Containerization using Docker",
        "CI/CD introduction",
        "Basic DevOps practices for Python projects",
      ],
    },
    {
      title: "Module 11: Security & Best Practices",
      items: [
        "Authentication & authorization",
        "OWASP security principles",
        "Data validation & sanitization",
        "Secure API development",
      ],
    },
    {
      title: "Module 12: Capstone Projects",
      items: [
        "E-commerce web application",
        "Social media app with user authentication",
        "Blog management system",
        "Integrating frontend, backend, database, and deployment",
      ],
    },
  ],
}
,
hadoopspark: {
  title: "Big Data Hadoop & Spark Fullstack Training — Syllabus",
  accent: "#FF6F00",
  meta: {
    duration: "12–14 weeks",
    audience: "Students, Developers, IT Professionals, Data Engineers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Big Data Fundamentals",
    "Hadoop Ecosystem",
    "HDFS & YARN",
    "MapReduce Programming",
    "Apache Hive & Pig",
    "Apache Spark (Core, SQL, Streaming)",
    "NoSQL Databases (HBase, Cassandra, MongoDB)",
    "Kafka & Data Ingestion",
    "Data Analytics & Visualization",
    "Cluster Management & Deployment",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Big Data",
      items: [
        "Understanding Big Data & its importance",
        "Challenges with traditional data processing",
        "Big Data use cases across industries",
        "Introduction to Hadoop and Spark ecosystems",
      ],
    },
    {
      title: "Module 2: Hadoop Ecosystem",
      items: [
        "HDFS architecture & operations",
        "YARN and Resource Management",
        "MapReduce concepts and programming",
        "Hadoop cluster setup and configuration",
      ],
    },
    {
      title: "Module 3: Data Processing with Hive & Pig",
      items: [
        "Introduction to Hive and its architecture",
        "Writing HiveQL queries",
        "Data transformation with Pig scripts",
        "Data modeling and schema design in Hive",
      ],
    },
    {
      title: "Module 4: Apache Spark",
      items: [
        "Spark architecture & RDDs",
        "DataFrames and Spark SQL",
        "Spark Streaming for real-time processing",
        "Machine learning with MLlib",
        "Performance optimization in Spark",
      ],
    },
    {
      title: "Module 5: NoSQL Databases",
      items: [
        "Introduction to HBase, Cassandra, MongoDB",
        "Data modeling in NoSQL",
        "CRUD operations and querying",
        "Integration with Hadoop and Spark",
      ],
    },
    {
      title: "Module 6: Kafka & Data Ingestion",
      items: [
        "Kafka architecture and topics",
        "Producer & Consumer API",
        "Integration with Spark Streaming",
        "Real-time data ingestion pipelines",
      ],
    },
    {
      title: "Module 7: Big Data Analytics & Visualization",
      items: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis (EDA)",
        "Visualizing data with tools like Tableau or Power BI",
        "Reporting insights from Big Data pipelines",
      ],
    },
    {
      title: "Module 8: Cluster Management & Deployment",
      items: [
        "Hadoop and Spark cluster setup (Standalone, Pseudo, and Multi-node)",
        "Monitoring and troubleshooting clusters",
        "Security, authentication, and access control",
        "Deploying Big Data applications in production",
      ],
    },
    {
      title: "Module 9: Capstone Projects",
      items: [
        "Real-time streaming analytics project",
        "End-to-end Hadoop + Spark pipeline",
        "Integration with NoSQL databases",
        "Data visualization and reporting project",
      ],
    },
  ],
}
,
hadooptesting: {
  title: "Big Data Hadoop Testing Training — Syllabus",
  accent: "#FF6F00",
  meta: {
    duration: "8–10 weeks",
    audience: "QA Professionals, Test Engineers, Manual Testers, Automation Testers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Big Data Fundamentals",
    "Hadoop Ecosystem Overview",
    "HDFS & YARN Basics",
    "MapReduce Testing",
    "Data Validation with Hive & Pig",
    "Apache Spark Testing",
    "NoSQL Database Testing (HBase, Cassandra, MongoDB)",
    "Data Quality & ETL Testing",
    "Real-time Data Testing with Kafka",
    "Performance & Cluster Testing",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Big Data & Testing",
      items: [
        "Overview of Big Data concepts and ecosystems",
        "Need for Big Data Testing",
        "Challenges in testing Big Data applications",
        "Types of testing: Functional, Non-Functional, Regression, Performance",
      ],
    },
    {
      title: "Module 2: Hadoop Architecture & Testing",
      items: [
        "HDFS architecture & operations",
        "YARN and resource management testing",
        "MapReduce job testing strategies",
        "Cluster setup, monitoring, and troubleshooting",
      ],
    },
    {
      title: "Module 3: Data Validation using Hive & Pig",
      items: [
        "Testing data pipelines using HiveQL queries",
        "Pig scripts validation and debugging",
        "Data consistency, completeness, and integrity checks",
        "Test data preparation for Hadoop",
      ],
    },
    {
      title: "Module 4: Apache Spark Testing",
      items: [
        "Unit testing of Spark applications (RDDs, DataFrames)",
        "Testing Spark SQL queries",
        "Real-time data validation with Spark Streaming",
        "Integration testing with Hadoop and NoSQL databases",
      ],
    },
    {
      title: "Module 5: NoSQL Database Testing",
      items: [
        "Testing data in HBase, Cassandra, and MongoDB",
        "Data integrity, consistency, and schema validation",
        "CRUD operation testing",
        "Performance and scalability testing for NoSQL",
      ],
    },
    {
      title: "Module 6: ETL & Data Quality Testing",
      items: [
        "Testing ETL pipelines for Big Data",
        "Data profiling and quality checks",
        "Validation of transformations and aggregations",
        "Regression testing for data workflows",
      ],
    },
    {
      title: "Module 7: Real-time Data Testing with Kafka",
      items: [
        "Kafka architecture overview",
        "Testing producers and consumers",
        "Data validation in streaming pipelines",
        "Integration with Hadoop and Spark",
      ],
    },
    {
      title: "Module 8: Performance, Security & Cluster Testing",
      items: [
        "Load and stress testing for Big Data clusters",
        "Security testing and access control validation",
        "Monitoring cluster health and performance",
        "Optimization techniques for large-scale data testing",
      ],
    },
    {
      title: "Module 9: Capstone Projects",
      items: [
        "End-to-end Hadoop + Spark testing project",
        "Real-time data validation project",
        "ETL and data quality testing case study",
        "Performance and cluster testing assignment",
      ],
    },
  ],
}
,
hadoopadministration: {
  title: "Big Data Administrator Training — Syllabus",
  accent: "#00a2ffff",
  meta: {
    duration: "10–12 weeks",
    audience: "System Administrators, Data Engineers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Big Data Fundamentals",
    "Hadoop Ecosystem Administration",
    "HDFS Management",
    "YARN & Resource Management",
    "Cluster Setup & Configuration",
    "MapReduce & Spark Job Administration",
    "Monitoring & Troubleshooting",
    "Data Security & Access Control",
    "NoSQL Database Administration (HBase, Cassandra)",
    "Performance Optimization & Best Practices",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Big Data Administration",
      items: [
        "Overview of Big Data ecosystems",
        "Role of a Big Data Administrator",
        "Challenges in managing Big Data clusters",
        "Basic Linux commands and system administration concepts",
      ],
    },
    {
      title: "Module 2: Hadoop Architecture & Administration",
      items: [
        "HDFS architecture & file management",
        "YARN resource management and scheduling",
        "Node management: DataNodes, NameNodes",
        "Cluster setup and configuration",
        "Hadoop commands and utilities for administrators",
      ],
    },
    {
      title: "Module 3: Hadoop Cluster Deployment",
      items: [
        "Installing Hadoop in standalone, pseudo-distributed, and fully-distributed mode",
        "Cluster sizing and hardware requirements",
        "Configuration of core-site.xml, hdfs-site.xml, yarn-site.xml, mapred-site.xml",
        "Cluster maintenance and upgrades",
      ],
    },
    {
      title: "Module 4: MapReduce & Spark Job Administration",
      items: [
        "Submitting and monitoring MapReduce jobs",
        "Resource allocation and optimization",
        "Spark cluster setup and job monitoring",
        "Handling job failures and troubleshooting",
      ],
    },
    {
      title: "Module 5: NoSQL Database Administration",
      items: [
        "HBase architecture and administration",
        "Cassandra setup, replication, and scaling",
        "MongoDB cluster administration",
        "Backup and restore strategies for NoSQL databases",
      ],
    },
    {
      title: "Module 6: Monitoring & Troubleshooting",
      items: [
        "Using Ambari, Cloudera Manager, and other monitoring tools",
        "Log management and analysis",
        "Resource usage tracking and performance tuning",
        "Handling cluster failures and disaster recovery",
      ],
    },
    {
      title: "Module 7: Data Security & Access Control",
      items: [
        "Hadoop security fundamentals",
        "Kerberos authentication setup",
        "User and group management",
        "Access control using HDFS ACLs",
        "Encryption and data privacy best practices",
      ],
    },
    {
      title: "Module 8: Performance Optimization & Best Practices",
      items: [
        "Cluster tuning for optimal performance",
        "Load balancing and resource management",
        "HDFS storage optimization",
        "Best practices for Hadoop and Spark administration",
        "Capacity planning and monitoring metrics",
      ],
    },
    {
      title: "Module 9: Capstone Project",
      items: [
        "End-to-end Hadoop cluster setup and management",
        "Deploying and monitoring MapReduce & Spark jobs",
        "Administering HBase/Cassandra clusters",
        "Implementing security, access control, and performance optimization",
      ],
    },
  ],
}
,
ai: {
  title: "Artificial Intelligence Online Training — Syllabus",
  accent: "#FF4500",
  meta: {
    duration: "12–14 weeks",
    audience: "Students, Developers, IT Professionals, Enthusiasts",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to AI",
    "Python for AI",
    "Mathematics for AI (Linear Algebra, Probability, Statistics)",
    "Machine Learning Algorithms",
    "Deep Learning & Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision",
    "Reinforcement Learning",
    "AI Ethics & Best Practices",
    "AI Capstone Project",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Artificial Intelligence",
      items: [
        "History and evolution of AI",
        "Applications of AI in various industries",
        "AI vs Machine Learning vs Deep Learning",
        "AI problem-solving techniques",
      ],
    },
    {
      title: "Module 2: Python for AI",
      items: [
        "Python basics and data structures",
        "NumPy, Pandas, and Matplotlib",
        "Data preprocessing techniques",
        "Working with datasets and visualization",
      ],
    },
    {
      title: "Module 3: Mathematics for AI",
      items: [
        "Linear Algebra: Matrices, Vectors, Eigenvalues",
        "Probability and Statistics",
        "Calculus basics for AI",
        "Optimization techniques",
      ],
    },
    {
      title: "Module 4: Machine Learning Algorithms",
      items: [
        "Supervised learning: Regression, Classification",
        "Unsupervised learning: Clustering, Dimensionality Reduction",
        "Model evaluation metrics",
        "Overfitting, underfitting, and regularization",
      ],
    },
    {
      title: "Module 5: Deep Learning & Neural Networks",
      items: [
        "Introduction to neural networks",
        "Activation functions and architectures",
        "CNNs for image processing",
        "RNNs and LSTMs for sequential data",
        "Deep learning frameworks: TensorFlow, PyTorch",
      ],
    },
    {
      title: "Module 6: Natural Language Processing (NLP)",
      items: [
        "Text preprocessing and tokenization",
        "Word embeddings (Word2Vec, GloVe)",
        "Sentiment analysis and text classification",
        "Chatbots and conversational AI",
        "Advanced NLP with Transformers (BERT, GPT)",
      ],
    },
    {
      title: "Module 7: Computer Vision",
      items: [
        "Image processing basics",
        "Object detection and recognition",
        "Image segmentation techniques",
        "OpenCV and deep learning integration",
      ],
    },
    {
      title: "Module 8: Reinforcement Learning",
      items: [
        "Concepts of agents, states, and rewards",
        "Markov Decision Process (MDP)",
        "Q-Learning and Policy Gradient methods",
        "Applications in gaming, robotics, and optimization",
      ],
    },
    {
      title: "Module 9: AI Ethics & Best Practices",
      items: [
        "Ethical AI principles",
        "Bias detection and mitigation",
        "Responsible AI deployment",
        "Data privacy and security in AI projects",
      ],
    },
    {
      title: "Module 10: AI Capstone Project",
      items: [
        "End-to-end AI project development",
        "Data collection, preprocessing, and model building",
        "Model evaluation and deployment",
        "Presentation of AI solutions",
      ],
    },
  ],
}
,
ml: {
  title: "Machine Learning Online Training — Syllabus",
  accent: "#1E90FF",
  meta: {
    duration: "10–12 weeks",
    audience: "Students, Developers, IT Professionals, Data Enthusiasts",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Machine Learning",
    "Python for Machine Learning",
    "Mathematics for ML (Linear Algebra, Probability, Statistics)",
    "Supervised Learning",
    "Unsupervised Learning",
    "Model Evaluation & Tuning",
    "Feature Engineering",
    "Ensemble Methods",
    "Deep Learning & Neural Networks",
    "Capstone Project",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Machine Learning",
      items: [
        "Definition, types, and applications of ML",
        "Supervised vs Unsupervised vs Reinforcement Learning",
        "Real-world use cases in finance, healthcare, and e-commerce",
      ],
    },
    {
      title: "Module 2: Python for Machine Learning",
      items: [
        "Python basics and libraries (NumPy, Pandas, Matplotlib, Seaborn)",
        "Data preprocessing and handling missing values",
        "Exploratory Data Analysis (EDA) techniques",
      ],
    },
    {
      title: "Module 3: Mathematics for ML",
      items: [
        "Linear Algebra: Matrices, Vectors, Eigenvalues",
        "Probability & Statistics fundamentals",
        "Calculus basics for ML optimization",
      ],
    },
    {
      title: "Module 4: Supervised Learning",
      items: [
        "Regression: Linear, Polynomial, and Logistic Regression",
        "Classification: K-Nearest Neighbors, Decision Trees, SVM",
        "Evaluation metrics: Accuracy, Precision, Recall, F1-score",
      ],
    },
    {
      title: "Module 5: Unsupervised Learning",
      items: [
        "Clustering: K-Means, Hierarchical, DBSCAN",
        "Dimensionality Reduction: PCA, t-SNE",
        "Anomaly detection techniques",
      ],
    },
    {
      title: "Module 6: Feature Engineering & Model Tuning",
      items: [
        "Feature selection and extraction",
        "Handling categorical and numerical data",
        "Hyperparameter tuning (Grid Search, Random Search)",
        "Cross-validation techniques",
      ],
    },
    {
      title: "Module 7: Ensemble Methods",
      items: [
        "Bagging and Boosting techniques",
        "Random Forests",
        "Gradient Boosting, AdaBoost, XGBoost",
        "Stacking and Voting classifiers",
      ],
    },
    {
      title: "Module 8: Introduction to Deep Learning",
      items: [
        "Neural networks basics",
        "Activation functions and backpropagation",
        "CNNs for image tasks",
        "RNNs and LSTMs for sequential data",
      ],
    },
    {
      title: "Module 9: Model Evaluation & Deployment",
      items: [
        "Model selection and validation",
        "Overfitting & underfitting mitigation",
        "Introduction to ML deployment",
        "Using Flask/Django for API integration",
      ],
    },
    {
      title: "Module 10: Machine Learning Capstone Project",
      items: [
        "End-to-end ML project workflow",
        "Data collection, preprocessing, and modeling",
        "Evaluation and optimization of models",
        "Presentation and deployment of ML solutions",
      ],
    },
  ],
}
,


dotnetfullstack: {
  title: ".NET Developer Online Training — Syllabus",
  accent: "#512BD4",
  meta: {
    duration: "16–20 weeks",
    audience: "Students, Freshers, Software Developers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "VB.NET Training",
    "HTML, CSS, JavaScript",
    "ASP.NET & ASP.NET Core MVC",
    "JavaScript Frameworks (Angular, React, Vue.js)",
    "ASP.NET Core Web API",
    "SQL Server, Oracle SQL, MySQL, PostgreSQL, NoSQL",
    "Azure Cloud Services (App Service, SQL Database)",
    "Docker & Kubernetes",
    "DevOps Practices (CI/CD)",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: VB.NET & C# Fundamentals",
      items: [
        "Introduction to VB.NET and C# programming",
        "Data types, variables, operators, and control structures",
        "Functions, methods, and error handling",
        "Object-Oriented Programming: classes, inheritance, polymorphism, encapsulation",
        "Hands-on exercises and mini-projects",
      ],
    },
    {
      title: "Module 2: Web Development Basics",
      items: [
        "HTML5, CSS3, JavaScript fundamentals",
        "DOM manipulation, events, and validation",
        "Responsive design with Bootstrap / Tailwind CSS",
        "Introduction to JavaScript frameworks: Angular, React, Vue.js",
      ],
    },
    {
      title: "Module 3: ASP.NET & ASP.NET Core MVC",
      items: [
        "Introduction to ASP.NET and MVC architecture",
        "Routing, controllers, views, and models",
        "Form handling, validation, and session management",
        "Creating reusable components and partial views",
      ],
    },
    {
      title: "Module 4: ASP.NET Core Web API",
      items: [
        "Building RESTful APIs with ASP.NET Core",
        "Request & Response handling, JSON serialization",
        "Authentication & authorization in APIs",
        "Integration with frontend frameworks",
      ],
    },
    {
      title: "Module 5: Databases",
      items: [
        "SQL Server fundamentals: tables, queries, joins, and indexes",
        "Working with Oracle SQL, MySQL, PostgreSQL, and NoSQL databases",
        "Database relationships, normalization, and transactions",
        "CRUD operations using ADO.NET and Entity Framework",
      ],
    },
    {
      title: "Module 6: Frontend Frameworks Integration",
      items: [
        "Integrating Angular, React, or Vue.js with ASP.NET Core backend",
        "State management and component-based architecture",
        "API consumption, routing, and reactive forms",
        "Frontend debugging and best practices",
      ],
    },
    {
      title: "Module 7: Azure Cloud Services",
      items: [
        "Introduction to Azure cloud platform",
        "Deploying applications using Azure App Service",
        "Azure SQL Database configuration and management",
        "Scaling applications and monitoring",
      ],
    },
    {
      title: "Module 8: Containerization & Orchestration",
      items: [
        "Introduction to Docker and containerization",
        "Creating Docker images and containers",
        "Docker Compose for multi-container applications",
        "Introduction to Kubernetes for container orchestration",
      ],
    },
    {
      title: "Module 9: DevOps Practices & CI/CD",
      items: [
        "Source control using Git and GitHub",
        "Continuous Integration and Continuous Deployment concepts",
        "Building CI/CD pipelines for ASP.NET applications",
        "Automated testing and deployment best practices",
      ],
    },
    {
      title: "Module 10: Security & Best Practices",
      items: [
        "Authentication & authorization",
        "OWASP security principles for web applications",
        "Data validation & secure API development",
        "Performance optimization and logging",
      ],
    },
    {
      title: "Module 11: Capstone Projects",
      items: [
        "E-commerce web application with ASP.NET Core MVC",
        "Social media app using Angular / React frontend with .NET backend",
        "API-first project integrated with SQL & Azure deployment",
        "Complete DevOps pipeline implementation for project deployment",
      ],
    },
  ],
}
,
blockchain: {
  title: "Blockchain Developer Online Training — Syllabus",
  accent: "#0D9488",
  meta: {
    duration: "16–20 weeks",
    audience: "Students, Freshers, Software Developers, IT Professionals, Entrepreneurs",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Blockchain Fundamentals & Cryptography",
    "Ethereum & Smart Contracts (Solidity)",
    "Decentralized Applications (DApps)",
    "Hyperledger Fabric",
    "Consensus Mechanisms (PoW, PoS, PoA, etc.)",
    "Decentralized Finance (DeFi)",
    "NFTs & Token Development",
    "Web3.js, Ethers.js, Hardhat & Truffle",
    "Blockchain Security & Best Practices",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: Blockchain & Cryptography Basics",
      items: [
        "Introduction to Blockchain technology",
        "Distributed ledger concepts & peer-to-peer networks",
        "Hash functions, Merkle trees, and digital signatures",
        "Public vs Private vs Consortium blockchains",
        "Use cases of Blockchain across industries",
      ],
    },
    {
      title: "Module 2: Cryptocurrency & Bitcoin Fundamentals",
      items: [
        "Bitcoin architecture & transactions",
        "Mining process, nodes, and consensus",
        "Wallets, addresses, and private/public keys",
        "Bitcoin scripting & UTXO model",
        "Hands-on with Bitcoin Testnet",
      ],
    },
    {
      title: "Module 3: Ethereum & Smart Contracts",
      items: [
        "Ethereum ecosystem & accounts",
        "Solidity programming basics",
        "Writing and deploying smart contracts",
        "Gas fees, transactions, and events",
        "Debugging & testing contracts",
      ],
    },
    {
      title: "Module 4: DApp Development",
      items: [
        "Connecting blockchain with frontend (Web3.js, Ethers.js)",
        "Building decentralized applications (DApps)",
        "Using Hardhat & Truffle for development",
        "IPFS for decentralized storage",
        "Hands-on: Simple DApp with React + Ethereum",
      ],
    },
    {
      title: "Module 5: Advanced Blockchain Concepts",
      items: [
        "Consensus mechanisms (PoW, PoS, PoA, DPoS, PBFT)",
        "Scalability solutions: Sidechains, State Channels, Rollups",
        "Cross-chain interoperability",
        "Layer-2 protocols (Polygon, Optimism, Arbitrum)",
      ],
    },
    {
      title: "Module 6: Hyperledger & Enterprise Blockchain",
      items: [
        "Introduction to Hyperledger Fabric",
        "Chaincode development",
        "Setting up a Hyperledger Fabric network",
        "Use cases: Supply Chain, Healthcare, Finance",
      ],
    },
    {
      title: "Module 7: Tokens, NFTs & DeFi",
      items: [
        "ERC-20 Token development",
        "NFT standards (ERC-721, ERC-1155)",
        "Building and minting NFTs",
        "Introduction to DeFi protocols (Uniswap, Aave, Compound)",
        "Staking, Yield farming & Liquidity pools",
      ],
    },
    {
      title: "Module 8: Blockchain Security",
      items: [
        "Smart contract vulnerabilities (Reentrancy, Overflow, etc.)",
        "OWASP Blockchain security guidelines",
        "Auditing smart contracts",
        "Secure coding practices",
      ],
    },
    {
      title: "Module 9: Tools & Frameworks",
      items: [
        "Ganache, MetaMask, Remix IDE",
        "Hardhat & Truffle framework",
        "Testing with Mocha/Chai",
        "Oracles (Chainlink) & external data integration",
      ],
    },
    {
      title: "Module 10: Capstone Projects",
      items: [
        "Decentralized Voting Application",
        "Crowdfunding DApp with Ethereum",
        "NFT Marketplace with React + Solidity",
        "DeFi Yield Farming Application",
        "Blockchain Supply Chain Solution",
      ],
    },
  ],
}

,
juniorhr: {
  title: "Junior HR Training — Syllabus",
  accent: "#512BD4",
  meta: {
    duration: "1–2 Months",
    audience: "Students, Freshers, HR Aspirants, Office Administrators",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "HR Fundamentals",
    "Recruitment & Onboarding",
    "Employee Engagement",
    "Attendance & Leave Management",
    "Performance Management",
    "HR Policies & Compliance",
    "Payroll Basics",
    "Communication Skills",
    "HR Documentation",
    "Practical HR Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Human Resources",
      items: [
        "Understanding the role and importance of HR",
        "Overview of HR functions and responsibilities",
        "Organizational structure and HR departments",
        "Workplace best practices and ethics",
      ],
    },
    {
      title: "Module 2: Recruitment & Onboarding",
      items: [
        "Job description creation and candidate sourcing",
        "Resume screening and interview coordination",
        "Employee onboarding process and joining formalities",
        "Creating onboarding checklists and HR forms",
      ],
    },
    {
      title: "Module 3: Employee Engagement & Communication",
      items: [
        "Employee motivation techniques and recognition programs",
        "Team-building and internal communication strategies",
        "Conflict resolution basics and problem-solving",
        "Improving interpersonal and professional communication skills",
      ],
    },
    {
      title: "Module 4: Attendance, Leave & Payroll Management",
      items: [
        "Tracking attendance and leave management",
        "Introduction to payroll processing and HR software",
        "Payroll basics and documentation",
        "Maintaining accurate HR records",
      ],
    },
    {
      title: "Module 5: Performance Management",
      items: [
        "Understanding KPIs and performance appraisal systems",
        "Employee performance tracking methods",
        "Providing constructive feedback",
        "Documentation and reporting of appraisals",
      ],
    },
    {
      title: "Module 6: HR Policies & Compliance",
      items: [
        "Introduction to labor laws and compliance",
        "Creating and enforcing HR policies",
        "Handling employee grievances and disputes",
        "Maintaining confidentiality and ethical standards",
      ],
    },
    {
      title: "Module 7: Practical HR Tasks",
      items: [
        "Assisting in recruitment and onboarding activities",
        "Creating HR forms, reports, and templates",
        "Managing attendance, leave, and payroll data",
        "Participating in employee engagement and training activities",
      ],
    },
    {
      title: "Module 8: Career Development & Placement Support",
      items: [
        "Resume building and interview preparation",
        "Soft skill enhancement and workplace etiquette",
        "Career guidance for HR roles",
        "Job placement assistance and mentorship",
      ],
    },
  ],
}
,
seniorhr: {
  title: "Senior HR Training — Syllabus",
  accent: "#FF8C00",
  meta: {
    duration: "3–4 Months",
    audience: "HR Professionals, Team Leads, Managers, HR Executives",
    level: "Intermediate → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Advanced HR Strategies",
    "Talent Acquisition & Management",
    "Performance Management Systems",
    "Employee Engagement & Retention",
    "Compensation & Benefits Planning",
    "HR Policies, Compliance & Governance",
    "Workforce Analytics",
    "Leadership & Organizational Development",
    "Conflict Resolution & Counseling",
    "Strategic HR Projects",
  ],
  sections: [
    {
      title: "Module 1: Advanced HR Fundamentals",
      items: [
        "Strategic role of HR in business growth",
        "Organizational behavior and change management",
        "Advanced HR operations and process improvement",
        "Ethics, corporate governance, and HR compliance",
      ],
    },
    {
      title: "Module 2: Talent Acquisition & Management",
      items: [
        "Strategic workforce planning and forecasting",
        "Advanced recruitment and selection techniques",
        "Onboarding high-potential employees",
        "Succession planning and talent pipeline management",
      ],
    },
    {
      title: "Module 3: Performance Management & Appraisals",
      items: [
        "Designing performance evaluation frameworks",
        "KPI setting, goal alignment, and appraisal cycles",
        "Coaching and feedback techniques",
        "Employee development plans and competency mapping",
      ],
    },
    {
      title: "Module 4: Employee Engagement & Retention",
      items: [
        "Employee motivation and recognition programs",
        "Designing engagement surveys and action plans",
        "Retention strategies for high-performing employees",
        "Building a positive workplace culture",
      ],
    },
    {
      title: "Module 5: Compensation & Benefits Management",
      items: [
        "Salary structuring and incentive programs",
        "Benefits administration and compliance",
        "Payroll optimization and cost management",
        "Legal considerations in compensation",
      ],
    },
    {
      title: "Module 6: HR Policies, Compliance & Governance",
      items: [
        "Advanced labor laws and statutory compliance",
        "Policy creation, implementation, and audits",
        "Handling grievances and disciplinary actions",
        "Ensuring ethical HR practices and risk mitigation",
      ],
    },
    {
      title: "Module 7: Workforce Analytics & Reporting",
      items: [
        "HR metrics and KPI dashboards",
        "Data-driven decision making in HR",
        "Employee performance and engagement analytics",
        "Strategic workforce insights for management",
      ],
    },
    {
      title: "Module 8: Leadership & Organizational Development",
      items: [
        "Leading HR teams effectively",
        "Organizational development strategies",
        "Change management and HR transformation",
        "Mentoring, coaching, and knowledge sharing",
      ],
    },
    {
      title: "Module 9: Conflict Resolution & Employee Counseling",
      items: [
        "Advanced conflict management techniques",
        "Employee counseling and support strategies",
        "Mediation and negotiation skills",
        "Maintaining a healthy workplace environment",
      ],
    },
    {
      title: "Module 10: Strategic HR Projects",
      items: [
        "Design and implementation of HR initiatives",
        "Cross-functional HR projects",
        "Case studies on organizational challenges",
        "Practical hands-on assignments to demonstrate strategic HR skills",
      ],
    },
  ],
}
,
talentaqu: {
  title: "Talent Acquisition Training — Syllabus",
  accent: "#1E90FF",
  meta: {
    duration: "2–3 Months",
    audience: "HR Professionals, Recruiters, Talent Acquisition Specialists",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Talent Acquisition Fundamentals",
    "Workforce Planning & Sourcing Strategies",
    "Recruitment & Selection Techniques",
    "Interviewing & Assessment Methods",
    "Onboarding & Employee Retention",
    "Employer Branding & Candidate Experience",
    "Recruitment Analytics & Metrics",
    "Recruitment Tools & ATS Management",
    "Legal & Compliance in Hiring",
    "Capstone Projects in Talent Acquisition",
  ],
  sections: [
    {
      title: "Module 1: Talent Acquisition Fundamentals",
      items: [
        "Introduction to talent acquisition and recruitment lifecycle",
        "Strategic role of TA in organizational growth",
        "Talent acquisition vs. HR generalist roles",
        "Overview of recruitment channels and sourcing methods",
      ],
    },
    {
      title: "Module 2: Workforce Planning & Sourcing",
      items: [
        "Analyzing workforce needs and talent gaps",
        "Building a sourcing strategy aligned with business goals",
        "Using social media, job portals, and networking for sourcing",
        "Passive candidate sourcing techniques",
      ],
    },
    {
      title: "Module 3: Recruitment & Selection",
      items: [
        "Job analysis and creating effective job descriptions",
        "Screening resumes and shortlisting candidates",
        "Structured and behavioral interviews",
        "Assessment methods: technical, psychometric, and soft skills",
      ],
    },
    {
      title: "Module 4: Interviewing & Candidate Assessment",
      items: [
        "Effective interview techniques and evaluation criteria",
        "Conducting panel and remote interviews",
        "Competency mapping and candidate fitment",
        "Bias-free and fair selection practices",
      ],
    },
    {
      title: "Module 5: Onboarding & Retention",
      items: [
        "Designing onboarding programs for smooth integration",
        "Employee engagement strategies from day one",
        "Retention strategies for top talent",
        "Monitoring early attrition and feedback mechanisms",
      ],
    },
    {
      title: "Module 6: Employer Branding & Candidate Experience",
      items: [
        "Building a strong employer brand",
        "Communicating company culture to attract talent",
        "Enhancing candidate experience throughout the recruitment process",
        "Managing candidate feedback and reputation",
      ],
    },
    {
      title: "Module 7: Recruitment Analytics & Metrics",
      items: [
        "Tracking key recruitment metrics (TAT, cost per hire, quality of hire)",
        "Using data to optimize sourcing and selection",
        "Talent pipeline reporting and dashboards",
        "Forecasting hiring needs and trends",
      ],
    },
    {
      title: "Module 8: Recruitment Tools & ATS Management",
      items: [
        "Introduction to Applicant Tracking Systems (ATS)",
        "Managing recruitment workflows using tools",
        "Leveraging automation for efficiency",
        "Integrating recruitment tools with HRIS",
      ],
    },
    {
      title: "Module 9: Legal & Compliance in Hiring",
      items: [
        "Employment laws and labor regulations",
        "Diversity, equity, and inclusion in hiring",
        "Data privacy and candidate information management",
        "Compliance audits and documentation",
      ],
    },
    {
      title: "Module 10: Capstone Projects in Talent Acquisition",
      items: [
        "End-to-end recruitment project implementation",
        "Sourcing, screening, interviewing, and onboarding simulation",
        "Employer branding and candidate engagement project",
        "Data-driven recruitment analytics and reporting assignment",
      ],
    },
  ],
}
,

  javafullstack: {
  title: "Java Full Stack Online Training — Syllabus",
  accent: "#2097f8ff",
  meta: {
    duration: "16–20 weeks",
    audience: "Students, Freshers, Software Developers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Core Java",
    "Advanced Java (JDBC, Servlets, JSP)",
    "Spring Framework & Spring Boot",
    "Hibernate / JPA",
    "RESTful Web Services",
    "Microservices with Spring Cloud",
    "Frontend (HTML, CSS, JavaScript, React.js)",
    "Database (MySQL)",
    "Testing (JUnit, Mockito)",
    "Version Control & CI/CD",
    "Deployment (Docker, Cloud, Jenkins)",
    "Capstone Project",
  ],
  sections: [
    {
      title: "Module 1: Core Java Programming",
      items: [
        "Java basics & JVM architecture",
        "OOPs concepts (Inheritance, Polymorphism, Abstraction, Encapsulation)",
        "Data types, Arrays, and Strings",
        "Collections Framework & Generics",
        "Exception Handling & Assertions",
        "Multithreading & Concurrency",
        "Java 8+ features: Streams, Lambda expressions, Functional interfaces",
      ],
    },
    {
      title: "Module 2: Advanced Java",
      items: [
        "JDBC & database connectivity",
        "Servlets lifecycle & API",
        "JSP, JSTL, and EL",
        "Session tracking & state management",
        "MVC design pattern",
      ],
    },
    {
      title: "Module 3: Web Technologies (Frontend Basics)",
      items: [
        "HTML5 & CSS3 fundamentals",
        "JavaScript ES6+ features",
        "DOM manipulation & events",
        "Responsive design (Bootstrap/Tailwind)",
        "AJAX & Fetch API",
      ],
    },
    {
      title: "Module 4: React.js Frontend Development",
      items: [
        "React setup & components",
        "Props, state & hooks",
        "React Router",
        "Forms & validation",
        "REST API integration",
        "State management (Redux / Context API)",
      ],
    },
    {
      title: "Module 5: Spring Framework Core",
      items: [
        "Spring basics & architecture",
        "Inversion of Control (IoC) & Dependency Injection",
        "Spring Beans & configuration",
        "Spring AOP concepts",
      ],
    },
    {
      title: "Module 6: Spring Boot",
      items: [
        "Spring Boot introduction & starters",
        "Spring MVC & REST API development",
        "Spring Data JPA with Hibernate",
        "Validation & exception handling",
        "Spring Boot Testing (JUnit, Mockito)",
      ],
    },
    {
      title: "Module 7: Hibernate & JPA",
      items: [
        "Hibernate ORM basics",
        "Entity mapping (One-to-One, One-to-Many, Many-to-Many)",
        "JPQL & Criteria API",
        "Transaction & caching",
        "Performance tuning & best practices",
      ],
    },
    {
      title: "Module 8: Microservices with Spring Cloud",
      items: [
        "Introduction to microservices",
        "Service discovery with Eureka",
        "API Gateway with Zuul / Spring Cloud Gateway",
        "Centralized configuration (Spring Cloud Config)",
        "Inter-service communication (Feign, RestTemplate)",
        "Circuit Breakers & Resilience4j",
      ],
    },
    {
      title: "Module 9: Database Management",
      items: [
        "RDBMS concepts & normalization",
        "MySQL database setup",
        "DDL, DML, DQL operations",
        "Joins, indexes, and constraints",
        "Stored procedures & triggers",
      ],
    },
    {
      title: "Module 10: Tools & Build Management",
      items: [
        "Git & GitHub for version control",
        "Maven & Gradle build tools",
        "Logging frameworks (SLF4J, Logback)",
        "Lombok & utility libraries",
      ],
    },
    {
      title: "Module 11: Testing in Full Stack Applications",
      items: [
        "Unit testing with JUnit",
        "Mocking with Mockito",
        "Integration testing",
        "Test-driven development (TDD)",
        "Postman for API testing",
      ],
    },
    {
      title: "Module 12: DevOps & Deployment",
      items: [
        "Introduction to CI/CD",
        "Jenkins pipelines",
        "Containerization with Docker",
        "Cloud deployment (AWS / Azure basics)",
        "Kubernetes introduction",
      ],
    },
    {
      title: "Module 13: Security & Performance",
      items: [
        "Spring Security basics",
        "JWT authentication",
        "OAuth2 authorization",
        "Application performance monitoring",
        "Best practices for enterprise apps",
      ],
    },
    {
      title: "Module 14: Capstone Project",
      items: [
        "E-commerce web application",
        "Employee management system",
        "Banking/Fintech mini-project",
        "Capstone project integrating frontend + backend + database + deployment",
      ],
    },
  ],
}

,
  azure: {
  title: "Microsoft Azure Online Training — Syllabus",
  accent: "#007FFF",
  meta: {
    duration: "8–10 weeks",
    audience: "Students, IT Professionals & Cloud Enthusiasts",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Azure Fundamentals",
    "Virtual Machines",
    "Networking",
    "Azure Storage",
    "Azure Active Directory",
    "Security & IAM",
    "Azure DevOps",
    "Monitoring",
    "ARM Templates",
    "Cloud Deployment",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Cloud & Azure",
      items: [
        "Cloud computing overview (IaaS, PaaS, SaaS)",
        "Microsoft Azure ecosystem",
        "Azure Portal & CLI basics",
        "Azure Resource Manager (ARM)",
      ],
    },
    {
      title: "Module 2: Azure Virtual Machines & Compute",
      items: [
        "Creating and configuring Virtual Machines",
        "VM images & sizes",
        "Scaling & availability sets",
        "Azure App Services",
        "Container Instances & AKS basics",
      ],
    },
    {
      title: "Module 3: Azure Networking",
      items: [
        "Virtual Networks (VNets)",
        "Subnets & IP addressing",
        "Network Security Groups (NSGs)",
        "Azure Load Balancer & Application Gateway",
        "VPN Gateway & ExpressRoute",
      ],
    },
    {
      title: "Module 4: Azure Storage Solutions",
      items: [
        "Azure Storage Accounts",
        "Blob, File, Queue & Table storage",
        "Disk Storage",
        "Data redundancy (LRS, ZRS, GRS)",
        "Storage Explorer",
      ],
    },
    {
      title: "Module 5: Azure Identity & Access Management",
      items: [
        "Azure Active Directory (AAD)",
        "Users, Groups & Roles",
        "Role-Based Access Control (RBAC)",
        "Multi-Factor Authentication (MFA)",
        "Identity Protection & Conditional Access",
      ],
    },
    {
      title: "Module 6: Azure Security & Compliance",
      items: [
        "Azure Security Center",
        "Key Vault for secrets & certificates",
        "Encryption in Azure",
        "Monitoring & audit logs",
        "Governance: Policies & Blueprints",
      ],
    },
    {
      title: "Module 7: Databases in Azure",
      items: [
        "Azure SQL Database",
        "Cosmos DB",
        "Azure Database for MySQL & PostgreSQL",
        "Scaling & replication",
        "Database backup & restore",
      ],
    },
    {
      title: "Module 8: Monitoring & Management",
      items: [
        "Azure Monitor & Metrics",
        "Log Analytics",
        "Application Insights",
        "Alerts & dashboards",
        "Automation with Azure Runbooks",
      ],
    },
    {
      title: "Module 9: Azure DevOps & CI/CD",
      items: [
        "Introduction to Azure DevOps",
        "Repos, Boards & Pipelines",
        "Continuous Integration / Continuous Deployment",
        "Infrastructure as Code (IaC) with ARM Templates",
        "DevOps security & governance",
      ],
    },
    {
      title: "Module 10: Advanced Azure Services",
      items: [
        "Azure Kubernetes Service (AKS)",
        "Serverless with Azure Functions",
        "Event Grid & Service Bus",
        "Logic Apps",
        "AI & ML services integration",
      ],
    },
    {
      title: "Module 11: Real-World Projects & Capstone",
      items: [
        "Deploying multi-tier applications on Azure",
        "Configuring secure hybrid networks",
        "CI/CD pipeline setup with Azure DevOps",
        "Monitoring & scaling real workloads",
      ],
    },
  ],
},
vmware: {
  title: "VMware Online Training — Syllabus",
  accent: "#607D8B",
  meta: {
    duration: "6–8 weeks",
    audience: "IT Professionals, System Administrators, Cloud Engineers",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Virtualization",
    "VMware vSphere & ESXi",
    "vCenter Server",
    "Networking & Storage",
    "vMotion & High Availability",
    "Resource Management",
    "Snapshots & Cloning",
    "Security & Permissions",
    "Backup & Recovery",
    "Real-world Labs & Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Virtualization",
      items: [
        "What is virtualization?",
        "Types of virtualization (server, network, storage)",
        "VMware product suite overview",
        "Use cases & benefits of VMware",
      ],
    },
    {
      title: "Module 2: VMware vSphere & ESXi",
      items: [
        "Introduction to vSphere architecture",
        "Installing & configuring ESXi hosts",
        "VMware tools installation",
        "Creating and managing virtual machines",
      ],
    },
    {
      title: "Module 3: vCenter Server",
      items: [
        "Deploying vCenter Server",
        "Managing ESXi hosts & VMs via vCenter",
        "User roles & permissions",
        "Monitoring & performance tracking",
      ],
    },
    {
      title: "Module 4: Networking in VMware",
      items: [
        "Standard vs Distributed Switches",
        "Configuring virtual switches",
        "NIC teaming & VLANs",
        "Network security policies",
      ],
    },
    {
      title: "Module 5: Storage in VMware",
      items: [
        "VMware storage concepts",
        "Datastores & storage provisioning",
        "iSCSI, NFS & Fibre Channel storage",
        "Storage vMotion & datastore clusters",
      ],
    },
    {
      title: "Module 6: VM Management",
      items: [
        "Snapshots & cloning VMs",
        "Templates for VM deployment",
        "VM migration techniques",
        "Resource pools & clusters",
      ],
    },
    {
      title: "Module 7: High Availability & Scalability",
      items: [
        "vMotion & Storage vMotion",
        "VMware High Availability (HA)",
        "Fault Tolerance (FT)",
        "Distributed Resource Scheduler (DRS)",
      ],
    },
    {
      title: "Module 8: Security & Permissions",
      items: [
        "User authentication & roles",
        "VM encryption",
        "VMware security hardening guidelines",
        "Audit & compliance in VMware environments",
      ],
    },
    {
      title: "Module 9: Backup & Recovery",
      items: [
        "VMware Data Protection",
        "Snapshots vs Backups",
        "Disaster recovery planning",
        "Third-party backup tools (Veeam, Commvault)",
      ],
    },
    {
      title: "Module 10: Real-World Projects & Labs",
      items: [
        "Deploying and managing a VMware virtual lab",
        "Configuring HA & DRS clusters",
        "Simulating disaster recovery scenarios",
        "Performance tuning & optimization",
      ],
    },
  ],
}
,
dataAnalyst: {
  title: "Data Analyst Online Training — Syllabus",
  accent: "#005BAC",
  meta: {
    duration: "10–12 weeks",
    audience: "Students, Graduates, Working Professionals & Career Switchers",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Excel for Data Analysis",
    "SQL & Databases",
    "Python for Analytics",
    "Data Cleaning & Wrangling",
    "Data Visualization",
    "Power BI & Tableau",
    "Statistics & Hypothesis Testing",
    "Exploratory Data Analysis",
    "Capstone Projects",
    "Career Preparation",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Data Analytics",
      items: [
        "What is Data Analytics?",
        "Types of Analytics: Descriptive, Diagnostic, Predictive, Prescriptive",
        "Data Analytics Lifecycle",
        "Key skills & career paths",
      ],
    },
    {
      title: "Module 2: Excel for Data Analysis",
      items: [
        "Excel basics & shortcuts",
        "Data cleaning & formatting",
        "Pivot tables & pivot charts",
        "Lookup & reference functions (VLOOKUP, HLOOKUP, XLOOKUP)",
        "Data validation & what-if analysis",
      ],
    },
    {
      title: "Module 3: SQL & Databases",
      items: [
        "Introduction to RDBMS & ER diagrams",
        "SQL queries: SELECT, WHERE, ORDER BY",
        "Joins, subqueries & aggregations",
        "Stored procedures & functions",
        "Working with real-world databases",
      ],
    },
    {
      title: "Module 4: Python for Data Analysis",
      items: [
        "Python basics: data types, loops, functions",
        "Data manipulation with Pandas & NumPy",
        "Exploratory Data Analysis (EDA)",
        "Data visualization with Matplotlib & Seaborn",
        "Working with CSV, Excel & APIs",
      ],
    },
    {
      title: "Module 5: Data Cleaning & Wrangling",
      items: [
        "Handling missing & duplicate values",
        "Data transformations",
        "Encoding categorical variables",
        "Merging & joining datasets",
        "Outlier detection & treatment",
      ],
    },
    {
      title: "Module 6: Data Visualization & BI Tools",
      items: [
        "Principles of data visualization",
        "Power BI dashboards & DAX functions",
        "Tableau: charts, filters & storytelling",
        "Connecting BI tools to SQL & Excel",
        "Interactive reporting for decision-making",
      ],
    },
    {
      title: "Module 7: Statistics for Data Analytics",
      items: [
        "Descriptive vs inferential statistics",
        "Probability distributions",
        "Hypothesis testing & p-values",
        "Correlation & regression analysis",
        "A/B testing & real-world case studies",
      ],
    },
    {
      title: "Module 8: Advanced Analytics Concepts",
      items: [
        "Introduction to machine learning for analysts",
        "Predictive modeling basics",
        "Clustering & classification overview",
        "Feature engineering",
        "Limitations of analytics & ethical concerns",
      ],
    },
    {
      title: "Module 9: Capstone Projects",
      items: [
        "Analyzing sales & marketing datasets",
        "Customer segmentation dashboard",
        "Financial performance reporting",
        "End-to-end EDA with Python & SQL",
      ],
    },
    {
      title: "Module 10: Career Preparation",
      items: [
        "Building a data analytics portfolio",
        "Resume & LinkedIn profile optimization",
        "Mock interviews & aptitude tests",
        "Common data analyst interview questions",
        "Job placement guidance",
      ],
    },
  ],
}
,

  uxui: {
  title: "UI/UX Online Training — Syllabus",
  accent: "#7C3AED",
  meta: {
    duration: "8–10 weeks",
    audience: "Students, Designers, Developers, and Working Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Design Thinking",
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma & Adobe XD",
    "UI Principles",
    "Accessibility",
    "Usability Testing",
    "Design Systems",
    "Portfolio Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to UI/UX",
      items: [
        "What is UX vs UI?",
        "Importance of human-centered design",
        "Design process & industry workflows",
        "Roles & responsibilities of UX/UI designers",
      ],
    },
    {
      title: "Module 2: Design Thinking & Research",
      items: [
        "Understanding design thinking",
        "Empathy mapping & user personas",
        "User research techniques (interviews, surveys)",
        "Defining user journeys & pain points",
      ],
    },
    {
      title: "Module 3: Information Architecture",
      items: [
        "Card sorting & content organization",
        "Site maps & navigation structures",
        "Hierarchy & labeling systems",
      ],
    },
    {
      title: "Module 4: Wireframing",
      items: [
        "Low-fidelity vs high-fidelity wireframes",
        "Sketching layouts",
        "Wireframing tools (Figma, Adobe XD, Balsamiq)",
        "Responsive design wireframes",
      ],
    },
    {
      title: "Module 5: Visual Design & UI Principles",
      items: [
        "Typography & color theory",
        "Layouts, grids, and spacing",
        "Icons & imagery",
        "UI design patterns",
        "Designing for mobile vs web",
      ],
    },
    {
      title: "Module 6: Prototyping",
      items: [
        "Creating interactive prototypes",
        "Micro-interactions & animations",
        "Figma prototyping features",
        "Collaboration & feedback loops",
      ],
    },
    {
      title: "Module 7: Usability & Accessibility",
      items: [
        "Heuristic evaluation",
        "Usability testing methods",
        "Accessibility guidelines (WCAG, ARIA)",
        "Inclusive design principles",
      ],
    },
    {
      title: "Module 8: Design Systems & Tools",
      items: [
        "What is a design system?",
        "Components, tokens, and guidelines",
        "Building reusable UI kits",
        "Team collaboration in Figma/Adobe XD",
      ],
    },
    {
      title: "Module 9: UX Writing & Microcopy",
      items: [
        "Role of content in UX",
        "Writing effective microcopy",
        "Error messages, CTAs, onboarding text",
      ],
    },
    {
      title: "Module 10: UX for Emerging Tech",
      items: [
        "Designing for mobile-first",
        "Design for AR/VR basics",
        "UX in AI-driven products",
        "Voice & conversational UI",
      ],
    },
    {
      title: "Module 11: Portfolio & Projects",
      items: [
        "Case study preparation",
        "End-to-end UX project (research → prototype)",
        "Presenting design decisions",
        "Building a designer portfolio",
      ],
    },
  ],
}
,
    python: {
    title: "Python Online Training — Syllabus",
    accent: "#005BAC", // Python blue
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

 fullstack: {
    title: "Full Stack Development — Syllabus",
    accent: "#005BAC", // Teal-ish accent
    meta: {
      duration: "12-16 weeks",
      audience: "Students, Graduates, IT Professionals",
      level: "Beginner → Advanced",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Node.js & Express",
      "Databases (SQL & MongoDB)",
      "REST APIs",
      "Git & GitHub",
      "Authentication & Security",
      "DevOps Basics",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Web Fundamentals",
        items: [
          "Internet & Client-Server basics",
          "HTML5 essentials (forms, media, semantic tags)",
          "CSS3 basics, Flexbox, Grid",
          "Responsive Design, Media Queries",
        ],
      },
      {
        title: "Module 2: JavaScript Programming",
        items: [
          "JS syntax & variables (var/let/const)",
          "Functions, scopes, closures",
          "DOM manipulation & events",
          "ES6+ features (arrow fn, destructuring, spread/rest)",
          "Async JS: callbacks, promises, async/await",
        ],
      },
      {
        title: "Module 3: Frontend Development with React",
        items: [
          "React basics (components, JSX)",
          "Props & State, hooks (useState, useEffect)",
          "Forms, controlled inputs",
          "React Router (routing & navigation)",
          "Context API & Redux Toolkit basics",
        ],
      },
      {
        title: "Module 4: Backend Development with Node.js & Express",
        items: [
          "Node.js runtime overview",
          "Express.js routing & middleware",
          "REST API design",
          "Error handling & logging",
          "Security: Helmet, rate limiting, sanitization",
        ],
      },
      {
        title: "Module 5: Databases & Persistence",
        items: [
          "SQL fundamentals (MySQL/PostgreSQL)",
          "MongoDB & NoSQL concepts",
          "ORMs (Sequelize/TypeORM/Prisma) vs ODM (Mongoose)",
          "Joins, indexes, transactions",
          "CRUD with SQL & NoSQL",
        ],
      },
      {
        title: "Module 6: Authentication & Authorization",
        items: [
          "User registration & login",
          "Password hashing (bcrypt)",
          "JWT authentication",
          "Role-based access control",
          "OAuth2 & social logins (Google, GitHub)",
        ],
      },
      {
        title: "Module 7: Advanced Frontend Topics",
        items: [
          "Component libraries (Material UI / TailwindCSS)",
          "Form validation (Formik/Yup)",
          "API integration (Axios, Fetch)",
          "Performance optimization & lazy loading",
          "Testing React apps (Jest + React Testing Library)",
        ],
      },
      {
        title: "Module 8: DevOps & Deployment Basics",
        items: [
          "Git & GitHub workflows (branching, PRs, merge)",
          "CI/CD pipelines (GitHub Actions basics)",
          "Docker introduction & containerization",
          "Hosting: Netlify, Vercel (Frontend), Render/Heroku/AWS (Backend)",
          "Environment variables & config management",
        ],
      },
      {
        title: "Module 9: Full Stack Integration",
        items: [
          "Connecting React frontend to Express backend",
          "Fetching data from APIs",
          "State management for async requests",
          "Error boundaries & global error handling",
          "Realtime basics with WebSockets",
        ],
      },
      {
        title: "Module 10: Final Capstone Project",
        items: [
          "Plan & design a real-world project",
          "Team collaboration with Git",
          "End-to-end development (frontend + backend + DB)",
          "Deploy full-stack app to cloud",
          "Project presentation & review",
        ],
      },
    ],
  },
   plsql: {
    title: "PL/SQL Online Training — Syllabus",
    accent: "#005BAC", // Oracle PL/SQL orange
    meta: {
      duration: "6–8 weeks",
      audience: "Students, DB Developers, Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "SQL Refresher",
      "PL/SQL Basics",
      "Cursors",
      "Stored Procedures",
      "Functions",
      "Packages",
      "Triggers",
      "Exception Handling",
      "Collections",
      "Performance Tuning",
    ],
    sections: [
      {
        title: "Module 1: SQL Refresher",
        items: [
          "Relational database fundamentals",
          "DDL, DML, DCL, TCL commands",
          "Joins, subqueries, views",
          "Aggregate & analytic functions",
        ],
      },
      {
        title: "Module 2: Introduction to PL/SQL",
        items: [
          "What is PL/SQL?",
          "Benefits & architecture",
          "Anonymous blocks: DECLARE, BEGIN, EXCEPTION, END",
          "Variables, constants, data types",
        ],
      },
      {
        title: "Module 3: Control Structures",
        items: [
          "IF/ELSE statements",
          "Loops: FOR, WHILE, simple LOOP",
          "EXIT & CONTINUE",
          "CASE statements",
        ],
      },
      {
        title: "Module 4: Cursors",
        items: [
          "Implicit vs explicit cursors",
          "Cursor attributes (%FOUND, %NOTFOUND, %ROWCOUNT)",
          "FOR loops with cursors",
          "Parameterized cursors",
        ],
      },
      {
        title: "Module 5: Procedures & Functions",
        items: [
          "Stored procedures basics",
          "IN, OUT, IN OUT parameters",
          "User-defined functions",
          "Calling procedures/functions from SQL",
        ],
      },
      {
        title: "Module 6: Packages",
        items: [
          "Creating packages (specification & body)",
          "Public vs private elements",
          "Package state & variables",
          "Advantages of using packages",
        ],
      },
      {
        title: "Module 7: Triggers",
        items: [
          "Trigger basics & syntax",
          "Row-level vs statement-level triggers",
          "BEFORE vs AFTER triggers",
          "INSTEAD OF triggers",
        ],
      },
      {
        title: "Module 8: Exception Handling",
        items: [
          "Predefined exceptions (NO_DATA_FOUND, TOO_MANY_ROWS)",
          "User-defined exceptions",
          "RAISE & RAISE_APPLICATION_ERROR",
          "Best practices for error handling",
        ],
      },
      {
        title: "Module 9: PL/SQL Collections",
        items: [
          "Associative arrays (index-by tables)",
          "Nested tables",
          "VARRAYs",
          "Bulk collect & FORALL",
        ],
      },
      {
        title: "Module 10: Performance Tuning & Advanced Topics",
        items: [
          "Optimizing PL/SQL programs",
          "Bulk operations for performance",
          "Dynamic SQL (EXECUTE IMMEDIATE)",
          "DBMS_SQL package basics",
        ],
      },
      {
        title: "Module 11: Capstone Project",
        items: [
          "Designing stored procedures for real-world use case",
          "Implementing packages & triggers",
          "Database performance considerations",
          "Project presentation & Q/A",
        ],
      },
    ],
  },
   sql: {
    title: "SQL Online Training — Syllabus",
    accent: "#005BAC", // SQL DB blue
    meta: {
      duration: "5–7 weeks",
      audience: "Students, Freshers, Data Analysts, Developers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "RDBMS Fundamentals",
      "DDL, DML, DCL, TCL",
      "Joins & Subqueries",
      "Functions & Aggregates",
      "Indexes & Views",
      "Constraints",
      "Transactions",
      "Normalization",
      "Stored Routines",
      "Performance Tuning",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Databases",
        items: [
          "Database concepts & RDBMS",
          "Popular RDBMS (MySQL, PostgreSQL, Oracle, SQL Server)",
          "SQL vs NoSQL overview",
          "Installing & connecting to databases",
        ],
      },
      {
        title: "Module 2: SQL Basics",
        items: [
          "Creating & dropping databases",
          "Tables, columns & data types",
          "INSERT, UPDATE, DELETE operations",
          "SELECT basics & WHERE clause",
        ],
      },
      {
        title: "Module 3: Constraints & Keys",
        items: [
          "Primary key & foreign key",
          "Unique, Not Null, Default",
          "Check constraints",
          "Referential integrity",
        ],
      },
      {
        title: "Module 4: Operators & Functions",
        items: [
          "Arithmetic & comparison operators",
          "String functions (CONCAT, SUBSTR, REPLACE)",
          "Date & time functions",
          "Aggregate functions (SUM, AVG, COUNT, MIN, MAX)",
        ],
      },
      {
        title: "Module 5: Joins & Subqueries",
        items: [
          "INNER, LEFT, RIGHT, FULL OUTER joins",
          "Self joins & cross joins",
          "Nested subqueries",
          "EXISTS, ANY, ALL keywords",
        ],
      },
      {
        title: "Module 6: Advanced Querying",
        items: [
          "GROUP BY & HAVING",
          "ORDER BY & LIMIT",
          "Case expressions",
          "Set operations (UNION, INTERSECT, MINUS/EXCEPT)",
        ],
      },
      {
        title: "Module 7: Views & Indexes",
        items: [
          "Creating & managing views",
          "Materialized views (concept)",
          "Clustered vs non-clustered indexes",
          "Indexing strategies for performance",
        ],
      },
      {
        title: "Module 8: Transactions & Locks",
        items: [
          "ACID properties",
          "COMMIT, ROLLBACK, SAVEPOINT",
          "Isolation levels (READ COMMITTED, SERIALIZABLE, etc.)",
          "Deadlocks & concurrency basics",
        ],
      },
      {
        title: "Module 9: Normalization & Schema Design",
        items: [
          "1NF, 2NF, 3NF, BCNF",
          "Denormalization use cases",
          "Entity-Relationship (ER) modeling",
          "Schema design best practices",
        ],
      },
      {
        title: "Module 10: Stored Routines & Triggers (Optional)",
        items: [
          "Creating stored procedures",
          "User-defined functions",
          "Simple triggers",
          "Benefits & limitations",
        ],
      },
      {
        title: "Module 11: Performance Tuning",
        items: [
          "Explain plans & query optimization",
          "Index usage analysis",
          "Partitioning basics",
          "Best practices for scalable queries",
        ],
      },
      {
        title: "Module 12: Capstone Project",
        items: [
          "Design a database schema for a case study (E-commerce, HR, Banking)",
          "Write optimized queries (Joins, Subqueries, Aggregates)",
          "Implement views, indexes, and transactions",
          "Final review & presentation",
        ],
      },
    ],
  },
  
  datascience: {
    title: "Data Science Online Training — Syllabus",
    accent: "#005BAC", // Indigo for Data Science
    meta: {
      duration: "12-16 weeks",
      audience: "Students, Fresh Graduates, IT & Analytics Professionals",
      level: "Beginner → Advanced",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Python for Data Science",
      "Statistics & Probability",
      "Data Wrangling (Pandas/Numpy)",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Machine Learning (Supervised/Unsupervised)",
      "Feature Engineering",
      "SQL for Data Science",
      "Deep Learning Basics",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Data Science",
        items: [
          "What is Data Science? Use-cases & industry applications",
          "Roles: Data Scientist vs Analyst vs Engineer",
          "Data Science lifecycle & workflow",
          "Tools overview: Python, Jupyter, SQL, Git, Cloud",
        ],
      },
      {
        title: "Module 2: Python for Data Science",
        items: [
          "Python refresher (data types, functions, OOP)",
          "Numpy for numerical computing",
          "Pandas for data manipulation",
          "Working with files (CSV, Excel, JSON)",
        ],
      },
      {
        title: "Module 3: Statistics & Probability",
        items: [
          "Descriptive statistics (mean, median, mode, variance)",
          "Probability distributions (normal, binomial, poisson)",
          "Inferential statistics (hypothesis testing, t-test, chi-square)",
          "Correlation, covariance & regression basics",
        ],
      },
      {
        title: "Module 4: Data Wrangling & Cleaning",
        items: [
          "Handling missing values",
          "Outlier detection & treatment",
          "Data scaling & normalization",
          "Encoding categorical variables",
        ],
      },
      {
        title: "Module 5: Exploratory Data Analysis (EDA)",
        items: [
          "EDA process & business understanding",
          "Univariate & bivariate analysis",
          "Pandas profiling & summary reports",
          "Case study: retail/finance dataset",
        ],
      },
      {
        title: "Module 6: Data Visualization",
        items: [
          "Matplotlib & Seaborn basics",
          "Plotly & interactive dashboards",
          "Histograms, boxplots, scatterplots",
          "Heatmaps, pairplots, correlation plots",
        ],
      },
      {
        title: "Module 7: SQL for Data Science",
        items: [
          "Writing queries for analysis",
          "Aggregates & GROUP BY",
          "Joins & subqueries",
          "Analytical functions (RANK, ROW_NUMBER, CTEs)",
        ],
      },
      {
        title: "Module 8: Machine Learning — Supervised Learning",
        items: [
          "ML pipeline overview",
          "Regression (Linear, Logistic)",
          "Classification (Decision Tree, Random Forest, SVM)",
          "Model evaluation (confusion matrix, ROC/AUC, cross-validation)",
        ],
      },
      {
        title: "Module 9: Machine Learning — Unsupervised Learning",
        items: [
          "Clustering (K-means, Hierarchical, DBSCAN)",
          "Dimensionality reduction (PCA, t-SNE)",
          "Association rule mining (Apriori, FP-growth)",
          "Case study: customer segmentation",
        ],
      },
      {
        title: "Module 10: Feature Engineering & Model Tuning",
        items: [
          "Feature scaling & selection",
          "Handling imbalance (SMOTE, undersampling)",
          "Grid search & Random search CV",
          "Hyperparameter tuning (sklearn, Optuna)",
        ],
      },
      {
        title: "Module 11: Deep Learning Basics",
        items: [
          "Neural Networks introduction",
          "TensorFlow & Keras basics",
          "ANN implementation",
          "Intro to CNN/RNN (optional overview)",
        ],
      },
      {
        title: "Module 12: Model Deployment & MLOps",
        items: [
          "Saving models (pickle, joblib, ONNX)",
          "FastAPI/Flask model deployment",
          "Dockerizing ML models",
          "Deploying to cloud (AWS/GCP/Render)",
        ],
      },
      {
        title: "Module 13: Capstone Project",
        items: [
          "End-to-end data science project (real dataset)",
          "EDA + ML model + deployment",
          "Team collaboration with Git",
          "Presentation & evaluation",
        ],
      },
    ],
  },
 businessanalytics: {
    title: "Business Analytics Online Training — Syllabus",
    accent: "#005BAC", // Coral orange
    meta: {
      duration: "10–12 weeks",
      audience: "Students, Business Professionals, Analysts, Managers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Excel for Business Analytics",
      "Data Visualization",
      "SQL for Analytics",
      "Statistics & Probability",
      "Business Problem Solving",
      "Power BI / Tableau",
      "Case Studies",
      "Predictive Analytics (Intro)",
      "Dashboards & Reporting",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Business Analytics",
        items: [
          "What is Business Analytics?",
          "Types: Descriptive, Diagnostic, Predictive, Prescriptive",
          "Analytics in industries (Retail, Finance, HR, Marketing)",
          "Career roles & tools overview",
        ],
      },
      {
        title: "Module 2: Excel for Business Analytics",
        items: [
          "Excel formulas & functions",
          "Pivot tables & charts",
          "Conditional formatting",
          "What-if analysis & Solver",
        ],
      },
      {
        title: "Module 3: Statistics for Analytics",
        items: [
          "Descriptive stats: mean, median, mode, variance",
          "Correlation & regression",
          "Probability concepts",
          "Hypothesis testing basics",
        ],
      },
      {
        title: "Module 4: SQL for Business Users",
        items: [
          "SQL basics: SELECT, WHERE, ORDER BY",
          "Joins & subqueries",
          "Aggregates & GROUP BY",
          "Practical queries for analytics",
        ],
      },
      {
        title: "Module 5: Data Visualization & Dashboards",
        items: [
          "Principles of effective visualization",
          "Excel charts vs BI dashboards",
          "KPI dashboards & scorecards",
          "Storytelling with data",
        ],
      },
      {
        title: "Module 6: Power BI / Tableau (Visualization Tool)",
        items: [
          "Connecting to data sources",
          "Building interactive dashboards",
          "Filters, slicers, drill-down",
          "Publishing & sharing reports",
        ],
      },
      {
        title: "Module 7: Predictive Analytics (Intro)",
        items: [
          "Forecasting basics",
          "Simple regression in Excel/BI tools",
          "Intro to predictive models",
          "Business forecasting case study",
        ],
      },
      {
        title: "Module 8: Business Case Studies",
        items: [
          "Customer churn analysis",
          "Sales forecasting",
          "Marketing campaign performance",
          "HR analytics (attrition, hiring trends)",
        ],
      },
      {
        title: "Module 9: Capstone Project",
        items: [
          "End-to-end business analytics case",
          "Data cleaning, visualization, storytelling",
          "Decision making based on insights",
          "Final presentation & review",
        ],
      },
    ],
  },
   datascienceai: {
    title: "Data Science & AI Online Training — Syllabus",
    accent: "#005BAC", // AI-inspired blue
    meta: {
      duration: "12-16 weeks",
      audience: "Students, Engineers, Analysts, Professionals",
      level: "Intermediate → Advanced",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Python for AI",
      "Statistics & Data Science",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "NLP (Text Analytics)",
      "Computer Vision",
      "Reinforcement Learning (Intro)",
      "Generative AI (LLMs, Transformers)",
      "AI Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Data Science Foundations",
        items: [
          "Recap of Python, Pandas, Numpy",
          "EDA & data visualization (Matplotlib, Seaborn)",
          "SQL for data science",
          "Business problem framing",
        ],
      },
      {
        title: "Module 2: Machine Learning Essentials",
        items: [
          "Supervised ML (regression, classification)",
          "Unsupervised ML (clustering, PCA)",
          "Model evaluation & cross-validation",
          "Feature engineering & selection",
        ],
      },
      {
        title: "Module 3: Neural Networks & Deep Learning",
        items: [
          "Introduction to perceptrons & ANN",
          "Activation functions & backpropagation",
          "Optimizers (SGD, Adam)",
          "Keras/TensorFlow workflows",
        ],
      },
      {
        title: "Module 4: Advanced Deep Learning",
        items: [
          "CNNs for image data",
          "RNNs, LSTMs, GRUs for sequential data",
          "Transfer learning & pre-trained models",
          "Regularization & dropout",
        ],
      },
      {
        title: "Module 5: Natural Language Processing (NLP)",
        items: [
          "Text preprocessing (tokenization, stemming, lemmatization)",
          "Word embeddings (Word2Vec, GloVe, FastText)",
          "Text classification & sentiment analysis",
          "Transformers & BERT basics",
        ],
      },
      {
        title: "Module 6: Computer Vision",
        items: [
          "Image preprocessing & augmentation",
          "CNN architectures (LeNet, AlexNet, ResNet)",
          "Object detection (YOLO, RCNN)",
          "Face recognition case study",
        ],
      },
      {
        title: "Module 7: Reinforcement Learning (Intro)",
        items: [
          "RL concepts (agent, environment, reward)",
          "Q-learning & policy gradients",
          "Applications in gaming & robotics",
          "Case study: simple RL problem",
        ],
      },
      {
        title: "Module 8: Generative AI & LLMs",
        items: [
          "What is Generative AI?",
          "Large Language Models (GPT, LLaMA, etc.)",
          "Text-to-image (DALL·E, Stable Diffusion)",
          "Practical AI tools (Hugging Face, LangChain)",
        ],
      },
      {
        title: "Module 9: AI Deployment & MLOps",
        items: [
          "Serving ML/DL models with FastAPI",
          "Docker & containerization",
          "CI/CD for ML (MLOps basics)",
          "Deploying AI models to cloud (AWS/GCP/Azure)",
        ],
      },
      {
        title: "Module 10: AI Capstone Project",
        items: [
          "Choose domain (NLP, CV, or hybrid)",
          "Full pipeline: data → model → deployment",
          "Work in teams with Git & collaboration tools",
          "Presentation & review",
        ],
      },
    ],
  },
  bigdatadeveloper: {
    title: "Big Data Developer Online Training — Syllabus",
    accent: "#005BAC", // Big Data orange-red
    meta: {
      duration: "12-16 weeks",
      audience: "Students, Developers, Data Engineers, Professionals",
      level: "Intermediate → Advanced",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Hadoop Ecosystem",
      "HDFS & MapReduce",
      "Hive & Pig",
      "Apache Spark",
      "NoSQL (MongoDB, Cassandra, HBase)",
      "Kafka & Data Streaming",
      "ETL Pipelines",
      "Data Lake Concepts",
      "Cloud Big Data Tools",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Big Data",
        items: [
          "What is Big Data? 4 Vs (Volume, Velocity, Variety, Veracity)",
          "Big Data use-cases across industries",
          "Batch vs real-time processing",
          "Big Data ecosystem overview",
        ],
      },
      {
        title: "Module 2: Hadoop Ecosystem",
        items: [
          "HDFS architecture & working",
          "MapReduce concepts & examples",
          "YARN resource manager",
          "Hadoop cluster setup (pseudo-distributed vs multi-node)",
        ],
      },
      {
        title: "Module 3: Data Processing with Hive & Pig",
        items: [
          "Hive fundamentals & HiveQL",
          "Partitioning & bucketing",
          "Pig Latin basics",
          "ETL with Hive/Pig",
        ],
      },
      {
        title: "Module 4: Apache Spark",
        items: [
          "Spark architecture (RDD, DAG, cluster manager)",
          "Spark Core (transformations & actions)",
          "Spark SQL & DataFrames",
          "Spark Streaming basics",
          "MLlib introduction",
        ],
      },
      {
        title: "Module 5: NoSQL Databases",
        items: [
          "Intro to NoSQL concepts",
          "MongoDB basics (CRUD, aggregation pipeline)",
          "Cassandra data model & queries (CQL)",
          "HBase integration with Hadoop",
        ],
      },
      {
        title: "Module 6: Real-Time Data Processing",
        items: [
          "Apache Kafka architecture",
          "Producers, consumers, brokers, topics",
          "Kafka + Spark Streaming integration",
          "Case study: real-time log processing",
        ],
      },
      {
        title: "Module 7: Data Ingestion & ETL Pipelines",
        items: [
          "Sqoop for RDBMS → HDFS import/export",
          "Flume for streaming ingestion",
          "Airflow basics for workflow orchestration",
          "Building scalable ETL pipelines",
        ],
      },
      {
        title: "Module 8: Data Lakes & Cloud Big Data",
        items: [
          "Data Lake concepts vs Data Warehouse",
          "AWS EMR, Glue, Redshift overview",
          "Azure HDInsight & Synapse",
          "Google BigQuery basics",
        ],
      },
      {
        title: "Module 9: Big Data Security & Performance",
        items: [
          "Securing Hadoop ecosystem (Kerberos basics)",
          "Data encryption & masking",
          "Performance tuning Spark jobs",
          "Monitoring clusters with Ambari/Cloudera Manager",
        ],
      },
      {
        title: "Module 10: Capstone Project",
        items: [
          "End-to-end Big Data pipeline",
          "Data ingestion (Kafka/Flume/Sqoop)",
          "Batch & real-time processing with Spark",
          "Storing & analyzing in Hive/NoSQL",
          "Dashboard/report presentation",
        ],
      },
    ],
  },
  softwaretesting: {
    title: "Software Testing Online Training — Syllabus",
    accent: "#005BAC", // Green for QA
    meta: {
      duration: "8–10 weeks",
      audience: "Students, QA Engineers, Developers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "SDLC & STLC",
      "Manual Testing",
      "Test Case Design",
      "Defect Management",
      "Automation Basics",
      "Agile Testing",
      "API Testing",
      "Performance Testing",
      "Test Tools Overview",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Fundamentals of Testing",
        items: [
          "What is Software Testing?",
          "SDLC vs STLC",
          "Types of testing (manual, automation, functional, non-functional)",
          "Agile & DevOps in testing",
        ],
      },
      {
        title: "Module 2: Manual Testing",
        items: [
          "Test plans & strategies",
          "Writing effective test cases",
          "Bug lifecycle & defect reporting",
          "Exploratory vs scripted testing",
        ],
      },
      {
        title: "Module 3: Test Design Techniques",
        items: [
          "Equivalence partitioning",
          "Boundary value analysis",
          "Decision tables & state transition",
          "Use case testing",
        ],
      },
      {
        title: "Module 4: Automation Testing Basics",
        items: [
          "Why automation?",
          "Test automation pyramid",
          "Overview of Selenium, JUnit/TestNG, Pytest",
          "Framework introduction (keyword, hybrid, data-driven)",
        ],
      },
      {
        title: "Module 5: Other Types of Testing",
        items: [
          "Performance testing overview (JMeter basics)",
          "Security testing introduction",
          "Mobile testing basics",
          "API testing with Postman",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Manual test case writing",
          "Automating simple workflows",
          "Defect reporting & dashboard",
        ],
      },
    ],
  },

  etltesting: {
    title: "ETL Testing Online Training — Syllabus",
    accent: "#005BAC", // Purple for ETL
    meta: {
      duration: "6–8 weeks",
      audience: "QA Engineers, Data Testers, BI Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Data Warehouse Basics",
      "ETL Concepts",
      "Data Mapping & Validation",
      "SQL for ETL Testing",
      "Data Quality Testing",
      "ETL Automation Tools",
      "Reporting & Dashboards",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Data Warehouse & ETL Overview",
        items: [
          "What is Data Warehousing?",
          "ETL process (Extract, Transform, Load)",
          "OLTP vs OLAP",
          "ETL tools overview (Informatica, Talend, SSIS)",
        ],
      },
      {
        title: "Module 2: ETL Testing Basics",
        items: [
          "ETL testing lifecycle",
          "Test case preparation",
          "Data mapping & transformations",
          "Common ETL challenges",
        ],
      },
      {
        title: "Module 3: SQL for ETL Testing",
        items: [
          "Basic SQL queries for validation",
          "Joins, aggregations, subqueries",
          "Comparing source vs target",
          "Set operators & data reconciliation",
        ],
      },
      {
        title: "Module 4: ETL Testing Techniques",
        items: [
          "Data completeness & correctness testing",
          "Data quality & integrity testing",
          "Incremental load & historical load testing",
          "Performance & scalability checks",
        ],
      },
      {
        title: "Module 5: Automation & Tools",
        items: [
          "Test automation in ETL",
          "Using Python/SQL scripts for validation",
          "Data validation with BI tools",
          "Reporting ETL test results",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "ETL workflow validation (end-to-end)",
          "Source → Staging → Warehouse testing",
          "Data reconciliation report",
        ],
      },
    ],
  },

  seleniumtesting: {
    title: "Selenium Testing Online Training — Syllabus",
    accent: "#005BAC", // Yellow-orange for Selenium
    meta: {
      duration: "8–10 weeks",
      audience: "Students, QA Engineers, Automation Testers",
      level: "Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Automation Basics",
      "Java/Python for Selenium",
      "Locators & WebDriver",
      "TestNG/JUnit Framework",
      "Page Object Model",
      "Handling Web Elements",
      "Cross-Browser Testing",
      "CI/CD with Selenium",
      "Reporting",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Selenium Basics",
        items: [
          "Intro to Selenium & automation testing",
          "Selenium WebDriver architecture",
          "Locators (id, name, xpath, cssSelector)",
          "Launching browsers with Selenium",
        ],
      },
      {
        title: "Module 2: Core Java/Python for Selenium",
        items: [
          "OOP basics",
          "Exception handling",
          "Collections & loops",
          "File handling & data-driven testing",
        ],
      },
      {
        title: "Module 3: Selenium WebDriver in Action",
        items: [
          "Handling input fields, buttons, checkboxes",
          "Dropdowns, alerts & popups",
          "Frames, windows & navigation",
          "Waits (implicit, explicit, fluent)",
        ],
      },
      {
        title: "Module 4: Test Frameworks",
        items: [
          "TestNG / JUnit basics",
          "Annotations & assertions",
          "Data providers",
          "Parallel test execution",
        ],
      },
      {
        title: "Module 5: Framework Design",
        items: [
          "Page Object Model (POM)",
          "Hybrid framework (keyword + data-driven)",
          "Utility classes & reusable components",
          "Logging & reporting with Extent Reports",
        ],
      },
      {
        title: "Module 6: Advanced Selenium",
        items: [
          "Cross-browser & grid testing",
          "Headless browser testing",
          "Integration with CI/CD (Jenkins, GitHub Actions)",
          "Maven/Gradle project setup",
        ],
      },
      {
        title: "Module 7: Capstone Project",
        items: [
          "Automating an end-to-end workflow",
          "Implementing Page Object Model",
          "Cross-browser execution",
          "Reporting test results",
        ],
      },
    ],
  },
   aws: {
    title: "AWS Online Training — Syllabus",
    accent: "#005BAC", // AWS orange
    meta: {
      duration: "8–10 weeks",
      audience: "Students, Developers, Cloud Enthusiasts, IT Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "AWS Fundamentals",
      "IAM & Security",
      "EC2 & S3",
      "VPC & Networking",
      "RDS & DynamoDB",
      "Lambda & Serverless",
      "CloudFormation",
      "Elastic Load Balancer & Auto Scaling",
      "CloudWatch & Monitoring",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Cloud & AWS",
        items: [
          "Cloud concepts & models",
          "AWS global infrastructure",
          "AWS Management Console & CLI",
          "Free tier overview",
        ],
      },
      {
        title: "Module 2: IAM & Security",
        items: [
          "Users, groups, roles, policies",
          "MFA & password policies",
          "Identity federation",
          "AWS Organizations & billing",
        ],
      },
      {
        title: "Module 3: Compute Services",
        items: [
          "EC2 basics & instance types",
          "EBS volumes & snapshots",
          "Elastic Load Balancer (ELB)",
          "Auto Scaling groups",
        ],
      },
      {
        title: "Module 4: Storage & Databases",
        items: [
          "S3 buckets, lifecycle policies, Glacier",
          "RDS (MySQL/PostgreSQL) setup",
          "DynamoDB basics",
          "ElastiCache overview",
        ],
      },
      {
        title: "Module 5: Networking & VPC",
        items: [
          "VPC, subnets, route tables",
          "NACLs & Security Groups",
          "Internet & NAT gateways",
          "PrivateLink, Peering, Transit Gateway",
        ],
      },
      {
        title: "Module 6: Serverless & Automation",
        items: [
          "AWS Lambda functions",
          "API Gateway integration",
          "CloudFormation templates",
          "Elastic Beanstalk basics",
        ],
      },
      {
        title: "Module 7: Monitoring & Logging",
        items: [
          "CloudWatch metrics, alarms, dashboards",
          "CloudTrail logging",
          "Cost Explorer & budgets",
          "Trusted Advisor",
        ],
      },
      {
        title: "Module 8: DevOps & Deployment Tools",
        items: [
          "CodeCommit, CodeBuild, CodeDeploy",
          "CI/CD pipelines with CodePipeline",
          "ECS & EKS overview",
          "Cloud9 IDE",
        ],
      },
      {
        title: "Module 9: Capstone Project",
        items: [
          "Host a scalable web application",
          "Configure auto-scaling & load balancing",
          "Enable monitoring & alerts",
          "Deploy end-to-end cloud project",
        ],
      },
    ],
  },

  devops: {
    title: "DevOps Online Training — Syllabus",
    accent: "#005BAC", // DevOps blue
    meta: {
      duration: "10–12 weeks",
      audience: "Students, Developers, System Admins, IT Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "DevOps Fundamentals",
      "Linux & Shell Scripting",
      "Git & GitHub",
      "CI/CD Pipelines",
      "Jenkins",
      "Docker & Containers",
      "Kubernetes",
      "Infrastructure as Code (Terraform)",
      "Monitoring (Prometheus/Grafana)",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to DevOps",
        items: [
          "What is DevOps? Principles & lifecycle",
          "Agile vs DevOps",
          "CI/CD concepts",
          "Tools overview",
        ],
      },
      {
        title: "Module 2: Linux & Scripting",
        items: [
          "Linux fundamentals",
          "Shell scripting basics",
          "Process & service management",
          "Package managers (apt, yum)",
        ],
      },
      {
        title: "Module 3: Version Control with Git",
        items: [
          "Git basics (init, clone, commit, push, pull)",
          "Branching strategies (GitFlow)",
          "Merging & resolving conflicts",
          "GitHub/GitLab integration",
        ],
      },
      {
        title: "Module 4: CI/CD with Jenkins",
        items: [
          "Jenkins setup & pipelines",
          "Build triggers",
          "Declarative vs scripted pipelines",
          "Integrating with Git & Maven/Gradle",
        ],
      },
      {
        title: "Module 5: Containers with Docker",
        items: [
          "Docker architecture",
          "Building & running containers",
          "Docker Hub & registries",
          "Docker Compose basics",
        ],
      },
      {
        title: "Module 6: Orchestration with Kubernetes",
        items: [
          "Kubernetes architecture",
          "Pods, Deployments, Services",
          "ConfigMaps & Secrets",
          "Scaling & rolling updates",
        ],
      },
      {
        title: "Module 7: Infrastructure as Code",
        items: [
          "Terraform basics",
          "Provisioning AWS resources with Terraform",
          "State management",
          "Infrastructure automation best practices",
        ],
      },
      {
        title: "Module 8: Monitoring & Logging",
        items: [
          "Prometheus metrics collection",
          "Grafana dashboards",
          "ELK stack overview",
          "Alerts & notifications",
        ],
      },
      {
        title: "Module 9: Capstone Project",
        items: [
          "End-to-end CI/CD pipeline",
          "Containerized application with Docker & Kubernetes",
          "Infrastructure setup using Terraform",
          "Monitoring & alerting setup",
        ],
      },
    ],
  },
  hardwarenetworking: {
    title: "Hardware & Networking Online Training — Syllabus",
    accent: "#005BAC",
    meta: {
      duration: "8–10 weeks",
      audience: "Students, IT Support Engineers, Network Technicians",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Computer Hardware Basics",
      "Operating Systems",
      "Networking Fundamentals",
      "TCP/IP & Subnetting",
      "Switches & Routers",
      "Wireless Networking",
      "LAN/WAN Setup",
      "Network Security Basics",
      "Troubleshooting",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Computer Hardware Fundamentals",
        items: [
          "Motherboards, CPUs, RAM, storage",
          "Power supply & peripherals",
          "BIOS/UEFI basics",
          "System assembly & configuration",
        ],
      },
      {
        title: "Module 2: Operating Systems",
        items: [
          "Windows & Linux fundamentals",
          "Disk partitioning & file systems",
          "Drivers & device management",
          "Basic OS troubleshooting",
        ],
      },
      {
        title: "Module 3: Networking Fundamentals",
        items: [
          "OSI & TCP/IP models",
          "IP addressing & subnetting",
          "Switches, routers, hubs",
          "Cabling & connectors (Ethernet, fiber)",
        ],
      },
      {
        title: "Module 4: LAN/WAN & Wireless",
        items: [
          "LAN setup & configuration",
          "WAN technologies (leased line, DSL, MPLS)",
          "Wi-Fi standards & configuration",
          "Access points & wireless security",
        ],
      },
      {
        title: "Module 5: Network Security Basics",
        items: [
          "Firewalls & antivirus basics",
          "VPNs & secure tunneling",
          "IDS/IPS overview",
          "User authentication methods",
        ],
      },
      {
        title: "Module 6: Troubleshooting & Monitoring",
        items: [
          "Ping, tracert, ipconfig/netstat commands",
          "Wireshark basics",
          "Common hardware/network issues",
          "Preventive maintenance",
        ],
      },
      {
        title: "Module 7: Capstone Project",
        items: [
          "Setup a small office LAN",
          "Configure router/switch",
          "Secure wireless connection",
          "Document troubleshooting steps",
        ],
      },
    ],
  },

  cybersecurity: {
    title: "Cyber Security Online Training — Syllabus",
    accent: "#005BAC",
    meta: {
      duration: "10–12 weeks",
      audience: "Students, IT Professionals, Security Analysts",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Security Fundamentals",
      "Threats & Vulnerabilities",
      "Cryptography",
      "Network Security",
      "Web & Application Security",
      "Ethical Hacking Basics",
      "Cloud Security",
      "Security Tools",
      "Compliance & Policies",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Cyber Security",
        items: [
          "What is Cyber Security?",
          "Types of attacks (malware, phishing, DoS/DDoS)",
          "CIA triad (Confidentiality, Integrity, Availability)",
          "Security lifecycle",
        ],
      },
      {
        title: "Module 2: Threats & Vulnerabilities",
        items: [
          "Common vulnerabilities (OWASP Top 10)",
          "Zero-day attacks",
          "Insider threats",
          "Social engineering",
        ],
      },
      {
        title: "Module 3: Cryptography & Encryption",
        items: [
          "Symmetric vs asymmetric encryption",
          "Hashing (MD5, SHA)",
          "SSL/TLS basics",
          "PKI & digital certificates",
        ],
      },
      {
        title: "Module 4: Network Security",
        items: [
          "Firewalls & VPNs",
          "IDS/IPS systems",
          "Wi-Fi & wireless security",
          "Securing routers/switches",
        ],
      },
      {
        title: "Module 5: Web & Application Security",
        items: [
          "SQL injection, XSS, CSRF attacks",
          "Secure coding practices",
          "Penetration testing basics",
          "Vulnerability scanning tools",
        ],
      },
      {
        title: "Module 6: Ethical Hacking & Tools",
        items: [
          "Phases of ethical hacking",
          "Reconnaissance & footprinting",
          "Metasploit & Kali Linux basics",
          "Wireshark & Nmap usage",
        ],
      },
      {
        title: "Module 7: Cloud Security",
        items: [
          "Cloud security challenges",
          "IAM & access control",
          "Shared responsibility model",
          "Securing AWS/Azure/GCP services",
        ],
      },
      {
        title: "Module 8: Compliance & Governance",
        items: [
          "GDPR, HIPAA, PCI-DSS",
          "ISO 27001 overview",
          "Security audits",
          "Incident response & recovery",
        ],
      },
      {
        title: "Module 9: Capstone Project",
        items: [
          "Perform vulnerability assessment on sample app",
          "Secure a small office/home network",
          "Simulate penetration testing",
          "Prepare security audit report",
        ],
      },
    ],
  },
   sap: {
    title: "SAP Online Training — Syllabus",
    accent: "#005BAC", // SAP blue-green
    meta: {
      duration: "12–14 weeks",
      audience: "Students, ERP Consultants, Business Analysts",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "SAP Overview",
      "SAP Navigation",
      "FI & CO Basics",
      "MM & SD Modules",
      "HCM Module",
      "ABAP Introduction",
      "SAP Basis",
      "SAP HANA",
      "Real-time Scenarios",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: SAP Introduction",
        items: [
          "What is ERP & SAP?",
          "SAP architecture & landscape",
          "Navigation & GUI",
          "Client, company, company code basics",
        ],
      },
      {
        title: "Module 2: SAP Functional Modules",
        items: [
          "FI (Financial Accounting) overview",
          "CO (Controlling) overview",
          "MM (Materials Management)",
          "SD (Sales & Distribution)",
          "HCM (Human Capital Management)",
        ],
      },
      {
        title: "Module 3: SAP Technical Basics",
        items: [
          "ABAP introduction",
          "Reports, tables, data dictionary",
          "SAP Basis overview",
          "Authorizations & roles",
        ],
      },
      {
        title: "Module 4: SAP HANA",
        items: [
          "In-memory computing concepts",
          "HANA architecture",
          "HANA SQL & modeling",
          "Analytics in HANA",
        ],
      },
      {
        title: "Module 5: Capstone Project",
        items: [
          "Real-world business case",
          "Configuring modules",
          "Generating reports",
          "Documentation & presentation",
        ],
      },
    ],
  },

  salesforce: {
    title: "Salesforce Online Training — Syllabus",
    accent: "#005BAC", // Salesforce teal
    meta: {
      duration: "10–12 weeks",
      audience: "Students, Admins, Developers, CRM Consultants",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Salesforce CRM Basics",
      "Admin Fundamentals",
      "Data Modeling",
      "Security & Access",
      "Reports & Dashboards",
      "Apex Programming",
      "Lightning Components",
      "Integration Basics",
      "AppExchange",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to Salesforce",
        items: [
          "What is CRM?",
          "Salesforce overview & editions",
          "Cloud offerings (Sales, Service, Marketing)",
          "Navigation & setup",
        ],
      },
      {
        title: "Module 2: Admin Essentials",
        items: [
          "User management",
          "Objects & fields",
          "Validation rules",
          "Page layouts & record types",
        ],
      },
      {
        title: "Module 3: Security & Access",
        items: [
          "Profiles & roles",
          "Permission sets",
          "Sharing rules",
          "Field-level security",
        ],
      },
      {
        title: "Module 4: Automation & Analytics",
        items: [
          "Workflows & process builder",
          "Reports & dashboards",
          "Approval processes",
          "Einstein Analytics basics",
        ],
      },
      {
        title: "Module 5: Development on Salesforce",
        items: [
          "Apex basics",
          "SOQL & SOSL queries",
          "Lightning Web Components",
          "Triggers & controllers",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Build a Salesforce application",
          "Configure automation & dashboards",
          "Deploy & share app",
        ],
      },
    ],
  },

  servicenow: {
    title: "ServiceNow Online Training — Syllabus",
    accent: "#005BAC", // ServiceNow purple
    meta: {
      duration: "8–10 weeks",
      audience: "Students, ITSM Professionals, Admins, Developers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "ServiceNow Introduction",
      "Navigation & UI",
      "Forms & Tables",
      "Workflows",
      "User Administration",
      "ITSM Processes",
      "Service Catalog",
      "Scripting Basics",
      "Integration",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to ServiceNow",
        items: [
          "Overview of ITSM & ITIL",
          "ServiceNow platform basics",
          "Instance & navigation",
          "User roles & modules",
        ],
      },
      {
        title: "Module 2: Core Configuration",
        items: [
          "Tables, forms, fields",
          "UI policies & actions",
          "Business rules",
          "Client scripts",
        ],
      },
      {
        title: "Module 3: ITSM Applications",
        items: [
          "Incident, problem, change management",
          "Service catalog basics",
          "Knowledge base setup",
          "SLAs & reports",
        ],
      },
      {
        title: "Module 4: Development & Scripting",
        items: [
          "Introduction to Glide API",
          "Server-side scripting",
          "Client-side scripting",
          "Integration with external systems",
        ],
      },
      {
        title: "Module 5: Capstone Project",
        items: [
          "Configure a ServiceNow ITSM workflow",
          "Automate approvals",
          "Build dashboards",
        ],
      },
    ],
  },

  rpa: {
    title: "RPA (Robotic Process Automation) Online Training — Syllabus",
    accent: "#005BAC", // Orange for Automation
    meta: {
      duration: "8–10 weeks",
      audience: "Students, Business Analysts, QA Engineers, Automation Developers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "RPA Fundamentals",
      "Automation Anywhere / UiPath Basics",
      "Bot Creation",
      "Workflow Automation",
      "Data Handling",
      "Error Handling",
      "Integrations",
      "Orchestrator/Control Room",
      "Real-time Projects",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Introduction to RPA",
        items: [
          "What is RPA?",
          "RPA lifecycle",
          "Popular tools: UiPath, Automation Anywhere, Blue Prism",
          "Use-cases & industries",
        ],
      },
      {
        title: "Module 2: UiPath/Automation Anywhere Basics",
        items: [
          "Tool installation & setup",
          "Recording types",
          "UI automation concepts",
          "Variables & data types",
        ],
      },
      {
        title: "Module 3: Workflow Automation",
        items: [
          "Flowcharts & sequences",
          "Control flows (if, switch, loops)",
          "Selectors & dynamic automation",
          "Reusability & modularization",
        ],
      },
      {
        title: "Module 4: Data Handling & Error Management",
        items: [
          "Excel & file automation",
          "Database integration",
          "Email automation",
          "Error handling & debugging",
        ],
      },
      {
        title: "Module 5: Orchestration & Deployment",
        items: [
          "Orchestrator/Control Room overview",
          "Bot scheduling & monitoring",
          "Role-based access",
          "Audit & compliance",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Build an end-to-end automation bot",
          "Integrate with Excel/Email",
          "Schedule & monitor execution",
        ],
      },
    ],
  },
    productionsupport: {
    title: "Production Support Online Training — Syllabus",
    accent: "#34495E", // Steel gray
    meta: {
      duration: "6–8 weeks",
      audience: "Students, IT Support Engineers, System Admins",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "ITIL Basics",
      "Incident Management",
      "Change & Problem Management",
      "Monitoring Tools",
      "Ticketing Systems (ServiceNow/Jira)",
      "Database Support",
      "Application Logs & Debugging",
      "Automation Basics",
      "On-call Support Simulation",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: ITIL & Support Fundamentals",
        items: [
          "Overview of ITIL processes",
          "Types of support (L1, L2, L3)",
          "Incident vs problem vs change management",
        ],
      },
      {
        title: "Module 2: Incident & Change Management",
        items: [
          "Incident lifecycle & SLAs",
          "Root cause analysis",
          "Change management workflows",
          "Escalation matrix",
        ],
      },
      {
        title: "Module 3: Tools & Monitoring",
        items: [
          "Monitoring tools (Nagios, Splunk, Dynatrace)",
          "Ticketing systems (ServiceNow, Jira)",
          "Application logs & debugging basics",
          "Database monitoring (SQL queries, deadlocks)",
        ],
      },
      {
        title: "Module 4: Automation & On-call",
        items: [
          "Scripting basics for automation",
          "Runbooks & playbooks",
          "On-call readiness & shift handover",
          "Incident simulation exercise",
        ],
      },
      {
        title: "Module 5: Capstone Project",
        items: [
          "End-to-end incident handling",
          "Create monitoring alerts",
          "Resolve issues using logs",
          "Document resolution steps",
        ],
      },
    ],
  },

  digitalmarketing: {
    title: "Digital Marketing Online Training — Syllabus",
    accent: "#005BAC", // Red-orange
    meta: {
      duration: "10–12 weeks",
      audience: "Students, Entrepreneurs, Marketing Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Digital Marketing Overview",
      "SEO (On-page & Off-page)",
      "Google Ads & SEM",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics (Google Analytics)",
      "Affiliate Marketing",
      "Marketing Automation",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Fundamentals of Digital Marketing",
        items: [
          "What is Digital Marketing?",
          "Traditional vs digital marketing",
          "Inbound vs outbound marketing",
        ],
      },
      {
        title: "Module 2: SEO (Search Engine Optimization)",
        items: [
          "On-page SEO (keywords, meta tags, content)",
          "Off-page SEO (backlinks, domain authority)",
          "Technical SEO basics",
          "SEO tools (Ahrefs, SEMrush, Google Search Console)",
        ],
      },
      {
        title: "Module 3: SEM & Paid Ads",
        items: [
          "Google Ads campaign setup",
          "Keyword planning",
          "PPC bidding strategies",
          "Remarketing campaigns",
        ],
      },
      {
        title: "Module 4: Social Media Marketing",
        items: [
          "Facebook & Instagram Ads",
          "LinkedIn marketing",
          "Twitter (X) promotions",
          "Social media content strategy",
        ],
      },
      {
        title: "Module 5: Content & Email Marketing",
        items: [
          "Blogging & content writing",
          "Email marketing campaigns",
          "A/B testing emails",
          "Mailchimp/HubSpot basics",
        ],
      },
      {
        title: "Module 6: Analytics & Automation",
        items: [
          "Google Analytics reports",
          "Conversion tracking",
          "Marketing automation tools",
          "Affiliate marketing introduction",
        ],
      },
      {
        title: "Module 7: Capstone Project",
        items: [
          "SEO + Ads + Social media campaign",
          "Build a digital marketing strategy",
          "Prepare performance report",
        ],
      },
    ],
  },

  softskills: {
    title: "Soft Skill Training — Syllabus",
    accent: "#005BAC", // Green
    meta: {
      duration: "6–8 weeks",
      audience: "Students, Professionals, Job Seekers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Communication Skills",
      "Presentation Skills",
      "Interpersonal Skills",
      "Teamwork & Collaboration",
      "Leadership Basics",
      "Emotional Intelligence",
      "Problem Solving",
      "Time Management",
      "Interview Skills",
      "Personality Development",
    ],
    sections: [
      {
        title: "Module 1: Communication Skills",
        items: [
          "Verbal & non-verbal communication",
          "Active listening",
          "Email & business communication",
        ],
      },
      {
        title: "Module 2: Presentation & Public Speaking",
        items: [
          "Building confidence",
          "Presentation design",
          "Effective storytelling",
          "Overcoming stage fear",
        ],
      },
      {
        title: "Module 3: Interpersonal & Team Skills",
        items: [
          "Working in teams",
          "Collaboration tools",
          "Conflict resolution",
          "Empathy & adaptability",
        ],
      },
      {
        title: "Module 4: Leadership & Emotional Intelligence",
        items: [
          "Leadership styles",
          "Decision-making",
          "Motivation & influence",
          "Managing stress",
        ],
      },
      {
        title: "Module 5: Career & Interview Preparation",
        items: [
          "Resume building",
          "Group discussion skills",
          "Mock interviews",
          "Body language & etiquette",
        ],
      },
      {
        title: "Module 6: Personality Development",
        items: [
          "Goal setting",
          "Time management",
          "Continuous learning habits",
          "Positive thinking",
        ],
      },
    ],
  },
   scrummaster: {
    title: "Scrum Master Online Training — Syllabus",
    accent: "#005BAC", // Dark navy
    meta: {
      duration: "6–8 weeks",
      audience: "Students, Project Managers, Team Leads, Agile Enthusiasts",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Agile & Scrum Overview",
      "Scrum Roles",
      "Scrum Artifacts",
      "Scrum Events",
      "Sprint Planning & Review",
      "Agile Estimation",
      "Scrum Metrics",
      "Scaling Scrum",
      "Scrum Master Tools",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Agile & Scrum Basics",
        items: [
          "Agile values & principles",
          "Scrum framework overview",
          "Waterfall vs Agile",
        ],
      },
      {
        title: "Module 2: Scrum Roles & Responsibilities",
        items: [
          "Scrum Master role",
          "Product Owner responsibilities",
          "Development team role",
        ],
      },
      {
        title: "Module 3: Scrum Events",
        items: [
          "Sprint planning",
          "Daily stand-up",
          "Sprint review & retrospective",
          "Backlog refinement",
        ],
      },
      {
        title: "Module 4: Scrum Artifacts",
        items: [
          "Product backlog",
          "Sprint backlog",
          "Increment & definition of done",
        ],
      },
      {
        title: "Module 5: Advanced Scrum Topics",
        items: [
          "Agile estimation (story points, velocity)",
          "Scrum metrics & reporting",
          "Scaling Scrum (SAFe, LeSS)",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Simulate Scrum events",
          "Manage a sprint",
          "Create Scrum board in Jira/Trello",
        ],
      },
    ],
  },

  productmanagement: {
    title: "Product Management Online Training — Syllabus",
    accent: "#005BAC", // Purple
    meta: {
      duration: "8–10 weeks",
      audience: "Students, Business Leaders, Startup Founders, Product Managers",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "Product Management Fundamentals",
      "Market Research",
      "Product Roadmap",
      "Agile & Scrum for PMs",
      "MVP & Prototyping",
      "Stakeholder Management",
      "Metrics & Analytics",
      "Go-to-Market Strategy",
      "Growth & Scaling",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Product Management Foundations",
        items: [
          "What is product management?",
          "Roles & responsibilities",
          "Skills of a PM",
        ],
      },
      {
        title: "Module 2: Market & Customer Research",
        items: [
          "Market analysis & competitor research",
          "Customer personas",
          "Problem-solution fit",
        ],
      },
      {
        title: "Module 3: Roadmaps & Strategy",
        items: [
          "Product vision & strategy",
          "Roadmap planning",
          "Prioritization frameworks (RICE, MoSCoW)",
        ],
      },
      {
        title: "Module 4: Agile Product Development",
        items: [
          "Working with Scrum teams",
          "MVP creation",
          "Prototyping & wireframes",
        ],
      },
      {
        title: "Module 5: Product Growth & Metrics",
        items: [
          "KPIs & product metrics",
          "Customer feedback loops",
          "Go-to-market strategy",
          "Growth hacking basics",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Build product roadmap",
          "Prototype MVP",
          "Pitch product to stakeholders",
        ],
      },
    ],
  },

  snowflake: {
  title: "Snowflake Online Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "6–8 weeks",
    audience: "Students, Data Analysts, Data Engineers, BI Developers, Cloud Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Cloud Data Warehousing",
    "Snowflake Architecture",
    "Virtual Warehouses",
    "Databases & Schemas",
    "Loading & Unloading Data",
    "Snowflake SQL",
    "Time Travel & Cloning",
    "Security & Access Control",
    "Performance Optimization",
    "Integration & BI Tools",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Data Warehousing & Snowflake",
      items: [
        "Overview of cloud data warehousing",
        "Snowflake features & benefits",
        "Snowflake editions & pricing",
        "Understanding multi-cluster shared data architecture",
      ],
    },
    {
      title: "Module 2: Snowflake Architecture & Ecosystem",
      items: [
        "Snowflake layers: Storage, Compute, Cloud Services",
        "Virtual Warehouses & Scaling",
        "Databases, Schemas, and Objects",
        "Snowflake on AWS, Azure, and GCP",
      ],
    },
    {
      title: "Module 3: Working with Snowflake",
      items: [
        "Creating users, roles, and warehouses",
        "Creating and managing databases & schemas",
        "Loading data into Snowflake (COPY INTO, Snowpipe)",
        "Unloading data from Snowflake",
      ],
    },
    {
      title: "Module 4: Snowflake SQL Essentials",
      items: [
        "DML & DDL operations",
        "Joins, aggregations & window functions",
        "Working with semi-structured data (JSON, Avro, Parquet)",
        "Stored procedures & user-defined functions",
      ],
    },
    {
      title: "Module 5: Advanced Features",
      items: [
        "Time Travel & Data Recovery",
        "Cloning databases & tables",
        "Zero-Copy Cloning",
        "Data Sharing & Marketplace",
      ],
    },
    {
      title: "Module 6: Security & Access Control",
      items: [
        "Role-Based Access Control (RBAC)",
        "Encryption & key management",
        "Network policies & multi-factor authentication",
        "Data masking & governance",
      ],
    },
    {
      title: "Module 7: Performance Optimization",
      items: [
        "Clustering & partitioning",
        "Query optimization techniques",
        "Caching in Snowflake",
        "Resource monitoring",
      ],
    },
    {
      title: "Module 8: Integration & BI Tools",
      items: [
        "Snowflake connectors (Python, Spark, JDBC/ODBC)",
        "Integration with ETL tools (Informatica, Talend, Matillion)",
        "Using Snowflake with Power BI & Tableau",
        "Data pipelines with Kafka & AWS/GCP/Azure services",
      ],
    },
    {
      title: "Module 9: Real-World Projects & Capstone",
      items: [
        "Designing a data warehouse in Snowflake",
        "Building a real-time analytics pipeline",
        "Data visualization with BI tools",
        "Optimizing costs & performance",
      ],
    },
    {
      title: "Module 10: Career Preparation",
      items: [
        "Resume & portfolio building",
        "Common Snowflake interview questions",
        "Mock interviews & assessments",
        "Job placement support",
      ],
    },
  ],
}
,
awsSolutionArchitect: {
  title: "AWS Solutions Architect Training — Syllabus",
  accent:  "#29B5E8",
  meta: {
    duration: "8–12 weeks",
    audience: "Aspiring Cloud Architects, Developers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom / Hybrid",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "AWS Cloud Fundamentals",
    "Compute, Storage & Networking Services",
    "Security & IAM",
    "Databases on AWS",
    "High Availability & Scalability",
    "Cost Optimization & Monitoring",
    "Serverless Architectures",
    "Infrastructure as Code",
    "Disaster Recovery & Backup Strategies",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to AWS Cloud",
      items: [
        "Overview of Cloud Computing & AWS",
        "AWS Global Infrastructure",
        "Regions, Availability Zones, and Edge Locations",
        "AWS Management Console & CLI Basics",
        "Identity and Access Management (IAM) fundamentals",
      ],
    },
    {
      title: "Module 2: Compute Services",
      items: [
        "EC2 instances, types, and lifecycle management",
        "Elastic Load Balancer (ELB) & Auto Scaling",
        "Serverless computing with AWS Lambda",
        "Container services: ECS & EKS basics",
      ],
    },
    {
      title: "Module 3: Storage & Content Delivery",
      items: [
        "S3 buckets, storage classes, and lifecycle policies",
        "EBS, EFS, and Glacier",
        "CloudFront for content delivery",
        "Storage security & encryption",
      ],
    },
    {
      title: "Module 4: Networking & Security",
      items: [
        "Virtual Private Cloud (VPC) setup and configuration",
        "Subnets, route tables, NAT Gateways, and Internet Gateways",
        "Security groups, NACLs, and network ACLs",
        "AWS Key Management Service (KMS) & CloudTrail",
      ],
    },
    {
      title: "Module 5: Databases on AWS",
      items: [
        "Amazon RDS & Aurora",
        "DynamoDB (NoSQL)",
        "Redshift for data warehousing",
        "Database backup, restore, and replication strategies",
      ],
    },
    {
      title: "Module 6: High Availability & Scalability",
      items: [
        "Elastic Load Balancing & Auto Scaling",
        "Multi-AZ deployments",
        "Designing fault-tolerant architectures",
        "Caching strategies with ElastiCache",
      ],
    },
    {
      title: "Module 7: Cost Optimization & Monitoring",
      items: [
        "AWS Cost Explorer & Trusted Advisor",
        "Monitoring with CloudWatch",
        "Billing and budgeting best practices",
        "Resource tagging and cost allocation",
      ],
    },
    {
      title: "Module 8: Serverless Architectures & Event-Driven Design",
      items: [
        "AWS Lambda functions & triggers",
        "API Gateway integration",
        "Event-driven architecture with SNS & SQS",
        "Step Functions for workflow automation",
      ],
    },
    {
      title: "Module 9: Infrastructure as Code (IaC)",
      items: [
        "AWS CloudFormation templates",
        "AWS CDK overview",
        "Automation of deployments",
        "Version control & CI/CD integration",
      ],
    },
    {
      title: "Module 10: Disaster Recovery & Backup Strategies",
      items: [
        "Backup strategies using S3, Glacier, and RDS snapshots",
        "Cross-region replication",
        "Recovery Time Objective (RTO) & Recovery Point Objective (RPO)",
        "Disaster recovery best practices",
      ],
    },
    {
      title: "Module 11: Capstone Projects",
      items: [
        "Design and deploy a highly available web application",
        "Implement a serverless event-driven data pipeline",
        "Cost-optimized cloud architecture project",
        "Presentation of end-to-end AWS solution design",
      ],
    },
  ],
}
,
iotTesting: {
  title: "IoT Testing Online Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "6–8 weeks",
    audience: "Students, QA Professionals & IoT Enthusiasts",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to IoT",
    "IoT Architecture & Protocols",
    "Functional Testing of IoT Devices",
    "Connectivity & Network Testing",
    "Performance Testing",
    "Security Testing",
    "Interoperability Testing",
    "Tools & Automation",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to IoT & IoT Ecosystem",
      items: [
        "Overview of IoT and its applications",
        "IoT architecture layers (Perception, Network, Application)",
        "Common IoT devices, sensors, and actuators",
        "IoT communication protocols: MQTT, CoAP, HTTP, Bluetooth, Zigbee, LoRa",
      ],
    },
    {
      title: "Module 2: Functional Testing of IoT Devices",
      items: [
        "Device connectivity and data acquisition",
        "Sensor accuracy and actuator response testing",
        "Firmware and software validation",
        "Mobile & web application testing for IoT",
      ],
    },
    {
      title: "Module 3: Connectivity & Network Testing",
      items: [
        "Testing Wi-Fi, Bluetooth, Zigbee, LoRa, 5G connections",
        "Latency, throughput, and packet loss analysis",
        "Connectivity failover and recovery scenarios",
      ],
    },
    {
      title: "Module 4: Performance Testing",
      items: [
        "Load testing IoT devices and applications",
        "Stress testing under extreme conditions",
        "Response time and throughput analysis",
      ],
    },
    {
      title: "Module 5: Security Testing",
      items: [
        "Authentication and authorization testing",
        "Data encryption and privacy",
        "Vulnerability assessment and penetration testing",
      ],
    },
    {
      title: "Module 6: Interoperability Testing",
      items: [
        "Cross-platform testing (Android/iOS/Web)",
        "Cloud integration and API testing",
        "Protocol compatibility testing",
      ],
    },
    {
      title: "Module 7: Tools & Automation in IoT Testing",
      items: [
        "Postman, MQTT Lens, Wireshark",
        "Selenium for IoT web interfaces",
        "JMeter for load testing",
        "IoTIFY and other IoT simulation tools",
      ],
    },
    {
      title: "Module 8: Real-World Projects & Capstone",
      items: [
        "Smart Home device testing",
        "Wearable device analytics testing",
        "Industrial IoT sensor network testing",
        "End-to-end IoT testing scenarios",
      ],
    },
  ],
}
,
coreJava: {
  title: "Core Java Training — Syllabus",
  accent: "#005BAC",
  meta: {
    duration: "8–10 weeks",
    audience: "Beginners & Working Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Java Basics",
    "OOP Concepts",
    "Collections Framework",
    "Exception Handling",
    "File I/O",
    "Multithreading",
    "JDBC",
    "Java 8 Features",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Java",
      items: [
        "Overview of Java & JDK/JRE/JVM",
        "Java Program Structure",
        "Data types, Variables & Operators",
        "Control Statements: if, switch, loops",
      ],
    },
    {
      title: "Module 2: Object-Oriented Programming in Java",
      items: [
        "Classes & Objects",
        "Constructors (Default & Parameterized)",
        "Methods, Method Overloading",
        "Inheritance, Polymorphism, Encapsulation, Abstraction",
        "Abstract & Final classes",
      ],
    },
    {
      title: "Module 3: Packages & Interfaces",
      items: [
        "Creating & Using Packages",
        "Java Built-in Packages",
        "Interfaces & Multiple Inheritance",
        "Access Specifiers: public, private, protected, default",
      ],
    },
    {
      title: "Module 4: Exception Handling & File I/O",
      items: [
        "Types of Exceptions",
        "try, catch, finally, throw, throws",
        "Custom Exceptions",
        "File Handling: FileReader, FileWriter",
        "Serialization & Deserialization",
      ],
    },
    {
      title: "Module 5: Java Collections Framework",
      items: [
        "Overview of Collections",
        "List, Set, Map Interfaces",
        "ArrayList, LinkedList, HashSet, TreeSet, HashMap, Hashtable",
        "Iterators & Traversal",
      ],
    },
    {
      title: "Module 6: Multithreading & Concurrency",
      items: [
        "Creating Threads (Thread class & Runnable interface)",
        "Thread Lifecycle",
        "Synchronization & Locks",
        "Inter-thread Communication",
      ],
    },
    {
      title: "Module 7: JDBC (Java Database Connectivity)",
      items: [
        "Introduction to JDBC & Drivers",
        "Connecting to Database",
        "CRUD Operations (Insert, Update, Delete, Select)",
        "PreparedStatement & ResultSet",
      ],
    },
    {
      title: "Module 8: Advanced Java Features",
      items: [
        "Generics & Collections in Java 8",
        "Lambda Expressions",
        "Streams API",
        "Date & Time API",
      ],
    },
    {
      title: "Module 9: Project / Capstone",
      items: [
        "End-to-end Java project",
        "Implementing OOP concepts",
        "Database Integration using JDBC",
        "Exception Handling & Multithreading",
      ],
    },
  ],
}
,
j2ee: {
  title: "J2EE Online Training — Syllabus",
  accent: "#005BAC",
  meta: {
    duration: "10–12 weeks",
    audience: "Students & Working Professionals",
    level: "Intermediate → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Servlets",
    "JSP",
    "EJB",
    "JDBC",
    "JPA/Hibernate",
    "Spring Framework",
    "Web Services",
    "Struts / MVC",
    "Design Patterns",
  ],
  sections: [
    {
      title: "Module 1: J2EE Introduction",
      items: [
        "Overview of J2EE Architecture",
        "J2EE vs Core Java",
        "Enterprise Applications & Use Cases",
        "J2EE Containers (Web & EJB)",
      ],
    },
    {
      title: "Module 2: Servlets",
      items: [
        "Introduction to Servlets",
        "Servlet Lifecycle",
        "HttpServlet & GenericServlet",
        "RequestDispatcher (Forward & Include)",
        "Session Management (Cookies, HttpSession, URL Rewriting)",
        "Filters & Listeners",
      ],
    },
    {
      title: "Module 3: JSP (Java Server Pages)",
      items: [
        "Introduction to JSP",
        "JSP Architecture & Life Cycle",
        "Scriptlets, Declarations, Expressions",
        "Directives & Implicit Objects",
        "JSP with JDBC",
        "Error Handling & Custom Tags",
      ],
    },
    {
      title: "Module 4: EJB (Enterprise Java Beans)",
      items: [
        "Introduction to EJB",
        "Types: Session, Message-Driven, Entity Beans",
        "EJB Lifecycle & Deployment",
        "EJB with JPA/Hibernate Integration",
      ],
    },
    {
      title: "Module 5: JDBC & Database Integration",
      items: [
        "JDBC Architecture",
        "Connecting to Databases",
        "CRUD Operations",
        "Prepared Statements & Transactions",
        "Connection Pooling",
      ],
    },
    {
      title: "Module 6: Spring Framework",
      items: [
        "Introduction to Spring",
        "IoC & Dependency Injection",
        "Spring MVC Overview",
        "Spring JDBC & ORM Integration",
        "Transaction Management",
      ],
    },
    {
      title: "Module 7: Web Services",
      items: [
        "Introduction to Web Services",
        "SOAP & RESTful Services",
        "JAX-WS & JAX-RS Implementation",
        "Consuming Web Services in Java",
      ],
    },
    {
      title: "Module 8: Struts & MVC Design Pattern",
      items: [
        "Introduction to Struts Framework",
        "Struts Configuration & Action Classes",
        "Form Beans & Validation",
        "MVC Design Pattern in J2EE",
      ],
    },
    {
      title: "Module 9: Advanced J2EE Concepts",
      items: [
        "Security in J2EE Applications",
        "Design Patterns in Enterprise Applications",
        "Caching & Performance Optimization",
        "Best Practices in J2EE Development",
      ],
    },
    {
      title: "Module 10: Capstone Project",
      items: [
        "Develop a full-fledged enterprise application",
        "Use Servlets, JSP, EJB, Spring & JDBC",
        "Integrate Web Services",
        "Apply MVC & Design Patterns",
      ],
    },
  ],
}
,
springboot: {
  title: "Spring Boot Online Training — Syllabus",
  accent: "#6DB33F",
  meta: {
    duration: "8–10 weeks",
    audience: "Students & Working Professionals",
    level: "Intermediate → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Spring Boot Basics",
    "Spring MVC",
    "Dependency Injection",
    "JPA & Hibernate",
    "RESTful APIs",
    "Security",
    "Microservices",
    "Spring Data",
    "Testing & Debugging",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Spring Boot",
      items: [
        "Overview of Spring Framework & Spring Boot",
        "Spring Boot Architecture",
        "Spring Boot Starter Projects",
        "Spring Boot Annotations & Configuration",
      ],
    },
    {
      title: "Module 2: Spring Core Concepts",
      items: [
        "Dependency Injection & Inversion of Control (IoC)",
        "Bean Scopes & Lifecycle",
        "Application Context & Configuration",
      ],
    },
    {
      title: "Module 3: Spring MVC",
      items: [
        "Introduction to Spring MVC",
        "Controllers, Models, Views",
        "Form Handling & Validation",
        "Request Mapping & URL Handling",
      ],
    },
    {
      title: "Module 4: RESTful Web Services",
      items: [
        "Introduction to REST & RESTful APIs",
        "Building REST APIs with Spring Boot",
        "HTTP Methods, Status Codes, & CRUD Operations",
        "Exception Handling & ResponseEntity",
      ],
    },
    {
      title: "Module 5: Data Persistence with JPA & Hibernate",
      items: [
        "Introduction to JPA & Hibernate",
        "Entity, Repository & DTO",
        "CRUD Operations with Spring Data JPA",
        "Query Methods & JPQL",
        "Database Transactions & Relationships",
      ],
    },
    {
      title: "Module 6: Spring Security",
      items: [
        "Introduction to Spring Security",
        "Authentication & Authorization",
        "JWT & OAuth2",
        "Role-based Access Control",
        "Secure REST APIs",
      ],
    },
    {
      title: "Module 7: Microservices with Spring Boot",
      items: [
        "Introduction to Microservices Architecture",
        "Spring Boot for Microservices",
        "Service Registration & Discovery (Eureka)",
        "API Gateway & Routing",
        "Inter-service Communication (REST & Feign Client)",
      ],
    },
    {
      title: "Module 8: Testing in Spring Boot",
      items: [
        "Unit Testing with JUnit & Mockito",
        "Integration Testing",
        "Test REST APIs",
        "Debugging & Logging",
      ],
    },
    {
      title: "Module 9: Deployment & DevOps Basics",
      items: [
        "Packaging Spring Boot Applications",
        "Deploying to Cloud (AWS/Azure/Heroku)",
        "Dockerizing Spring Boot Apps",
        "Application Monitoring & Performance Tuning",
      ],
    },
    {
      title: "Module 10: Capstone Project",
      items: [
        "Develop a full-fledged Spring Boot application",
        "Use REST APIs, JPA/Hibernate, and Spring Security",
        "Implement Microservices architecture",
        "Apply best practices & deploy to cloud",
      ],
    },
  ],
}
,
hibernate: {
  title: "Hibernate Online Training — Syllabus",
  accent: "#6C63FF",
  meta: {
    duration: "6–8 weeks",
    audience: "Students & Working Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Hibernate Basics",
    "ORM Concepts",
    "Entity Mapping",
    "Relationships",
    "HQL & JPQL",
    "Caching",
    "Transactions",
    "Spring Integration",
    "Testing & Deployment",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Hibernate",
      items: [
        "Overview of Hibernate & ORM",
        "Advantages over JDBC",
        "Architecture & Core Components",
        "Setup & Configuration",
      ],
    },
    {
      title: "Module 2: Hibernate Mapping",
      items: [
        "Mapping POJOs to Database Tables",
        "Primary Keys & Identifiers",
        "Column Mapping & Constraints",
        "Auto-generation Strategies",
      ],
    },
    {
      title: "Module 3: Relationships in Hibernate",
      items: [
        "One-to-One Mapping",
        "One-to-Many Mapping",
        "Many-to-One Mapping",
        "Many-to-Many Mapping",
        "Cascading & Fetch Types",
      ],
    },
    {
      title: "Module 4: Hibernate Query Language (HQL)",
      items: [
        "Introduction to HQL",
        "CRUD Operations using HQL",
        "Named Queries & Parameter Binding",
        "Pagination & Sorting",
      ],
    },
    {
      title: "Module 5: Criteria API & Native SQL",
      items: [
        "Criteria API for Dynamic Queries",
        "Restrictions & Projections",
        "Native SQL Queries",
        "Query Caching",
      ],
    },
    {
      title: "Module 6: Transactions & Concurrency",
      items: [
        "Transaction Management",
        "ACID Properties",
        "Optimistic & Pessimistic Locking",
        "Concurrency Control",
      ],
    },
    {
      title: "Module 7: Caching in Hibernate",
      items: [
        "First-Level Cache",
        "Second-Level Cache",
        "Query Cache",
        "Cache Providers (Ehcache, Infinispan)",
      ],
    },
    {
      title: "Module 8: Integration with Spring",
      items: [
        "Spring & Hibernate Integration",
        "Spring Transaction Management",
        "DAO Layer Implementation",
        "Best Practices & Design Patterns",
      ],
    },
    {
      title: "Module 9: Advanced Topics",
      items: [
        "Hibernate Events & Listeners",
        "Interceptors & Callbacks",
        "Batch Processing",
        "Performance Tuning & Optimizations",
      ],
    },
    {
      title: "Module 10: Capstone Project",
      items: [
        "Develop a full-stack application using Hibernate",
        "Implement CRUD operations with complex relationships",
        "Integrate with Spring Boot",
        "Deploy to cloud or local server",
      ],
    },
  ],
}
,
ajax: {
  title: "AJAX Online Training — Syllabus",
  accent: "#FF5733",
  meta: {
    duration: "3–4 weeks",
    audience: "Students & Working Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "AJAX Basics",
    "XMLHttpRequest",
    "Fetch API",
    "JSON & XML",
    "Asynchronous Requests",
    "Event Handling",
    "AJAX with jQuery",
    "AJAX with APIs",
    "Error Handling",
    "Practical Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to AJAX",
      items: [
        "What is AJAX and its importance",
        "How AJAX works",
        "Synchronous vs Asynchronous requests",
        "AJAX in modern web applications",
      ],
    },
    {
      title: "Module 2: XMLHttpRequest Object",
      items: [
        "Creating and configuring XMLHttpRequest",
        "Handling state changes",
        "Sending GET and POST requests",
        "Handling server responses",
      ],
    },
    {
      title: "Module 3: Fetch API",
      items: [
        "Introduction to Fetch API",
        "GET & POST requests using fetch",
        "Handling JSON responses",
        "Promises and async/await",
      ],
    },
    {
      title: "Module 4: Data Formats in AJAX",
      items: [
        "Working with JSON",
        "Working with XML",
        "Parsing data in JavaScript",
        "Sending data to the server",
      ],
    },
    {
      title: "Module 5: AJAX Event Handling",
      items: [
        "DOM Events and AJAX",
        "Button clicks, forms, and AJAX",
        "Handling multiple requests",
        "Debouncing and throttling requests",
      ],
    },
    {
      title: "Module 6: AJAX with jQuery",
      items: [
        "Introduction to jQuery AJAX methods",
        "$.ajax(), $.get(), $.post()",
        "Handling responses and errors",
        "Simplifying AJAX code with jQuery",
      ],
    },
    {
      title: "Module 7: AJAX with APIs",
      items: [
        "Consuming REST APIs using AJAX",
        "Authentication & headers",
        "Handling CORS issues",
        "Practical examples with public APIs",
      ],
    },
    {
      title: "Module 8: Error Handling & Debugging",
      items: [
        "Common AJAX errors",
        "Timeouts and retries",
        "Browser developer tools for debugging",
        "Best practices for robust AJAX apps",
      ],
    },
    {
      title: "Module 9: Practical Projects",
      items: [
        "Build a live search feature",
        "Create a dynamic form submission",
        "Consume a third-party API and display data",
        "Build a small SPA (Single Page Application) using AJAX",
      ],
    },
  ],
}
,
angular: {
  title: "Angular Online Training — Syllabus",
  accent: "#DD0031",
  meta: {
    duration: "6–8 weeks",
    audience: "Students & Working Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Angular Basics",
    "Components & Templates",
    "Modules & Services",
    "Data Binding",
    "Directives & Pipes",
    "Routing & Navigation",
    "HTTP & APIs",
    "Forms & Validation",
    "RxJS & Observables",
    "Projects & Deployment",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Angular",
      items: [
        "What is Angular and its advantages",
        "Setting up Angular CLI",
        "Creating your first Angular app",
        "Folder structure and Angular architecture",
      ],
    },
    {
      title: "Module 2: Components & Templates",
      items: [
        "Understanding components",
        "Creating and using components",
        "Template syntax",
        "Component interaction with @Input and @Output",
      ],
    },
    {
      title: "Module 3: Modules & Services",
      items: [
        "Angular modules and NgModule",
        "Creating services",
        "Dependency injection",
        "Singleton services across app",
      ],
    },
    {
      title: "Module 4: Data Binding & Directives",
      items: [
        "One-way & two-way binding",
        "Built-in directives: ngIf, ngFor, ngClass",
        "Custom directives",
        "Pipes: built-in and custom",
      ],
    },
    {
      title: "Module 5: Routing & Navigation",
      items: [
        "Angular Router basics",
        "Configuring routes",
        "Route parameters and guards",
        "Lazy loading modules",
      ],
    },
    {
      title: "Module 6: HTTP & APIs",
      items: [
        "HttpClient module",
        "GET, POST, PUT, DELETE requests",
        "Handling errors",
        "Consuming REST APIs",
      ],
    },
    {
      title: "Module 7: Forms & Validation",
      items: [
        "Template-driven forms",
        "Reactive forms",
        "Form validation techniques",
        "Dynamic forms",
      ],
    },
    {
      title: "Module 8: RxJS & Observables",
      items: [
        "Introduction to RxJS",
        "Observables and subscriptions",
        "Operators: map, filter, mergeMap, etc.",
        "Handling async data in Angular",
      ],
    },
    {
      title: "Module 9: Project & Deployment",
      items: [
        "Build a complete Angular project",
        "Integrate with backend APIs",
        "Debugging and testing",
        "Deployment to hosting platforms",
      ],
    },
  ],
}
,
angularjs: {
  title: "AngularJS Online Training — Syllabus",
  accent: "#DD0031",
  meta: {
    duration: "4–6 weeks",
    audience: "Students & Working Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "AngularJS Basics",
    "Directives & Data Binding",
    "Controllers & Scope",
    "Services & Factories",
    "Routing & SPA",
    "Filters & Expressions",
    "Forms & Validation",
    "HTTP & AJAX",
    "Modules & Dependency Injection",
    "Projects & Deployment",
  ],
  sections: [
    {
      title: "Module 1: Introduction to AngularJS",
      items: [
        "What is AngularJS and SPA concept",
        "Advantages over traditional JS",
        "Setting up AngularJS environment",
        "AngularJS architecture overview",
      ],
    },
    {
      title: "Module 2: Directives & Data Binding",
      items: [
        "Understanding directives",
        "Built-in directives: ng-app, ng-model, ng-bind, ng-repeat, ng-show/ng-hide",
        "Two-way data binding",
        "Creating custom directives",
      ],
    },
    {
      title: "Module 3: Controllers & Scope",
      items: [
        "Role of controllers",
        "$scope object usage",
        "Controller communication",
        "Nested controllers",
      ],
    },
    {
      title: "Module 4: Services & Factories",
      items: [
        "AngularJS services",
        "Factories vs Services",
        "Dependency injection",
        "Creating reusable services",
      ],
    },
    {
      title: "Module 5: Routing & Single Page Application (SPA)",
      items: [
        "Introduction to ngRoute",
        "Configuring routes",
        "Route parameters",
        "Nested views & SPA navigation",
      ],
    },
    {
      title: "Module 6: Filters & Expressions",
      items: [
        "Built-in filters: currency, date, lowercase, uppercase, filter, orderBy",
        "Custom filters",
        "Using expressions in views",
      ],
    },
    {
      title: "Module 7: Forms & Validation",
      items: [
        "ng-model for form inputs",
        "Built-in validation directives",
        "Custom validations",
        "Displaying validation messages",
      ],
    },
    {
      title: "Module 8: HTTP & AJAX",
      items: [
        "$http service for AJAX requests",
        "GET, POST, PUT, DELETE requests",
        "Handling promises",
        "Consuming RESTful APIs",
      ],
    },
    {
      title: "Module 9: Modules & Dependency Injection",
      items: [
        "Creating AngularJS modules",
        "Organizing app with modules",
        "Dependency injection concept",
        "Injecting services, factories, constants",
      ],
    },
    {
      title: "Module 10: Project & Deployment",
      items: [
        "Build a sample AngularJS application",
        "Integrate with backend APIs",
        "Debugging and testing",
        "Deployment to hosting platforms",
      ],
    },
  ],
}
,
manualTesting: {
  title: "Manual Testing Training — Syllabus",
  accent: "#3178C6",
  meta: {
    duration: "6–8 weeks",
    audience: "Beginners & IT Professionals",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Software Testing Fundamentals",
    "Test Case Design",
    "Bug Life Cycle",
    "Functional Testing",
    "Regression Testing",
    "User Acceptance Testing",
    "Test Management Tools",
    "Defect Tracking",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Software Testing",
      items: [
        "Software Development Life Cycle (SDLC)",
        "Testing Life Cycle (STLC)",
        "Types of Testing: Manual vs Automation",
        "Roles & Responsibilities of a Tester",
      ],
    },
    {
      title: "Module 2: Testing Fundamentals",
      items: [
        "Understanding Requirements & SRS Documents",
        "Test Plan, Test Scenarios, Test Cases",
        "Test Data Preparation",
        "Test Environment Setup",
      ],
    },
    {
      title: "Module 3: Types of Testing",
      items: [
        "Functional Testing",
        "Non-Functional Testing",
        "Smoke & Sanity Testing",
        "Regression Testing",
        "Integration & System Testing",
      ],
    },
    {
      title: "Module 4: Defect Management",
      items: [
        "Bug Life Cycle",
        "Severity vs Priority",
        "Defect Reporting using Tools (JIRA, Bugzilla, Mantis)",
        "Defect Tracking & Closure",
      ],
    },
    {
      title: "Module 5: Test Case Design Techniques",
      items: [
        "Equivalence Partitioning",
        "Boundary Value Analysis",
        "Decision Table Testing",
        "Use Case Testing",
      ],
    },
    {
      title: "Module 6: User Acceptance & Exploratory Testing",
      items: [
        "User Acceptance Testing (UAT) Process",
        "Exploratory Testing Techniques",
        "Ad-hoc Testing",
        "Checklist-based Testing",
      ],
    },
    {
      title: "Module 7: Test Management Tools",
      items: [
        "Introduction to Test Management Tools",
        "Creating & Managing Test Cases",
        "Test Execution & Reporting",
        "Metrics & Dashboards",
      ],
    },
    {
      title: "Module 8: Practical Project",
      items: [
        "End-to-end manual testing project",
        "Writing Test Cases & Executing Tests",
        "Logging & Tracking Defects",
        "Preparing Test Summary Reports",
      ],
    },
  ],
}
,
apiTesting: {
  title: "API Testing Online Training — Syllabus",
  accent: "#3178C6",
  meta: {
    duration: "6–8 weeks",
    audience: "QA Professionals, Software Testers, Developers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to APIs",
    "RESTful API Concepts & Architecture",
    "HTTP Methods, Status Codes & Headers",
    "Postman for API Testing",
    "Authentication & Authorization (OAuth, JWT, API Keys)",
    "Automation using REST Assured / Postman / JavaScript",
    "SOAP Web Services Testing",
    "Performance Testing with JMeter / LoadRunner",
    "Security Testing for APIs",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to API Testing",
      items: [
        "What is an API and why testing is important",
        "Types of APIs: REST vs SOAP",
        "API lifecycle and testing strategies",
      ],
    },
    {
      title: "Module 2: REST API Concepts & HTTP",
      items: [
        "HTTP methods: GET, POST, PUT, DELETE, PATCH",
        "Status codes and their significance",
        "Headers, parameters, and query strings",
        "JSON & XML payload structures",
      ],
    },
    {
      title: "Module 3: API Testing with Postman",
      items: [
        "Creating requests and collections",
        "Environment variables and pre-request scripts",
        "Chaining requests and automated tests",
        "Assertions and response validation",
      ],
    },
    {
      title: "Module 4: Authentication & Security",
      items: [
        "API Authentication types: Basic, OAuth, JWT, API Keys",
        "Role-based access control testing",
        "Securing API endpoints",
      ],
    },
    {
      title: "Module 5: API Automation Testing",
      items: [
        "Introduction to REST Assured and JavaScript-based automation",
        "Writing automated API test scripts",
        "Data-driven and keyword-driven API testing",
      ],
    },
    {
      title: "Module 6: SOAP Web Services Testing",
      items: [
        "SOAP request and response structure",
        "Testing SOAP APIs with SoapUI",
        "Validating SOAP responses",
      ],
    },
    {
      title: "Module 7: Performance Testing of APIs",
      items: [
        "Load and stress testing concepts",
        "Using JMeter / LoadRunner for API performance testing",
        "Analyzing response times, throughput, and latency",
      ],
    },
    {
      title: "Module 8: Real-World Projects & Capstone",
      items: [
        "E-commerce API testing project",
        "Banking API validation scenario",
        "Integration testing with multiple services",
        "End-to-end API automation and reporting",
      ],
    },
  ],
}
,
playwrightTesting: {
  title: "Playwright Testing Online Training — Syllabus",
  accent: "#3178C6",
  meta: {
    duration: "6–8 weeks",
    audience: "Students, QA Engineers, Automation Testers, Developers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Playwright",
    "Playwright Installation & Setup",
    "Selectors & Locators",
    "UI Automation",
    "Cross-Browser & Cross-Platform Testing",
    "Network Interception & API Testing",
    "Assertions & Debugging",
    "Advanced Playwright Features",
    "Framework Design & CI/CD",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Playwright",
      items: [
        "What is Playwright & Why Playwright?",
        "Comparison with Selenium & Cypress",
        "Playwright architecture & supported browsers",
        "Installing Playwright & environment setup",
      ],
    },
    {
      title: "Module 2: Selectors, Locators & Basic Automation",
      items: [
        "Understanding locators & selectors",
        "Working with text, CSS, and XPath locators",
        "Handling iframes, alerts, and popups",
        "Running tests in headless & headed mode",
      ],
    },
    {
      title: "Module 3: UI Automation with Playwright",
      items: [
        "Handling input fields, dropdowns, checkboxes, and buttons",
        "File uploads & downloads",
        "Assertions with Playwright Test",
        "Page navigation, waits & timeouts",
      ],
    },
    {
      title: "Module 4: Cross-Browser & Parallel Testing",
      items: [
        "Testing on Chromium, Firefox, and WebKit",
        "Running tests in parallel",
        "Cross-platform testing on Windows, Linux, macOS",
        "Mobile emulation & device testing",
      ],
    },
    {
      title: "Module 5: Network Interception & API Testing",
      items: [
        "Intercepting network requests",
        "Mocking & stubbing API responses",
        "API testing with Playwright",
        "Validating REST APIs with assertions",
      ],
    },
    {
      title: "Module 6: Advanced Playwright Features",
      items: [
        "Handling multiple browser contexts & pages",
        "Visual testing & screenshot comparison",
        "Video recording of test runs",
        "Using fixtures & test hooks",
      ],
    },
    {
      title: "Module 7: Test Automation Framework Design",
      items: [
        "Page Object Model (POM) in Playwright",
        "Data-driven testing",
        "Reusable utilities & custom commands",
        "Test reporting & HTML reports",
      ],
    },
    {
      title: "Module 8: CI/CD Integration & Scalability",
      items: [
        "Integrating Playwright with Jenkins, GitHub Actions, GitLab CI",
        "Running tests in Docker & cloud environments",
        "Scalable test execution",
        "Best practices for CI/CD pipelines",
      ],
    },
    {
      title: "Module 9: Real-World Projects & Capstone",
      items: [
        "E-commerce website end-to-end testing",
        "Banking/FinTech application automation",
        "API + UI combined test scenarios",
        "Capstone project & interview preparation",
      ],
    },
  ],
}
,
typescriptTesting: {
  title: "TypeScript Testing Online Training — Syllabus",
  accent: "#3178C6", // TypeScript blue
  meta: {
    duration: "4–6 weeks",
    audience: "Developers, QA Engineers & Automation Testers",
    level: "Beginner → Intermediate",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to TypeScript & Testing Fundamentals",
    "Unit Testing with Jest & Mocha",
    "Integration Testing",
    "End-to-End Testing with Cypress/Playwright",
    "Mocking, Stubbing & Dependency Injection",
    "Type Safety & Strong Typing in Tests",
    "TDD & BDD with TypeScript",
    "API Testing with Supertest",
    "Automation Framework Design",
    "CI/CD Integration",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to TypeScript Testing",
      items: [
        "Why test with TypeScript? Benefits over JavaScript",
        "Setting up TypeScript for testing projects",
        "Compiler options & tsconfig.json",
        "Writing your first test with TypeScript",
      ],
    },
    {
      title: "Module 2: Unit Testing with Jest & Mocha",
      items: [
        "Installing and configuring Jest/Mocha + Chai",
        "Assertions and matchers",
        "Async/await and promises in tests",
        "Organizing unit test suites",
      ],
    },
    {
      title: "Module 3: Integration Testing",
      items: [
        "Testing services and repositories",
        "Working with in-memory databases",
        "Testing API routes with TypeScript",
        "Managing test data & fixtures",
      ],
    },
    {
      title: "Module 4: End-to-End Testing (E2E)",
      items: [
        "Cypress with TypeScript for UI automation",
        "Playwright for cross-browser testing",
        "Headless browser execution",
        "Testing real-world workflows (login, checkout, APIs)",
      ],
    },
    {
      title: "Module 5: Mocking, Stubbing & Dependency Injection",
      items: [
        "Mocking with Jest and ts-mockito",
        "Stubbing services and external APIs",
        "HTTP request mocking",
        "Dependency injection for testable code",
      ],
    },
    {
      title: "Module 6: Type Safety in Testing",
      items: [
        "Using TypeScript interfaces and types",
        "Generics for reusable test utilities",
        "Avoiding runtime errors with type definitions",
      ],
    },
    {
      title: "Module 7: TDD & BDD with TypeScript",
      items: [
        "Test-Driven Development (TDD) cycle",
        "Mocha + Chai for Behavior-Driven Development",
        "Cucumber + TypeScript for feature testing",
      ],
    },
    {
      title: "Module 8: API Testing with TypeScript",
      items: [
        "REST API testing with Supertest",
        "GraphQL API testing",
        "Schema validation & contract testing",
      ],
    },
    {
      title: "Module 9: Test Automation Framework Design",
      items: [
        "Building scalable test frameworks",
        "Page Object Model (POM) in TypeScript",
        "Utilities, configs, and helpers",
      ],
    },
    {
      title: "Module 10: CI/CD & Reporting",
      items: [
        "Integrating tests with Jenkins, GitHub Actions, GitLab CI",
        "Test reporting with Allure & HTML reports",
        "Parallel execution & coverage reports",
      ],
    },
    {
      title: "Module 11: Real-World Projects & Capstone",
      items: [
        "End-to-end testing of a full-stack TypeScript app",
        "Combining unit, integration & E2E tests",
        "Capstone: Build a complete TypeScript testing framework",
      ],
    },
  ],
}
,
cypressTesting: {
  title: "Cypress Testing Online Training — Syllabus",
  accent: "#008fbfff",
  meta: {
    duration: "6–8 weeks",
    audience: "QA Engineers, Automation Testers, Developers",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Cypress & Setup",
    "JavaScript & Mocha Basics",
    "Cypress Fundamentals",
    "UI Automation with Cypress",
    "Advanced Cypress Features",
    "API Testing",
    "Framework Design & Best Practices",
    "CI/CD Integration",
    "Reporting & Debugging",
    "Real-World Projects & Interview Prep",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Cypress & Setup",
      items: [
        "Overview of Test Automation & Cypress",
        "Cypress vs Selenium & Other Tools",
        "Installation & Project Setup",
        "Folder Structure & Configuration",
        "Writing First Cypress Test",
      ],
    },
    {
      title: "Module 2: JavaScript & Mocha Basics",
      items: [
        "JavaScript ES6+ essentials for testers",
        "Functions, Callbacks, and Promises",
        "Async/Await in Cypress",
        "Mocha Test Runner & Chai Assertions",
        "BDD/TDD with Cypress",
      ],
    },
    {
      title: "Module 3: Cypress Fundamentals",
      items: [
        "Cypress Test Lifecycle",
        "Cypress Commands & Assertions",
        "Retry-ability & Auto-Waiting",
        "Running & Debugging Tests",
        "Cypress Dashboard Overview",
      ],
    },
    {
      title: "Module 4: UI Automation with Cypress",
      items: [
        "Locators & Element Handling",
        "Click, Type, Select, and Check Actions",
        "Mouse Hover, Drag & Drop, Double Click",
        "Handling Alerts, Popups & Iframes",
        "File Uploads & Downloads",
      ],
    },
    {
      title: "Module 5: Advanced Cypress Features",
      items: [
        "Custom Commands & Utilities",
        "Fixtures & Test Data Management",
        "Environment Variables in Cypress",
        "Handling Flaky Tests",
        "Cypress Best Practices",
      ],
    },
    {
      title: "Module 6: API Testing with Cypress",
      items: [
        "API Testing Fundamentals",
        "GET, POST, PUT, DELETE requests",
        "Stubbing & Mocking Network Requests",
        "Validating JSON Responses",
        "Chaining API & UI Tests",
      ],
    },
    {
      title: "Module 7: Framework Design & Best Practices",
      items: [
        "Page Object Model (POM) in Cypress",
        "Data-Driven Testing",
        "Reusable Utilities & Helper Functions",
        "Managing Large Test Suites",
        "Cross-Browser & Parallel Testing",
      ],
    },
    {
      title: "Module 8: Reporting & Debugging",
      items: [
        "Built-in Cypress Reports",
        "Mochawesome & Allure Reporting",
        "Screenshots & Video Recording",
        "Debugging Techniques",
        "Error Handling in Tests",
      ],
    },
    {
      title: "Module 9: CI/CD Integration",
      items: [
        "Integrating Cypress with Jenkins",
        "GitHub Actions / GitLab CI Pipelines",
        "Dockerizing Cypress Tests",
        "Parallel Execution in CI/CD",
        "Cloud Testing Platforms (BrowserStack, Sauce Labs)",
      ],
    },
    {
      title: "Module 10: Real-World Projects & Interview Prep",
      items: [
        "End-to-End Web Application Testing Project",
        "API + UI Combined Test Project",
        "Optimizing Test Execution Time",
        "Common Cypress Interview Questions",
        "Resume Building & Mock Interviews",
      ],
    },
  ],
}
,
gcplatform: {
  title: "Google Cloud Platform (GCP) Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "8–12 weeks",
    audience: "Aspiring Cloud Architects, Developers, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom / Hybrid",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "GCP Fundamentals",
    "Compute Engine & App Engine",
    "Cloud Storage & Databases",
    "Networking & Security",
    "IAM & Access Management",
    "Serverless Services: Cloud Functions & Cloud Run",
    "BigQuery & Data Analytics",
    "Monitoring & Logging",
    "Infrastructure as Code with Deployment Manager",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to GCP",
      items: [
        "Overview of Cloud Computing & GCP",
        "GCP Global Infrastructure",
        "Regions, Zones, and Projects",
        "GCP Console & CLI basics",
        "IAM basics and identity management",
      ],
    },
    {
      title: "Module 2: Compute Services",
      items: [
        "Google Compute Engine (VMs)",
        "App Engine for PaaS applications",
        "Kubernetes Engine (GKE) basics",
        "Serverless computing with Cloud Functions",
      ],
    },
    {
      title: "Module 3: Storage & Databases",
      items: [
        "Cloud Storage buckets & classes",
        "Persistent Disks & Filestore",
        "Cloud SQL, Cloud Spanner, Bigtable",
        "Cloud Firestore & Datastore",
      ],
    },
    {
      title: "Module 4: Networking & Security",
      items: [
        "Virtual Private Cloud (VPC) setup",
        "Subnets, Firewalls, and Routes",
        "Load Balancing & Cloud CDN",
        "Cloud Armor & Security best practices",
      ],
    },
    {
      title: "Module 5: Big Data & Analytics",
      items: [
        "BigQuery fundamentals and SQL queries",
        "Dataflow & Dataproc for ETL",
        "Pub/Sub for messaging & streaming data",
        "Data Studio for visualization",
      ],
    },
    {
      title: "Module 6: Monitoring & Management",
      items: [
        "Cloud Monitoring & Logging",
        "Stackdriver and Alerts",
        "Cost Management & Billing",
        "Resource tagging & labeling",
      ],
    },
    {
      title: "Module 7: Serverless Architectures",
      items: [
        "Cloud Functions & triggers",
        "Cloud Run for containerized apps",
        "Event-driven design with Pub/Sub",
        "Workflows and orchestration",
      ],
    },
    {
      title: "Module 8: Infrastructure as Code",
      items: [
        "Deployment Manager templates",
        "Terraform integration with GCP",
        "Automating deployments",
        "CI/CD pipelines on GCP",
      ],
    },
    {
      title: "Module 9: Security & Identity Management",
      items: [
        "IAM roles & permissions",
        "Service accounts & keys",
        "Encryption at rest & in transit",
        "Best practices for secure cloud architecture",
      ],
    },
    {
      title: "Module 10: Capstone Projects",
      items: [
        "Deploying a highly available multi-tier application",
        "Building a serverless data pipeline",
        "Real-world GCP architecture design project",
        "Presentation and documentation of solutions",
      ],
    },
  ],
}
,
oracleFusion: {
  title: "Oracle Fusion Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "8–10 weeks",
    audience: "ERP Consultants, Functional & Technical Professionals, Finance/HR Specialists",
    level: "Beginner → Advanced",
    mode: "Online / Classroom / Hybrid",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Oracle Fusion HCM",
    "Oracle Fusion Financials",
    "Oracle Fusion SCM",
    "Setup & Configuration",
    "User Management & Security",
    "Reporting & Analytics",
    "Integration & Extensions",
    "Workflows & Approvals",
    "Practical Use Cases & Projects",
    "Capstone Project",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Oracle Fusion",
      items: [
        "Overview of Oracle Fusion Cloud Applications",
        "ERP, HCM, and SCM modules",
        "Cloud architecture and deployment",
        "Navigation and UI overview",
      ],
    },
    {
      title: "Module 2: Oracle Fusion HCM",
      items: [
        "Core HR setup and configuration",
        "Employee data management",
        "Payroll, Benefits, and Compensation modules",
        "Approval workflows and reporting",
      ],
    },
    {
      title: "Module 3: Oracle Fusion Financials",
      items: [
        "General Ledger, Accounts Payable, Accounts Receivable",
        "Cash Management and Asset Management",
        "Financial reporting and analytics",
        "Approval workflows and audit processes",
      ],
    },
    {
      title: "Module 4: Oracle Fusion SCM",
      items: [
        "Procurement and Inventory Management",
        "Order Management and Planning",
        "Supply Chain Analytics and Reporting",
        "Integration with Financials",
      ],
    },
    {
      title: "Module 5: Setup & Configuration",
      items: [
        "Managing Users, Roles & Security",
        "Data import and setup tasks",
        "Customizing workflows and approvals",
        "Configuring notifications and alerts",
      ],
    },
    {
      title: "Module 6: Reporting & Analytics",
      items: [
        "Oracle BI Publisher and OTBI",
        "Creating reports and dashboards",
        "Key metrics and KPIs",
        "Exporting and sharing analytics",
      ],
    },
    {
      title: "Module 7: Integration & Extensions",
      items: [
        "Integrating Oracle Fusion with other ERP/CRM systems",
        "Web services and APIs",
        "Extending functionality with custom objects",
        "Monitoring integrations and errors",
      ],
    },
    {
      title: "Module 8: Workflows & Approvals",
      items: [
        "Creating and managing workflows",
        "Approval hierarchies",
        "Notification rules and alerts",
        "Troubleshooting workflow issues",
      ],
    },
    {
      title: "Module 9: Real-World Use Cases & Projects",
      items: [
        "Implementing a complete HR process in Fusion HCM",
        "Financial cycle automation in Fusion Financials",
        "Supply chain management scenarios in SCM module",
        "Cross-module integration projects",
      ],
    },
    {
      title: "Module 10: Capstone Project",
      items: [
        "End-to-end Oracle Fusion implementation simulation",
        "Configuring multiple modules for a sample organization",
        "Generating reports, dashboards, and analytics",
        "Presentation of project outcomes",
      ],
    },
  ],
}
,
awsdata: {
  title: "AWS Data Engineer Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "8–12 weeks",
    audience: "Aspiring Data Engineers, Analytics Professionals, Cloud Enthusiasts",
    level: "Beginner → Advanced",
    mode: "Online / Classroom / Hybrid",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "AWS Cloud Fundamentals",
    "Data Storage & Databases on AWS",
    "ETL & Data Pipeline Design",
    "Big Data Processing",
    "Streaming Data & Real-Time Analytics",
    "Data Warehousing with Redshift",
    "Data Security & Governance",
    "Serverless Data Processing",
    "Monitoring & Optimization",
    "Capstone Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to AWS for Data Engineering",
      items: [
        "Overview of AWS Cloud & Services",
        "IAM & Security Best Practices",
        "AWS CLI & SDKs for automation",
        "Understanding cloud architecture for data solutions",
      ],
    },
    {
      title: "Module 2: Data Storage Solutions",
      items: [
        "S3 buckets, lifecycle policies, and versioning",
        "AWS RDS, Aurora, DynamoDB overview",
        "Data modeling for relational & NoSQL databases",
        "Storage optimization and cost management",
      ],
    },
    {
      title: "Module 3: ETL & Data Pipeline Design",
      items: [
        "Introduction to ETL concepts",
        "AWS Glue for ETL jobs",
        "Data transformation using Python, Spark, or Scala",
        "Automating pipelines with AWS Step Functions & Lambda",
      ],
    },
    {
      title: "Module 4: Big Data Processing",
      items: [
        "Introduction to Big Data on AWS",
        "AWS EMR for Hadoop & Spark",
        "Batch vs Real-Time processing",
        "Processing large datasets efficiently",
      ],
    },
    {
      title: "Module 5: Streaming Data & Real-Time Analytics",
      items: [
        "AWS Kinesis Data Streams & Firehose",
        "Real-time ETL with Lambda",
        "Data ingestion patterns",
        "Monitoring & scaling streaming applications",
      ],
    },
    {
      title: "Module 6: Data Warehousing with Redshift",
      items: [
        "Amazon Redshift architecture",
        "Creating and managing Redshift clusters",
        "Optimizing queries and data distribution",
        "Integrating Redshift with BI tools",
      ],
    },
    {
      title: "Module 7: Data Security & Governance",
      items: [
        "Encryption in transit & at rest (KMS, SSL)",
        "IAM roles & policies for data access",
        "Auditing & monitoring using CloudTrail & CloudWatch",
        "Compliance best practices",
      ],
    },
    {
      title: "Module 8: Serverless Data Processing",
      items: [
        "AWS Lambda for serverless ETL",
        "Integrating Lambda with S3, DynamoDB, and Kinesis",
        "Error handling and retry strategies",
        "Cost optimization for serverless workflows",
      ],
    },
    {
      title: "Module 9: Monitoring & Optimization",
      items: [
        "Monitoring data pipelines with CloudWatch",
        "Performance tuning for ETL jobs",
        "Optimizing storage and query performance",
        "Troubleshooting common data pipeline issues",
      ],
    },
    {
      title: "Module 10: Capstone Projects",
      items: [
        "Building end-to-end data pipelines from ingestion to analytics",
        "Processing batch and streaming datasets",
        "Integrating Redshift and BI tools",
        "Presenting a complete AWS Data Engineering solution",
      ],
    },
  ],
}
,
performanceTuning: {
  title: "Performance Tuning Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "6–8 weeks",
    audience: "Developers, DBAs, System Administrators, IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom / Hybrid",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Performance Tuning",
    "System & Database Architecture Analysis",
    "Query Optimization Techniques",
    "Indexing & Partitioning Strategies",
    "Caching & Memory Management",
    "Profiling Tools & Monitoring",
    "Load Testing & Benchmarking",
    "Application Performance Tuning",
    "Performance Troubleshooting & Best Practices",
    "Real-World Performance Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Performance Tuning",
      items: [
        "Understanding performance metrics and benchmarks",
        "Common performance bottlenecks",
        "Performance goals and SLAs",
        "Overview of tuning strategies",
      ],
    },
    {
      title: "Module 2: System & Database Architecture Analysis",
      items: [
        "Understanding hardware & software architecture",
        "Database internals and query processing",
        "Analyzing system resources (CPU, memory, I/O)",
        "Identifying resource-intensive operations",
      ],
    },
    {
      title: "Module 3: Query Optimization Techniques",
      items: [
        "Analyzing query execution plans",
        "Optimizing SQL queries and joins",
        "Using hints and optimizer directives",
        "Reducing query latency and response time",
      ],
    },
    {
      title: "Module 4: Indexing & Partitioning Strategies",
      items: [
        "Creating and using indexes effectively",
        "Partitioning large tables for efficiency",
        "Balancing storage and performance",
        "Maintaining indexes and avoiding fragmentation",
      ],
    },
    {
      title: "Module 5: Caching & Memory Management",
      items: [
        "Understanding buffer/cache mechanisms",
        "Memory allocation and optimization",
        "Managing session and connection memory",
        "Application-level caching strategies",
      ],
    },
    {
      title: "Module 6: Profiling Tools & Monitoring",
      items: [
        "Using performance monitoring tools",
        "Profiling queries and procedures",
        "Tracking system and database metrics",
        "Analyzing logs for performance insights",
      ],
    },
    {
      title: "Module 7: Load Testing & Benchmarking",
      items: [
        "Simulating workload scenarios",
        "Stress testing applications and databases",
        "Benchmarking performance improvements",
        "Capacity planning and resource scaling",
      ],
    },
    {
      title: "Module 8: Application Performance Tuning",
      items: [
        "Optimizing application code for efficiency",
        "Reducing latency in data access and processing",
        "Integrating caching and indexing strategies",
        "Best practices for scalable applications",
      ],
    },
    {
      title: "Module 9: Performance Troubleshooting & Best Practices",
      items: [
        "Identifying root causes of bottlenecks",
        "Systematic troubleshooting approach",
        "Preventive tuning strategies",
        "Documenting and maintaining performance improvements",
      ],
    },
    {
      title: "Module 10: Real-World Performance Projects",
      items: [
        "Analyzing and tuning a real-world database",
        "Optimizing application workflows",
        "Implementing end-to-end performance enhancements",
        "Presenting findings and recommendations",
      ],
    },
  ],
}
,
oracleDba: {
  title: "Oracle DBA Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "8–10 weeks",
    audience: "Aspiring DBAs, IT Professionals, Developers, Database Administrators",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Oracle Architecture & RDBMS Concepts",
    "Installation & Configuration",
    "User Management & Security",
    "Backup & Recovery Strategies",
    "Performance Tuning",
    "Storage & Tablespace Management",
    "Data Guard & High Availability",
    "RMAN & Flashback Technologies",
    "Oracle Networking & RAC",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Oracle DBA",
      items: [
        "Overview of RDBMS & Oracle Database Architecture",
        "Oracle Database Editions & Components",
        "Installation & Configuration on Windows/Linux",
        "Tools: SQL*Plus, SQL Developer, Enterprise Manager",
      ],
    },
    {
      title: "Module 2: Database Administration Basics",
      items: [
        "Creating & Managing Databases",
        "Tablespaces, Datafiles, and Storage Structures",
        "Managing Users, Roles & Privileges",
        "Profiles & Password Management",
      ],
    },
    {
      title: "Module 3: Backup & Recovery",
      items: [
        "Understanding RMAN and Backup Types",
        "Performing Full and Incremental Backups",
        "Recovery Scenarios: Complete & Incomplete",
        "Flashback Technologies",
      ],
    },
    {
      title: "Module 4: Performance Tuning",
      items: [
        "Monitoring Database Performance",
        "SQL Query Tuning",
        "Using AWR, ASH & Statspack Reports",
        "Optimizing Memory & Storage Parameters",
      ],
    },
    {
      title: "Module 5: Storage & Tablespace Management",
      items: [
        "Managing Tablespaces & Datafiles",
        "Segment & Extent Management",
        "Tablespace Quotas & Autoextend",
        "Undo Tablespaces & Temporary Tablespaces",
      ],
    },
    {
      title: "Module 6: High Availability & Data Guard",
      items: [
        "Oracle Data Guard Architecture",
        "Configuring Physical & Logical Standby",
        "Failover & Switchover Operations",
        "Introduction to Oracle RAC",
      ],
    },
    {
      title: "Module 7: Oracle Networking",
      items: [
        "Listener Configuration & TNS",
        "Oracle Net Services",
        "Client-Server Connectivity",
        "Network Troubleshooting",
      ],
    },
    {
      title: "Module 8: Security & User Management",
      items: [
        "Database Security Best Practices",
        "Roles, Privileges & Grants",
        "Auditing & Compliance",
        "Data Encryption & Masking",
      ],
    },
    {
      title: "Module 9: Advanced DBA Topics",
      items: [
        "RMAN Advanced Features",
        "Partitioning & Indexing Strategies",
        "Cloning & Patching Databases",
        "Scheduler & Automation",
      ],
    },
    {
      title: "Module 10: Real-World Projects & Capstone",
      items: [
        "Database setup & user management project",
        "Backup, recovery & failover implementation",
        "Performance tuning & monitoring project",
        "High availability & disaster recovery simulation",
      ],
    },
  ],
}
,
oraclePlSql: {
  title: "Oracle PL/SQL Training — Syllabus",
  accent: "#29B5E8",

  meta: {
    duration: "6–8 weeks",
    audience: "Students, Developers, Database Administrators & IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "PL/SQL Basics & Architecture",
    "Variables, Data Types & Control Structures",
    "Cursors (Implicit & Explicit)",
    "Exception Handling",
    "Stored Procedures & Functions",
    "Packages & Triggers",
    "Dynamic SQL & Bulk Processing",
    "Error Logging & Debugging",
    "Performance Optimization",
    "Real-World Projects & Capstone",
  ],
  sections: [
    {
      title: "Module 1: Introduction to PL/SQL",
      items: [
        "PL/SQL architecture and features",
        "Benefits of PL/SQL over standard SQL",
        "PL/SQL block structure: Declarative, Executable, Exception",
        "Setting up Oracle environment for PL/SQL",
      ],
    },
    {
      title: "Module 2: Variables, Data Types & Control Structures",
      items: [
        "PL/SQL data types: Scalar, Composite, LOB, Reference",
        "Declaring and initializing variables",
        "IF, CASE, LOOP, WHILE constructs",
        "Best practices for control flow",
      ],
    },
    {
      title: "Module 3: Cursors",
      items: [
        "Implicit vs Explicit cursors",
        "Cursor attributes (%FOUND, %NOTFOUND, %ROWCOUNT)",
        "Cursor FOR loops",
        "Parameterized cursors",
      ],
    },
    {
      title: "Module 4: Exception Handling",
      items: [
        "Predefined exceptions",
        "User-defined exceptions",
        "RAISE, RAISE_APPLICATION_ERROR",
        "Exception propagation and handling best practices",
      ],
    },
    {
      title: "Module 5: Stored Procedures & Functions",
      items: [
        "Creating, compiling, and executing procedures",
        "Input, output, and IN OUT parameters",
        "Creating reusable functions",
        "Calling procedures/functions from SQL and PL/SQL blocks",
      ],
    },
    {
      title: "Module 6: Packages & Triggers",
      items: [
        "Creating packages: Specification & Body",
        "Package variables and procedures",
        "Database triggers: BEFORE, AFTER, INSTEAD OF",
        "Row-level vs Statement-level triggers",
      ],
    },
    {
      title: "Module 7: Advanced PL/SQL Concepts",
      items: [
        "Dynamic SQL (EXECUTE IMMEDIATE)",
        "Bulk Processing: BULK COLLECT & FORALL",
        "Collections: VARRAY, Nested Tables, Associative Arrays",
        "PL/SQL Records and Tables",
      ],
    },
    {
      title: "Module 8: Error Logging & Debugging",
      items: [
        "DBMS_OUTPUT for debugging",
        "DBMS_APPLICATION_INFO",
        "Logging errors in tables",
        "Best practices for maintainable PL/SQL code",
      ],
    },
    {
      title: "Module 9: Performance Optimization",
      items: [
        "Optimizing queries in PL/SQL blocks",
        "Reducing context switches",
        "Using bulk operations for efficiency",
        "Profiling and tuning PL/SQL code",
      ],
    },
    {
      title: "Module 10: Real-World Projects & Capstone",
      items: [
        "Building a payroll or inventory management system",
        "Implementing triggers for automated workflows",
        "Designing packages for modular applications",
        "End-to-end PL/SQL project with reporting and optimization",
      ],
    },
  ],
}
,
oracleSql: {
  title: "Oracle SQL Training — Syllabus",
  accent: "#29B5E8",
  meta: {
    duration: "6–8 weeks",
    audience: "Students, Developers, Database Administrators & IT Professionals",
    level: "Beginner → Advanced",
    mode: "Online / Classroom",
    schedule: "Weekday & Weekend Batches",
  },
  preview: [
    "Introduction to Databases & Oracle SQL",
    "DDL, DML & TCL Commands",
    "Constraints & Joins",
    "Subqueries & Set Operators",
    "Views & Indexes",
    "Functions & Expressions",
    "PL/SQL Basics",
    "Stored Procedures & Triggers",
    "Performance Tuning",
    "Real-World Projects",
  ],
  sections: [
    {
      title: "Module 1: Introduction to Oracle SQL",
      items: [
        "Database concepts & Oracle architecture",
        "Overview of SQL & PL/SQL",
        "Oracle environment setup & tools (SQL*Plus, SQL Developer)",
      ],
    },
    {
      title: "Module 2: SQL Basics",
      items: [
        "Data types in Oracle",
        "DDL (CREATE, ALTER, DROP)",
        "DML (INSERT, UPDATE, DELETE)",
        "TCL (COMMIT, ROLLBACK, SAVEPOINT)",
      ],
    },
    {
      title: "Module 3: Constraints & Joins",
      items: [
        "Primary key, Foreign key, Unique, Not Null, Check",
        "Equi join, Inner join, Outer join, Self join, Cross join",
      ],
    },
    {
      title: "Module 4: Advanced SQL Queries",
      items: [
        "Single-row & multi-row subqueries",
        "Set operators (UNION, INTERSECT, MINUS)",
        "Inline views & correlated subqueries",
      ],
    },
    {
      title: "Module 5: Views, Indexes & Sequences",
      items: [
        "Creating & managing views",
        "Indexes & their types",
        "Sequences & synonyms",
      ],
    },
    {
      title: "Module 6: Functions & Expressions",
      items: [
        "Single-row functions (character, numeric, date, conversion)",
        "Aggregate functions",
        "Group By & Having",
        "Analytical functions (RANK, DENSE_RANK, ROW_NUMBER)",
      ],
    },
    {
      title: "Module 7: Introduction to PL/SQL",
      items: [
        "PL/SQL architecture",
        "Variables & data types",
        "Control structures (IF, CASE, LOOP, WHILE)",
        "Cursors (implicit & explicit)",
      ],
    },
    {
      title: "Module 8: Stored Procedures & Triggers",
      items: [
        "Creating procedures & functions",
        "Exception handling",
        "Packages in PL/SQL",
        "Triggers & their types",
      ],
    },
    {
      title: "Module 9: Performance Tuning & Optimization",
      items: [
        "Query optimization techniques",
        "Explain Plan",
        "Indexes & statistics usage",
      ],
    },
    {
      title: "Module 10: Real-World Projects & Capstone",
      items: [
        "Designing & querying complex databases",
        "Building stored procedures for business logic",
        "Data migration & reporting scenarios",
      ],
    },
  ],
}
,

  businessanalyst: {
    title: "Business Analyst Online Training — Syllabus",
    accent: "#005BAC", // Blue
    meta: {
      duration: "8–10 weeks",
      audience: "Students, Business Analysts, Project Coordinators, Consultants",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    preview: [
      "BA Fundamentals",
      "SDLC & Methodologies",
      "Requirements Gathering",
      "UML & Use Cases",
      "Process Modeling",
      "Agile & Scrum for BAs",
      "Documentation Skills",
      "Tools (Jira, Confluence, Balsamiq)",
      "Stakeholder Management",
      "Capstone Project",
    ],
    sections: [
      {
        title: "Module 1: Business Analysis Foundations",
        items: [
          "What is Business Analysis?",
          "Role of BA in projects",
          "SDLC models overview",
        ],
      },
      {
        title: "Module 2: Requirements Engineering",
        items: [
          "Requirements elicitation techniques",
          "Use case & user stories",
          "Functional vs non-functional requirements",
        ],
      },
      {
        title: "Module 3: Process & Modeling",
        items: [
          "UML basics",
          "Process flow diagrams",
          "Wireframes & mockups",
        ],
      },
      {
        title: "Module 4: Agile BA",
        items: [
          "BA role in Agile teams",
          "Backlog grooming",
          "Working with Scrum Master & Product Owner",
        ],
      },
      {
        title: "Module 5: Tools & Documentation",
        items: [
          "Jira for requirement tracking",
          "Confluence for documentation",
          "Balsamiq/Draw.io for diagrams",
        ],
      },
      {
        title: "Module 6: Capstone Project",
        items: [
          "Elicit requirements for case study",
          "Create UML/use case diagrams",
          "Prepare BRD & SRS docs",
        ],
      },
    ],
  },
  // Add more courses like this:
  // python: { title, accent, meta, preview, sections: [...] },
  // fullstack: { ... },
};
