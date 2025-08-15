const portfolioOwner = {
    name: "Chad Hearrell",
    about: `Hi, I'm <span class="textEmphasis">Chad</span>!<br><br>I'm a multimedia designer who brings ideas to life through <span class="textEmphasis">3D, motion, and dynamic visuals</span>.<br><br>
    
    With 12+ years of experience, I specialize in graphic design, motion graphics, and video production, creating engaging content that connects. Beyond creativity, my strength lies in <span class="textEmphasis">executing designs precisely</span>, whether following complex specifications or building from scratch.
    
    <br><br>When I'm not working, I'm exploring new <span class="textEmphasis">3D and UI/UX tools</span> or sketching personal concepts just for fun. I'm always learning, always creating, and always up for the next challenge. Want to learn more about me or collaborate on a project?`,

    linkedin: "https://www.linkedin.com/in/chad-hearrell-92452596",

    heroAnimation: [
        "3D Developer",
        "Multimedia Designer",
        "UI/UX Designer",
        "Graphic Artist",
        "Visual Storyteller"
    ],

    proficiencies: [{
        label: "Autodesk (3ds Max, Maya, Mudbox)",
        value: 95
    },
    {
        label: "Adobe Creative Cloud (Photoshop, Illustrator, After Effects, Premiere Pro)",
        value: 90
    },
    {
        label: "Unity 3D & Game Engines",
        value: 85
    },
    {
        label: "Figma (UI Prototyping)",
        value: 75
    },
    {
        label: "Workflow Tools & Emerging Tech (Jira, AI, Bitbucket)",
        value: 70
    }
    ],

    competencies: [{
        icon: "fa-cube",
        title: "3D Design & Animation"
    },
    {
        icon: "fa-video",
        title: "Motion Graphics & Video"
    },
    {
        icon: "fa-paintbrush",
        title: "Graphic & Layout Design"
    },
    {
        icon: "fa-desktop",
        title: "UI/UX Support"
    }
    ],
    stats: [{
        number: 12,
        suffix: "+",
        label: "Years of Experience"
    },
    {
        number: 4,
        suffix: "+",
        label: "Industries Supported"
    },
    {
        number: 230,
        suffix: "+",
        label: "Deliverables Shipped"
    },
    {
        number: 30000,
        suffix: "+",
        label: "Creative Hours Logged"
    }
    ],

    blogUrl: "",

    youtubeUrl: "",
};

const categoryDisplayOrder = [
    "3D & Animation",
    "UI & Interactive Training",
    "Motion Graphics & Branding",
    "Visual Identity & Print Design",
];

const projectCategories = {
    "IMMERSIVE": "3D & Animation",
    "MOTION": "Motion Graphics & Branding",
    "IDENTITY": "Visual Identity & Print Design",
    "UIUX": "UI & Interactive Training"
};

const data = [

    //Immersive 
    {
        id: "DINN_SIMU",
        categoryKey: "IMMERSIVE",
        keywords: ["3D Development", "Personal Project", "Instructional Design"],
        title: "Pre-Dinner Prep Simulation",
        year: "2025",
        description: "Interactive Unity-based home simulation where players prep for a dinner party while exploring 3D spaces.",
        scope: "I built this practice project to help craft detailed 3D assets for use in an engaging, hands-on simulation.",
        solution: "I worked alongside another developer to design and create a variety of 3D models, including furniture, tools, and props. Additionally, I created the line art for the instruction manual.",
        specialNote: false,
        imageRange: 3
    },
    {
        id: "HAUN_HOUS",
        categoryKey: "IMMERSIVE",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        title: "Haunted House Title Sequence",
        year: "2022",
        description: "Atmospheric title sequence stills inspired by gothic horror, designed to capture eerie, cinematic moods.",
        scope: "I built this project to practice mood-driven set design and cinematic lighting techniques.",
        solution: "I created gothic-inspired interiors and dramatic lighting setups to produce a series of stills that convey tension and narrative atmosphere.",
        specialNote: false,
        imageRange: 4
    },

    {
        id: "VEHI_NAVI",
        categoryKey: "IMMERSIVE",
        title: "Vehicle Navigation Segment",
        keywords: ["3D Development", "Professional Project", "Graphic Design", "Instructional Design"],
        year: "2016",
        description: "Interactive training segment allowing learners to explore tactical vehicle components in a virtual environment.",
        scope: "This project was built as a mini review activity to test foundational knowledge of vehicle locations. It also served as a motivational and visualization tool, replacing static image transitions with an interactive format that required learners to locate the correct area before advancing in the procedure.",
        solution: "I contributed by creating detailed 3D visuals of vehicle components and collaborated on setting up navigation elements, ensuring the experience was accurate, engaging, and visually clear.",
        specialNote: true,
        imageRange: 3
    },

    {
        id: "ANIM_CONT",
        categoryKey: "IMMERSIVE",
        title: "3D Animation Contest Entry",
        keywords: ["3D Development", "Personal Project"],
        year: "2012",
        description: "Award-winning animated short featuring original characters and environments.",
        scope: "This project was built as part of a class assignment to tell a short, engaging story while practicing full 3D production skills.",
        solution: "I modeled, rigged, and animated characters and environments, used motion capture for natural movement, and produced a complete short film that won first place in a local animation contest. The project's success led to being hired as a 3D Developer intern.",
        specialNote: false,
        imageRange: 6
    },

    
    //Motion
    {
        id: "ENER_MOCK",
        categoryKey: "MOTION",
        title: "Energy Drink Mockup",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        year: "2020",
        description: "3D product mockups and brand visuals for a basketball-themed energy drink concept.",
        scope: "I built this project to practice sports-inspired branding and product visualization.",
        solution: "I developed the logo, branding style, and flavor variant visuals, producing clean product renders on minimal backdrops for a market-ready look.",
        specialNote: false,
        imageRange: 2
    },


    {
        id: "INTRO_GUNN",
        categoryKey: "MOTION",
        title: "Manual Gunnery Video",
        year: "2015",
        keywords: ["Video Editing", "Professional Project", "Graphic Design", "Instructional Design"],
        description: "Instructional motion graphic simplifying complex gunnery concepts for entry-level learners.",
        scope: "This project was built as a motivational piece to introduce students to the foundational principles of manual gunnery, a skill that has become less common with the rise of computerized systems, and to provide a clear understanding of core concepts before more advanced training.",
        solution: "I worked on a team to help animate camera movements, set up scenes, and produce a concise motion graphic that clearly conveyed the essential steps of the manual gunnery process.",
        specialNote: true,
        imageRange: 2
    },


    {
        id: "DIY_PLANK",
        categoryKey: "MOTION",
        keywords: ["Personal Project", "Video Editing", "Instructional Design"],
        title: "Plank Replacement Video Tutorial",
        year: "2025",
        description: "DIY tutorial video showing step-by-step plank replacement, edited for snappy pacing with typography and audio mixing.",
        scope: "I built this project as a way to practice video editing and motion graphics while creating a clear, engaging how-to resource for DIY enthusiasts.",
        solution: "I used multi-angle shots, speed adjustments, on-screen text, and audio mixing to produce a concise, easy-to-follow video.",
        specialNote: false,
        imageRange: 1,
        demo: [
            {
                title: "Watch Video",
                link: "https://drive.google.com/file/d/1L5iyktxNJomPOZF5CYpHI7lRmBzdQ88v/view?usp=sharing"
            }
        ]
    },
    

    //Identity
    {
        id: "COMP_BRAND",
        categoryKey: "IDENTITY",
        keywords: ["Personal Project", "Graphic Design"],
        title: "Summit Solutions Company Branding",
        year: "2025",
        description: "Complete branding guide for a fictitious consulting company, covering logo, typography, and color standards.",
        scope: "I built this project to practice creating a cohesive visual identity that positions a fictitious consulting brand as trusted and modern.",
        solution: "I designed and documented a full brand system, including logo styles, typography, and color palette, in a detailed guide to ensure consistent use across all platforms.",
        specialNote: false,
        imageRange: 10
    },

    {
        id: "LUX_MOCK",
        categoryKey: "IDENTITY",
        title: "Luxury Brand Mockup",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        year: "2021",
        description: "Concept branding and 3D product visuals for a modern accessories brand.",
        scope: "I built this project to practice creating a clean, luxury-inspired brand identity for a concept accessories line.",
        solution: "I designed the logo, color palette, and 3D product renders to reflect a modern, high-end aesthetic suitable for promotional use.",
        specialNote: false,
        imageRange: 2
    },


    // UI/ UX
    {
        id: "ELEA_ASSE",
        categoryKey: "UIUX",
        keywords: ["3D Development", "Professional Project", "Instructional Design"],
        title: "eLearning Assets (Level 3 Interactivity)",
        year: "2022",
        description: "High-quality 3D environments and branching interactions for advanced, tool-based eLearning exercises.",
        scope: "This project was built to give students access to accurate, to-scale 3D hardware models so they could safely practice procedures in a controlled environment.",
        solution: "I worked on a team with Subject Matter Experts (SMEs) and other developers to create detailed, to-scale 3D hardware models and environments, ensuring they were accurate for use in interactive practical exercises.",
        specialNote: true,
        imageRange: 2
    },
    {
        id: "VIRT_CLASS",
        categoryKey: "UIUX",
        title: "Virtual Classroom Environment",
        keywords: ["3D Development", "Professional Project", "Graphic Design", "Instructional Design"],
        year: "2019",
        description: "Gamified virtual classroom segment designed to boost engagement in software training.",
        scope: "This project was built as a motivational piece to capture students' attention, prepare them for upcoming training, and keep them engaged during periods of low activity between sessions.",
        solution: "I created 3D classroom scenes and recommended strategic hotspot placement to encourage learners to explore, interact, and remain engaged throughout the training program.",
        specialNote: true,
        imageRange: 4
    },
    {
        id: "FOUN_BALL",
        categoryKey: "UIUX",
        title: "Foundations of Ballistics Vignettes",
        keywords: ["3D Development", "Professional Project", "Video Editing", "Instructional Design"],
        year: "2014",
        description: "Animated 3D vignettes explaining core ballistics principles.",
        scope: "This project was built as a motivational piece to present the foundational principles of ballistics in a way that would capture attention and appeal to younger students, preparing them for more advanced training.",
        solution: "I worked on a team to create 3D environments and animations for a series of short vignettes covering topics such as air density, environmental conditions, and target positioning. These were shown at business development conferences and during in-person company tours.",
        specialNote: true,
        imageRange: 3
    },
];