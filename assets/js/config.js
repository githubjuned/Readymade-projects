/**
 * ==============================================================================
 * CENTRAL CONFIGURATION FILE — NEXUS PRECISION ENGINEERING STUDIO
 * ==============================================================================
 * 
 * Edit your contact information, business details, social links, and message
 * templates in this single file. All changes here automatically reflect
 * across the entire website!
 */

const SITE_CONFIG = {
  // Brand Information
  brand: {
    name: "Nexus Precision Studio",
    shortName: "Nexus Studio",
    tagline: "Your Ideas. Our Innovation. One Powerful Project.",
    subTagline: "Engineering Projects Made Affordable for Every Student.",
    systemTag: "ENG_LAB // R&D_SYSTEMS",
    statusBadge: "OPEN FOR ACADEMIC BATCH 2024–2026",
    copyrightYear: new Date().getFullYear(),
  },

  // Contact Information (EDIT THESE PLACEHOLDERS)
  contact: {
    // WhatsApp Phone Number (include country code without + or spaces for the API link, e.g. '919642912613')
    whatsappRaw: "919642912613",
    // Formatted WhatsApp number displayed on the website UI
    whatsappDisplay: "+91 96429 12613",

    // Business Email
    email: "kj1201577@gmail.com",

    // Physical / Hub Location
    location: "Technology & Innovation Park, Hyderabad / Bangalore, India",

    // Operating Helpdesk Hours
    hours: "9:00 AM – 9:00 PM IST (Mon – Sat)",

    // Social Media Links
    instagram: "https://instagram.com/nexusprecisionstudio", // [ADD YOUR INSTAGRAM URL]
    linkedin: "https://linkedin.com/company/nexus-precision-studio", // [ADD YOUR LINKEDIN URL]
    github: "https://github.com/nexus-precision-studio", // Optional GitHub or project portfolio link
  },

  // WhatsApp Pre-filled Message Templates
  whatsappMessages: {
    general: "Hi Nexus Precision Studio, I want to discuss an engineering project for my college submission.",
    heroCta: "Hi Nexus Precision Studio, I would like to discuss my final year engineering project requirement.",
    quickChat: "Hi Nexus Precision Studio, I have a quick question regarding engineering project guidance.",
    needIdea: "Hi Nexus Precision Studio, I need project idea suggestions according to my engineering branch.",
    haveRequirement: "Hi Nexus Precision Studio, I have an approved college project topic and need a quotation and feasibility guidance.",
    askPricing: "Hi Nexus Precision Studio, I want to know the affordable quotation and budget estimation for my project.",
    unconventionalIdea: "Hi Nexus Precision Studio, I have an unconventional or interdisciplinary project idea to discuss.",
    degreeTrack: "Hi Nexus Precision Studio, I am looking for a Final Year Major Project for my degree.",
    miniProject: "Hi Nexus Precision Studio, I need a fast-turnaround Semester Mini Project.",
    iotProject: "Hi Nexus Precision Studio, I want to develop an IoT & Cloud Telemetry Project.",
    aimlProject: "Hi Nexus Precision Studio, I am interested in an AI / Machine Learning Project.",
    softwareProject: "Hi Nexus Precision Studio, I need a Full-Stack Web or Software Project.",
    embeddedProject: "Hi Nexus Precision Studio, I need an Embedded Systems & Hardware Project.",
    roboticsProject: "Hi Nexus Precision Studio, I am looking for a Robotics and Automation Project.",
    customRd: "Hi Nexus Precision Studio, I have a custom R&D or hackathon project requirement.",
    
    // Function to generate project-specific WhatsApp link
    forProject: function(projectTitle) {
      return `Hi Nexus Precision Studio, I am interested in discussing and building the project: "${projectTitle}". Please share feasibility, timeline, and pricing.`;
    }
  },

  // Future Backend API Configuration
  // If you configure a backend server (e.g. Node/Express, Python Flask/FastAPI, or PHP),
  // enter your endpoint URL below. Leave as null to use client-side WhatsApp/Email submission.
  apiEndpoint: null, // e.g., "https://your-api-domain.com/api/enquiries"

  // Feature Toggles
  features: {
    enableDirectWhatsAppInForm: true,
    enableSearchInPortfolio: true,
    enableFilterInPortfolio: true,
    enableFloatingWhatsAppButton: true,
  }
};

// Helper function to build WhatsApp URLs safely
function getWhatsAppUrl(customMessage = null) {
  const number = SITE_CONFIG.contact.whatsappRaw.replace(/[^0-9]/g, '');
  const message = customMessage || SITE_CONFIG.whatsappMessages.general;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// Make accessible to window
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
  window.getWhatsAppUrl = getWhatsAppUrl;
}

