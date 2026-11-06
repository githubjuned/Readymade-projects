# Nexus Precision Studio — Engineering Project Development Platform

A premium, modern engineering project development and consultation website tailored for **Polytechnic Diploma, B.Tech, BE, and Final-Year engineering students** across all engineering branches (ECE, CSE, IoT, AI/ML, Robotics, Embedded Systems, Mechanical, Electrical, and beyond).

---

## 🚀 Key Highlights & Business Architecture

- **Strictly Service & Consultation Oriented:** Zero e-commerce baggage—no cart, no checkout, no "buy now" buttons, and no fake pricing lists.
- **Centralized Configuration:** All contact details (WhatsApp, email, phone, location, social links, working hours) are managed in a single file (`assets/js/config.js`).
- **Dynamic Portfolio Showcase:** Showcase personal engineering projects with instant category filtering, real-time search, and interactive technical breakdown modals (`assets/js/projects-data.js`).
- **No Fake Reviews or Clients:** Clean, authoritative, deep-tech engineering aesthetic that treats students like engineers.
- **Full Viva & Submission Coaching:** Highlights complete deliverables (hardware, schematics, source code, IEEE reports, PPT, and viva defense).
- **Mobile, Tablet & Desktop Responsive:** Features modern glassmorphic navigation, mobile slide-over drawer, and high-DPI vector illustrations.

---

## 📁 Project Structure

```text
readymadeproject/
├── index.html                      # Primary modern, semantic homepage
├── code.html                       # Synchronized entry point
├── README.md                       # Documentation & customization guide
├── DESIGN.md                       # Design system specifications & style tokens
├── screen.png                      # Visual reference snapshot
└── assets/
    ├── css/
    │   └── style.css               # Design system, blueprint grid, micro-interactions, elevations
    ├── js/
    │   ├── config.js               # ⭐ CENTRAL CONTACT & BRAND CONFIGURATION
    │   ├── projects-data.js        # ⭐ EDITABLE PORTFOLIO CASE STUDIES
    │   └── main.js                 # Dynamic rendering, mobile drawer, modal, form validation
    └── images/
        ├── logo.svg                # High-precision vector logo mark
        └── projects/               # High-tech SVG blueprint illustrations
            ├── bench.svg           # Hero laboratory testbench
            ├── irrigation.svg      # IoT telemetry schematic
            ├── robotics.svg        # 6-Axis robotic arm blueprint
            ├── vision.svg          # Edge AI computer vision reticle
            ├── stm32.svg           # STM32 PCB double-layer layout
            ├── scada.svg           # Industrial SCADA dashboard
            └── rover.svg           # Holonomic Mecanum rover chassis
```

---

## ⚙️ How to Update Contact Details (`assets/js/config.js`)

Open `assets/js/config.js` in any text editor. Modify the values inside `SITE_CONFIG.contact`:

```javascript
contact: {
  // 1. WhatsApp number with country code (numbers only, e.g. 919642912613)
  whatsappRaw: "919642912613",

  // 2. Formatted phone number displayed on website buttons and header
  whatsappDisplay: "+91 96429 12613",

  // 3. Official business or lab email
  email: "kj1201577@gmail.com",

  // 4. Lab / Office Location
  location: "Technology & Innovation Park, Hyderabad / Bangalore, India",

  // 5. Operating hours
  hours: "9:00 AM – 9:00 PM IST (Mon – Sat)",

  // 6. Social Media URLs
  instagram: "https://instagram.com/yourhandle",
  linkedin: "https://linkedin.com/company/yourcompany"
}
```

Any changes in `config.js` **automatically update all phone numbers, email links, WhatsApp message dispatchers, and footer text across the entire website!**

---

## 🛠️ How to Add or Edit Portfolio Projects (`assets/js/projects-data.js`)

To add a new project, simply open `assets/js/projects-data.js` and append an object to the `PROJECTS_DATA` array:

```javascript
{
  id: "project-drone-mapper",
  title: "Autonomous LiDAR Mapping Drone with Obstacle Avoidance",
  category: "robotics", // Options: 'iot', 'robotics', 'ai', 'hardware', 'software', 'electrical'
  categoryLabel: "ROBOTICS // AUTONOMOUS UAV",
  badge: "FLIGHT TESTED",
  summary: "GPS-guided quadcopter drone running ROS and SLAM algorithms for real-time 3D topographical terrain mapping.",
  image: "assets/images/projects/your-photo.jpg", // Local image or web URL
  fallbackIcon: "flight",
  techStack: ["ROS 2", "PX4 Autopilot", "Raspberry Pi 5", "LiDAR Sensor", "Python"],
  details: {
    overview: "A lightweight quadcopter system built for agricultural and disaster management terrain mapping.",
    problem: "Ground survey in disaster-affected areas is dangerous and time-consuming for rescue teams.",
    features: [
      "Real-time 2D/3D point cloud generation using onboard LiDAR sensor.",
      "Autonomous waypoint navigation with return-to-home fail-safe.",
      "Live telemetry transmission up to 2km over 5.8GHz digital link."
    ],
    deliverables: [
      "Complete drone flight platform with carbon fiber frame",
      "ROS navigation and SLAM codebase",
      "Full circuit schematic and power distribution board files",
      "Comprehensive college thesis and viva question bank"
    ]
  }
}
```

The website will automatically generate the card, apply category filters, enable keyword searching, and update the interactive detail modal.

---

## 🌐 Running Locally & Testing

You can run and test the website using any local web server:

### Option 1: Python Simple Server
```powershell
python -m http.server 8000
```
Then open: [http://localhost:8000](http://localhost:8000)

### Option 2: Node.js (npx serve)
```powershell
npx serve .
```

### Option 3: Direct File Opening
Double-click `index.html` to open it in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

---

## 📋 Features Checklist Verification

| Requirement | Implementation | Status |
| :--- | :--- | :--- |
| **Non-e-commerce** | Pure service & consultation platform. No carts, checkout, or price lists. | ✅ Verified |
| **Color Palette** | Deep Navy (`#0B1220`), Blue (`#2563EB`), Cyan (`#06B6D4`), White (`#FFFFFF`), Light Canvas (`#F8FAFC`). | ✅ Verified |
| **Typography** | Modern **Geist** (`Geist` for headings & body, `Geist Mono` for telemetry & code tags). | ✅ Verified |
| **Tactile Slope Design** | Realistic physical slope buttons (`.btn-slope`), slope icons (`.icon-slope`), and floating WhatsApp pill (`.floating-slope-wa`) with specular highlights and bevel depth. | ✅ Verified |
| **WhatsApp Direct** | Configured to **+91 96429 12613** (`919642912613`) with immediate autofill redirect templates. | ✅ Verified |
| **Email Direct** | Configured to **kj1201577@gmail.com** with formatted mailto generation. | ✅ Verified |
| **Hero Headline** | *"Your Ideas. Our Innovation. One Powerful Project."* | ✅ Verified |
| **Hero Subtitle** | *"Engineering Projects Made Affordable for Every Student."* | ✅ Verified |
| **Primary CTA** | *"Discuss Your Project"* | ✅ Verified |
| **Secondary CTA** | *"Explore Our Work"* | ✅ Verified |
| **11 Sections** | Navigation, Hero, About, Services, Domains, Portfolio, Why Choose Us, Idea Consultation, How It Works, Contact Form, Footer. | ✅ Verified |
| **Central Config** | `assets/js/config.js` with instant binding for WhatsApp, Email, Location, Socials. | ✅ Verified |
| **Editable Portfolio** | `assets/js/projects-data.js` with instant filtering, search, and detail modal. | ✅ Verified |
| **Form Handling** | Client validation for all fields, prepared for backend endpoint, direct WhatsApp dispatch. | ✅ Verified |
| **Responsiveness** | Mobile drawer, responsive grid, tablet and desktop layouts tested. | ✅ Verified |

