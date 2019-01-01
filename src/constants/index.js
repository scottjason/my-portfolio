import { Github, Linkedin } from 'styled-icons/boxicons-logos';
import { Angellist } from 'styled-icons/fa-brands';
import { Mail } from 'styled-icons/feather';


/** 
*
* Shared
*
*/

export const ORANGE_PRIMARY = '#FD845C';
export const OVERLAY_ANIMATION_TIME = 275;
export const SWITCH_ANIMATION_TIME = 275 + 330;


const RESUME_URL = 'https://s3-us-west-1.amazonaws.com/sj-portfolio/Scott-Jason-Resume-2018b.pdf';
const CONTACT_URL = 'mailto:scottleejason@gmail.com?subject=Hi Scott, reaching out from your portfolio site';


/** 
*
* Navbar
*
*/

export const NAVBAR_DATA = [
  { displayName: 'about', method: 'renderView', componentName: 'About'},
  { displayName: 'experience', method: 'renderView', componentName: 'Experience'},
  { displayName: 'resume', method: 'openLink', url: RESUME_URL},
  { displayName: 'projects', method: 'renderView', componentName: 'Projects'},
  { displayName: 'contact', method: 'openLink', url: CONTACT_URL},
];


/** 
*
* Content
*
*/

export const LANDING_DATA = {
  buttonData: {
    componentName: 'Button',
    displayName: 'DOWNLOAD RESUME', 
    url: RESUME_URL,
  },
  headerData: {
    text: 'hello, my name is scott jason',
    subtext: {
      preHighlight: 'I\'m a Full-Stack Software Engineer, ',
      highlighted: 'Frontend ',
      postHighlight: 'Specialist',
    },
    mobileText: 'hello,',
    mobileSubtext: 'my name is scott jason',
  }
};


/** 
*
* Social
*
*/

export const SOCIAL_DATA = [
  { type: 'social',
    component: Github,
    link: 'https://www.github.com/scottjason',
  },
  { type: 'social',
    component: Linkedin,
    link: 'https://www.linkedin.com/in/scottleejason',
  },
  { type: 'social',
    component: Angellist,
    link: 'https://angel.co/scottjason',
  },
  { type: 'social',
    component: Mail,
    link: CONTACT_URL,
  },
];


/** 
*
* Job
*
*/

export const EXPERIENCE_DATA = [
  {
    company: 'Instacart',
    location: 'San Francisco, CA',
    website: 'https://www.instacart.com',
    slogan: 'Groceries delivered in as little as 1 hour',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'April 2017',
    endedAt: 'October 2018',
    stack: 'React, Redux, Ruby on Rails, Redis, ElasticSearch',
    description: ['Built and maintained various features including an autocomplete system for personalized search results, the low stock experience as well as the replacements flow.',
      'Balanced sprints and backlog tasks and successfully planned for and implemented features to meet quarterly goals while leading the coordination of group efforts when multiple teams were involved.',
    ]
  },
  {
    company: 'Savvy',
    location: 'San Francisco, CA',
    website: 'https://www.savvy.is',
    slogan: 'Enables learners to book 1-1 video sessions with teachers.',
    role: 'Senior Frontend Engineer',
    startedAt: 'July 2016',
    endedAt: 'September 2017',
    stack: 'React, Redux, Ruby on Rails, Webpack, OpenTok, AWS',
    description: ["Led Savvy's frontend efforts and built the analytics platform along with various other aspects of the WebRTC-based app.",
      "Led the effort to integrate webpack and frontend testing using mocha and chai.",
    ]
  },
  {
    company: 'Oak Labs, Inc.',
    location: 'San Francisco, CA & New York, NY',
    website: 'https://www.oaklabs.is',
    slogan: 'Bringing tech to retail.',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'October 2015',
    endedAt: 'July 2016',
    stack: 'React, Angular, , Express, Node, Electron, MongoDb, Redis, AWS',
    description: ["Built the main iPad app (iOS web view) used by retail associates at Polo Ralph Lauren (NYC & Dallas).",
      "Wrote Oak's Frontend tests for interview candidates and maintained the website. I was also responsible for building Bult Oak's frontend-heavy analytics platform for Polo Ralph Lauren.",
    ]
  },
  {
    company: 'Stanza',
    location: 'San Francisco, CA',
    website: 'https://www.stanza.co',
    slogan: 'Do more with your time.',
    role: 'Full-Stack Engineer, Frontend Focus',
    startedAt: 'March 2015',
    endedAt: 'October 2015',
    stack: 'Angular, Node, Express.js, MongoDb, Redis',
    description: ["Built Stanza's analytics feature and data visualizations and co-built the main user-facing dashboard",
      "Built internal tools for the business development team to help streamline the sales process",
    ]
  },
  {
    company: 'Interact',
    location: 'San Francisco, CA',
    website: 'https://www.stanza.co',
    slogan: 'Do more with your time.',
    role: 'Software Engineer',
    startedAt: 'October 2014',
    endedAt: 'March 2015',
    stack: 'Angular, Node, Express.js, MongoDb, Redis',
    description: ["Co-built version 2 of Interact and wrote the models, routes, authentication in Node.",
      "Led the efforts to migrate an older backend to use a more modern set of tools",
    ]
  },
];

/** 
*
* About
*
*/

let about = {
  data: [
    {
      text: 'I have somewhat of an unusual background and here\'s a bit about that...',
      highlightByString: ['unusual'],
      highlightByIdx: [],
      isHeading: true,
      links: ['//bonsaiden.github.io/JavaScript-Garden'],
    },
    {
      text: 'I built and deployed my first webite in 1999.',
      highlightByString: [],
      highlightByIdx: [],
      links: [],
    },
    {
      text: 'While I\'ve always been a tinkerer at heart but it wasn\'t until mid-way through my sophomore year of college where I found myself actually neededing an online presence for the band I had started as the first single began taking off at radio all over the world.',
      highlightByString: ['tinkerer', 'band'],
      highlightByIdx: [],
      links: ['//78.media.tumblr.com/53384a082b1a862cf90a008f787c803f/tumblr_p2kxakxhQZ1wufp1qo8_500.gif', '//en.wikipedia.org/wiki/Thriving_Ivory'],
    },
    {
      text: 'Moving forward, the song earned RIAA Gold Certified sales and Apple\'s vote for top 10 most influential songs of the 21st century\'s first decade and all the meanwhile I was keeping our web presence alive until this aspect was eventually handed over to a record company.',
      highlightByString: ['top 10 most influential songs of the 21st century\'s first decade'],
      highlightByIdx: [],
      links: ['//www.youtube.com/watch?v=S38-mjy5NtA'],
    },
    {
      text: 'I was endlessly revamping the frontend and had user data saved via an old, bootstraped php framework template that was feeding a social media-like community so the transition was somewhat involved.',
      highlightByString: [],
      highlightByIdx: [],
      links: [],
    },
    {
      text: 'A few years later I left the music industry and continued my other passion for software. I moved to San Francisco, attended a bootcamp and eventually got my first real job as an actual software engineer.',
      highlightByString: ['passion for software.'],
      highlightByIdx: [],
      links: ['https://hackernoon.com/understanding-functional-programming-with-javascript-41eb3fa8c2a'],
    },
    {
      text: 'Fast-forward to 2019 and I have four years of professional experience- I\'m a product and design-oriented senior frontend engineer and have worked on everything from intelligent mirrors to grocery delivery apps and throughout all this I\'ve developed a whole new passion for all things frontend.',
      highlightByString: ['all things frontend.'],
      highlightByIdx: [],
      links: ['//reactjs.org/'],
    },
    {
      text: 'As for music, I still release the occasional song and peform one or two shows a year for charitable causes.',
      highlightByString: ['charitable'],
      highlightByIdx: [],
      links: ['//reactjs.org/'],
    },
  ],
};


/** 
*
* Projects
*
*/

export const PROJECT_DATA = [
  {
    name: 'Portoflio Site',
    subtext: 'my portoflio site',
    stack: 'React, ES6, Styled Components',
    website: 'https://www.scottleejason.com',
    repo: 'https://www.github.com/scottjason/portoflio',
    deployed: 'January, 2019',
    description: ['BBuilt and maintained various features including an autocomplete system for personalized search results, the low stock experience as well as the replacements flow.',
      'Balanced sprints and backlog tasks and successfully planned for and implemented features to meet quarterly goals while leading the coordination of group efforts when multiple teams were involved.',
    ]
  },
];

/**
* 
* Attaches an array of arrays containing start and end position indices of the highlghted text in each line
*
*/

export const ABOUT_DATA  = about.data.map(line => {
  let { text, highlightByString } = line;
  for (let i = 0; i < highlightByString.length; i++) {
    let highlightedStr = highlightByString[i];
    let startIdx = text.indexOf(highlightedStr);
    let endIdx = startIdx + highlightedStr.length;
    line.highlightByIdx.push([startIdx, endIdx])
  }
  return line;
});
