/**
 * Portfolio Data Configuration
 * Edit content here without touching HTML or CSS
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Muhammed Nihal",
    title: "QA Automation Engineer",
    currentRole: "Junior QA Engineer at IOCOD Infotech",
    headline: "Engineering reliability where software meets AI.",
    bio: "I’m Muhammed Nihal. I specialize in building scalable test automation frameworks, validating intelligent AI agents, and ensuring end-to-end system reliability.",
    contactEmail: "nihal.offcl@gmail.com",
    contactPhone: "+91 9544252302"
  },

  dailyDrivers: [
    { name: "Playwright", icon: "play" },
    { name: "Appium", icon: "mob" },
    { name: "Python", icon: "PY" },
    { name: "TypeScript", icon: "TS" },
    { name: "Postman", icon: "send" }
  ],

  projects: [
    {
      title: "Scalable Web Analytics Test Engine",
      description: "Architected a robust Playwright + TypeScript test framework for a production analytics platform, building reusable utilities that significantly boosted execution speed and test maintainability.",
      featured: true,
      tags: [
        { name: "Playwright", icon: "play" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "Git", icon: "git" }
      ]
    },
    {
      title: "Production Mobile Workflow Automation",
      description: "Engineered automated end-to-end mobile test suites using Appium and Python, cutting test flakiness and optimizing execution cycles across critical user journeys.",
      featured: false,
      tags: [
        { name: "Appium", icon: "mob" },
        { name: "Python", icon: "PY" },
        { name: "Mobile Testing", icon: "mob" }
      ]
    },
    {
      title: "AI Agent & Multi-Channel Validation",
      description: "Validated AI-powered platforms and LLM models across SMS and voice channels, identifying critical edge-case workflow breakpoints to ensure real-world system accuracy.",
      featured: false,
      tags: [
        { name: "AI Testing", icon: "bot" },
        { name: "LLM Validation", icon: "chat" },
        { name: "Postman", icon: "send" },
        { name: "JMeter", icon: "gauge" },
        { name: "JIRA", icon: "check" }
      ]
    }
  ],

  expertise: [
    {
      title: "Automation & Frameworks",
      colSpan: "col-span-7",
      skills: [
        { name: "Playwright", icon: "play" },
        { name: "WebdriverIO", icon: "globe" },
        { name: "Appium", icon: "mob" },
        { name: "Postman (API Testing)", icon: "send" },
        { name: "Apache JMeter (Performance)", icon: "gauge" }
      ]
    },
    {
      title: "Languages & Tools",
      colSpan: "col-span-5",
      skills: [
        { name: "Python", icon: "PY" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "gh" }
      ]
    },
    {
      title: "Testing & Quality",
      colSpan: "col-span-5",
      skills: [
        { name: "End-to-End System Validation", icon: "check" },
        { name: "Functional & Regression Testing", icon: "check" },
        { name: "API Testing", icon: "check" },
        { name: "Agile / SDLC & STLC", icon: "check" },
        { name: "Defect Lifecycle Management (JIRA, Asana)", icon: "check" }
      ]
    },
    {
      title: "Specialized Domain",
      colSpan: "col-span-7",
      skills: [
        { name: "AI Agent & LLM Multi-Channel Validation", icon: "bot" },
        { name: "Scalable Framework Design", icon: "layers" },
        { name: "Cloud-based Execution", icon: "cloud" }
      ]
    }
  ],

  experience: [
    {
      role: "Junior QA Engineer",
      company: "IOCOD Infotech Pvt. Ltd.",
      period: "Apr 2026 – Present",
      description: "Architected Playwright web automation and engineered Appium mobile automation suites. Validated AI chatbots and agents across multi-channel integrations.",
      isCurrent: true
    },
    {
      role: "Associate Test Engineer",
      company: "Testing Mavens Pvt. Ltd.",
      period: "Apr 2025 – Feb 2026",
      description: "Executed end-to-end validation for AI-powered UI automation platforms, managing comprehensive regression and smoke suites and identifying critical edge-case defects.",
      isCurrent: false
    }
  ],

  education: [
    {
      title: "Master of Computer Applications (MCA)",
      subtitle: "Rajagiri College of Social Sciences"
    },
    {
      title: "Bachelor of Science in Physics",
      subtitle: "Nirmalagiri College"
    },
    {
      title: "Qualified UGC-NET Examination",
      subtitle: "2024"
    }
  ],

  seminars: [
    {
      type: "Seminar",
      title: "NVIDIA’s Instant Neural Graphics",
      description: "Seminar on high-performance neural rendering architectures."
    },
    {
      type: "Workshop",
      title: "Appium: Mobile Automation using Python",
      description: "Technical workshop and test framework design."
    }
  ],

  contact: [
    {
      icon: "mail",
      label: "nihal.offcl@gmail.com",
      href: "mailto:nihal.offcl@gmail.com",
      external: false
    },
    {
      icon: "phone",
      label: "+91 9544252302",
      href: "tel:+919544252302",
      external: false
    },
    {
      icon: "li",
      label: "linkedin.com/in/muhammed-nihalll",
      href: "https://linkedin.com/in/muhammed-nihalll/",
      external: true
    },
    {
      icon: "gh",
      label: "github.com/Nihal-IbnNizar",
      href: "https://github.com/Nihal-IbnNizar",
      external: true
    }
  ]
};
