/**
 * ==============================================================================
 * PORTFOLIO DATA FILE — NEXUS PRECISION ENGINEERING STUDIO
 * ==============================================================================
 * 
 * To add, edit, or delete projects you have developed, simply modify the array below.
 * The website will automatically update the cards, filter categories, search indexes,
 * and the interactive detail popups!
 * 
 * HOW TO ADD A NEW PROJECT:
 * Copy and paste the template below at the bottom of the PROJECTS_DATA array:
 * 
 * {
 *   id: "my-new-project-id",
 *   title: "Your Project Title Here",
 *   category: "iot", // Choose from: 'iot', 'robotics', 'ai', 'hardware', 'software', 'electrical'
 *   categoryLabel: "IOT // EDGE SENSOR",
 *   badge: "COMPLETED & VERIFIED",
 *   summary: "A two-sentence summary describing what your project does.",
 *   image: "assets/images/projects/my-photo.jpg", // Path to your photo or image URL
 *   techStack: ["ESP32", "C++", "MQTT", "React"],
 *   details: {
 *     overview: "Full technical paragraph explaining the architecture.",
 *     problem: "What real-world engineering challenge does this solve?",
 *     features: [
 *       "First key technical feature or capability.",
 *       "Second measurable outcome or metric.",
 *       "Third hardware or software specification."
 *     ],
 *     deliverables: [
 *       "Working physical hardware prototype",
 *       "Full tested source code repository",
 *       "Circuit schematic diagram & component bill",
 *       "Complete IEEE-formatted project report & PPT"
 *     ]
 *   }
 * }
 */

const PROJECTS_DATA = [
  {
    id: "project-mecanum-robot",
    title: "Award-Winning Autonomous Mecanum Wheel Robot with Memory Robotic Arm",
    category: "robotics",
    categoryLabel: "ROBOTICS // TECH FEST 2025 WINNER",
    badge: "DISTRICT & STATE WINNER",
    summary: "District-Level and State-Level Winner at Sujana Tech Fest 2025! Features omnidirectional Mecanum locomotion, obstacle avoidance, line following, smartphone app control, computer vision object tracking, robotic arm with memory mode, and block-clearing mechanism.",
    image: "assets/images/projects/mecanum_robot.jpg",
    remoteImage: "https://media.licdn.com/dms/image/v2/D5622AQFCplMt8HYCAQ/feedshare-shrink_800/B56ZfpXbCOH8Ag-/0/1751966935045?e=2147483647&v=beta&t=Ip0A-Cq-98my6gZZNzQepzKHOSG5kKMfcMDw35hrO7E",
    externalUrl: "https://lnkd.in/p/gdeZqHt8",
    fallbackIcon: "smart_toy",
    techStack: ["Mecanum Wheels", "Robotic Arm", "Line Following", "Obstacle Avoidance", "Phone App Control", "Object Tracking"],
    details: {
      overview: "A multi-modal robotics system awarded both District-Level and State-Level recognition at Sujana Tech Fest 2025. Engineered with omnidirectional Mecanum locomotion, sensor-driven obstacle avoidance, line following, Bluetooth/Wi-Fi smartphone app remote control, computer vision object tracking, and an articulating robotic arm with automated memory mode and block-clearing mechanism.",
      problem: "Modern industrial logistics and automated guided vehicles (AGVs) require multi-directional agility in confined spaces alongside dexterous manipulation without needing separate fixed robotic arms.",
      features: [
        "Omnidirectional 360-degree Mecanum locomotion allowing zero-radius turns and sideways strafing.",
        "Dual-mode navigation: precision line following and ultrasonic/infrared obstacle detection.",
        "Custom smartphone mobile application for real-time remote steering and parameter tuning.",
        "Computer vision object tracking pipeline for autonomous payload targeting.",
        "Articulating robotic arm equipped with a teach-and-playback Memory Mode for repeat automation.",
        "Integrated block-clearing and sorting mechanism for warehouse simulated tasks."
      ],
      deliverables: [
        "Complete functional physical Mecanum robot prototype with multi-axis arm",
        "Full microcontroller firmware & custom smartphone control application",
        "Circuit schematics, PCB layout, and component wiring diagrams",
        "State & District award presentation kit, documentation, and viva prep guide"
      ]
    }
  },
  {
    id: "project-niat-iot-n8n",
    title: "Smart IoT & N8N Workflow Automation Telemetry System",
    category: "iot",
    categoryLabel: "IOT // N8N AUTOMATION",
    badge: "NIAT INNOVATION",
    summary: "Engineered smart IoT architecture built at NIAT University using ESP32, sensor arrays, and N8N workflow automations to enable real-time device-to-device communication and intelligent cloud telemetry.",
    image: "assets/images/projects/niat_iot_n8n.jpg",
    remoteImage: "https://media.licdn.com/dms/image/v2/D5622AQG76AzFWyLFyw/feedshare-image-high-res/B56Zng9Q9gHQAo-/0/1760415815026?e=2147483647&v=beta&t=82IFb5XzjqHrW3mOckzZHQA0CY20jYIA9oLCYuNfFvI",
    externalUrl: "https://lnkd.in/p/gJ7qvgad",
    fallbackIcon: "hub",
    techStack: ["ESP32", "N8N Workflows", "IoT Sensors", "Cloud Webhooks", "Automation API", "Wi-Fi Telemetry"],
    details: {
      overview: "An advanced IoT automation project developed during the hands-on workshop at NIAT University. Combines ESP32 microcontrollers and sensor hardware with the orchestration power of N8N workflows, transforming raw telemetry into automated actionable events across cloud services and mobile endpoints.",
      problem: "Traditional IoT deployments lack flexible middleware automation, requiring bulky backend servers and complex code to route sensor alerts and device state changes across different third-party platforms.",
      features: [
        "Seamless integration between ESP32 hardware telemetry and N8N visual automation nodes.",
        "Automated multi-channel alert dispatch (Telegram/WhatsApp/Email) triggered by threshold sensor readings.",
        "Low-power Wi-Fi data packets with local buffering to prevent telemetry drops during network outages.",
        "Modular workflow triggers adaptable to smart campus, agriculture, and industrial monitoring environments."
      ],
      deliverables: [
        "Tested ESP32 C++ firmware with Wi-Fi & webhook event handlers",
        "Exportable N8N automation workflow JSON configuration files",
        "Hardware breadboard wiring diagram & component spec sheet",
        "Comprehensive technical documentation and academic viva explanation"
      ]
    }
  },
  {
    id: "project-niat-bootcamp",
    title: "Full-Stack Embedded Engineering & Architecture Foundation",
    category: "hardware",
    categoryLabel: "HARDWARE // SYSTEMS DEV",
    badge: "NIAT BOOTCAMP 13",
    summary: "Engineered at NxtWave Institute of Advanced Technologies (NIAT) Bootcamp 13, covering rigorous systems engineering, microcontroller interfacing, hardware-software integration, and scalable full-stack development.",
    image: "assets/images/projects/niat_bootcamp.jpg",
    remoteImage: "https://media.licdn.com/dms/image/v2/D5622AQEz0-TMjYGGfw/feedshare-image-high-res/B56Zf0E9.IHoA0-/0/1752146637130?e=2147483647&v=beta&t=yAzsmUGhSnZCqM0kDSQZeT2khod_CK6DNDjFtDAIvTs",
    externalUrl: "https://lnkd.in/p/gkEF8XBC",
    fallbackIcon: "developer_board",
    techStack: ["Embedded Systems", "Hardware Architecture", "Full-Stack Dev", "Microcontrollers", "Rapid Prototyping"],
    details: {
      overview: "Developed through the rigorous engineering immersion of NIAT Bootcamp 13 at NxtWave Institute of Advanced Technologies. Focuses on production-grade systems architecture, robust microcontroller firmware, circuit design principles, and end-to-end integration.",
      problem: "Engineering students often face a gap between pure academic textbook theory and real-world industrial software-hardware development standards.",
      features: [
        "Hands-on architectural implementation bridging hardware circuit traces with software logic.",
        "Structured design patterns for scalable, reliable microcontroller and web firmware.",
        "Collaborative engineering workflows, version control, and benchtop debugging protocols.",
        "Comprehensive problem-solving methodology evaluated by technical mentors."
      ],
      deliverables: [
        "Complete hardware testbench prototypes and working circuit schematics",
        "Modular, well-commented source code repositories",
        "Comprehensive engineering portfolio documentation",
        "Industry-aligned viva questions and technical architecture review guide"
      ]
    }
  },
  {
    id: "project-gps-esp8266",
    title: "Real-Time GPS Satellite Tracking System using ESP8266 & NEO-6M",
    category: "iot",
    categoryLabel: "IOT // SATELLITE TELEMETRY",
    badge: "WORKING HARDWARE",
    summary: "Custom DIY GPS tracking unit displaying real-time latitude, longitude, and satellite telemetry on a local LCD display using the ESP8266 Wi-Fi module and u-blox NEO-6M GPS receiver.",
    image: "assets/images/projects/gps_esp8266.jpg",
    remoteImage: "https://media.licdn.com/dms/image/v2/D5622AQEyVMteom74Fw/feedshare-image-high-res/B56ZfpY8m_GoBU-/0/1751967331416?e=2147483647&v=beta&t=TKFgj4s7mZxwVxZu7Z5WsPaYAcEcoL_ghjme__zPmeI",
    externalUrl: "https://lnkd.in/p/g8mkUcvT",
    fallbackIcon: "location_on",
    techStack: ["ESP8266", "NEO-6M GPS", "16x2 LCD", "UART Serial Protocol", "NMEA Parsing", "C++ / Arduino"],
    details: {
      overview: "A real-time satellite geolocation tracking system engineered using the ESP8266 Wi-Fi microcontroller and u-blox NEO-6M GPS receiver module. Designed and built from scratch to parse raw NMEA satellite strings over hardware UART and render accurate live latitude, longitude, and fix status on an alphanumeric LCD display.",
      problem: "Asset tracking and vehicle navigation systems require cost-effective, low-power GPS decoding units that can reliably process NMEA satellite sentences without relying on expensive proprietary navigation hardware.",
      features: [
        "Hardware UART serial communication interfacing NEO-6M satellite receiver with ESP8266.",
        "Real-time NMEA sentence parsing extracting live latitude, longitude, altitude, and timestamp.",
        "Clear alphanumeric 16x2 LCD display integration via I2C for instant field coordinate verification.",
        "Low-power Wi-Fi readiness for wireless telemetry transmission to cloud tracking dashboards."
      ],
      deliverables: [
        "Bench-tested physical hardware prototype on breadboard / PCB layout",
        "Optimized ESP8266 Arduino C++ firmware with TinyGPS++ parsing",
        "Complete pinout schematics and UART wiring connection guide",
        "Comprehensive project viva defense questions and IEEE report"
      ]
    }
  },
  {
    id: "project-irrigation",
    title: "Solar-Powered IoT Precision Irrigation & Soil Telemetry",
    category: "iot",
    categoryLabel: "IOT // WIRELESS TELEMETRY",
    badge: "BENCH TESTED",
    summary: "Automated multi-depth soil moisture sensing, LoRaWAN wireless sensor telemetry, solar battery management, and mobile alert interface for agricultural efficiency.",
    image: "assets/images/projects/irrigation.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIhrg_aWA7dOI9X-ENt988dLhs2D7C7rDMb2zHGSahFPg3uKJCvBekh6wG5lX4-r8qYb8Ll2NTieekTzB2OSo-zLeoCMojSTUErF8WIyo1IMI3Cvj2d9cXnwf3vrjv6iFSI8QYFhIkrPI1z_SSLqzksz3-qP3sZ1iP4EoZVphhzWfHlnzB3bB8dCgveGQqTS1nfNzYhztLJFdHm9jLXmw_jgfRdhS0yU3pLcFwBdPp",
    fallbackIcon: "water_drop",
    techStack: ["ESP32", "LoRa 868MHz", "Capacitive Moisture Sensor", "MPPT Solar", "Blynk IoT"],
    details: {
      overview: "An off-grid agricultural smart system engineered to optimize soil moisture levels through low-power sensors, long-range wireless packets, and solar battery storage. Designed to operate autonomously in remote fields.",
      problem: "Traditional agriculture faces severe water waste and power instability in rural environments where cellular networks and electrical power grids are intermittent or nonexistent.",
      features: [
        "Sub-GHz LoRa telemetry transmits sensor packets up to 3km without relying on active cellular networks.",
        "Solar harvesting unit with dual 18650 lithium cells for continuous 24/7 off-grid operation.",
        "Automated threshold-triggered solenoid valves to eliminate water wastage and over-irrigation.",
        "Mobile phone synchronization displaying real-time volumetric water content and battery health."
      ],
      deliverables: [
        "Fully soldered transmitter & receiver hardware prototype",
        "ESP32 C++ firmware with sleep-mode power optimization",
        "Complete circuit schematic & wiring diagram",
        "IEEE-formatted project thesis and presentation slide deck"
      ]
    }
  },
  {
    id: "project-robotics",
    title: "6-Axis Articulated Vision-Guided Robotic Sorter",
    category: "robotics",
    categoryLabel: "ROBOTICS // MECHATRONICS",
    badge: "LAB DEMONSTRATED",
    summary: "Overhead camera object recognition paired with inverse kinematics path planning for automated pick-and-place industrial defect sorting.",
    image: "assets/images/projects/robotics.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmYl2-88PYDPe54zS3m8hSb2BX2BD3hRqpS7d_6woYL3F1OLeTlz17r1en9Lhp1y0refaIhT3sfzWFyPiXpjlVqh_9f47nMBw0TOhkUaW4BPehcyhf3dZ6itG8Swm-j9GnZ0YP973hhSUbKHP4eQgy0qD_PiYZLOdyl_Q-fJIQP6cEeINJTU0nblJ8kqq989HOZFch_4PwYYi-528toyPcUnQiQZMs6Xz__vmRJa-x",
    fallbackIcon: "precision_manufacturing",
    techStack: ["Inverse Kinematics", "OpenCV", "PCA9685 I2C", "High-Torque Servos", "Python"],
    details: {
      overview: "A benchtop robotic manipulator utilizing inverse kinematics and overhead OpenCV machine vision to identify, track, and sort parts on an active conveyor belt with precision repeatability.",
      problem: "Factory assembly lines require cost-efficient automated sorting for varying shapes and color defects without bulky hydraulic fixtures or million-dollar industrial robots.",
      features: [
        "Calculates real-time 3D spatial coordinates from a standard 2D overhead camera feed.",
        "Configurable pick-and-place trajectories with smooth S-curve acceleration profiles.",
        "Automated rejection chute routing for defect detection.",
        "Interactive manual override via a web-based slider dashboard."
      ],
      deliverables: [
        "Assembled 6-DOF metallic/acrylic robotic arm with gripper",
        "OpenCV Python vision script + PCA9685 driver code",
        "Conveyor belt synchronization module",
        "Full project documentation & viva explanation questions"
      ]
    }
  },
  {
    id: "project-vision",
    title: "Edge Computer Vision Helmet & Safety Hazard Detection",
    category: "ai",
    categoryLabel: "AI // COMPUTER VISION",
    badge: "REAL-TIME EDGE",
    summary: "Real-time 45 FPS video inferencing running on embedded edge hardware to monitor workplace PPE compliance with instant alert dispatch.",
    image: "assets/images/projects/vision.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDayMqD4dZoXD4uRPxItUESNijVONE9EoSFeREJdTL00S_dmoi14jyUJyPIkJSTS2bWy7J-ZRBQxwB1ngsaKyHhIMup-plOMDPziXAhm0h_Cz-ubTKae062jA_L3CM_k-E1_69xGWlCFNOcPicIlMkpPTsREtSpqO0LeSP3qFW6Vwr4rrYVK9EInFwgPF6WhLKTJkEnEajXeNn7OlcEMddFX7Lk-06dAatXTcVU3uQ9",
    fallbackIcon: "psychology",
    techStack: ["YOLOv8 Small", "TensorRT", "Python 3.11", "OpenCV 4", "Raspberry Pi / Jetson"],
    details: {
      overview: "High-speed object detection solution built with YOLOv8 optimized for embedded edge single-board computers like Raspberry Pi 5 and NVIDIA Jetson for immediate safety auditing.",
      problem: "Construction and manufacturing facilities struggle to enforce mandatory personal protective equipment (PPE) compliance across sprawling job sites without expensive dedicated human monitors.",
      features: [
        "Runs at 40+ FPS on edge hardware with 99.4% safety vest and helmet classification accuracy.",
        "Automated timestamped photo capture when a safety violation is detected.",
        "Instant alert integration dispatched to site supervisors over Telegram or WhatsApp API.",
        "Comprehensive CSV violation logging for college demonstration charts."
      ],
      deliverables: [
        "Trained YOLO weights file (.pt & .onnx) with custom PPE dataset",
        "Complete Python inference pipeline with camera feed integration",
        "Edge hardware deployment guide",
        "Detailed university project thesis with test matrices"
      ]
    }
  },
  {
    id: "project-stm32",
    title: "Dual-Core STM32 Microcontroller Power Metering PCB",
    category: "hardware",
    categoryLabel: "HARDWARE // EMBEDDED C",
    badge: "CUSTOM PCB DESIGN",
    summary: "Designed from scratch in KiCAD. True RMS voltage/current sampling, power factor calculation, isolated relay cutoff, and Modbus RTU interface.",
    image: "assets/images/projects/stm32.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvUWSCtFfv1aYfDQyJ-_m6X_LYNld53p-l69zrNCRojxNqGT9EHaleuoHWqkE8z9Mw-hJaJ-IOaAl5WW6hw7ZPnHR59zusrMlhHvPGX2Fp0rhZ1uLrhpgM-6dr2NAe1RSte8paH--m0NbIJIYdeoKxthlYeSIPPhZjJRKeeL1swH2TH91Hw_X--6WgnJ6cEXo6cLyRt9TBslVydzpYGH8JmeDadDuWfaNfvce7R5XB",
    fallbackIcon: "memory",
    techStack: ["STM32F4", "KiCAD 8 EDA", "Embedded C++", "ACS712 Current Sensor", "OLED Display"],
    details: {
      overview: "A ground-up engineered custom PCB featuring high-precision current transformers and true RMS mathematics to monitor energy load with millivolt accuracy.",
      problem: "Commercial energy meters are closed-source black boxes that prevent custom telemetry, relay cutoffs, and edge harmonic wave analyses required by engineering students.",
      features: [
        "Full schematic and double-layer PCB layout routed and optimized for low electrical noise.",
        "True RMS calculations for complex AC wave patterns and reactive loads.",
        "High-speed digital cutoff circuit when overcurrent spikes exceed safe thresholds.",
        "Clean serial Modbus registers for external data collection."
      ],
      deliverables: [
        "Fabricated double-sided PCB board with components soldered",
        "KiCAD schematic, PCB layout files, and Gerber manufacturing files",
        "Firmware source code in Embedded C++ / STM32CubeIDE",
        "Project report with circuit calculations and oscilloscope plots"
      ]
    }
  },
  {
    id: "project-scada",
    title: "Distributed Telemetry & SCADA Web Dashboard",
    category: "software",
    categoryLabel: "SOFTWARE // SCADA WEB",
    badge: "FULL-STACK CLOUD",
    summary: "Industrial monitoring system streaming sub-millisecond hardware telemetry over WebSockets with 2D digital twin visualization and audit logs.",
    image: "assets/images/projects/scada.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlvX-AVs4LRBrXNq7mBZQA8PeYreon7f91Gc3EIeO-rXWmRec0Ru0gU6bB_wOITh0u67-KisSduRwIfwBC_ZebErCttFO9VSS67pHoYD9lh2ivo2Qm6npfnuinGLUu8BKmCKram3pDvkI0aBH-oLXcmO0xhjR_0s8w-xMuggukZ_VKBDG18U5l6QhFAQyKcrY58cxE43FqT-c2YZdDdkvdfDqiaNVXNokph96S2vkn",
    fallbackIcon: "dashboard",
    techStack: ["React 18", "Tailwind CSS", "FastAPI Python", "WebSockets", "PostgreSQL"],
    details: {
      overview: "An ultra-responsive industrial web console rendering live system states, digital twins, and sensor trends across multiple factory nodes in real time.",
      problem: "Engineers and plant operators need immediate cross-platform visibility without installing heavy legacy desktop software on every terminal.",
      features: [
        "Sub-50ms latency updates via lightweight bidirectional WebSocket channels.",
        "Interactive SVG digital twin highlighting active valves, pumps, and motors.",
        "Audit trail logs and CSV data export for academic research analysis.",
        "Role-based authentication for operators, lab technicians, and admin access."
      ],
      deliverables: [
        "Full web application codebase (React frontend + Python FastAPI backend)",
        "Docker container setup for one-click demonstration",
        "Database schema with mock industrial sensor data generator",
        "Comprehensive report including system architecture and API documentation"
      ]
    }
  },
  {
    id: "project-rover",
    title: "Gesture-Controlled Omnidirectional Mecanum Rover",
    category: "robotics",
    categoryLabel: "ROBOTICS // RF TELEMETRY",
    badge: "INERTIAL GLOVE CONTROL",
    summary: "4WD independent vector drive chassis maneuvered wirelessly via wearable inertial IMU glove with live FPV video streaming for pipeline inspection.",
    image: "assets/images/projects/rover.svg",
    remoteImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCw3LvnJWgaN9kCLfISaOAFx25l40r52Y1Mm8i70YbkUQAzYWZ9LW-KfYQ6fS2aFoZ6BObWMHjTKYcqnFF32giSKtgTwaSOxhBH7i7U2FwfmUgJPNp5DjBXWxL5TiK1RwL2xIM46_Q52mkDGGM4maLEwG-3AlPcwr_ekXj13cJxYe666YsFnja8Zv8WUDKMRCTxWG45L6uIRVzcjwmJRcTBohLwj__3SsAW-Pd32um5",
    fallbackIcon: "directions_car",
    techStack: ["Arduino Mega", "MPU-6050 6-Axis IMU", "NRF24L01+ RF", "Mecanum Wheels", "L298N Drivers"],
    details: {
      overview: "A zero-turn radius 4WD exploration rover steered wirelessly via human hand motion using an inertial measurement glove with ultrasonic collision mitigation.",
      problem: "Navigating tight pipeline crawl spaces requires omnidirectional holonomic motion and intuitive controls without cumbersome bulky hardware steering wheels.",
      features: [
        "Holonomic driving allowing instant sideways strafing and diagonal motion.",
        "Gesture glove translates pitch and roll wrist tilt into proportional motor vector speed.",
        "Low-latency 2.4GHz RF communication with robust signal fallback.",
        "Front-mounted ultrasonic scanning array with automatic emergency brake."
      ],
      deliverables: [
        "Complete 4WD Mecanum chassis with high-torque DC gearmotors",
        "Wearable gesture control glove unit with MPU-6050 sensor",
        "Arduino source code with vector kinematic algorithm",
        "Full viva questions guide and college submission report"
      ]
    }
  },
  {
    id: "project-ev-battery",
    title: "Smart Electric Vehicle (EV) Battery Management & Telemetry System",
    category: "hardware",
    categoryLabel: "EEE // EV TELEMETRY",
    badge: "BMS HARDWARE RIG",
    summary: "Intelligent lithium-ion battery management unit with real-time state-of-charge (SoC) estimation, thermal runaway prevention, and CAN bus data logging.",
    image: "assets/images/projects/ev_battery.svg",
    fallbackIcon: "battery_charging_full",
    techStack: ["ESP32 / STM32", "CAN Bus MCP2515", "INA219 Current Sensor", "DS18B20 Temp Array", "OLED Display"],
    details: {
      overview: "An experimental electric vehicle battery pack diagnostic system tracking per-cell voltages, active balancing, thermal distribution, and real-time current draw with relay trip protection.",
      problem: "Electric vehicle battery fires and cell degradation occur due to lack of granular per-cell temperature and balancing telemetry.",
      features: [
        "Real-time coulomb-counting and Kalman filter based State-of-Charge (SoC) calculations.",
        "Automated thermal cutoff triggering isolated solid-state relays within 5 milliseconds.",
        "CAN bus telemetry broadcasting metrics to main vehicle dashboard controller.",
        "Per-cell active balancing to maximize multi-cell pack longevity and usable range."
      ],
      deliverables: [
        "Assembled 4S lithium battery test rig with custom BMS circuitry",
        "Full C++ embedded firmware with safety watchdog timers",
        "Circuit schematic diagram & battery thermal calculation report",
        "IEEE-formatted project thesis with charge/discharge curves"
      ]
    }
  },
  {
    id: "project-conveyor-defect",
    title: "Automated Conveyor Defect Sorter with Mechanical Pneumatics",
    category: "robotics",
    categoryLabel: "MECH // AUTOMATION",
    badge: "ELECTRO-PNEUMATIC",
    summary: "Continuous manufacturing conveyor featuring photoelectric defect identification and dual-action pneumatic cylinder rejection for automated quality control.",
    image: "assets/images/projects/conveyor.svg",
    fallbackIcon: "conveyor_belt",
    techStack: ["PLC / Arduino Mega", "5/2 Solenoid Valve", "Pneumatic Piston", "DC Motor Controller", "IR Sensors"],
    details: {
      overview: "An industrial mechatronics sorting rig pairing conveyor speed synchronization with high-speed solenoid pneumatic actuation to divert defective parts into inspection bins.",
      problem: "Manual visual inspection on factory conveyor lines is prone to human fatigue, inconsistent rejection timing, and throughput bottlenecks.",
      features: [
        "Continuous belt drive with optical encoder feedback for precise position tracking.",
        "High-speed 5/2 directional control solenoid valve driving double-acting cylinder.",
        "Adjustable conveyor speed with forward/reverse safety emergency stop latch.",
        "Cycle counter LCD interface logging total processed units and defect percentage."
      ],
      deliverables: [
        "Fabricated mini conveyor frame with motorized roller assembly",
        "Electro-pneumatic plumbing and 12V solenoid driver board",
        "Controller source code with debounced sensor trigger routines",
        "Mechanical CAD drawings and final year submission project report"
      ]
    }
  }
];

// Helper functions for UI rendering
function getProjectsByCategory(category) {
  if (!category || category === 'all') return PROJECTS_DATA;
  return PROJECTS_DATA.filter(p => p.category === category);
}

function searchProjects(query) {
  if (!query || query.trim() === '') return PROJECTS_DATA;
  const q = query.toLowerCase().trim();
  return PROJECTS_DATA.filter(p => {
    return p.title.toLowerCase().includes(q) ||
           p.summary.toLowerCase().includes(q) ||
           p.category.toLowerCase().includes(q) ||
           p.techStack.some(t => t.toLowerCase().includes(q));
  });
}

function getProjectById(id) {
  return PROJECTS_DATA.find(p => p.id === id);
}

// Make accessible to window & Node environments
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
  window.getProjectsByCategory = getProjectsByCategory;
  window.searchProjects = searchProjects;
  window.getProjectById = getProjectById;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PROJECTS_DATA,
    getProjectsByCategory,
    searchProjects,
    getProjectById
  };
}
