import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  MERN,
  cp,
  ps,
  tcw,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  gfg,
  LetsGrowMore,
  KnowledgeHut,
  Farvision,
  dall,
  razorpay,
  imgtoskt
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: MERN,
  },
  {
    title: "Competetive Programmer",
    icon: cp,
  },
  {
    title: "Technical Content Writer",
    icon: tcw,
  },
  {
    title: "Problem Setter",
    icon: ps,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "GeeksforGeeks",
    icon: gfg,
    iconBg: "#FFFFFF",
    date: "Sep 2021 - Present",
    points: [
      "blished 170+ articles on C++/Python/DSA/Maths/CP/Git and many more.",
      "Become Geek of the Year, 2k22 which is given to only one person per year for exceptional technical writing.",
      "Become Geek of the Month, July 2k22.",
      "Inheritance Ambiguity in C++ has 20k+ views.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Lets Grow More",
    icon: LetsGrowMore,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Apr 2022",
    points: [
      "Build Stock Market Prediction & Music Recommendation system using numpy, pandas, seaborn, sklearn and tensorflow.",
      "Build Decision Tree Model using DecisionTreeClassifier.",
      "Build Image to Sketch Converter using OpenCV.",
      "Build Flower Classification Project and compare accuracy, confusion matrix, classification report of various classifiers i.e., Logistic Regression, KNN, Linear SVM, Kernel SVM, Naive Bayes, Decision Tree, Random Forest.",
    ],
  },
  {
    title: "Technical Blog Writer",
    company_name: "KnowledgeHut upGrad",
    icon: KnowledgeHut,
    iconBg: "#383E56",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Wrote top 65 Computer Science Interview Questions and Answers.",
      "Increase the SEO of the article by a great extent",
      "Domain: OS, DBMS, OOPs and Computer Networking.",
      "Rating: 4.7/5",
    ],
  },
  {
    title: "Software Developer Trainee",
    company_name: "Farvision",
    icon: Farvision,
    iconBg: "#383E56",
    date: "Jan 2023 - Apr 2023",
    points: [
      "Working with the finance team to build various web pages and entities using C#, .NET, Angular and SQL.",
      "Worked in different layers of backend i.e., CRUD, Repository, Service, Controller to handle the flow.",
      "Worked on typescript in frontend and SQL Server to deal with CRUD, Search and Advance Search in database.",
      "Solved various issues, and implemented various features for the organization and used Postman for unit testing.",
      "Received PPO after completion of the apprenticeship.",
    ],
  },
];

const profiles = [
  {
    image: "https://camo.githubusercontent.com/8757c6da00e19219a51bbce8218913329c1c544cb4a40069d702ba2c0349b7bf/68747470733a2f2f63646e2e636f6465636865662e636f6d2f696d616765732f63632d6c6f676f2e737667",
    name: "codechef",
    link: "https://www.codechef.com/users/akash_adr/",
  },
  {
    image: "https://camo.githubusercontent.com/cba5e57cea50d9dd119076b449cd6cf868e92502478d1ba97a4ab355e2936aec/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f456b536c4c5766322d30346b355935465f4d444c716f5850646f3054795a58337a4b6443667345554471564237494e557970544f643641566d6b455f5837656a334a7552",
    name: "codeforces",
    link: "https://codeforces.com/profile/akashjha2671",
  },
  {
    image: "https://camo.githubusercontent.com/cc970ca71436129d452abe304b052203754cf170951dd0a2a1903613f5b32999/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f37332f65312f35342f37336531353432323031316537363365613962333033613737333865373161332e676966",
    name: "leetcode",
    link: "https://leetcode.com/Akash_Adr/",
  },
  {
    image: "https://camo.githubusercontent.com/4a441c45ff126df4463e87b75782321f78c81f3deb73b79a0ad8886c4bfe9e8a/68747470733a2f2f6d656469612e6765656b73666f726765656b732e6f72672f77702d636f6e74656e742f75706c6f6164732f32303231303630383032313432332f4f75747075742e676966",
    name: "gfg",
    link: "https://auth.geeksforgeeks.org/user/akashjha2671/",
  },
  {
    image: "https://camo.githubusercontent.com/dea8697850e5e6109164b354bdb17397540dbce064f62e0d537605ac7eb8bb2a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34302f4861636b657252616e6b5f49636f6e2d3130303070782e706e67",
    name: "hackerrank",
    link: "https://www.hackerrank.com/akashjha2671",
  },
  {
    image: "https://www.thecodehelp.in/_next/image?url=https%3A%2F%2Fcodehelp.s3.ap-south-1.amazonaws.com%2FLinked_In_Oct_Denoiser_Beauty_001_copy_b6e0b974bb.png&w=1920&q=75",
    name: "linkedin",
    link: "https://www.linkedin.com/in/akash-adr/",
  },
  {
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    name: "github",
    link: "https://github.com/akashadr",
  },
];

const projects = [
  {
    name: "AI Image Generation App",
    description:
      "It is an AI model developed by OpenAI API and MERN stack that generates images from textual descriptions. The frontend is deployed in vercel and backend on render.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "green-pink-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dall,
    source_code_link: "https://github.com/akashadr/Dall-E",
    live_link: "https://dall-e-brown.vercel.app/",
  },
  {
    name: "Razorpay Clone",
    description:
      "Build a clone of the most popular digital payment gateway platform, Razorpay and handled Responsive Design to ensure compatibility across all device. It is deployed on netlify.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: razorpay,
    source_code_link: "https://github.com/akashadr/RazorpayClone",
    live_link: "https://willowy-tarsier-e0e3a4.netlify.app/",
  },
  {
    name: "Image to Sketch Converter",
    description:
      "Build an converter that read the image in RGB format and then convert into an greyscale image and lastly turn the image into a classic black and white photo.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "jupyter notebook",
        color: "pink-text-gradient",
      },
    ],
    image: imgtoskt,
    source_code_link: "https://github.com/akashadr/Personal-Projects/blob/main/Image%20to%20Sketch%20Project/Image%20to%20Pencil%20Sketch%20with%20Python.ipynb",
    live_link: "https://github.com/akashadr/Personal-Projects/blob/main/Image%20to%20Sketch%20Project/Image%20to%20Pencil%20Sketch%20with%20Python.ipynb",
  },
];

export { services, technologies, experiences, projects, profiles };
