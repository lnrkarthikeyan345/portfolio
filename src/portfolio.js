/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import pythonLogo from "./assets/images/python-svgrepo-com.svg";
import powerbiLogo from "./assets/images/powerbi-svgrepo-com.svg";
import postgresqlLogo from "./assets/images/postgresql-svgrepo-com.svg";
import mysqlLogo from "./assets/images/mysql-svgrepo-com.svg";
import gitLogo from "./assets/images/git-svgrepo-com.svg";
import pandasLogo from "./assets/images/pandas-svgrepo-com.svg";
import numpyLogo from "./assets/images/numpy-svgrepo-com.svg";
import excelLogo from "./assets/images/excel-svgrepo-com.svg";

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "K3KN",
  title: "Hi all, I'm Karthikeyan",
  subTitle: emoji(
    "Computer Science Student passionate about Data Analytics, Business Intelligence, and building data-driven solutions using Power BI, SQL, Python, and modern analytics tools."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1xe60M-_cGlf0-tDSdqba7QkZpLS9iqEW/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: " https://github.com/lnrkarthikeyan345",
  linkedin: "https://www.linkedin.com/in/karthikeyanlnr345",
  gmail: "lnrkarthikeyan345@gmail.com",
  gitlab: "https://gitlab.com/lnrkarthikeyan345",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I BUILD DATA ANALYTICS SOLUTIONS USING POWER BI, PYTHON, SQL, AND BUSINESS INTELLIGENCE TO SOLVE REAL-WORLD PROBLEMS.",
  skills: [
    emoji(
      "⚡ Create interactive Power BI dashboards and KPI reports"
    ),
    emoji("⚡ Analyze and transform data using SQL, Python, Pandas and NumPy"),
    emoji(
      "⚡ Build ETL pipelines and business intelligence workflows"
    ),
    emoji("⚡ Convert raw datasets into actionable insights")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Python",
    logo: pythonLogo
  },
  {
    skillName: "Power BI",
    logo: powerbiLogo
  },
  {
    skillName: "PostgreSQL",
    logo: postgresqlLogo
  },
  {
    skillName: "MySQL",
    logo: mysqlLogo
  },
  {
    skillName: "Git",
    logo: gitLogo
  },
  {
    skillName: "Pandas",
    logo: pandasLogo
  },
  {
    skillName: "NumPy",
    logo: numpyLogo
  }
],
display: true
};
// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Amrita Vishwa Vidyapeetham",
      logo: require("./assets/images/amrita.jpg"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "2022 - 2026",
      desc: "CGPA: 7.71 / 10",
      descBullets: [
        "Computer Science Engineering"
      ]
    },

    {
      schoolName: "Mahatma CBSE School",
      logo: require("./assets/images/12th.jfif"),
      subHeader: "Higher Secondary Education (Class XII)",
      duration: "2021 - 2022",
      desc: "Percentage: 83%",
      descBullets: [
        "Higher Secondary Education"
      ]
    },

    {
      schoolName: "Mahatma Montessori Matriculation Higher Secondary School",
      logo: require("./assets/images/10th.png"),
      subHeader: "Secondary Education (Class X)",
      duration: "2019 - 2020",
      desc: "Percentage: 70%",
      descBullets: [
        "Secondary Education"
      ]
    }
  ]
};
// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Power BI",
      progressPercentage: "90%"
    },
    {
      Stack: "SQL",
      progressPercentage: "85%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};
// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
title: "Projects",
subtitle: "DATA ANALYTICS AND BUSINESS INTELLIGENCE PROJECTS",

projects: [
{
image: require("./assets/images/overview.jpg"),
projectName: "FinancePulse",
projectDesc:
"Interactive Power BI dashboard analyzing financial sales performance, customer behavior, regional trends, payment channels, and KPI metrics using DAX and Power Query.",
footerLink: [
{
name: "GitHub Repository",
url: "https://github.com/lnrkarthikeyan345/FinancePulse-4"
}
]
},


{
  image: require("./assets/images/report.jpg"),
  projectName: "SalesScope",
  projectDesc:
    "Business intelligence dashboard built on Superstore sales data to analyze revenue, profitability, customer segments, and regional performance through interactive visualizations.",
  footerLink: [
    {
      name: "GitHub Repository",
      url: "https://github.com/lnrkarthikeyan345/SalesScope-2"
    }
  ]
},

{
  image: require("./assets/images/hospital.png"),
  projectName: "HealthOps Intelligence",
  projectDesc:
    "Healthcare analytics platform currently under development using Python, PostgreSQL, FastAPI, and Power BI to evaluate hospital performance, quality metrics, and operational KPIs.",
  footerLink: [
    {
      name: "GitHub Repository",
      url: "https://github.com/lnrkarthikeyan345/healthops-intelligence"
    }
  ]
}


],

display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
title: emoji("Certifications 🏆"),
subtitle:
"Industry-recognized certifications in Data Analytics, SQL, Business Intelligence, and Analytics Engineering.",

achievementsCards: [
{
title: "Google Advanced Data Analytics",
subtitle: "Google Professional Certification",
image: require("./assets/images/certificates/Google Advanced Data-1.png"),
imageAlt: "Google Advanced Data Analytics"
},


{
  title: "Google Data Analytics",
  subtitle: "Google Professional Certification",
  image: require("./assets/images/certificates/Google Data Analytics-1.png"),
  imageAlt: "Google Data Analytics"
},

{
  title: "Data Analyst Associate",
  subtitle: "DataCamp Certification",
  image: require("./assets/images/certificates/DA.png"),
  imageAlt: "Data Analyst Associate"
},

{
  title: "SQL Associate",
  subtitle: "DataCamp Certification",
  image: require("./assets/images/certificates/SQL.png"),
  imageAlt: "SQL Associate"
},

{
  title: "Alteryx Designer Core Certification",
  subtitle: "Alteryx Certification",
  image: require("./assets/images/certificates/alteryx.png"),
  imageAlt: "Alteryx Designer Core"
}


],

display: true
};
 

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Let's Connect 🤝"),
  subtitle:
    "I'm actively seeking internships and entry-level opportunities in Data Analytics, Business Intelligence, and Software Development.",
  email_address: "lnrkarthikeyan345@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
