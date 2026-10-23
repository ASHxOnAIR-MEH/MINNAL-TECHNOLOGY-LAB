import { ProjectItem } from '../types';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'MNL-IOT-001',
    title: 'ESP32-C3 IoT Ambient Memory Pendant',
    category: 'IoT & Embedded Systems',
    complexity: 'Working Hardware Prototype',
    shortDescription: 'Ultra-compact wearable ambient audio memory logging pendant with magnetic dock, Wi-Fi PWA dashboard, and local speech analysis.',
    fullOverview: 'An engineered wearable device featuring a custom Ø35mm circular enclosure, magnetic pogo-pin dock, ultra-low-power ESP32-C3 / nRF52840 microcontroller, digital PDM microphone, and local edge memory storage. Audio recordings are held locally on an encrypted flash buffer and synchronized seamlessly through a custom desktop dock and responsive web application.',
    image: '/images/hero_arm.jpg',
    tags: ['ESP32-C3', 'Wearable Hardware', 'Edge AI', 'PDM Microphone', 'PWA Dashboard'],
    hardwareComponents: ['ESP32-C3 / nRF52840 SoC', 'Digital PDM Microphone', 'MicroSD Storage Module', 'Magnetic 4-Pin Pogo Dock', 'Lithium Polymer 3.7V Battery & BMS', 'RGB Status Ring & MOSFET switch'],
    softwareStack: ['C/C++ Embedded Firmware (Zephyr/FreeRTOS)', 'ESP-IDF / Arduino Framework', 'Local Speech Pipeline', 'Vite + React PWA Interface'],
    deliverables: [
      'Complete Assembled & Tested Wearable Prototype',
      'Magnetic Desk Dock & Charging Cradle',
      'Full Documented Firmware & Source Code',
      'Comprehensive Engineering Project Report & Circuit Schematics',
      'Power Consumption & Battery Life Benchmarking Log',
      'Viva Voce Preparation Guide & Demonstration Script'
    ],
    keyFeatures: [
      'Compact Ø35mm x 12.7mm enclosure designed for neckwear ergonomics',
      'Magnetic keyed docking for simultaneous high-speed data extraction and battery charging',
      'Physical tactile privacy switch with immediate LED state ring feedback',
      'Strict local Wi-Fi offline synchronization preserving full data privacy'
    ],
    estimatedTimeline: '2 to 3 Weeks'
  },
  {
    id: 'TCF-2026-1021',
    title: 'Temperature-Controlled Automatic Cooling Fan System',
    category: 'Electronics & Electrical',
    complexity: 'Mini Project (S3-S5)',
    shortDescription: 'Closed-loop thermal monitoring and automatic variable-speed fan cooling system utilizing LM35 precision analog sensor and PWM driver.',
    fullOverview: 'A calibrated thermal control prototype designed for academic electronics evaluation. Utilizes an LM35 precision temperature sensor connected to an analog comparator and microcontroller PWM driver to dynamically regulate DC brushless fan cooling velocity based on configurable temperature setpoints.',
    image: '/images/cat_elec.jpg',
    tags: ['LM35 Sensor', 'PWM Fan Control', 'Analog Signal Conditioning', 'Arduino Uno'],
    hardwareComponents: ['Arduino Uno Controller Board', 'LM35 Precision Centigrade Sensor', '12V DC High-Torque Brushless Fan', 'TIP122 Power Darlington Transistor / MOSFET', '16x2 I2C LCD Display', 'Regulated 12V/5V Dual Power Supply'],
    softwareStack: ['Embedded C', 'Arduino IDE', 'PWM Frequency Modulation Engine'],
    deliverables: [
      'Fabricated Acrylic Chassis & Breadboard Assembly',
      'Complete Wiring Diagram & BOM Specifications',
      'Calibrated Temperature Response Graphs',
      'Complete Project Report, Abstract & PPT Presentation',
      'Viva Question & Answer Dossier'
    ],
    keyFeatures: [
      'Real-time temperature feedback displayed on backlit 16x2 LCD',
      'Smooth proportional PWM speed adjustment preventing sudden inrush current',
      'Dual threshold visual LED indicators (Normal, Caution, Overheat Alarm)',
      'Configurable hysteresis loop preventing mechanical switch jitter'
    ],
    estimatedTimeline: '7 to 10 Days'
  },
  {
    id: 'SAST-EE-2026',
    title: 'Single-Axis Solar Tracking System (Pure Hardware / Without Arduino)',
    category: 'Renewable Energy & Sustainability',
    complexity: 'Mini Project (S3-S5)',
    shortDescription: 'Hardware-level autonomous solar tracking rig using differential LDR light sensors, LM358 operational amplifiers, and H-bridge motor driver.',
    fullOverview: 'A pure hardware-based autonomous solar tracking apparatus engineered without digital microcontrollers. By utilizing matched pairs of Light Dependent Resistors (LDRs) positioned with a shadow divider baffle and an LM358 dual operational amplifier operating in differential comparator mode, the system drives a geared DC servo actuator directly toward peak solar irradiance.',
    image: '/images/cat_renew.jpg',
    tags: ['Solar PV', 'Hardware Without Microcontroller', 'LM358 Op-Amp', 'L293D H-Bridge', 'Renewable Energy'],
    hardwareComponents: ['Monocrystalline 10W Solar Photovoltaic Panel', 'High-Torque Metal Geared DC Motor (12V 30RPM)', 'LM358 Dual Operational Amplifier IC', 'L293D Dual H-Bridge Motor Driver', 'Matched Cadmium Sulfide (CdS) LDR Sensors', 'Custom Aluminum Solar Tracker Gimbal & Bearings'],
    softwareStack: ['Pure Analog Circuit Architecture (No Software Required)', 'Multisim / Proteus Circuit Simulation Files'],
    deliverables: [
      'Fully Assembled Mechanical Gimbal & Solar Tracker Prototype',
      'Complete Electrical Schematic & Op-Amp Calibration Manual',
      'Comparative Power Generation Test Data (Fixed vs Tracked Panel)',
      'Bound B.Tech Format Project Report & Seminar Slides',
      'Faculty Viva Preparation Handbook'
    ],
    keyFeatures: [
      'Zero microcontroller dependency: highly resilient analog feedback loop',
      'Shadow baffle geometry providing high angular sensitivity (<5 degree tracking window)',
      'Low quiescent idle power consumption preserving maximum net energy yield',
      'Over-travel mechanical limit switches preventing cable torsion and mechanism binding'
    ],
    estimatedTimeline: '10 to 14 Days'
  },
  {
    id: 'TAS-ARD-2026',
    title: 'Multi-Stage Temperature Alarm System with NTC Thermistor',
    category: 'Electronics & Electrical',
    complexity: 'Mini Project (S3-S5)',
    shortDescription: 'Precision thermal hazard detector with Steinhart-Hart polynomial linearization, multi-color LED alerts, and acoustic siren actuation.',
    fullOverview: 'A comprehensive thermal alert prototype developed for industrial safety and computer server room monitoring. Employs a negative temperature coefficient (NTC) 10k thermistor configured in a voltage divider circuit with Steinhart-Hart formula compensation for high-precision real-time temperature sensing.',
    image: '/images/cat_elec.jpg',
    tags: ['NTC Thermistor', 'Steinhart-Hart Math', 'Audio-Visual Siren', 'Industrial Safety'],
    hardwareComponents: ['10k NTC Thermistor Probe', 'Arduino Uno R3', 'Piezoelectric High-Decibel Buzzer', 'Tricolor LED Array', '0.96 inch I2C OLED Display', 'Mechanical Relay Channel'],
    softwareStack: ['Arduino C++', 'Mathematical Steinhart-Hart Linearization Library'],
    deliverables: [
      'Complete Benchtop Hardware Circuit Build',
      'Full Arduino Sketch with Calibration Offsets',
      'Academic Mini Project Documentation in KTU/University Format',
      'Demonstration Video & Circuit Wiring Diagram',
      'Viva Voce Defense Cheat Sheet'
    ],
    keyFeatures: [
      'Three-stage graduated warning: Safe (Green), Caution (Amber), Critical Shutdown (Flashing Red + Siren)',
      'External relay contact for automatic tripping of high-power equipment',
      'High noise immunity filtering out momentary electrical transients'
    ],
    estimatedTimeline: '5 to 7 Days'
  },
  {
    id: 'HBMS-S3-2026',
    title: 'Hospital Bed Availability Real-Time Monitoring System',
    category: 'Software & Web Development',
    complexity: 'Mini Project (S3-S5)',
    shortDescription: 'Centralized hospital ward and bed status tracking dashboard with C core validation engine and lightweight Google Sheets API.',
    fullOverview: 'Designed for clinics and hospital administration, this hybrid software solution provides immediate visibility into bed occupancy across ICU, General Ward, and Emergency bays. Features a lightweight, responsive web dashboard interfaced with a high-performance C validation engine to process status transitions and prevent duplicate or conflicting reservations.',
    image: '/images/cat_software.jpg',
    tags: ['C Programming', 'Full-Stack Web', 'Google Apps Script', 'Hospital Informatics'],
    hardwareComponents: ['Cloud / Local Server Host', 'Department Status Display Terminal / Tablet Interface'],
    softwareStack: ['C Programming Language (Core Logic Engine)', 'HTML5 / Modern CSS / Vanilla JavaScript', 'Google Apps Script JSON REST API', 'Cloud Datastore'],
    deliverables: [
      'Complete Web Application Source Code & C Backend',
      'Google Sheets Database Connection Script',
      'Project Synopsis, System Flowchart & UML Diagrams',
      'Academic Mini-Project Final Report conforming to KTU guidelines',
      'Full Project Viva Questions & Code Walkthrough Video'
    ],
    keyFeatures: [
      'Instant color-coded bed occupancy grid (Available, Occupied, Sanitizing, Maintenance)',
      'Automated collision detection rejecting simultaneous double-booking requests',
      'Historical occupancy duration log for departmental efficiency auditing',
      'Zero server hosting costs using serverless endpoints'
    ],
    estimatedTimeline: '1 to 2 Weeks'
  },
  {
    id: 'ADS-BIO-2026',
    title: 'Arogya DuoScan Non-Invasive Diagnostic Device',
    category: 'Robotics & Automation',
    complexity: 'Working Hardware Prototype',
    shortDescription: 'Multi-parameter non-invasive clinical screening prototype combining PPG optical sensing, galvanic skin response, and AI triage guidance.',
    fullOverview: 'An advanced biomedical engineering prototype developed for rural health clinics and mobile telemedicine. Integrates photoplethysmography (PPG) pulse oximetry, contactless infrared thermopile thermometry, and galvanic skin conductivity into an ergonomic handheld scanning enclosure with onboard LCD telemetry.',
    image: '/images/cat_robotics.jpg',
    tags: ['Biomedical', 'PPG Sensor', 'Infrared Thermometry', 'Embedded AI', 'Healthcare'],
    hardwareComponents: ['MAX30102 High-Sensitivity Pulse Oximeter & Heart Rate Module', 'MLX90614 Contactless IR Temperature Sensor', 'ESP32 Dual-Core Microcontroller', '1.3 inch SPI IPS Color Display', 'Custom Ergonomic Bio-Safe 3D Enclosure', 'Rechargeable 18650 Battery Pack with Safety Circuit'],
    softwareStack: ['ESP-IDF C++', 'Digital FIR Filtering & Peak Detection Algorithms', 'Bluetooth Low Energy (BLE) Medical GATT Service', 'Web Telemetry Portal'],
    deliverables: [
      'Fabricated & Calibrated Handheld Bio-Scan Prototype',
      'Validated Physiological Measurement Accuracy Report',
      'Firmware Codebase with Noise Cancellation Filters',
      'Comprehensive Final Year Project Thesis (12 Chapters, IEEE Format)',
      'Project Video Demonstration & Complete Presentation Slides'
    ],
    keyFeatures: [
      'Simultaneous SpO2, Heart Rate, and Core Body Temperature acquisition in under 8 seconds',
      'Digital Butterworth signal filter suppressing motion artifacts and ambient light',
      'BLE synchronization to clinician smartphone or tablet dashboard',
      'Clear decision-support triage scoring highlighting abnormal vitals'
    ],
    estimatedTimeline: '3 to 4 Weeks'
  },
  {
    id: 'ROV-AUT-2026',
    title: 'Autonomous 2D LiDAR SLAM Obstacle Mapping Rover',
    category: 'Robotics & Automation',
    complexity: 'Final Year B.Tech (S7-S8)',
    shortDescription: 'Autonomous four-wheel mecanum drive robotic rover capable of simultaneous localization, indoor 2D obstacle mapping, and waypoint navigation.',
    fullOverview: 'An industrial-grade autonomous mobile robot (AMR) platform equipped with 360-degree 2D laser LiDAR, quad optical quadrature encoders, and an onboard companion microprocessor. Executes Gmapping SLAM algorithms to generate millimeter-precise occupancy grids of indoor environments while avoiding dynamic obstacles.',
    image: '/images/cat_robotics.jpg',
    tags: ['LiDAR SLAM', 'Mecanum Wheels', 'ROS2', 'Autonomous Navigation', 'Robotics'],
    hardwareComponents: ['RPLiDAR A1 360° Laser Range Scanner', 'Quad Mecanum Wheels & High-Torque Planetary DC Motors', 'High-Resolution Optical Encoders', 'STM32 Motor Controller & Raspberry Pi 4 Companion Computer', '11.1V 5000mAh 3S LiPo Battery & Low-Voltage Alarm'],
    softwareStack: ['ROS2 Humble / Ubuntu Linux', 'C++ Motor Odometry Node', 'Gmapping / Cartographer SLAM Stack', 'Nav2 Path Planning Framework'],
    deliverables: [
      'Complete Machined Carbon-Fiber / Aluminum AMR Chassis Prototype',
      'Configured ROS2 Workspace with SLAM Launch Files',
      'Calibrated Odometry PID Tuning Parameter Files',
      'Full B.Tech Major Project Thesis & Literature Review',
      'Patent / Competition Documentation & Demonstration Video'
    ],
    keyFeatures: [
      'Holonomic omnidirectional translation allowing zero-radius turns in narrow corridors',
      'Real-time SLAM map generation transmitted over Wi-Fi to remote workstation Rviz GUI',
      'Dynamic path re-planning around moving pedestrians and temporary obstacles',
      'Comprehensive safety watchdog: automatic halt upon sensor loss'
    ],
    estimatedTimeline: '3 to 5 Weeks'
  },
  {
    id: 'AIS-EDGE-2026',
    title: 'Smart Precision Irrigation System with Edge Soil Profiling',
    category: 'IoT & Embedded Systems',
    complexity: 'Final Year B.Tech (S7-S8)',
    shortDescription: 'Solar-powered agricultural automation node with capacitive soil moisture sensing, ambient weather forecasting, and automated solenoid valves.',
    fullOverview: 'An agricultural engineering innovation designed to conserve irrigation water by up to 45%. Combines corrosion-resistant capacitive soil moisture probes at multiple depths with ambient temperature/humidity metrics, feeding an onboard edge decision algorithm that actuates solenoid hydraulic valves only when root-zone moisture drops below crop-specific thresholds.',
    image: '/images/cat_iot.jpg',
    tags: ['Precision Agriculture', 'Capacitive Moisture', 'Solenoid Valves', 'Solar Powered', 'IoT'],
    hardwareComponents: ['Industrial Capacitive Soil Moisture Sensors (v1.2)', 'BME280 Atmospheric Sensor', 'ESP32 Wi-Fi/LoRa Microcontroller', '12V Brass Electric Solenoid Valves', '10W Polycrystalline Solar Panel & MPPT Charger', 'IP65 Weatherproof Junction Enclosure'],
    softwareStack: ['FreeRTOS C++', 'MQTT Telemetry Protocol', 'InfluxDB + Grafana Crop Moisture Dashboard'],
    deliverables: [
      'Field-Ready Weatherproof Edge Controller Node with Solar Unit',
      'Solenoid Manifold Plumbing & Relay Assembly',
      'Complete Tested Source Code & Circuit Schematics',
      'Major Project Report & Soil Volumetric Water Content Analysis Paper',
      'Viva Voce Defense Deck & Experimental Data Tables'
    ],
    keyFeatures: [
      'Corrosion-free capacitive sensing eliminating galvanic electrode degradation',
      'Self-sustaining solar charging with 48-hour battery autonomy during cloudy spells',
      'Cloud telemetry alerts sent directly to farmer mobile devices via WhatsApp/SMS',
      'Manual override switch for emergency agricultural operations'
    ],
    estimatedTimeline: '2 to 3 Weeks'
  },
  {
    id: 'KIN-MEC-2026',
    title: 'Precision Kinematic 4-Bar Planar Mechanism & Dynamic Balancer',
    category: 'Mechanical Engineering',
    complexity: 'Final Year B.Tech (S7-S8)',
    shortDescription: 'CNC-milled aerospace aluminum kinematic test rig for analytical verification of coupler curves, velocity vectors, and balancing counterweights.',
    fullOverview: 'A mechanical laboratory test rig engineered for students and research scholars investigating planar mechanism dynamics. Features modular CNC machined aluminum links with low-friction sealed miniature ball bearings, adjustable crank radius, and strobe-synchronized angle encoders to experimentally validate theoretical Grashof criteria and velocity polygons.',
    image: '/images/cat_mech.jpg',
    tags: ['Kinematics', '4-Bar Mechanism', 'CNC Machined', 'Dynamics of Machinery', 'KTU Syllabus'],
    hardwareComponents: ['Precision Anodized 6061-T6 Aluminum Linkage Set', 'ABEC-7 Miniature Chrome Steel Ball Bearings', 'Variable Speed BLDC Drive Motor with Digital RPM Tacho', 'Adjustable Rotational Counterweights for Dynamic Balancing', 'Optical Shaft Angle Rotary Encoder', 'Heavy Cast Iron Damping Base Plate'],
    softwareStack: ['MATLAB / Python Kinematic Simulator Scripts', 'SolidWorks / Fusion 360 Motion Analysis Files'],
    deliverables: [
      'Precision Fabricated Physical Linkage Mechanism Rig',
      'Complete CAD Model (.STEP / .SLDPRT) & Engineering Drawings',
      'Experimental vs Analytical Coupler Curve Overlay Documentation',
      'Comprehensive Project Report & Viva Question Handbook',
      'Demonstration Video & Classroom Lab Manual'
    ],
    keyFeatures: [
      'Continuously adjustable link lengths enabling Crank-Rocker, Double-Crank, and Drag-Link configurations',
      'Precision laser-engraved angular vernier scales for accurate angular position recording',
      'Integrated dynamic balancing mass holders demonstrating vibration suppression',
      'Directly matches university mechanical engineering lab syllabus experiments'
    ],
    estimatedTimeline: '2 to 3 Weeks'
  },
  {
    id: 'SEM-PWR-2026',
    title: 'IoT Smart Energy Sub-Meter & Power Quality Harmonic Analyzer',
    category: 'Renewable Energy & Sustainability',
    complexity: 'Final Year B.Tech (S7-S8)',
    shortDescription: 'High-voltage non-invasive AC power telemetry device monitoring RMS voltage, current, active/reactive power, power factor, and THD.',
    fullOverview: 'A laboratory and domestic electrical sub-metering instrument. Uses split-core current transformers (CTs) and precision voltage potential transformers with the ADE7758 / PZEM-004T dedicated energy metering chipset to calculate real-time true RMS power metrics and stream consumption trends over Wi-Fi.',
    image: '/images/cat_renew.jpg',
    tags: ['Smart Grid', 'Power Factor', 'Energy Metering', 'Current Transformer', 'IoT Telemetry'],
    hardwareComponents: ['PZEM-004T AC Multifunction Energy Meter Module', '100A Non-Invasive Split-Core Current Transformer', 'ESP32 Wi-Fi Controller', '0.96 inch High-Contrast Display', 'Optocoupled Safety Isolation Barrier', 'DIN-Rail Mountable Enclosure'],
    softwareStack: ['Arduino C++', 'Modbus-RTU Protocol', 'Web Dashboard & Real-Time Bill Calculation Engine'],
    deliverables: [
      'Fully Assembled & Calibrated DIN-Rail Energy Meter Prototype',
      'High-Voltage Electrical Safety Certification Documentation',
      'Complete Firmware Source Code & Cloud Dashboard Scripts',
      'Comprehensive Final Year Project Report & PPT Deck',
      'Viva Voce Defense Package'
    ],
    keyFeatures: [
      'Non-invasive current sensing: installable around live conductors without circuit disconnection',
      'Automatic peak tariff billing calculation with monthly consumption projections',
      'Instantaneous anomaly detection (under-voltage, phase drop, over-current spike)',
      'High electrical isolation safeguarding low-voltage logic microchips'
    ],
    estimatedTimeline: '2 to 3 Weeks'
  },
  {
    id: 'CNC-ROB-2026',
    title: 'Desktop 3-Axis Rapid PCB Prototyping & Milling Machine',
    category: 'Mechanical Engineering',
    complexity: 'Research & Competition Rig',
    shortDescription: 'High-accuracy desktop CNC milling apparatus for rapid chemical-free electronic PCB isolation routing, drilling, and contour cutting.',
    fullOverview: 'A desktop CNC machine built for rapid hardware iteration in college innovation labs. Utilizing lead-screw linear actuators, NEMA 17 stepper motors, and a high-RPM brushless DC spindle, it performs precision isolation routing on copper-clad FR4 boards, producing professional dual-layer circuit boards without hazardous etching chemicals.',
    image: '/images/cat_mech.jpg',
    tags: ['CNC Milling', 'PCB Fabrication', 'GRBL Firmware', 'Lead Screw', 'Rapid Prototyping'],
    hardwareComponents: ['2020 Aluminum Extrusion Structural Frame', 'T8 Precision Stainless Steel Lead Screws & Anti-Backlash Brass Nuts', 'Trio NEMA 17 High-Torque Stepper Motors', 'A4988 / TMC2209 Ultra-Quiet Stepper Drivers', '500W High-Speed Brushless Air-Cooled Spindle (12,000 RPM)', 'Arduino CNC Shield with Emergency Stop Interlock'],
    softwareStack: ['GRBL Open-Source CNC Firmware', 'Candle G-Code Machine Controller', 'FlatCAM PCB CAM Processor'],
    deliverables: [
      'Complete Operating Desktop 3-Axis CNC Milling Machine',
      'Starter Endmill Tooling Bit Set & Copper FR4 Blanks',
      'Complete Step-by-Step Calibration Manual & G-Code Workflow Guide',
      'Comprehensive Technical Thesis & Mechanical Stress Analysis',
      'Hardware Demonstration Video & Viva Voce Q&A Dossier'
    ],
    keyFeatures: [
      'Spindle runout under 0.02mm allowing clean 0.2mm track isolation routing',
      'Integrated auto-leveling surface probe compensating for substrate curvature',
      'Chemical-free green manufacturing: zero ferric chloride toxic waste',
      'Robust emergency stop hardware circuit conforming to safety standards'
    ],
    estimatedTimeline: '3 to 5 Weeks'
  },
  {
    id: 'ESC-ELE-2026',
    title: 'Closed-Loop Field Oriented Control (FOC) BLDC Motor Driver',
    category: 'Electronics & Electrical',
    complexity: 'Research & Competition Rig',
    shortDescription: 'Custom vector control 3-phase inverter for high-efficiency brushless DC motors, featuring magnetic angle encoder and regenerative braking.',
    fullOverview: 'A high-performance motor controller developed for robotics, electric mobility, and drone gimbal applications. Implements sinusoidal Field Oriented Control (FOC) with low-side shunt current measurement and AS5600 12-bit magnetic angle sensing to deliver silent, ultra-smooth torque and instantaneous velocity response.',
    image: '/images/cat_elec.jpg',
    tags: ['BLDC Driver', 'Field Oriented Control (FOC)', 'Power MOSFETs', 'Electric Vehicle', 'AS5600'],
    hardwareComponents: ['STM32F4 / ESP32 High-Speed Digital Signal Processor', '6x N-Channel High-Efficiency Power MOSFETs (60V 50A)', 'IR2104 / DRV8302 Half-Bridge Gate Drivers', 'AS5600 12-Bit Non-Contact Magnetic Rotary Encoder', 'Low-Inductance Metal Shunt Resistors', 'Heavy Aluminum Heat Spreader'],
    softwareStack: ['SimpleFOC C++ Library', 'Direct Current Space Vector Modulation (SVPWM)', 'Real-Time Telemetry Interface'],
    deliverables: [
      'Fabricated Custom 3-Phase Inverter PCB & BLDC Test Motor',
      'Calibrated PID Velocity and Position Loop Tuning Files',
      'Complete Circuit Schematics, Altium/KiCad PCB Layouts & BOM',
      'B.Tech / M.Tech Standard Research Project Report',
      'Viva Voce Defense Slides & Experimental Waveform Catalog'
    ],
    keyFeatures: [
      'Smooth, cogging-free rotation from as low as 1 RPM to high operational speeds',
      'Regenerative braking energy recovery back into the DC power bus',
      'Over-current hardware shutdown triggering in under 2 microseconds',
      'Serial GUI telemetry visualizing phase voltages, current vectors, and rotor angle'
    ],
    estimatedTimeline: '3 to 4 Weeks'
  }
];
