const courses = {
  fullstack: {
    title: "Full Stack Web Development",
    desc: "Build complete web applications from frontend to backend with real-world projects.",
    highlights: [
      "Beginner friendly",
      "Hands-on projects",
      "Industry relevant stack"
    ],
    includes: [
      "HTML, CSS, JavaScript",
      "Node.js, Express & APIs",
      "Mini + Major Projects",
      "Deployment basics"
    ],
    syllabus: [
      "HTML & CSS Fundamentals",
      "JavaScript & DOM",
      "Backend with Node.js",
      "Database & Authentication",
      "Full Stack Project & Deployment"
    ]
  },

  python: {
    title: "Python Development",
    desc: "Learn Python programming with strong logic building and real applications.",
    highlights: [
      "Strong programming foundation",
      "Logic & problem solving",
      "Beginner friendly"
    ],
    includes: [
      "Python Basics",
      "Control Statements & Functions",
      "Mini Project",
      "Real-world examples"
    ],
    syllabus: [
      "Python Syntax & Data Types",
      "Loops & Functions",
      "File Handling",
      "Basic Automation",
      "Mini Project"
    ]
  },

  java: {
    title: "Java Development",
    desc: "Master Core Java concepts used in real-world software development.",
    highlights: [
      "Object-Oriented Programming",
      "Industry standard language",
      "Backend foundation"
    ],
    includes: [
      "Core Java",
      "OOP Concepts",
      "Backend Basics",
      "Project Work"
    ],
    syllabus: [
      "Java Basics & Syntax",
      "OOP Concepts",
      "Exception Handling",
      "Collections Framework",
      "Mini Project"
    ]
  },

  cloud: {
    title: "Cloud Computing",
    desc: "Understand cloud platforms and deployment used in modern applications.",
    highlights: [
      "Cloud fundamentals",
      "Deployment knowledge",
      "Industry exposure"
    ],
    includes: [
      "Cloud Concepts",
      "AWS Basics",
      "Hosting & Deployment",
      "Cloud Project"
    ],
    syllabus: [
      "Cloud Computing Basics",
      "AWS Services Overview",
      "Virtual Machines & Storage",
      "Deploying Applications",
      "Cloud Mini Project"
    ]
  },

  ai: {
    title: "AI & Machine Learning",
    desc: "Learn Artificial Intelligence and Machine Learning fundamentals with use cases.",
    highlights: [
      "AI basics",
      "Machine learning concepts",
      "Practical exposure"
    ],
    includes: [
      "ML Fundamentals",
      "Model Training",
      "Real Use Cases",
      "Mini Project"
    ],
    syllabus: [
      "Introduction to AI & ML",
      "Data & Features",
      "Basic Algorithms",
      "Model Evaluation",
      "Mini Project"
    ]
  },

  blockchain: {
    title: "Blockchain Fundamentals",
    desc: "Understand blockchain technology, crypto concepts, and Web3 basics.",
    highlights: [
      "Blockchain basics",
      "Crypto & Web3",
      "Future-ready tech"
    ],
    includes: [
      "Blockchain Concepts",
      "Cryptocurrency Basics",
      "Web3 Overview",
      "Hands-on Learning"
    ],
    syllabus: [
      "Blockchain Introduction",
      "How Blocks & Chains Work",
      "Crypto & Wallets",
      "Smart Contracts Overview",
      "Blockchain Mini Project"
    ]
  }
};

// GET COURSE FROM URL
const params = new URLSearchParams(window.location.search);
const key = params.get("course") || "fullstack";
const c = courses[key];

// SAFETY CHECK
if (!c) {
  alert("Invalid course selected");
}

// UPDATE CONTENT
document.getElementById("courseTitle").innerText = c.title;
document.getElementById("courseDesc").innerText = c.desc;

// CLEAR FIRST
document.getElementById("courseHighlights").innerHTML = "";
document.getElementById("courseIncludes").innerHTML = "";
document.getElementById("courseSyllabus").innerHTML = "";

// HIGHLIGHTS
c.highlights.forEach(h => {
  document.getElementById("courseHighlights").innerHTML += `<li>✔ ${h}</li>`;
});

// INCLUDES
c.includes.forEach(i => {
  document.getElementById("courseIncludes").innerHTML += `<div>• ${i}</div>`;
});

// SYLLABUS
c.syllabus.forEach(s => {
  document.getElementById("courseSyllabus").innerHTML +=
    `<div class="syllabus-card hover-pop">${s}</div>`;
});
