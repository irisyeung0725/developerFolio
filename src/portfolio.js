/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "Shijing Yang",
  title: "Hi all, I'm Shijing",
  subTitle1: emoji(
    "A data enthusiast currently studying M.S. in data science 👩🏻‍💻 with hands on industry experience in data science, data analytics, database management, machine learning and related fields 📝 "
  ),
  subTitle2: emoji("Currently I am looking for full time opportunities in data science, data analytics and data engineering fields starting from Jan. 2022 🧐"),
  resumeLink:
    "https://drive.google.com/file/d/1vy78Jk8yE-NM4HFhSTBJJCcKGT8o-PZk/view?usp=sharing",
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
  title: emoji("My Skills and What I Do"),
  subTitle: emoji("A curious human being who enjoys exploring data and reveals insights 📊 "),
  skills: [
    emoji(
      "⚡ Apply statistical methods and deep learning algorithms to build ML models "
    ),
    emoji(
      "⚡ Write advanced SQL queries to generate tables with clean data and optimize run time"
    ),
    emoji(
      "⚡ Build interactive dashboards through BI tools (e.g. Tableau, Mode Analytics) or through front-end development tools (e.g. HTML, CSS & Javascript)"
    ),
    emoji("⚡ Perform Exploratory Data Analyisis (EDA) on given datasets and visualize intersting findings to dig business insights"),
    
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
      subHeader: "Bachelor of Arts in Finance, minor in management, cum laude",
      duration: "September 2014 - June 2018",
      gpa: "3.63 / 4",
      desc: "Ranked top 5% in the program and graduated distinction.",
      descBullets: ["Related Coursework: Calculus, Statistics, Linear Algebra, Discrete Math, Economics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
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
      desc: "iRobot Summer Internship Program",
      descBullets: [
        "Developed an interactive web-based market exploration tool in Python resulted in an increase efficiency of 75%",
        "Performed propensity scoring to assist selecting robot groups (e.g. control group and experimental group) for software beta testing with Logistic Regression",
        "Optimized 20+ multi-nested SQL queries with 25TB data on AWS to increase query run time by at least 33%",
        "Performed EDA on 20+ tables across 5+ robot functionalities and visualized results with Plotly and HTML",
        "Collaborated with data engineers and data scientists to create 3 new cache tables and address data quality issues"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Homesite Insurance",
      companylogo: require("./assets/images/homesite-logo.png"),
      date: "Jan 2021 – May 2021",
      desc: "WPI Graduate Qualifying Project",
      descBullets: [
        "Optimized internal pricing GLM model R package by transitioning to a scalable ML platform such as H2O with 50% increased run time efficiency",
        "Built additional regularization models (e.g. ElasticNet, Lasso & Ridge) to provide better feature selection result",
        "Utilized lift charts, double lift charts, Gini index, ROC curve etc. to visualize and identify model performance",
        "Led 3 team members to manage several branches on Git to work on different parts of the package for better version control",
        "Documented work and creasted API's on confluence page for future development "
      ]
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
      date: "June 2018 – Aug 2018",
      desc: "BOC Summer Analyst Program",
      descBullets: [
        "Wrangled 3TB unstructured data in Python on distributed file system and visualized data in reports",
        "Redesigned a database model for storing over 4GB of customers’ loan data with multi-nested SQL queries",
        "Created 5 Python scripts to automate data output from excel sheets that was previously done manually with 50% increase efficiency"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Related Projects",
  subtitle1: emoji("📚 Some projects that I did for my professor, the school, my classes, or my interest"),
  subtitle2: emoji("🌟 To view more projects, please feel free to visit my"),
  projects: [
    {
      image: require("./assets/images/Apache_Hive_logo.svg"),
      projectName: "Resursive Query on Hive & Hadoop",
      projectDesc: "Design an interface to allow recursive SQL queries implementation with Hive+Hadoop",
      footerLink: [
        {
          name: "View Report",
          url: "https://github.com/irisyeung0725/DS503-Big-Data-Management/blob/master/report.pdf"
        },
        {
          name: "Visit Github Repository",
          url: "https://github.com/irisyeung0725/DS503-Big-Data-Management"
        }
      ]
    },
    {
      image: require("./assets/images/tripAdvisor-logo.png"),
      projectName: "Hotel Search Engine",
      projectDesc: "Develop a hotel search engine that supports free user-input queries based on history user text reviews from Trip-Advisor",
      footerLink: [
        {
          name: "View Website",
          url: "https://hotelcritic.azurewebsites.net/"
        },
        {
          name: "Visit Github Repository",
          url: "https://github.com/irisyeung0725/CS547_Hotel_Critic"
        }
      ]
    },
    {
      image: require("./assets/images/Zillow-logo.png"),
      projectName: "House Price Prediction with Advanced Linear Regression",
      projectDesc: "A Kaggle competition to use advanced regression techniques with limited data to predict house prices for residential homes in Ames, Iowa",
      footerLink: [
        {
          name: "View Report",
          url: "https://github.com/YufeiLinUlysses/DS502FinalProject/blob/main/Final_Report.pdf"
        },
        {
          name: "Visit Github Repository",
          url: "https://github.com/irisyeung0725/DS502FinalProject"
        }
      ]
    },
    
    {
      image: require("./assets/images/wpi-logo-website.png"),
      projectName: "DiverseOptima",
      projectDesc: "Originally based on Porfessor Andrew C. Trapp's paper. The tool is to apply the concept mentioned in the paper and find diverse optima and near-optima to binary integer programs",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://diverseoptima.wpi.edu/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/stock-logo.jpeg"),
      projectName: "Stock Trading Strategy",
      projectDesc: "Apply different machine learning methods (e.g. svm, random forest, CNN, LSTM) to compare model performance on stock decision making suggestion for stock traders",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bl75d.github.io/CS539MLFinalProj/"
        },
        {
          name: "Visit Github Repository",
          url: "https://github.com/irisyeung0725/CS539MLFinalProj"
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
      title: "DataRobot Essentials",
      subtitle:
        "DataRobot is the AI Cloud leader, delivering a unified platform for all users, all data types, and all environments to accelerate delivery of AI to production",
      image: require("./assets/images/datarobot-logo.png"),
      footerLink: [
        {
          name: "ID: 56356528",
          url: ""
        }
      ]
    },
    {
      title: "JLPT N3",
      subtitle:
        "FJLPT is a standardized criterion-referenced test to evaluate and certify Japanese language proficiency for non-native speakers",
      image: require("./assets/images/jlptLogo.png"),
      footerLink: [
        {
          name: "ID: N3A164790A",
          url: ""
        }
      ]
    },
    {
      title: "Bloomberg Market Concepts",
      subtitle:
        "A self-paced e-learning course that provides an interactive introduction to the financial markets",
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
      title: "Udemy Online-course Certificate",
      subtitle: "Completed Certifcation of SQL - MySQL for Data Analytics and Business Intelligence on Sept. 30, 2019",
      image: require("./assets/images/Udemy-logo.png"),
      footerLink: [
        {
          name: "Certification", 
          url: "https://www.udemy.com/certificate/UC-WCP90TOC/"
        },
      ]
    },

    {
      title: "Mendix Rapid Developer",
      subtitle: "A low-code collaborative development platform for mobile and web-based applications",
      image: require("./assets/images/Mendix-logo.png"),
      footerLink: [
        {
          name: "ID: 16912", 
          url: ""
        },
        {
          name: "View Mendix", 
          url: "https://www.mendix.com/"
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
  title: emoji("Reach Out to Me 😄"),
  subtitle:
    "I am open to anything related to Data Scientist, Data Engineer, or Data Analyst position starting January 2022. Please feel free to reach out to me if you have any questions!",
  number: emoji("☎️: (774)-232-3355"),
  email_address: emoji("📧: syang6@wpi.edu")
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
