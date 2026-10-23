import fs from 'fs';
import path from 'path';

const projectsPath = path.resolve('src/data/projects.json');
const promptsPath = path.resolve('src/data/imagePrompts.json');

const newProjects = [
  {
    id: "MI203",
    originalTitle: "Motorized Hydraulic Jack",
    title: "Motorized Hydraulic Jack",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi203-motorized-hydraulic-jack",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Motorized hydraulic jack mechanism prototype with electric motor drive, reservoir, and lifting arm",
    imagePrompt: "Create a realistic engineering prototype concept render of a motorized hydraulic jack. Show the compact hydraulic cylinder, electric pump motor, oil reservoir, heavy-duty scissor or bottle lifting arm, and toggle switch controller in a clean workshop setting, no text, no watermark.",
    shortDescription: "Compact motorized hydraulic lifting system pairing a high-torque electric motor with a hydraulic cylinder for effortless automotive and workshop payload lifting.",
    fullOverview: "An industrial mechanical engineering prototype that automates vehicle and machinery lifting. Replaces manual hand-pumping with a high-torque DC/AC motor driving a miniaturized hydraulic gear pump to deliver smooth, controlled elevation with integrated pressure relief and check-valve safety.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Hydraulics", "Electric Jack", "Fluid Power", "Mechanical Lifting", "Industrial Innovation"],
    hardwareComponents: ["Single-Acting Hydraulic Cylinder", "High-Torque 12V/24V DC Drive Motor", "Mini Hydraulic Oil Pump & Reservoir", "Directional Flow Control & Relief Valve", "Heavy-Duty Welded Structural Steel Base"],
    softwareStack: ["SolidWorks 3D Modeling", "Hydraulic Circuit Fluid Simulation"],
    deliverables: [
      "Fabricated Working Scale Motorized Hydraulic Jack Rig",
      "Hydraulic Circuit Schematic & Electrical Wiring Blueprint",
      "Stress Analysis & Payload Capacity Calculation Sheet",
      "Complete University Engineering Project Report",
      "Viva Voce Defense Guide & Demonstration Script"
    ],
    keyFeatures: [
      "Eliminates manual effort through push-button motorized hydraulic actuation",
      "Automatic hydraulic pressure relief valve preventing cylinder overload",
      "Heavy-duty low-profile lifting saddle designed for automotive chassis",
      "Reliable internal check-valve ensuring zero fluid backflow or unintended descent"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI204",
    originalTitle: "Automatic punching machine by Geneva mechanism",
    title: "Automatic Punching Machine by Geneva Mechanism",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi204-automatic-punching-machine-geneva-mechanism",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Automatic punching machine with a 4-slot Geneva cross wheel and reciprocating punch die",
    imagePrompt: "Create a realistic engineering prototype concept render of an automatic sheet metal punching machine driven by a 4-slot Geneva mechanism. Show the motor, drive pin wheel, slotted Geneva disc, reciprocating punch ram, die block, and conveyor feed strip in a clean machine shop, no text, no watermark.",
    shortDescription: "Automated sheet metal piercing system converting continuous rotary motor motion into stepped intermittent punching cycles using a precision Geneva drive cross.",
    fullOverview: "An automated manufacturing apparatus designed for progressive production lines. Employs a 4-slot Geneva cross wheel driven by a pin crank to convert continuous rotary electric motor motion into precise 90-degree intermittent indexing, synchronizing sheet material feeding with a reciprocating punch ram.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Geneva Mechanism", "Sheet Metal Punching", "Intermittent Motion", "Automation", "Machine Tools"],
    hardwareComponents: ["Precision CNC-Milled 4-Slot Geneva Cross Wheel", "Drive Pin Disk & Geared DC Motor", "Hardened Tool Steel Punch & Die Assembly", "Reciprocating Slider-Crank Ram", "Adjustable Sheet Metal Strip Guide"],
    softwareStack: ["SolidWorks Kinematic Simulation", "ANSYS Structural FEA on Punch Tip"],
    deliverables: [
      "Fully Fabricated Benchtop Automatic Geneva Punching Machine",
      "Detailed 2D/3D Production CAD Blueprints (.DWG / .STEP)",
      "Kinematic Velocity & Acceleration Profile Calculations",
      "KTU University-Format Final Year Project Report",
      "Viva Voce Q&A Cheat Sheet & Video Demo"
    ],
    keyFeatures: [
      "Perfect mechanical synchronization between workpiece feed indexing and punch descent",
      "Self-locking dwell period prevents material drift during active piercing stroke",
      "Interchangeable hardened tool-steel punches (Ø3mm to Ø8mm round and square holes)",
      "Low electrical power consumption with minimal mechanical backlash"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI205",
    originalTitle: "Variable Angle Gearless power transmission",
    title: "Variable Angle Gearless Power Transmission",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi205-variable-angle-gearless-power-transmission",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Variable angle gearless power transmission prototype with bent sliding elbow pins",
    imagePrompt: "Create a realistic engineering prototype concept render of a variable angle gearless power transmission mechanism. Show multiple bent sliding rods or elbow links transmitting torque between two shafts at variable angles inside a precision cylindrical housing, machined aluminum construction, workshop lighting, no text, no watermark.",
    shortDescription: "Innovative angular torque transmission mechanism employing sliding elbow pins to transfer rotational power between shafts without conventional bevel or worm gears.",
    fullOverview: "A non-geared angular power transmission assembly capable of transferring continuous rotational torque across intersecting shafts from 0 to 90 degrees. Utilizes an array of bent sliding steel pins held within matched circumferential rotor hubs, eliminating gear friction, tooth wear, and complex lubrication requirements.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Gearless Transmission", "Kinematic Links", "Angular Power", "Mechanisms", "Mechanical Prototype"],
    hardwareComponents: ["CNC-Turned Aluminum Input and Output Rotor Hubs", "Hardened Stainless Steel Bent Sliding Elbow Pins", "Deep Groove Ball Bearings & Rigid Supporting Pillow Blocks", "Variable Angle Swivel Base Plate", "Variable-Speed DC Drive Motor"],
    softwareStack: ["SolidWorks Motion Analysis", "Geometric Pin Deflection Simulation"],
    deliverables: [
      "Assembled Working Benchtop Variable-Angle Transmission Rig",
      "Engineering Design Drawings & Pin Bending Angle Calculations",
      "Torque Transmission Efficiency Benchmark Report",
      "Complete B.Tech Semester Project Documentation",
      "Classroom Demonstration Guide"
    ],
    keyFeatures: [
      "Operates smoothly across varying shaft angles without teeth mesh chatter",
      "Significantly lighter and more compact than equivalent bevel gearboxes",
      "Eliminates gear lubrication downtime and catastrophic tooth chipping",
      "Bi-directional rotation with high torque density"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI206",
    originalTitle: "Bucket wheel escalator",
    title: "Bucket Wheel Escalator Material Elevator",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi206-bucket-wheel-escalator",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Continuous bucket wheel escalator bulk material handling prototype with rotating scoops and inclined conveyor",
    imagePrompt: "Create a realistic engineering prototype concept render of a bucket wheel escalator continuous material elevator. Show the rotating bucket wheel scooping aggregate from a lower hopper and transferring it onto an inclined escalator-style bucket belt, structural frame, mechanical drive sprockets, industrial studio setting, no text, no watermark.",
    shortDescription: "Continuous bulk material conveying rig integrating a rotary scooping bucket wheel with an inclined escalator belt elevator for mining and industrial handling.",
    fullOverview: "A material handling prototype inspired by heavy mining excavators. Features an active rotating bucket wheel at the base to excavate particulate granular materials from a receiving bin and continuously deposit them onto an inclined stepped escalator bucket system for elevated discharge.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Bucket Wheel", "Escalator Conveyor", "Material Handling", "Continuous Elevation", "Mining Machinery"],
    hardwareComponents: ["Rotary Bucket Excavator Wheel with Multiple Scoops", "Inclined Steel Truss Escalator Frame", "Roller Chain & Sprocket Drive Transmission", "High-Torque Geared Reduction Motor", "Discharge Chute & Receiving Collection Hopper"],
    softwareStack: ["SolidWorks 3D Assembly", "Mass Flow Rate Kinematic Calculations"],
    deliverables: [
      "Scale Working Continuous Bucket Wheel Escalator Elevator Rig",
      "Complete Structural CAD Blueprints & Sprocket Ratio Tables",
      "Volumetric Material Discharge Rate Performance Report",
      "University Engineering Project Thesis (KTU Guidelines)",
      "Viva Voce Defense Package & Video Demonstration"
    ],
    keyFeatures: [
      "Combines continuous scooping and elevation in a single synchronized drive train",
      "High material throughput with minimal operational spillage",
      "Adjustable inclination angle for variable factory discharge heights",
      "Overload slip-clutch protection preventing drive motor burnout"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI207",
    originalTitle: "Solar Sand collecting Vehicle",
    title: "Solar-Powered Sand Collecting Vehicle",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi207-solar-sand-collecting-vehicle",
    image: "/images/cat_renew.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_renew.jpg",
    imageAlt: "Solar-powered sand collecting vehicle with rotating scoop drum, hopper, and rooftop photovoltaic panel",
    imagePrompt: "Create a realistic engineering prototype concept render of a solar-powered sand collecting vehicle. Show a mobile rugged chassis with high-traction treads, a rotating collection scoop drum, onboard storage hopper, and roof-mounted photovoltaic solar panel in an open outdoor terrain setting, no text, no watermark.",
    shortDescription: "Autonomous solar-assisted mobile rover equipped with a motorized rotating scoop drum and collection hopper for beach sand cleaning and construction aggregation.",
    fullOverview: "An environmentally conscious autonomous vehicle engineered for coastal beach cleaning and construction sand reclamation. Powered by an onboard monocrystalline solar panel and lithium battery buffer, the rover drives across sandy terrain while its front motorized rotary paddle scoop sifts debris and lifts sand into a tiltable storage hopper.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Solar Vehicle", "Sand Collection", "Renewable Robotics", "Agro/Civil Rover", "Clean Tech"],
    hardwareComponents: ["High-Efficiency Monocrystalline Photovoltaic Panel (50W)", "Rotary Paddle Sand Scooping Drum with Mesh Filter", "Heavy-Duty All-Terrain 4WD Chassis & Wide Sand Tires", "Smart Solar MPPT Charge Controller & 12V LiFePO4 Battery", "Motorized Tipping Storage Hopper"],
    softwareStack: ["Arduino / ESP32 Microcontroller C++", "PWM Speed Control & Remote RF Steering GUI"],
    deliverables: [
      "Fully Fabricated & Tested Solar Sand Collecting Vehicle Prototype",
      "Electrical Wiring Schematic & Solar Energy Budget Report",
      "Sand Sifting Volume vs Speed Performance Log",
      "Comprehensive B.Tech Engineering Project Report",
      "Viva Voce Q&A Cheat Sheet"
    ],
    keyFeatures: [
      "100% emission-free solar charging enabling prolonged outdoor field operations",
      "Integral vibrating sieve mesh separating plastic debris and shells from fine sand",
      "Dual high-torque worm-drive axles offering high traction on loose dunes",
      "Wireless RF remote control with automatic fail-safe stall cutoff"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI208",
    originalTitle: "Hydro Pneumatic disc Brake",
    title: "Hydro-Pneumatic Disc Brake System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi208-hydro-pneumatic-disc-brake",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Hydro-pneumatic disc brake test bench with air-over-oil booster cylinder, master cylinder, and ventilated rotor",
    imagePrompt: "Create a realistic engineering prototype concept render of a hydro-pneumatic disc brake test bench. Show a ventilated steel brake disc on a shaft, twin-piston hydraulic caliper, pneumatic air-over-oil booster cylinder, pressure gauge, and master cylinder assembly, clean technical studio, no text, no watermark.",
    shortDescription: "Hybrid braking apparatus utilizing compressed pneumatic pressure to actuate a hydraulic master booster for ultra-responsive, high-torque disc deceleration.",
    fullOverview: "A high-performance braking rig combining the rapid transmission speed of pneumatic circuits with the immense incompressible clamping force of hydraulic fluid. Compressed air triggers an intensified air-over-oil booster piston, producing immediate hydraulic pressure at the floating dual-piston caliper for rapid stopping without heavy pedal fatigue.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Hydro-Pneumatic", "Disc Brake", "Fluid Mechanics", "Automotive Braking", "Safety Systems"],
    hardwareComponents: ["Precision Ventilated Steel Disc Rotor & Hub", "Dual-Piston Floating Hydraulic Brake Caliper", "Pneumatic-to-Hydraulic Pressure Intensifier Booster", "Pneumatic 5/2 Hand Valve & Pressure Gauges", "High-Pressure Steel Braided Brake Lines & DOT-4 Reservoir"],
    softwareStack: ["SolidWorks Hydraulic Modeling", "Braking Distance & Thermal Dissipation Mathcad Analysis"],
    deliverables: [
      "Working Tabletop Hydro-Pneumatic Disc Brake Demonstration Bench",
      "Fluid Power Hydraulic/Pneumatic Circuit Schematics",
      "Braking Torque & Clamping Force Experimental Test Data",
      "Complete Final Year B.Tech Engineering Report",
      "Viva Voce Preparation Manual"
    ],
    keyFeatures: [
      "Air-over-oil intensifier generates up to 10x hydraulic clamping pressure multiplication",
      "Near-instantaneous brake pad engagement with zero hydraulic pedal spongy feel",
      "Fail-safe mechanical return springs prevent brake drag during free cruising",
      "Accurate dual pressure telemetry gauges for inlet air and outlet fluid lines"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI209",
    originalTitle: "Regenerative brake by using electromagnet",
    title: "Electromagnetic Regenerative Braking System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi209-electromagnetic-regenerative-braking",
    image: "/images/cat_elec.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_elec.jpg",
    imageAlt: "Electromagnetic regenerative braking apparatus with spinning copper disc, electromagnetic coils, and capacitor bank",
    imagePrompt: "Create a realistic engineering prototype concept render of an electromagnetic regenerative braking test rig. Show a copper flywheel disk spinning between high-power electromagnetic stator coils, eddy current generation, capacitor energy recovery bank, and digital voltmeter display, technical lab setting, no text, no watermark.",
    shortDescription: "Non-contact eddy current deceleration rig converting vehicular kinetic energy into recoverable electrical charge using high-flux electromagnetic stator poles.",
    fullOverview: "An advanced friction-free braking test bench that exploits Lenz's law and electromagnetic induction. A conductive copper/aluminum rotor spinning at high speed enters an electromagnetic stator gap, inducing opposing eddy currents that rapidly slow the shaft while feeding generated counter-electromotive power into a supercapacitor storage bank.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Electromagnetic Braking", "Eddy Current", "Regenerative Energy", "Green Tech", "EV Prototyping"],
    hardwareComponents: ["High-Conductivity Copper Rotor Flywheel", "High-Flux Electromagnetic Copper Coils & Iron Cores", "Variable-Current PWM Driver Circuit", "Fast Supercapacitor / LiFePO4 Energy Capture Bank", "Non-Contact Hall Effect Speed & RPM Sensor"],
    softwareStack: ["MATLAB / Simulink Electrodynamic Modeling", "Arduino Telemetry Firmware (Current, RPM, Voltage)"],
    deliverables: [
      "Functional Electromagnetic Braking Test Bench & Flywheel Rig",
      "Electrical Schematic of Energy Harvesting & Rectification Circuit",
      "Deceleration Curve & Energy Recovery Efficiency Report",
      "Comprehensive B.Tech University Thesis",
      "Viva Voce Questions & Answers Package"
    ],
    keyFeatures: [
      "100% non-contact braking: zero mechanical brake pad wear and zero brake dust",
      "Recovers kinetic energy into usable DC electricity for battery charging",
      "Progressive electronic braking strength controlled via pulse-width modulation",
      "Smooth, silent deceleration without hydraulic fluid or pneumatic lines"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI210",
    originalTitle: "Pneumatic Multipurpose Grinder",
    title: "Pneumatic Multipurpose Grinder & Surface Finisher",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi210-pneumatic-multipurpose-grinder",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Benchtop pneumatic multipurpose grinder with air turbine spindle, abrasive wheel, and air regulator",
    imagePrompt: "Create a realistic engineering prototype concept render of a workshop benchtop pneumatic multipurpose grinder. Show the pneumatic air turbine spindle, interchangeable abrasive grinding wheel and wire brush attachments, compressed air regulator valve, and adjustable tool rest, workshop background, no text, no watermark.",
    shortDescription: "Compressed-air-driven rotary workstation supporting modular attachments for high-speed metal grinding, weld deburring, polishing, and sharpening.",
    fullOverview: "A versatile workshop apparatus designed for spark-safe and explosive-environment metal finishing. Powered by a high-RPM pneumatic vane turbine, this tool features an interchangeable arbor that accommodates abrasive grinding discs, wire de-rusting brushes, and scotch-brite buffing wheels with instantaneous pneumatic throttle control.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Pneumatic Tool", "Grinder", "Surface Finishing", "Machine Shop", "Fluid Power"],
    hardwareComponents: ["High-Speed Pneumatic Vane Air Turbine Motor", "Interchangeable 4-Inch Grinding Wheel & Wire Brush", "Air Filter-Regulator-Lubricator (FRL) Unit", "Spark Deflector Shield & Adjustable Heavy Tool Rest", "Solid Cast Iron Benchtop Base"],
    softwareStack: ["SolidWorks 3D CAD Modeling", "Rotational Stress & Blade Flow Simulation"],
    deliverables: [
      "Assembled Benchtop Pneumatic Multipurpose Grinder Machine",
      "Pneumatic Circuit Blueprint & Air Consumption Chart",
      "Material Removal Rate & Surface Roughness Test Report",
      "University Mini-Project Documentation",
      "Workshop Safety & Operation Manual"
    ],
    keyFeatures: [
      "Intrinsically safe for chemical, paint, and explosive manufacturing atmospheres",
      "High power-to-weight ratio delivering up to 12,000 RPM spindle speeds",
      "Modular quick-change spindle arbor for grinding, cut-off, and buffing operations",
      "Integral pneumatic governor maintaining steady torque under variable workpiece load"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI211",
    originalTitle: "Push operated Agriculture spray Pump",
    title: "Push-Operated Agricultural Sprayer Pump",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi211-push-operated-agriculture-spray-pump",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Push-operated agricultural spray pump cart with wheel cam linkage, liquid reservoir, and brass mist nozzles",
    imagePrompt: "Create a realistic engineering prototype concept render of a push-operated agricultural sprayer cart. Show a two-wheeled ergonomic push trolley, wheel cam linkage driving a reciprocating piston pump, 20L chemical fluid tank, and multi-nozzle spray boom with mist atomization in an agro-tech lab, no text, no watermark.",
    shortDescription: "Ergonomic wheeled farm cart converting forward wheel rotation into reciprocating pump action to atomize fertilizer and pesticide spray without fuel or battery.",
    fullOverview: "An appropriate-technology farm equipment prototype designed for smallholder farmers. As the operator pushes the two-wheeled cart along crop rows, eccentric cam linkages on the wheel hubs mechanically drive twin single-acting piston pumps, pressurizing an air accumulator vessel to deliver a continuous, uniform mist over four adjustable nozzles.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Agricultural Sprayer", "Cam Mechanism", "Eco Farming", "Mechanical Pump", "Appropriate Tech"],
    hardwareComponents: ["Tubular Steel Push Trolley Frame with Bicycle Wheels", "Hub-Mounted Eccentric Cam & Follower Rocker Arms", "Dual Reciprocating Cylinder Piston Pump Assembly", "20-Liter Corrosion-Resistant Chemical Tank", "Adjustable Multi-Nozzle Spray Boom with Check Valves"],
    softwareStack: ["SolidWorks Mechanical Design", "Sprayer Droplet Dispersion & Pressure Mathcad Analysis"],
    deliverables: [
      "Fully Fabricated Push-Operated Agricultural Sprayer Prototype",
      "CAD Blueprints & Kinematic Stroke Displacement Drawings",
      "Spray Uniformity & Pumping Flow Rate Test Data",
      "Complete Engineering Project Report",
      "Viva Voce Defense Cheat Sheet"
    ],
    keyFeatures: [
      "Zero operational cost: operates purely on manual pushing effort without fuel or electricity",
      "Continuous uniform spray pattern achieved via internal hydraulic air accumulator",
      "Adjustable boom height and nozzle angles to match row crops from ground to 1.2m height",
      "Ergonomic weight distribution reducing farmer physical fatigue"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI212",
    originalTitle: "Obstacle alert and automatic braking system",
    title: "Obstacle Alert & Automated Braking System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi212-obstacle-alert-automatic-braking-system",
    image: "/images/cat_robotics.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_robotics.jpg",
    imageAlt: "Vehicle test chassis with ultrasonic radar sensors, electronic brake servo actuator, and disc brake caliper",
    imagePrompt: "Create a realistic engineering prototype concept render of an automotive obstacle alert and automatic emergency braking demonstrator. Show a quarter-scale vehicle chassis with front ultrasonic radar sensors, electronic brake servo actuator pushing a disc brake caliper, warning buzzer, and microcontroller circuit, no text, no watermark.",
    shortDescription: "Active collision mitigation test chassis coupling ultrasonic distance ranging with automatic electromechanical disc braking and progressive driver warning.",
    fullOverview: "An intelligent automotive safety prototype that prevents frontal collisions. Multi-zone ultrasonic sensors continuously measure closing distance toward obstacles. If the distance drops below safety thresholds, the system sounds an acoustic buzzer; if unheeded, a high-torque servomotor mechanically compresses the vehicle brake caliper to bring it to a halt.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Collision Avoidance", "Autonomous Braking", "Ultrasonic Radar", "Automotive Safety", "Mechatronics"],
    hardwareComponents: ["HC-SR04 / Waterproof Ultrasonic Distance Sensors", "High-Torque Metal Gear Brake Actuator Servo (35 kg-cm)", "Mechanical Disc Brake Caliper & Master Linkage", "Arduino / Microcontroller Electronic Control Unit", "LCD Telemetry Display, Piezo Buzzer & Driver Warning LED"],
    softwareStack: ["Embedded C/C++ Collision Avoidance Algorithm", "Real-Time Ranging & Deceleration Threshold Logic"],
    deliverables: [
      "Working Four-Wheel Vehicle Chassis Demonstrator with Active Braking",
      "Complete Electrical Schematic & Mechanical Linkage Blueprint",
      "Braking Distance vs Initial Speed Experimental Benchmark Log",
      "University Engineering Project Thesis conforming to KTU",
      "Viva Voce Defense Slide Deck & Demo Video"
    ],
    keyFeatures: [
      "Three-stage progressive intervention: Green (Safe), Yellow (Audio Alert), Red (Emergency Brake)",
      "Instantaneous mechanical brake engagement within 80 milliseconds of threshold breach",
      "Automatic throttle cutoff relay de-energizing drive motors during active braking",
      "Compact plug-and-play installation suitable for retrofitting test carts"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI213",
    originalTitle: "Hybrid wind and solar water pumping system",
    title: "Hybrid Wind & Solar Water Pumping System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi213-hybrid-wind-solar-water-pumping",
    image: "/images/cat_renew.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_renew.jpg",
    imageAlt: "Hybrid wind turbine and solar water pumping prototype with vertical turbine, solar panel, and submersible pump",
    imagePrompt: "Create a realistic engineering prototype concept render of a hybrid wind and solar agricultural water pump. Show a small vertical-axis wind turbine and monocrystalline solar panel powering a submersible DC brushless water pump, transparent plumbing column, digital flow meter, and dual-source MPPT charge controller, no text, no watermark.",
    shortDescription: "Dual-source renewable irrigation plant combining photovoltaic solar cells and a vertical wind generator to ensure continuous year-round groundwater pumping.",
    fullOverview: "An off-grid agricultural micro-power station integrating both solar radiation and wind kinetics. A monocrystalline photovoltaic module and a helical vertical-axis wind generator feed a smart dual-source charge controller to power a high-lift brushless DC submersible water pump, providing continuous irrigation even during cloudy or nocturnal windy periods.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Hybrid Energy", "Wind & Solar", "Renewable Irrigation", "Water Pumping", "Clean Energy"],
    hardwareComponents: ["Monocrystalline 100W Solar PV Module", "Helical Vertical-Axis Wind Turbine & 3-Phase PMG Alternator", "Submersible 12V Brushless DC High-Head Water Pump", "Dual-Input MPPT Hybrid Controller with Battery Storage", "Transparent Acrylic Elevation Column & Flow Turbine Sensor"],
    softwareStack: ["SolidWorks Assembly Design", "Hybrid Energy Harvest & Flow Rate Optimization Code"],
    deliverables: [
      "Fully Fabricated Hybrid Wind-Solar Benchtop Water Pumping Demonstrator",
      "Complete Hybrid Circuit Diagram & Power Conditioning Schematics",
      "Seasonal Energy Generation vs Pumping Volume Analysis Report",
      "Full B.Tech Final Year Engineering Report (KTU Format)",
      "Viva Voce Presentation Slides & Defense Guide"
    ],
    keyFeatures: [
      "Complementary generation profile: solar provides peak daytime power, wind maintains night and monsoon pumping",
      "Brushless submersible DC pump delivers zero brush friction and prolonged submerged lifespan",
      "Smart priority power switching prevents battery deep-discharge cycles",
      "Digital flow meter logging cumulative liters delivered per hour"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI214",
    originalTitle: "Electro Magnetic suspension",
    title: "Electromagnetic Active Suspension System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi214-electro-magnetic-suspension",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Electromagnetic active suspension strut with neodymium magnets, electromagnetic coils, and vibration rig",
    imagePrompt: "Create a realistic engineering prototype concept render of an electromagnetic active suspension strut. Show a cylindrical strut with internal opposing neodymium permanent magnets and electromagnetic coils, linear optical travel sensor, damping controller, and A-arm suspension assembly on a dynamic vibration test rig, no text, no watermark.",
    shortDescription: "Fast-response vehicular suspension strut using controlled electromagnetic repulsion and variable damping coils to instantaneously isolate road shock.",
    fullOverview: "A next-generation automotive suspension prototype replacing passive springs and viscous dampers with electromagnetic levitation. Features matched high-strength neodymium magnets opposing an electronically modulated electromagnetic stator coil, dynamically varying suspension stiffness in milliseconds in response to road surface irregularities.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Electromagnetic Suspension", "Active Damping", "Automotive Dynamics", "Mechatronics", "Vibration Isolation"],
    hardwareComponents: ["Cylindrical Telescoping Strut Housing", "High-Grade N52 Neodymium Ring Magnets", "Precision Copper Electromagnetic Stator Coil & Core", "Linear Optical / Hall Effect Travel Displacement Sensor", "MOSFET H-Bridge Power Amplifier & Controller"],
    softwareStack: ["MATLAB / Simulink Quarter-Car Suspension Model", "Real-Time Active Damping PID Control Algorithm"],
    deliverables: [
      "Working Single-Wheel Active Electromagnetic Suspension Rig",
      "Quarter-Car Dynamic CAD Blueprints & Wiring Schematics",
      "Vibration Transmissibility & Frequency Response Graphs",
      "Complete Final Year Engineering Report",
      "Viva Voce Defense Package"
    ],
    keyFeatures: [
      "Sub-millisecond dynamic damping adjustment responding to instantaneous bumps",
      "Eliminates hydraulic fluid leaks and temperature-dependent viscosity changes",
      "Capable of active vehicle chassis leveling during aggressive cornering or braking",
      "Regenerative damping capability returning induced electrical energy to the battery"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI215",
    originalTitle: "Automatic Water pumping System for Agriculture using Moisture Sensor",
    title: "Sensor-Automated Agricultural Irrigation Pumping System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi215-automatic-water-pumping-moisture-sensor",
    image: "/images/cat_iot.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_iot.jpg",
    imageAlt: "Automated agricultural irrigation rig with capacitive soil moisture sensors, centrifugal pump, and LCD control box",
    imagePrompt: "Create a realistic engineering prototype concept render of a smart moisture-controlled irrigation station. Show stainless soil moisture sensors in soil sample beds, 12V DC centrifugal water pump, solenoid distribution manifold, LCD status display, and relay controller box in a precision agriculture setting, no text, no watermark.",
    shortDescription: "Closed-loop agricultural water management rig monitoring soil dielectric permittivity to autonomously trigger high-efficiency drip pumps upon dry threshold detection.",
    fullOverview: "A precision smart agriculture solution that prevents both under-watering and wasteful water run-off. High-accuracy soil probes continuously gauge root-zone moisture; when moisture dips below calibrated agronomic thresholds, the microcontroller activates a solid-state relay to energize the water pump, shutting it down as soon as optimal saturation is reached.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Irrigation Automation", "Soil Moisture Sensor", "Smart Farming", "Closed-Loop Control", "Embedded Agri"],
    hardwareComponents: ["Capacitive Corrosion-Resistant Soil Moisture Sensors (v1.2)", "High-Pressure 12V DC Submersible / Centrifugal Water Pump", "16x2 I2C Liquid Crystal Telemetry Display", "Electromagnetic Solenoid Water Distribution Valves", "Optoisolated Relay Driver Module & Sealed Enclosure"],
    softwareStack: ["Embedded C++ (Arduino / Microcontroller)", "Soil Wetness Calibration & Hysteresis Pumping Logic"],
    deliverables: [
      "Working Tabletop Smart Irrigation Demonstration Chamber with Crop Bed",
      "Full Firmware Codebase with Adjustable Crop Moisture Presets",
      "System Wiring Blueprint & Component Bill of Materials",
      "University Mini-Project Engineering Report",
      "Viva Voce Examination Prep Deck"
    ],
    keyFeatures: [
      "Water savings of up to 45% compared to timed or manual flood irrigation methods",
      "Corrosion-resistant capacitive sensing prevents probe oxidation common in resistive sensors",
      "Built-in dry-run pump protection preventing motor burnout when water reservoir is empty",
      "User-adjustable threshold potentiometer for different crop types (rice, vegetables, tubers)"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI216",
    originalTitle: "Zig-Saw cutting Machine",
    title: "Reciprocating Jigsaw Cutting Machine Table",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi216-zig-saw-cutting-machine",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Benchtop motorized scroll jigsaw cutting table with eccentric crank mechanism and fine vertical blade",
    imagePrompt: "Create a realistic engineering prototype concept render of a benchtop motorized scroll jigsaw cutting table. Show a heavy cast iron worktable, scotch yoke or eccentric crank mechanism driving a fine vertical jigsaw blade, electric motor, blade guide arm, and chip blower, workshop setting, no text, no watermark.",
    shortDescription: "Benchtop mechanical wood and acrylic contouring saw utilizing an eccentric scotch yoke crank mechanism for high-precision, low-vibration scroll cutting.",
    fullOverview: "A specialized workshop cutting apparatus designed for intricate curvilinear cuts in wood, plastic, and non-ferrous sheet stock. Employs a motorized eccentric crank and counterbalanced slider linkage to convert rotational motor drive into smooth vertical reciprocating blade motion with minimal lateral runout.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Jigsaw Machine", "Scotch Yoke", "Wood Working", "Reciprocating Saw", "Machine Tool Prototype"],
    hardwareComponents: ["High-Torque AC/DC Drive Motor with Pulley Reduction", "Counterbalanced Eccentric Crank & Connecting Rod Assembly", "Precision Linear Hardened Guide Rods & Linear Bearings", "Heavy Ground Steel Tabletop Surface with Miter Slot", "Tensioned Jigsaw Blade Chuck with Blade Guard & Chip Blower"],
    softwareStack: ["SolidWorks 3D Modeling", "Kinematic Balancing & Dynamic Shaking Force Analysis"],
    deliverables: [
      "Assembled Working Benchtop Jigsaw Machine Prototype",
      "Comprehensive Mechanical CAD Blueprints (.DWG / .STEP)",
      "Cutting Speed & Surface Finish Optimization Report",
      "University Mini-Project Report and Calculation Sheet",
      "Workshop Safety & Demonstration Guide"
    ],
    keyFeatures: [
      "Accommodates standard unpinned and pinned scroll saw blades for tight 1mm radius curves",
      "Heavy cast base and dynamic counterweight dampening user hand vibration",
      "Integrated air-puff blower keeping the layout marking line free of sawdust",
      "Adjustable blade tensioning knob for precise blade rigidity"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI217",
    originalTitle: "Abrasive Belt Grinder",
    title: "Industrial 2x72 Abrasive Belt Grinder",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi217-abrasive-belt-grinder",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Industrial 2x72 abrasive belt grinder prototype with aluminum tooling arms and continuous sanding belt",
    imagePrompt: "Create a realistic engineering prototype concept render of an industrial 2x72 abrasive belt grinder. Show a multi-wheel articulated aluminum tooling arm, continuous alumina grinding belt, electric induction motor, tracking adjustment tensioner, and flat platen work rest in a modern metal fabrication shop, no text, no watermark.",
    shortDescription: "Three-wheel articulated abrasive belt grinding station engineered for knife making, stock removal, surface beveling, and weld dressing.",
    fullOverview: "An indispensable metal fabrication machine tool engineered for high-precision profile contouring and heavy stock removal. Utilizes a standardized 2-inch by 72-inch continuous coated abrasive belt traveling over balanced aluminum crowned idler wheels, driven by a 1.5 HP electric motor with a micro-tracking adjustment mechanism.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Belt Grinder", "2x72 Grinder", "Fabrication Machinery", "Metal Working", "Surface Finishing"],
    hardwareComponents: ["Precision CNC-Milled Solid Aluminum Tooling Arm", "Crowned Tracking Wheel with Fine Tilt Adjustment Knob", "Flat Grinding Platen & Contact Wheel Attachments", "High-Power 1.5 HP Electric Induction Motor & V-Belt Drive", "Heavy-Duty Vibration-Damped Structural Steel Chassis"],
    softwareStack: ["SolidWorks 3D CAD Modeling", "Rotational Inertia & Belt Surface Speed Calculations"],
    deliverables: [
      "Fully Fabricated Industrial 2x72 Belt Grinder Machine",
      "Complete CAD Production Blueprints & Bill of Materials",
      "Surface Finish (Ra) & Material Removal Rate Test Data",
      "Full B.Tech Engineering Project Documentation",
      "Viva Voce Defense Package"
    ],
    keyFeatures: [
      "Tool-less quick-release arm swaps between flat platen, slack belt, and contact wheel grinding",
      "Precision crowned tracking wheel guaranteeing zero belt walk at high speeds",
      "High surface belt speed (up to 3,600 SFPM) for rapid, cool metal stock removal",
      "Adjustable multi-angle work rest plate for accurate bevel angles"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI218",
    originalTitle: "Vertical axis high way wind mill",
    title: "Vertical Axis Highway Wind Turbine Generator",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi218-vertical-axis-highway-wind-mill",
    image: "/images/cat_renew.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_renew.jpg",
    imageAlt: "Helical vertical axis highway wind turbine mounted on a median barrier with traffic slipstream flow",
    imagePrompt: "Create a realistic engineering prototype concept render of a vertical-axis highway median wind turbine. Show helical curved Savonius-Darrieus blades mounted on a highway median barrier column, spinning from passing vehicle slipstream turbulence, alternator base, and LED street lighting mast, clean dusk highway render, no text, no watermark.",
    shortDescription: "Helical vertical-axis wind turbine designed for highway medians to harvest omnidirectional aerodynamic slipstream drafts generated by passing high-speed traffic.",
    fullOverview: "A renewable infrastructure prototype engineered to capture otherwise wasted vehicular kinetic energy. Installed along dual-carriageway highway medians, its helical-pitch rotor blades capture transient wind turbulence pushed by oncoming vehicles in both travel directions, driving a low-cogging permanent magnet generator to power highway LED streetlights.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Highway Windmill", "VAWT", "Renewable Energy", "Green Infrastructure", "Aerodynamics"],
    hardwareComponents: ["Helical Twisted Savonius-Darrieus Hybrid Aerofoil Rotor", "Low-RPM Permanent Magnet Synchronous Generator (PMSG)", "Three-Phase Bridge Rectifier & Buck-Boost Battery Charger", "Highway Median Shock-Absorbing Steel Mounting Pedestal", "Deep-Cycle Solar/Wind Storage Battery & LED Illuminator"],
    softwareStack: ["SolidWorks Flow Simulation (CFD Slipstream Analysis)", "Wind Turbine Power Curve MATLAB Modeling"],
    deliverables: [
      "Working Scaled Prototype of Highway VAWT Turbine & Generator",
      "CFD Aerodynamic Airflow Pressure & Velocity Simulation Report",
      "Electrical Power Output vs Highway Traffic Velocity Curve Data",
      "Complete Final Year B.Tech Engineering Thesis",
      "Viva Voce Defense Deck"
    ],
    keyFeatures: [
      "Omnidirectional aerodynamics: operates efficiently regardless of natural wind direction",
      "Helical twisted blade design eliminates starting dead-zones and minimizes acoustic noise",
      "Low startup torque enabled by coreless permanent magnet alternator",
      "Modular self-contained power source reducing grid distribution wiring along long highway bridges"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI219",
    originalTitle: "Automatic Motorized centre stand for Two Wheeler",
    title: "Automated Motorized Motorcycle Center Stand",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi219-automatic-motorized-centre-stand",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Motorized motorcycle center stand with high-torque worm gear motor, power screw, and handlebar button",
    imagePrompt: "Create a realistic engineering prototype concept render of an automated motorized center stand on a motorcycle chassis. Show a high-torque 12V worm gear motor and power screw linkage deploying a heavy-duty twin-leg center stand, handlebar push-button switch, and motorcycle rear swingarm in a technical studio, no text, no watermark.",
    shortDescription: "Push-button electromechanical motorcycle center stand utilizing a high-reduction worm-gear actuator to effortlessly elevate heavy two-wheelers for parking.",
    fullOverview: "An assistive automotive ergonomics prototype designed to eliminate the physical strain of manual center-stand deployment, especially for heavy touring motorcycles or elderly riders. Controlled by a handlebar toggle switch, a high-torque 12V electric motor drives an Acme lead screw linkage that lowers the stand legs and smoothly hoists the rear wheel off the tarmac.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Motorcycle Center Stand", "Ergonomics", "Automated Parking", "Worm Gear Actuator", "Automotive Design"],
    hardwareComponents: ["Fabricated High-Tensile Steel Dual-Leg Center Stand", "High-Torque 12V Reversible DC Worm Gear Motor", "Precision Heavy Acme Power Screw & Bronze Nut Assembly", "Limit Switches for Automatic Upper/Lower End-Stop Cutoff", "Handlebar Waterproof Push-Button Switch & Relay Module"],
    softwareStack: ["SolidWorks Motion Kinematics & Linkage Analysis", "FEA Structural Stress Simulation under 250kg Static Load"],
    deliverables: [
      "Fabricated Working Motorized Center Stand Mounted on Test Frame",
      "Complete Mechanical Linkage CAD Drawings & Wiring Diagram",
      "Lifting Force vs Cycle Time Experimental Log",
      "B.Tech Engineering Project Final Report (University Format)",
      "Viva Voce Defense Cheat Sheet & Demo Video"
    ],
    keyFeatures: [
      "Zero physical lifting effort: hoists a 200kg motorcycle in under 6 seconds at the touch of a button",
      "Self-locking worm drive prevents unintended collapse even if electrical battery power is cut",
      "Integrated electronic interlock preventing stand deployment when engine transmission is in gear",
      "Compact under-chassis footprint preserving standard motorcycle ground clearance"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI220",
    originalTitle: "Water purifier bicycle",
    title: "Pedal-Powered Water Filtration Bicycle",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi220-water-purifier-bicycle",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Pedal-powered water purification bicycle with stationary trainer, diaphragm pump, and multi-stage filtration cylinders",
    imagePrompt: "Create a realistic engineering prototype concept render of a pedal-powered water purification bicycle. Show a stationary trainer bicycle frame with a rear wheel friction roller driving a high-pressure diaphragm pump, multi-stage activated carbon and ceramic filter canisters, intake hose, and pure water outflow, clean studio, no text, no watermark.",
    shortDescription: "Off-grid stationary pedal workstation coupling rear-wheel pedaling kinetic energy to a positive displacement pump and multi-stage filtration filtration array.",
    fullOverview: "A humanitarian engineering prototype developed for disaster relief, rural villages, and off-grid health camps. By pedaling a stationary-mounted bicycle, human leg power drives a high-pressure diaphragm pump that draws contaminated surface water and forces it through sequential sediment, activated carbon, and sub-micron ceramic filter stages at up to 5 liters per minute.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Pedal Power", "Water Filtration", "Human-Powered Machine", "Appropriate Tech", "Disaster Relief"],
    hardwareComponents: ["Ergonomic Stationary Bicycle Frame & Flywheel Roller", "High-Pressure Positive Displacement Diaphragm Pump", "3-Stage Filtration Manifold (Spun PP, GAC Carbon, Ultrafiltration)", "Flexible Food-Grade PVC Suction & Delivery Hose Lines", "In-Line Digital Pressure Gauge & Flow Totalizer"],
    softwareStack: ["SolidWorks Mechanical Assembly Design", "Human Ergonomics & Mechanical Work Pumping Analysis"],
    deliverables: [
      "Working Pedal-Powered Water Filtration Bicycle Rig",
      "Fluid Circuit Schematics & Filter Replacement Instructions",
      "Water Quality (TDS & Turbidity) Before/After Laboratory Test Report",
      "University Mini-Project Documentation",
      "Viva Voce Examination Guide"
    ],
    keyFeatures: [
      "Provides pure drinking water in emergency zones without access to grid electricity or gasoline",
      "Filters up to 300 liters per hour at comfortable human pedaling cadences (60-70 RPM)",
      "Multi-stage filter elements remove sediment, heavy metals, chlorine, pathogens, and bad odor",
      "Modular quick-disconnect coupling allows standard consumer bicycles to be mounted in minutes"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI221",
    originalTitle: "Pneumatic Gear tooth grinding Machine",
    title: "Pneumatic Gear Tooth Grinding & Deburring Machine",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi221-pneumatic-gear-tooth-grinding-machine",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Pneumatic gear tooth grinding machine with rotary indexing mandrel, reciprocating cylinder, and grinding spindle",
    imagePrompt: "Create a realistic engineering prototype concept render of a pneumatic gear tooth profile grinding and deburring machine. Show a rotary indexing mandrel holding a spur gear, reciprocating pneumatic cylinder carrying a profiled grinding wheel, air lubricator regulator, and indexer ratchet mechanism, workshop setting, no text, no watermark.",
    shortDescription: "Semi-automatic pneumatic machine tool combining linear cylinder reciprocation with rotary gear indexing for precise gear involute dressing and tooth profile finishing.",
    fullOverview: "A dedicated manufacturing tool designed for reconditioning and deburring freshly hobbed spur and helical gears. Employs a double-acting pneumatic cylinder to reciprocate an abrasive grinding head along each gear tooth root while a secondary pneumatic pawl indexes the gear one pitch forward upon completion of each stroke.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Gear Grinding", "Pneumatic Machine Tool", "Manufacturing Engineering", "Involute Gear", "Deburring"],
    hardwareComponents: ["Double-Acting Pneumatic Stroke Cylinder with Speed Regulators", "High-Speed Pneumatic Pencil Grinding Spindle & Diamond Wheel", "Precision Mechanical Rotary Indexing Mandrel Plate", "Pneumatic 5/2 Pilot Solenoid Valves & Roller Lever Limit Valves", "Rigid Cast Machine Base & Magnetic Particle Collector"],
    softwareStack: ["SolidWorks 3D Modeling", "FluidSIM Pneumatic Sequential Circuit Simulation"],
    deliverables: [
      "Assembled Semi-Automatic Pneumatic Gear Tooth Grinding Machine",
      "Sequential Pneumatic Control Circuit Diagrams & Valve Tables",
      "Gear Tooth Involute Profile & Surface Finish Comparison Report",
      "Comprehensive B.Tech Engineering Project Thesis",
      "Viva Voce Q&A Cheat Sheet"
    ],
    keyFeatures: [
      "Fully pneumatic sequencing logic eliminates electric spark hazards and complex microcontrollers",
      "Interchangeable index plates to accommodate 12 to 60 tooth spur gears",
      "Adjustable stroke length and dwell timing ensuring uniform root-to-tip chamfering",
      "Significantly reduces manual deburring time while improving gear mesh smoothness"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI222",
    originalTitle: "Fabrication of Solar oven",
    title: "High-Efficiency Parabolic Solar Thermal Oven",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi222-fabrication-of-solar-oven",
    image: "/images/cat_renew.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_renew.jpg",
    imageAlt: "High-efficiency parabolic solar thermal oven with mirrored dish concentrator and vacuum cooking tube",
    imagePrompt: "Create a realistic engineering prototype concept render of a parabolic solar cooking oven. Show an anodized parabolic reflective concentrator dish focusing sunlight onto an insulated vacuum-jacketed cooking chamber, sun-tracking angle quadrant, and thermal thermocouple probe in an outdoor sunlight setting, no text, no watermark.",
    shortDescription: "Parabolic solar concentrator kiln utilizing mirrored aluminum focal reflectors and an insulated borosilicate chamber to achieve sustained temperatures above 200°C.",
    fullOverview: "A clean thermal engineering prototype demonstrating solar radiant energy concentration for off-grid cooking and industrial dehydration. Built with a compound parabolic reflector dish lined with high-reflectivity mirror film, focal rays converge upon a double-walled evacuated borosilicate glass tube that reaches baking temperatures exceeding 220°C.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Solar Oven", "Thermal Concentrator", "Parabolic Reflector", "Green Technology", "Solar Cooking"],
    hardwareComponents: ["Compound Parabolic Aluminum Concentrator Dish Assembly", "Vacuum-Jacketed Borosilicate Glass Thermal Absorber Tube", "Stainless Steel Food / Material Sliding Baking Tray", "Multi-Angle Sun Tracking Elevation & Azimuth Swivel Stand", "Digital K-Type Thermocouple Temperature Logger"],
    softwareStack: ["SolidWorks Ray-Tracing Optical Simulation", "Heat Transfer & Thermal Loss Mathcad Equations"],
    deliverables: [
      "Fabricated Working Parabolic Solar Oven Unit",
      "Optical Focal Point Calculation Sheet & CAD Blueprints",
      "Time vs Temperature Stored Heat Thermal Performance Log",
      "University Mini-Project Engineering Report",
      "Viva Voce Defense Package"
    ],
    keyFeatures: [
      "Achieves cooking temperatures of 200°C to 240°C on sunny days with zero fuel expenditure",
      "Evacuated tube retains heat internally even in cold outdoor air or moderate wind",
      "Easily transportable folding aluminum frame suitable for field deployment",
      "Dual thermal probe logging internal air and absorber tube wall gradient"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI223",
    originalTitle: "Hydraulic Pallet Truck",
    title: "Industrial Hydraulic Pallet Truck Demonstration Rig",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi223-hydraulic-pallet-truck",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Industrial manual hydraulic pallet truck with steel tines, hydraulic pump cylinder, and steering tiller handle",
    imagePrompt: "Create a realistic engineering prototype concept render of an industrial manual hydraulic pallet truck. Show reinforced steel fork tines, hydraulic ram pump body, three-position ergonomic tiller handle, tandem polyurethane load rollers, and pressure release trigger in a clean logistics warehouse, no text, no watermark.",
    shortDescription: "Material handling shop truck featuring an integrated hydraulic pump ram, fork bell-crank linkages, and tandem load rollers for 1.5-ton warehouse pallet transit.",
    fullOverview: "An essential industrial logistics prototype demonstrating Pascal's law applied to heavy material transit. A manual steering tiller handle incorporates a hydraulic plunger pump; repeated strokes pressurize a heavy-duty vertical hydraulic ram, which pulls bell-crank pushrods to simultaneously elevate the front steering chassis and rear fork rollers.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Hydraulic Pallet Truck", "Fluid Power", "Material Handling", "Pascal Law", "Industrial Rig"],
    hardwareComponents: ["Heavy-Duty Welded C-Channel Steel Fork Frame", "Precision Integrated Cast Hydraulic Ram & Reservoir Unit", "Three-Position Ergonomic Tiller Handle with Neutral Detent", "Bell-Crank Mechanical Roller Pushrod Linkages", "Heavy-Duty Low-Friction Polyurethane Steering Wheels & Tandem Rollers"],
    softwareStack: ["SolidWorks 3D CAD Modeling", "Structural FEA Deflection Analysis under 1500kg Load"],
    deliverables: [
      "Working Fabricated Scale / Full Hydraulic Pallet Truck Demonstrator",
      "Hydraulic Cylinder Cross-Sectional Blueprints & O-Ring Seal Specs",
      "Load Capacity vs Tiller Pump Stroke Force Experimental Report",
      "Complete Final Year B.Tech Engineering Thesis",
      "Viva Voce Preparation Manual & Video Script"
    ],
    keyFeatures: [
      "High mechanical advantage: 15 tiller strokes hoist a 1.5-ton payload off warehouse floors",
      "Three-position fingertip control: Raise, Neutral (free steer), and Controlled Lowering",
      "Internal overload relief valve protecting hydraulic seals from excessive tonnage",
      "Tandem rear load rollers providing smooth rolling over floor expansion joints"
    ],
    estimatedTimeline: "3 to 4 Weeks"
  },
  {
    id: "MI224",
    originalTitle: "Motorized Screw jack with work piece clamper",
    title: "Motorized Power Screw Jack with Integrated Workpiece Clamper",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi224-motorized-screw-jack-with-clamper",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Motorized power screw jack with geared motor, Acme lead screw, and integrated vice clamping jaws",
    imagePrompt: "Create a realistic engineering prototype concept render of a motorized Acme screw jack with integrated pneumatic or mechanical workpiece clamping jaws. Show the high-torque geared motor, precision lead screw, thrust bearing housing, self-locking nut, and heavy-duty adjustable clamping vice jaws on a machine bed, no text, no watermark.",
    shortDescription: "Dual-action machine tool accessory pairing a motor-driven self-locking Acme lead screw for height elevation with an integrated mechanical vice jaw for rigid workpiece clamping.",
    fullOverview: "An automated fixture designed for milling, drilling, and assembly tables. Integrates an electric-motor-driven Acme power screw jack to adjust workpiece working height with micron accuracy, coupled with a synchronized mechanical clamping vice head that firmly locks workpieces in place to prevent chatter during machining.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Motorized Screw Jack", "Workpiece Clamper", "Machine Fixtures", "Power Screw", "Tooling Prototype"],
    hardwareComponents: ["Precision Hardened Steel Acme Lead Screw & Bronze Nut", "High-Torque Reversible DC Geared Motor Drive", "Thrust Ball Bearing Retainer Unit & Solid Base Plate", "Adjustable Serrated Hardened Tool Steel Clamping Vise Jaws", "Electrical Toggle Control Panel with Over-Current Breaker"],
    softwareStack: ["SolidWorks 3D CAD Modeling", "Power Screw Thread Efficiency & Self-Locking Analysis"],
    deliverables: [
      "Assembled Working Motorized Screw Jack with Clamping Fixture",
      "Complete Production CAD Drawings with Thread Geometry Blueprints",
      "Clamping Force vs Motor Torque Calibration Chart",
      "University Mini-Project Engineering Report",
      "Viva Voce Examination Cheat Sheet"
    ],
    keyFeatures: [
      "Inherent self-locking Acme thread geometry prevents uncommanded height slip under load",
      "Dual utility: operates as both an elevating jack and a rigid machining vice fixture",
      "Motorized height elevation avoids manual handwheel fatigue on repetitive assembly setups",
      "Compact footprint compatible with standard machine table T-slots"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI225",
    originalTitle: "Automatic Solar panel cooling system",
    title: "Automated Solar Panel Water-Cooling & Efficiency System",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi225-automatic-solar-panel-cooling-system",
    image: "/images/cat_renew.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_renew.jpg",
    imageAlt: "Solar panel water cooling system with misting manifold, temperature sensor, and runoff drainage gutter",
    imagePrompt: "Create a realistic engineering prototype concept render of an automated solar panel water-cooling system. Show a photovoltaic panel frame equipped with top spray mist manifold, temperature sensors, automated pump, runoff collection gutter, and efficiency monitoring display, bright outdoor daylight render, no text, no watermark.",
    shortDescription: "Closed-loop thermal management apparatus using thermocouple sensors and misting nozzles to mitigate solar panel thermal derating and boost photovoltaic efficiency by 15%.",
    fullOverview: "A green technology prototype addressing solar panel efficiency degradation caused by heat. Standard panels lose up to 0.5% efficiency per °C rise above 25°C. This system uses surface thermocouple sensors to automatically spray a fine film of recycled water across the panel face when temperature spikes exceed 40°C, lowering temperatures and washing away dust.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Solar Panel Cooling", "Photovoltaic Efficiency", "Thermal Mitigation", "Clean Energy", "Automation"],
    hardwareComponents: ["Monocrystalline 100W Solar PV Test Panel", "Multi-Point Waterproof DS18B20 Temperature Probes", "High-Pressure 12V DC Water Misting Pump & Brass Micro-Nozzles", "Runoff Collection Gutter, Sediment Sieve & Recycle Reservoir", "Current/Voltage INA219 Power Telemetry Sensor & Microcontroller"],
    softwareStack: ["Arduino / ESP32 Microcontroller C++", "Real-Time PV Efficiency & Cooling Cycle Logic"],
    deliverables: [
      "Working Tabletop Solar Panel Cooling Demonstration Rig",
      "Complete Electrical Wiring Blueprint & Plumbing Schematics",
      "Panel Surface Temperature vs Power Output Comparison Report",
      "Full B.Tech Final Year Engineering Thesis (KTU Format)",
      "Viva Voce Defense Slides & Video Demo"
    ],
    keyFeatures: [
      "Increases net electrical energy output by 12% to 18% during hot summer peak hours",
      "Simultaneous dual benefit: rapid evaporative surface cooling and automated dust washing",
      "Closed-loop water recycling gutter captures and reuses over 85% of misted water",
      "Smart intermittent pulsing algorithm minimizes water consumption and pump electrical draw"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  },
  {
    id: "MI226",
    originalTitle: "Mini wood lathe machine for wood grooving",
    title: "Miniature Precision Wood Lathe & Grooving Machine",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi226-mini-wood-lathe-grooving-machine",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Miniature benchtop wood lathe machine with variable speed motor, headstock chuck, and grooving tool carriage",
    imagePrompt: "Create a realistic engineering prototype concept render of a mini benchtop wood lathe machine for wood grooving. Show an aluminum extruded bed rail, 3-jaw headstock chuck, variable-speed electric motor, adjustable tailstock with live center, and micro-grooving chisel carriage in a craftsman workshop setting, no text, no watermark.",
    shortDescription: "Compact variable-speed benchtop wood turning lathe engineered with a precision cross-slide carriage for decorative grooving, spindle turning, and pen fabrication.",
    fullOverview: "A compact machine tool designed for small-scale wood turnery, artistic grooving, and educational shop training. Built upon rigid aluminum extrusion rails, it incorporates a 24V variable-speed motor headstock with a 3-jaw chuck, an adjustable tailstock with a live center, and a precision lead-screw cross slide holding custom grooving cutters.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Wood Lathe", "Grooving Machine", "Mini Machine Tool", "Woodworking", "Workshop Prototype"],
    hardwareComponents: ["Extruded T-Slot Aluminum Lathe Bed with Steel Guide Rails", "Variable-Speed 775/895 DC Spindle Motor & PWM Controller", "Mini 3-Jaw Self-Centering Chuck & Faceplate Attachment", "Adjustable Tailstock with Ball-Bearing Live Center", "Compound Cross-Slide Tool Rest with Micro-Depth Dials"],
    softwareStack: ["SolidWorks 3D Modeling", "Rotational Spindle Resonance & Cutting Torque Simulation"],
    deliverables: [
      "Assembled Working Benchtop Mini Wood Lathe Prototype",
      "Complete CAD Manufacturing Blueprints & Component Schematics",
      "Turning Speed vs Wood Hardness Machining Parameter Chart",
      "University Mini-Project Documentation",
      "Workshop Safety & Operation Manual"
    ],
    keyFeatures: [
      "Smooth variable RPM control from 500 to 4,000 RPM for hardwoods, softwoods, and plastics",
      "Precision cross-slide carriage allows uniform circumferential grooving and fluting",
      "Ultra-compact benchtop footprint (under 60cm length) easily stored in small student labs",
      "Transparent safety chuck guard and emergency e-stop push-button"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI227",
    originalTitle: "Rotary Gear Pump",
    title: "Positive Displacement Rotary External Gear Pump",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi227-rotary-gear-pump",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Transparent-casing educational rotary external gear pump prototype showing meshing spur gears and fluid ports",
    imagePrompt: "Create a realistic engineering prototype concept render of an acrylic transparent educational rotary external gear pump. Show two interlocking spur gears rotating inside a precision-machined clear acrylic casing, inlet and outlet fluid ports, drive shaft, and pressure gauge, fluid mechanics laboratory render, no text, no watermark.",
    shortDescription: "Transparent-casing educational hydraulic pump demonstrating positive displacement fluid transfer via meshing counter-rotating external spur gears.",
    fullOverview: "A precision fluid power prototype designed for hydraulic education and viscous liquid transfer. Comprises a driver spur gear meshed with an idler gear inside an optical-grade transparent acrylic housing, allowing students to directly observe the intake fluid suction, tooth-pocket peripheral conveyance, and high-pressure discharge.",
    complexity: "Mini Project (S3-S5)",
    tags: ["Rotary Gear Pump", "Positive Displacement", "Fluid Mechanics", "Hydraulic Pump", "Educational Rig"],
    hardwareComponents: ["Precision-Milled External Spur Gear Pair (Hardened Delrin / Brass)", "Optical-Grade Transparent Acrylic Pump Body & Faceplate", "Drive Shaft with High-Pressure Nitrile Lip Oil Seals", "Electric DC Geared Drive Motor with Coupling", "Inlet/Outlet Fluid Manifolds with Analog Pressure Gauge"],
    softwareStack: ["SolidWorks Flow Simulation (CFD Fluid Dynamics)", "Theoretical vs Actual Volumetric Efficiency Analysis"],
    deliverables: [
      "Fabricated Transparent Working Rotary Gear Pump Rig & Fluid Tank",
      "Detailed CAD Exploded Assembly & Dimensioned Part Blueprints",
      "Discharge Flow Rate vs Pressure Characteristic Curves",
      "University Mini-Project Report and Calculation Sheet",
      "Viva Voce Defense Cheat Sheet"
    ],
    keyFeatures: [
      "Transparent casing provides clear visibility of tooth-pocket fluid cavitation and flow",
      "High volumetric efficiency capable of pumping high-viscosity motor oils and syrups",
      "Pulse-free continuous fluid delivery compared to reciprocating piston designs",
      "Self-priming capability with tight radial and axial gear clearances"
    ],
    estimatedTimeline: "1 to 2 Weeks"
  },
  {
    id: "MI228",
    originalTitle: "Pantograph milling Machine",
    title: "2D/3D Mechanical Pantograph Copy Milling Machine",
    catalogGroup: "MI",
    category: "Mechanical & Industrial Innovation Projects",
    slug: "mi228-pantograph-milling-machine",
    image: "/images/cat_mech.jpg",
    hasCustomImage: false,
    fallbackImage: "/images/cat_mech.jpg",
    imageAlt: "Mechanical pantograph copy milling machine with articulated parallelogram linkage, stylus, and milling spindle",
    imagePrompt: "Create a realistic engineering prototype concept render of a mechanical pantograph copy milling and engraving machine. Show an articulated parallelogram four-bar linkage mechanism, tracer stylus tracing a template master, high-speed rotary milling spindle duplicating the pattern at scaled ratios, and cast iron base in a toolroom, no text, no watermark.",
    shortDescription: "Geometric parallelogram linkage milling apparatus translating tracer stylus contours to a high-speed spindle for scaled 1:1, 1:2, or 1:4 master template engraving.",
    fullOverview: "A mechanical copy-machining apparatus built upon an articulated four-bar parallelogram pantograph linkage. As an operator manually guides a tracer stylus over an enlarged 2D or 3D master letter or template pattern, the linkage faithfully translates and scales down the trajectory to a high-speed miniature milling spindle carving the duplicate on a workpiece.",
    complexity: "Final Year B.Tech (S7-S8)",
    tags: ["Pantograph Milling", "Copy Milling", "Four-Bar Linkage", "Kinematic Scaling", "Engraving Machine"],
    hardwareComponents: ["Precision Anodized Aluminum Parallelogram Linkage Arms", "Low-Friction Miniature Pivot Ball Bearings", "High-Speed Rotary Engraving Spindle (10,000 RPM)", "Hardened Tracer Stylus & Adjustable Master Template Table", "Rigid Cast Iron Machine Base with Workpiece Vice"],
    softwareStack: ["SolidWorks Kinematic Simulation", "Pantograph Scaling Ratio & Error Analysis Code"],
    deliverables: [
      "Fabricated Working Mechanical Pantograph Milling Machine",
      "Linkage Dimension Blueprints & Ratio Adjustment Table",
      "Geometric Accuracy & Copy Resolution Benchmarking Log",
      "Full B.Tech Final Year Engineering Project Report",
      "Viva Voce Examination Prep Package"
    ],
    keyFeatures: [
      "Multi-ratio scaling: adjustable pivot holes provide 1:1, 1:2, 1:3, and 1:4 reduction ratios",
      "No CNC electronics or computer programming required: operates via pure kinematic precision",
      "Ideal for industrial nameplate engraving, key duplicating, and diesinking prototypes",
      "Rigid bearing pivots guarantee sub-0.1mm reproduction accuracy"
    ],
    estimatedTimeline: "2 to 3 Weeks"
  }
];

// Load existing projects
let existingProjects = [];
try {
  existingProjects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
} catch (e) {
  console.error("Error reading projects.json:", e);
}

// Check for duplicates and merge
const existingIds = new Set(existingProjects.map(p => p.id));
let addedCount = 0;

for (const proj of newProjects) {
  if (existingIds.has(proj.id)) {
    console.log(`Project ID ${proj.id} already exists, updating record.`);
    const idx = existingProjects.findIndex(p => p.id === proj.id);
    existingProjects[idx] = proj;
  } else {
    existingProjects.push(proj);
    existingIds.add(proj.id);
    addedCount++;
  }
}

// Write back updated projects.json
fs.writeFileSync(projectsPath, JSON.stringify(existingProjects, null, 2), 'utf8');
console.log(`Successfully updated ${projectsPath}! Added ${addedCount} new projects. Total now: ${existingProjects.length}`);

// Load and update imagePrompts.json
let prompts = [];
try {
  prompts = JSON.parse(fs.readFileSync(promptsPath, 'utf8'));
} catch (e) {
  console.error("Error reading imagePrompts.json:", e);
}

const promptIds = new Set(prompts.map(p => p.id));
let addedPrompts = 0;

for (const proj of newProjects) {
  const promptRecord = {
    id: proj.id,
    title: proj.title,
    catalogGroup: proj.catalogGroup,
    category: proj.category,
    imagePrompt: proj.imagePrompt,
    status: proj.hasCustomImage ? "generated" : "pending",
    imagePath: proj.image,
    fallbackImage: proj.fallbackImage
  };

  if (promptIds.has(proj.id)) {
    const idx = prompts.findIndex(p => p.id === proj.id);
    prompts[idx] = promptRecord;
  } else {
    prompts.push(promptRecord);
    promptIds.add(proj.id);
    addedPrompts++;
  }
}

fs.writeFileSync(promptsPath, JSON.stringify(prompts, null, 2), 'utf8');
console.log(`Successfully updated ${promptsPath}! Total prompts tracked: ${prompts.length}`);
