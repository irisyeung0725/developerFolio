/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Shijing Yang",
  title: "Hi all, I'm Shijing",
  subTitle: emoji(
    "A data enthusiast currently studying M.S. in data science 👩🏻‍💻 with hands on industry experience in data science, data analytics, statistical modeling and related fields 📝 Currently I am looking for full time opportunities in data science, data analytics and data engineering fields 🧐"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1VDTJRsRu5rvcWJJOnikYrnzicuwYDVuM/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  microsoft: "syang6@wpi.edu",
  github: "https://github.com/irisyeung0725",
  linkedin: "https://www.linkedin.com/in/syang6/",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100028009863641",
  instagram: "https://www.instagram.com/ii_iiris/",
  vsco: "https://vsco.co/thisisirisyeah/gallery",
  spotify: "https://open.spotify.com/user/cecilia0725",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: emoji("What I Do"),
  subTitle: emoji("A curious human being who enjoys exploring data and reveals interesting insights 📊 "),
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-salesforce"
    },
    {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
  
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "hadoop",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-laptop"
    },
    {
      skillName: "Data Visualization",
      fontAwesomeClassname: "fas fa-chart-area"
    },
    {
      skillName: "iOS",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Worcester Polytechnic Institute",
      logo: require("./assets/images/wpiLogo.png"),
      subHeader: "Master of Science in Data Science",
      duration: "August 2020 - December 2021",
      gpa: "4.0 / 4.0",
      desc: "Research assistant involving statistical modeling and optimization",
      descBullets: [
        "Related Coursework: Big Data Analytics, Statistics for Data Science, Information Retrieval, Deep Learning",
        "Teaching Assistant: Business Intelligence (Business School), Scripting for Process and Productivity Improvement (Industrial Engeering) "
      ]
    },
    {
      schoolName: "Worcester Polytechnic Institute",
      logo: require("./assets/images/wpiLogo.png"),
      subHeader: "Master of Science in Information Technology",
      duration: "August 2020 - December 2021",
      gpa: "3.91 / 4.0",
      desc: "Participated in serveral optimization research projects and one accpeted paper",
      descBullets: [
        "Related Coursework: Database Application, Machine Learning, Telecommunications, Business Intelligence, Web Design for UX",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Beijing Normal University",
      logo: require("./assets/images/bnuLogo.png"),
      subHeader: "Bachelor of Arts in Finance, minor in management",
      duration: "September 2014 - June 2018",
      gpa: "3.63 / 4",
      desc: "Ranked top 5% in the program and graduated distinction.",
      descBullets: ["Related Coursework: Calculus, Statistics, Linear Algebra, Discrete Math, Economics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "100%"
    },
    {
      Stack: "R",
      progressPercentage: "90%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "80%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analytics Intern",
      company: "iRobot",
      companylogo: require("./assets/images/irobot-logo-2.png"),
      date: "May 2021 – Aug 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Homesite Insurance",
      companylogo: require("./assets/images/homesite-logo.png"),
      date: "Jan 2021 – May 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    // {
    //   role: "Research Assistant",
    //   company: "WPI",
    //   companylogo: require("./assets/images/wpiLogo.png"),
    //   date: "Aug 2019 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
    {
      role: "Data and Operation Analyst Intern",
      company: "Bank of China",
      companylogo: require("./assets/images/boc-logo.jpeg"),
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "JLPT N3",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/jlptLogo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Bloomberg Market Concepts",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/bloombergLogo.jpeg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1MMbH-p_raVDw6gqBocaYhJ9kOj1NaPTO/view?usp=sharing"
        },
        {
          name: "View Bloomberg Market Concepts",
          url: "https://www.bloomberg.com/professional/product/bloomberg-market-concepts/"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

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
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "7742323355",
  email_address: "syang6@wpi.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
