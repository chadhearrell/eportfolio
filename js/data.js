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

    {
        id: "COMP_BRAND",
        categoryKey: "IDENTITY",
        description: "Complete branding guide for a fictitious consulting company, covering logo, typography, and color standards.",
        keywords: ["Personal Project", "Graphic Design"],
        title: "Summit Solutions Company Branding",
        year: "2025",
        role: "I led the creation of a comprehensive branding guidelines packet for Summit Solutions, a fictitious consulting company. My work involved developing key brand elements that define the company's visual identity and ensuring consistency across all materials.",
        scope: "This project included designing and documenting the core branding components for Summit Solutions, including the company history, brand overview, logo icon styling, logo application rules, logo variations, typography, and color palette. The branding was crafted with the intent to position Summit Solutions as a trusted, professional, and modern consulting partner.",
        solution: "The final branding guide encapsulates the essence of Summit Solutions, providing clear guidelines on logo usage, typography, and color scheme. I established rules for logo placement and application to ensure brand consistency across various platforms and materials. The color palette, typography, and visual elements were thoughtfully selected to convey reliability, clarity, and professionalism, strengthening the company's identity in the consulting industry.",
        specialNote: false,
        imageRange: 10
    },

    {
        id: "DINN_SIMU",
        categoryKey: "IMMERSIVE",
        description: "Interactive Unity-based home simulation where players prep for a dinner party while exploring 3D spaces.",
        keywords: ["3D Development", "Personal Project", "Instructional Design"],
        title: "Pre-Dinner Prep Simulation",
        year: "2025",
        role: "I contributed to the project by designing a range of 3D elements and supporting the graphic design efforts.",
        scope: "I collaborated with a fellow developer for this personal project. This project was created using the <a href='https://unity.com/' target='_blank' title='Unity'>Unity</a> game engine. The project was tailored for an audience aged 16 and older, focusing on creating an engaging and interactive experience.",
        solution: "The simulation offers a highly interactive experience, immersing players in the role of a homeowner preparing for a dinner party. Players navigate a virtual house, interact with labeled areas, and complete tasks that require specific tools or materials. My contributions included designing and creating 3D assets such as the table, table attachments, tools, and parts. Additionally, I created the line art for the instruction manual.",
        specialNote: false,
        imageRange: 3
    },

    {
        id: "ELEA_ASSE",
        categoryKey: "UIUX",
        description: "Photoreal 3D environments and branching interactions for advanced, tool-based eLearning exercises.",
        keywords: ["3D Development", "Professional Project", "Instructional Design"],
        title: "eLearning Assets (Level 3 Interactivity)",
        year: "2022",
        role: "For this project, I helped develop 3D environments and render image stills, which were used in branching Practical Exercises (PEs).",
        scope: "Our team was tasked with developing eLearning content that supported <a href='https://community.articulate.com/articles/get-to-know-the-4-levels-of-e-learning' target='blank' title='Level 3 Interactivity'>Level 3 Interactivity</a>. The client specified that the training material should depict the hardware using realistic 3D models, textures, and lighting. The target audience for this project was students ages 18 and up.",
        solution: "We used Technical Manuals and guidance from our Subject Matter Experts to ensure that our 3D environments accurately depicted Removal and Replacement Procedures. We also used accurate hardware specifications to ensure that everything that we modeled was correctly scaled.<br><br>The imagery that we rendered was used by developers to create branching PEs. In the PEs, students were required to use tools/parts located in the virtual bin. Students were required to use the correct tool/part on the hardware prior to proceeding to the next step. Students were given tailored feedback depending on how they interacted with the hardware. Besides working on the 3D aspect, I also assisted in authoring several PE files for cross-training purposes.",
        specialNote: true,
        imageRange: 2
    },

    {
        id: "HAUN_HOUS",
        categoryKey: "IMMERSIVE",
        description: "Atmospheric title sequence stills inspired by gothic horror, designed to capture eerie, cinematic moods.",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        title: "Haunted House Title Sequence",
        year: "2022",
        role: "For this practice project, I invented a fictitious haunted house show The Tales of Moore Manor. During the project, I determined the goal, target audience, and product design.",
        scope: "I chose to make title sequence stills for a haunted house because I wanted more practice with low lighting and designing room interiors. The target audience for this project was adults ages 25 and up. In addition, this project also targeted consumers who prefer spooky and dark shows.",
        solution: "I spent a lot of my time planning the layout for the manor. Finding the right lighting also played a key role in setting the tone for the imagery. The haunted manor title stills were inspired by the show <i>Chapelwaite</i>. By the end of the project, I ended up creating several stills that leave the audience feeling a sense of emptiness and coldness.",
        specialNote: false,
        imageRange: 4
    },

    {
        id: "LUX_MOCK",
        categoryKey: "IDENTITY",
        description: "Concept branding and 3D visuals for \"Classic\", a sleek, fashion-forward luxury accessories brand.",
        title: "Luxury Brand Mockup",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        year: "2021",
        role: "For this practice project, I invented a luxury brand named Classic. During the project lifecycle, I determined the goal, target audience, and product design.",
        scope: "The target audience for this project was adults ages 20-40 years of age with mid-to high-income ranges. In addition, this project also targeted consumers who are considered fashion-forward and those who enjoy casual and sleek luxury brands.",
        solution: "I went through several design concepts to come up with the right look for the brand. I drew inspiration from popular brands such as Coach and Michel Kors. By the end of the project, I ended up depicting several casual-themed items using a leather texture to ensure they looked stylish and on par with modern luxury brands. I also created a unique logo to help emphasize its sleekness.",
        specialNote: false,
        imageRange: 2
    },

    {
        id: "ENER_MOCK",
        categoryKey: "MOTION",
        description: "3D product mockups and brand visuals for a modern basketball-themed energy drink concept.",
        title: "Energy Drink Mockup",
        keywords: ["3D Development", "Personal Project", "Graphic Design"],
        year: "2020",
        role: "For this practice project, I invented an energy drink brand named Rebound Energy. I determined the goal, target audience, brand styling, and advertising slogan during the project lifecycle.",
        scope: "I created this project because I wanted more practice creating 3D advertisements. I wanted to make an energy drink that looked modern and sleek. I targeted adults ages 18-35 years of age with low-income ranges. I also targeted consumers who are interested in basketball. I did this because there are not too many energy drinks that target this particular market. ",
        solution: "I went through several design iterations until I was satisfied with the result. I drew inspiration from popular energy-drink brands such as Red Bull and Monster Energy Drink. I chose to use a simple/clean background to pull the consumer into the brand. I also created a simple and stylish logo that helps convey the brand and its various flavors.",
        specialNote: false,
        imageRange: 2
    },

    {
        id: "VIRT_CLASS",
        categoryKey: "UIUX",
        description: "Interactive gamified classroom designed to engage learners with social and navigable virtual spaces.",
        title: "Virtual Classroom Environment",
        keywords: ["3D Development", "Professional Project", "Graphic Design", "Instructional Design"],
        year: "2019",
        role: "For this project, I rendered still images to help create an interactive virtual classroom.",
        scope: "The client specified that they wanted a motivational piece added to the tactical software training course. They stated that it should also incorporate gamification techniques.",
        solution: "For the motivational piece, we decided to create a virtual classroom and incorporate a fun factor. The virtual classroom contained hotspots that allowed students to navigate and talk to simulated classmates. This classroom segment provided a unique motivational element to the training product that kept learners intrigued as they progressed through the training.",
        specialNote: true,
        imageRange: 4
    },

    {
        id: "VEHI_NAVI",
        categoryKey: "IMMERSIVE",
        description: "Interactive training segment letting learners explore tactical vehicle components in a virtual environment.",
        title: "Vehicle Navigation Segment",
        keywords: ["3D Development", "Professional Project", "Graphic Design", "Instructional Design"],
        year: "2016",
        role: "I worked with a team of developers to set up cameras and render stills of tactical equipment to create an interactive navigational screen.",
        scope: "This navigational segment allowed students to navigate to different areas of the equipment. Moreover, it served as a way for students to identify areas of interest as they performed Removal and Replacement Procedures.",
        solution: "The training product was delivered using a virtual environment as it allowed us to provide on-demand training using real-world practice. One of the benefits of this project was that it reduced the likelihood of students breaking costly tools and equipment. Additionally, it provided realistic training to a number of students reducing the number of actual tools/equipment resources needed.",
        specialNote: true,
        imageRange: 3
    },

    {
        id: "INTRO_GUNN",
        categoryKey: "MOTION",
        description: "Instructional motion graphic video simplifying complex gunnery concepts for entry-level students.",
        title: "Manual Gunnery Video",
        year: "2015",
        keywords: ["Video Editing", "Professional Project", "Graphic Design", "Instructional Design"],
        role: "I worked with a team of developers to render still images and animate cameras/3D models.",
        scope: "Our manager expressed the need to have a business development video that explains how to perform Manual Gunnery with the intent that a ballistic round hits a designated target. Our manager specified that this concept is often difficult to grasp for entry-level students.",
        solution: "We had a short turnaround for this project, therefore, we decided to repurpose an older 3D environment to speed up the development process. We also used a Technical Manual to ensure that we correctly depicted procedural steps. We demoed the project at business development conferences and during in-person tours of the company.",
        specialNote: true,
        imageRange: 2
    },

    {
        id: "FOUN_BALL",
        categoryKey: "UIUX",
        description: "Animated 3D vignettes explaining ballistics fundamentals, demoed at conferences and training events.",
        title: "Foundations of Ballistics Vignettes",
        keywords: ["3D Development", "Professional Project", "Video Editing", "Instructional Design"],
        year: "2014",
        role: "I worked with other developers to set up the 3D environment, render still images, and animate several video vignettes. ",
        scope: "Our manager expressed the need to create video vignettes that explain the foundations of ballistics. In particular, our manager wanted us to incorporate 3D imagery and motion graphics to appeal to younger students ranging from ages 18-30.",
        solution: "The video vignettes illustrated some of the factors that affect a round's trajectory, such as target location, air density, and weapon condition (to name a few). We used Technical Manual specifications to help us create the 16 video vignettes. We demoed these vignettes at business development conferences, as well as during in-person company tours. The following images are stills from one vignette that covers a target's position.",
        specialNote: true,
        imageRange: 3
    },

    {
        id: "ANIM_CONT",
        categoryKey: "IMMERSIVE",
        description: "Award-winning animated short about a family of ants, built with mocap and playful character design.",
        title: "3D Animation Contest Entry",
        keywords: ["3D Development", "Personal Project"],
        year: "2012",
        role: "I modeled, rigged, and animated 3D characters/environments for an animation contest.",
        scope: "I was required to create a 1-2 minute video that contained an original 3D character and 3D environment. For this contest, we were allowed to come up with our own stories. The target audience for the submission was ages 15 and older.",
        solution: "My story was about a family of ants that were traveling to the other side of the park. The family is faced with an obstacle along the way and attempts to remove it using comical means. I purposely made the ants smooth and friendly looking to make them more appealing to a younger audience. I also used a motion capturing (Mocap) system to help record movements for the 3D models. I won first place in the animation contest and I was hired as a 3D Developer intern.",
        specialNote: false,
        imageRange: 6
    }

];