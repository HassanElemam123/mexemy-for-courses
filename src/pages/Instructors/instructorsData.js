const courseCatalog = [
  {
    id: "ac1",
    title: "Web Design",
    instructor: "Simon & Olivia Mia",
    duration: "1 Hour",
    level: "Beginner",
    lessons: 4,
    language: "English & Arabic",
    description:
      "Learn how to design modern and responsive websites with clean layouts, strong typography, and better user experience principles.",
  },
  {
    id: "ac2",
    title: "Video editing",
    instructor: "Mohamed Tarek",
    duration: "14 Hours",
    level: "Intermediate",
    lessons: 18,
    language: "Arabic",
    description:
      "Master editing basics and storytelling methods to produce professional videos for social media, YouTube, and client projects.",
  },
  {
    id: "ac3",
    title: "Canva Designing",
    instructor: "Aymen singh",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 16,
    language: "Indian",
    description:
      "Create eye-catching social media posts, business visuals, and presentations quickly using Canva tools and ready-made assets.",
  },
  {
    id: "ac4",
    title: "Affiliate Marketing",
    instructor: "Mark Shown",
    duration: "12 Hours",
    level: "Beginner",
    lessons: 20,
    language: "English",
    description:
      "Understand affiliate marketing models, traffic sources, and how to promote products effectively to earn commissions.",
  },
  {
    id: "dd1",
    title: "Web Design",
    instructor: "Simon & Olivia Mia",
    duration: "1 Hour",
    level: "Beginner",
    lessons: 4,
    language: "English & Arabic",
    description:
      "Build strong web design skills and learn how to create visually balanced pages for modern websites and digital products.",
  },
  {
    id: "dd2",
    title: "UI/UX Design",
    instructor: "Mina Adel",
    duration: "20 Hours",
    level: "Intermediate",
    lessons: 28,
    language: "English",
    description:
      "Learn user interface and user experience design from research to wireframes, visual design, and design systems.",
  },
  {
    id: "dd3",
    title: "Shopify Ecommerce",
    instructor: "Yousef Samir",
    duration: "15 Hours",
    level: "Beginner",
    lessons: 19,
    language: "Arabic",
    description:
      "Start your ecommerce journey by building and customizing Shopify stores for products, brands, and online businesses.",
  },
  {
    id: "dd4",
    title: "WordPress & DIVI",
    instructor: "Karim Nabil",
    duration: "17 Hours",
    level: "Intermediate",
    lessons: 21,
    language: "Arabic",
    description:
      "Learn how to build professional WordPress websites using the DIVI builder with practical layout and customization techniques.",
  },
  {
    id: "mp1",
    title: "Fiverr Marketplace",
    instructor: "Alaa Mostafa",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description:
      "Understand how Fiverr works and how to create gigs that attract buyers and generate freelance opportunities.",
  },
  {
    id: "mp2",
    title: "Upwork Marketplace",
    instructor: "Nour El Din",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description:
      "Learn how to build a winning Upwork profile, submit stronger proposals, and start getting freelance work consistently.",
  },
  {
    id: "ed1",
    title: "Graphic Design",
    instructor: "Salem Fathy",
    duration: "16 Hours",
    level: "Beginner",
    lessons: 22,
    language: "Arabic",
    description:
      "Learn the fundamentals of graphic design, layout composition, branding visuals, and content-ready creative work.",
  },
  {
    id: "ed2",
    title: "Digital Art & Illustration",
    instructor: "Rahma Osama",
    duration: "13 Hours",
    level: "Intermediate",
    lessons: 17,
    language: "English & Arabic",
    description:
      "Explore digital drawing and illustration basics to create expressive artwork and stylized visual concepts.",
  },
  {
    id: "ed3",
    title: "3D Animation",
    instructor: "Tamer Wael",
    duration: "21 Hours",
    level: "Advanced",
    lessons: 26,
    language: "English",
    description:
      "Get introduced to 3D animation pipelines, motion principles, and scene-based animation building for creative projects.",
  },
  {
    id: "ed4",
    title: "Video Editing Part 2",
    instructor: "Mohamed Tarek",
    duration: "11 Hours",
    level: "Advanced",
    lessons: 15,
    language: "Arabic",
    description:
      "Take your video editing skills further with advanced transitions, pacing improvements, and stronger storytelling execution.",
  },
  {
    id: "fc1",
    title: "Graphic Design",
    instructor: "Salem Fathy",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description:
      "Learn graphic design basics and create practical visuals for social media and branding.",
  },
  {
    id: "fc2",
    title: "Microsoft Office",
    instructor: "Ahmed Adel",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 14,
    language: "Arabic",
    description:
      "Learn the core skills of Word, Excel, and PowerPoint for study, work, and daily productivity.",
  },
  {
    id: "fc3",
    title: "Quran Shikkha",
    instructor: "Abdullah Kareem",
    duration: "11 Hours",
    level: "Beginner",
    lessons: 20,
    language: "Arabic & Bangla",
    description:
      "A guided learning course for reading and understanding Quran basics with clear and simple steps.",
  },
  {
    id: "fc4",
    title: "ChatGpt Ai",
    instructor: "Mahmoud Samy",
    duration: "7 Hours",
    level: "Beginner",
    lessons: 10,
    language: "English & Arabic",
    description:
      "Learn how to use AI tools and ChatGPT effectively for work, study, writing, and productivity.",
  },
  {
    id: "dm1",
    title: "Facebook Marketing",
    instructor: "Ayman Ali",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 15,
    language: "Arabic",
    description:
      "Learn how to create and optimize Facebook marketing campaigns.",
  },
  {
    id: "dm2",
    title: "SEO",
    instructor: "Mostafa Adel",
    duration: "12 Hours",
    level: "Intermediate",
    lessons: 18,
    language: "English & Arabic",
    description:
      "Improve website visibility with practical search engine optimization techniques.",
  },
  {
    id: "dm3",
    title: "Email marketing",
    instructor: "Nada Samir",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description:
      "Build effective email campaigns that engage audiences and increase conversions.",
  },
  {
    id: "dm4",
    title: "Google Ad",
    instructor: "Hossam Nader",
    duration: "11 Hours",
    level: "Intermediate",
    lessons: 16,
    language: "Arabic",
    description:
      "Learn how to launch and manage Google Ads campaigns for search and performance growth.",
  },
  {
    id: "cp1",
    title: "Photography",
    instructor: "Ali Fares",
    duration: "8 Hours",
    level: "Beginner",
    lessons: 12,
    language: "Arabic",
    description:
      "Learn the foundations of photography including framing, lighting, and composition.",
  },
  {
    id: "cp2",
    title: "Drawing & Art",
    instructor: "Mariam Ashraf",
    duration: "10 Hours",
    level: "Beginner",
    lessons: 14,
    language: "English & Arabic",
    description:
      "Practice basic drawing techniques and artistic foundations to improve visual creativity.",
  },
  {
    id: "cp3",
    title: "Content Creation",
    instructor: "Nourhan Adel",
    duration: "9 Hours",
    level: "Beginner",
    lessons: 13,
    language: "Arabic",
    description:
      "Learn how to plan, create, and present content effectively for modern platforms.",
  },
  {
    id: "cp4",
    title: "Ethical Hacking",
    instructor: "Yassin Hatem",
    duration: "18 Hours",
    level: "Advanced",
    lessons: 22,
    language: "English",
    description:
      "Get introduced to cybersecurity fundamentals and ethical hacking concepts.",
  },
];

const instructorProfiles = {
  "Simon & Olivia Mia": {
    slug: "simon-olivia-mia",
    role: "Web Design Mentors",
    experience: "7+ years",
    teachingStyle: "Visual-first and beginner-friendly",
    focus: "Layout, hierarchy, spacing, responsive design",
    summary:
      "A duo focused on helping beginners understand the foundations of modern website design through clarity, structure, and practical examples.",
    about:
      "Simon & Olivia Mia teach web design in a way that removes overwhelm from the process. Their courses focus on structure, readability, page balance, and responsive thinking so learners can build pages that look modern and feel usable.",
  },
  "Mohamed Tarek": {
    slug: "mohamed-tarek",
    role: "Video Editing Instructor",
    experience: "8+ years",
    teachingStyle: "Workflow-driven practice",
    focus: "Editing flow, pacing, transitions, storytelling",
    summary:
      "Specialized in helping creators and freelancers improve editing quality through stronger storytelling and cleaner technical execution.",
    about:
      "Mohamed Tarek teaches both foundational and advanced editing. His learning style focuses on practical workflow, cleaner cuts, stronger pacing, and the kind of polish that makes social and client work feel more professional.",
  },
  "Aymen singh": {
    slug: "aymen-singh",
    role: "Canva Designing Instructor",
    experience: "5+ years",
    teachingStyle: "Fast practical execution",
    focus: "Canva, templates, social content, presentations",
    summary:
      "Teaches learners how to create attractive visual content quickly using Canva without needing advanced design software.",
    about:
      "Aymen Singh helps beginners create polished visual work using accessible tools. His teaching focuses on speed, simplicity, and using templates intelligently while still preserving branding and composition quality.",
  },
  "Mark Shown": {
    slug: "mark-shown",
    role: "Affiliate Marketing Instructor",
    experience: "6+ years",
    teachingStyle: "Strategy-first learning",
    focus: "Offers, traffic, conversion logic, promotion systems",
    summary:
      "Focused on affiliate marketing systems and how beginners can understand offers, traffic, and performance clearly.",
    about:
      "Mark Shown breaks affiliate marketing into understandable steps. His teaching centers on selecting the right offers, building promotional content, and thinking more clearly about conversion and traffic sources.",
  },
  "Mina Adel": {
    slug: "mina-adel",
    role: "UI/UX Design Mentor",
    experience: "7+ years",
    teachingStyle: "Structured product thinking",
    focus: "UX research, wireframes, flows, design systems",
    summary:
      "Guides learners from UX thinking into interface design with a balanced focus on user needs and polished visual structure.",
    about:
      "Mina Adel teaches design as a problem-solving process. Learners are guided through UX thinking, wireframes, journey improvement, and interface systems that help them move from scattered visuals into intentional design decisions.",
  },
  "Yousef Samir": {
    slug: "yousef-samir",
    role: "Shopify Ecommerce Instructor",
    experience: "6+ years",
    teachingStyle: "Step-by-step implementation",
    focus: "Shopify setup, themes, products, ecommerce flow",
    summary:
      "Makes ecommerce setup easier for beginners who want to build and customize Shopify stores with more confidence.",
    about:
      "Yousef Samir teaches Shopify in a practical way that helps learners set up stores, organize collections, and understand how ecommerce structure affects the final shopping experience.",
  },
  "Karim Nabil": {
    slug: "karim-nabil",
    role: "WordPress & DIVI Instructor",
    experience: "7+ years",
    teachingStyle: "No-code visual building",
    focus: "WordPress, DIVI, client websites, landing pages",
    summary:
      "Focused on helping students build complete websites using WordPress and DIVI with an efficient visual workflow.",
    about:
      "Karim Nabil teaches website building through a flexible no-code and low-code approach. His focus is on helping learners create service pages, landing pages, and complete sites with clean visual control.",
  },
  "Alaa Mostafa": {
    slug: "alaa-mostafa",
    role: "Fiverr Marketplace Mentor",
    experience: "5+ years",
    teachingStyle: "Marketplace positioning",
    focus: "Profiles, gigs, keywords, pricing strategy",
    summary:
      "Helps beginners enter Fiverr with stronger positioning, clearer gigs, and better communication habits.",
    about:
      "Alaa Mostafa teaches Fiverr from the perspective of practical growth. Learners understand how to set up their profile, write clearer gigs, and build confidence in the marketplace.",
  },
  "Nour El Din": {
    slug: "nour-el-din",
    role: "Upwork Marketplace Mentor",
    experience: "5+ years",
    teachingStyle: "Proposal-focused coaching",
    focus: "Upwork profiles, proposals, job selection, communication",
    summary:
      "Teaches freelancers how to improve their Upwork presence and submit stronger proposals with better client communication.",
    about:
      "Nour El Din helps beginners understand how to present themselves professionally on Upwork. His lessons focus on profile quality, proposal logic, and making better decisions about which jobs to pursue.",
  },
  "Salem Fathy": {
    slug: "salem-fathy",
    role: "Graphic Design Instructor",
    experience: "8+ years",
    teachingStyle: "Foundation-led design practice",
    focus: "Layout, composition, contrast, branding visuals",
    summary:
      "Builds design confidence through clear teaching around composition, visual consistency, and practical design tasks.",
    about:
      "Salem Fathy teaches graphic design in a grounded and accessible way. His training gives learners stronger design fundamentals and helps them create visuals that feel balanced, clear, and more professional.",
  },
  "Rahma Osama": {
    slug: "rahma-osama",
    role: "Digital Art & Illustration Mentor",
    experience: "6+ years",
    teachingStyle: "Creative workflow development",
    focus: "Sketching, brushes, coloring, illustration style",
    summary:
      "Introduces digital art in a way that helps learners move from rough ideas to clean expressive illustrations.",
    about:
      "Rahma Osama teaches digital illustration as a creative system. Students learn how to refine concepts, work with color more confidently, and build a clearer visual style through repeated practice.",
  },
  "Tamer Wael": {
    slug: "tamer-wael",
    role: "3D Animation Instructor",
    experience: "9+ years",
    teachingStyle: "Pipeline-focused learning",
    focus: "Timing, motion, scene building, animation workflow",
    summary:
      "Focused on introducing learners to the logic and flow of 3D animation production.",
    about:
      "Tamer Wael teaches 3D animation through the lens of timing, movement, and scene logic. His content helps students understand the structure behind animation rather than only memorizing software steps.",
  },
  "Ahmed Adel": {
    slug: "ahmed-adel",
    role: "Microsoft Office Instructor",
    experience: "6+ years",
    teachingStyle: "Productivity through practice",
    focus: "Word, Excel, PowerPoint, office workflow",
    summary:
      "Helps beginners build confidence using core Microsoft Office tools in study, work, and daily productivity.",
    about:
      "Ahmed Adel teaches practical office skills in a direct way that supports learners who want to become more capable in documents, spreadsheets, presentations, and general office tasks.",
  },
  "Abdullah Kareem": {
    slug: "abdullah-kareem",
    role: "Quran Shikkha Instructor",
    experience: "10+ years",
    teachingStyle: "Calm guided instruction",
    focus: "Reading, recitation basics, pronunciation, steady progression",
    summary:
      "Supports learners with a patient and structured approach to Quran basics and step-by-step recitation improvement.",
    about:
      "Abdullah Kareem teaches with clarity and patience, making foundational Quran learning feel more accessible for students who need a gentle pace and consistent guidance.",
  },
  "Mahmoud Samy": {
    slug: "mahmoud-samy",
    role: "AI & ChatGPT Instructor",
    experience: "4+ years",
    teachingStyle: "Use-case based teaching",
    focus: "Prompting, AI productivity, writing support, research help",
    summary:
      "Shows learners how to make AI tools useful in real work, study, ideation, and productivity scenarios.",
    about:
      "Mahmoud Samy teaches AI through practical use rather than theory-heavy explanation. His lessons help learners build stronger prompts and use AI more effectively in daily tasks.",
  },
  "Ayman Ali": {
    slug: "ayman-ali",
    role: "Facebook Marketing Instructor",
    experience: "6+ years",
    teachingStyle: "Simple campaign breakdown",
    focus: "Targeting, content planning, campaign basics, page growth",
    summary:
      "Explains Facebook marketing in a way that helps beginners understand campaign structure and audience targeting.",
    about:
      "Ayman Ali teaches campaign basics through practical examples, making Facebook marketing easier to approach for learners who want more clarity around content, targeting, and growth.",
  },
  "Mostafa Adel": {
    slug: "mostafa-adel",
    role: "SEO Instructor",
    experience: "7+ years",
    teachingStyle: "Search-first optimization",
    focus: "Keywords, page structure, search visibility, ranking logic",
    summary:
      "Helps learners understand SEO foundations and how content structure affects website visibility.",
    about:
      "Mostafa Adel teaches SEO through a structured approach to keyword research, page optimization, and clearer content design for search visibility.",
  },
  "Nada Samir": {
    slug: "nada-samir",
    role: "Email Marketing Instructor",
    experience: "5+ years",
    teachingStyle: "Conversion-focused writing",
    focus: "Emails, sequences, open rates, segmentation",
    summary:
      "Focused on helping learners write better email campaigns and understand how sequences improve engagement.",
    about:
      "Nada Samir teaches email marketing through practical campaign writing and audience logic, helping students create stronger sequences and improve communication performance.",
  },
  "Hossam Nader": {
    slug: "hossam-nader",
    role: "Google Ads Instructor",
    experience: "7+ years",
    teachingStyle: "Performance with clarity",
    focus: "Keywords, budgets, ad copy, campaign structure",
    summary:
      "Explains Google Ads in a structured way that helps learners understand setup, targeting, and campaign improvement.",
    about:
      "Hossam Nader teaches paid ads with a focus on how campaigns are built, how keywords work, and how budgets and copy affect results over time.",
  },
  "Ali Fares": {
    slug: "ali-fares",
    role: "Photography Instructor",
    experience: "6+ years",
    teachingStyle: "Visual fundamentals in action",
    focus: "Framing, composition, lighting, storytelling",
    summary:
      "Helps beginners improve photography by understanding visual basics that shape stronger images.",
    about:
      "Ali Fares teaches photography through the fundamentals that matter most: framing, lighting, composition, and the ability to tell a visual story more clearly.",
  },
  "Mariam Ashraf": {
    slug: "mariam-ashraf",
    role: "Drawing & Art Instructor",
    experience: "6+ years",
    teachingStyle: "Observation-led creativity",
    focus: "Sketching, forms, composition, artistic confidence",
    summary:
      "Guides learners through basic art foundations with a focus on observation, form, and steady improvement.",
    about:
      "Mariam Ashraf helps beginners become more comfortable with drawing by simplifying form, composition, and visual observation into practical steps.",
  },
  "Nourhan Adel": {
    slug: "nourhan-adel",
    role: "Content Creation Mentor",
    experience: "5+ years",
    teachingStyle: "Consistency and planning",
    focus: "Ideas, publishing, targeting, content systems",
    summary:
      "Helps learners build better content habits through planning, targeting, and stronger presentation.",
    about:
      "Nourhan Adel teaches content creation as a repeatable process. Her lessons focus on generating ideas, organizing publishing, and building stronger audience-facing content.",
  },
  "Yassin Hatem": {
    slug: "yassin-hatem",
    role: "Ethical Hacking Instructor",
    experience: "8+ years",
    teachingStyle: "Security foundations with structure",
    focus: "Cybersecurity awareness, vulnerabilities, ethical hacking basics",
    summary:
      "Introduces ethical hacking concepts in a structured and safe learning context for advanced technical learners.",
    about:
      "Yassin Hatem teaches foundational ethical hacking concepts with a strong emphasis on security awareness, technical thinking, and understanding safe learning boundaries.",
  },
};

export const instructors = Object.entries(instructorProfiles).map(
  ([name, profile], index) => {
    const courses = courseCatalog.filter((course) => course.instructor === name);
    const totalLessons = courses.reduce((sum, course) => sum + course.lessons, 0);

    return {
      id: `ins-${index + 1}`,
      name,
      ...profile,
      courses,
      courseCount: courses.length,
      totalLessons,
      tracks: [...new Set(courses.map((course) => course.title))],
      levels: [...new Set(courses.map((course) => course.level))].join(" / "),
      languages: [...new Set(courses.map((course) => course.language))].join(" / "),
    };
  }
);