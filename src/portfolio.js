const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'index.html',
  title: 'AS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Arindam Sharma',
  role: 'Front End Engineer',
  picture: 'cl.jpeg',

  description:
    'UI/UX + front-end developer who loves building minimal, aesthetic and fast digital experiences. I focus on clean interfaces that feel effortless to use, and I enjoy turning ideas into polished products with both design and code.',
  resume: 'https://drive.google.com/file/d/1melWSAiVb81eMQUlmfSAeixeB1glXWuH/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/arindam-sharma-ab4712251/',
    github: 'https://github.com/ArindamSharma1',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Dora',
  'Framer',
  'Material UI',
  'Git',
  'Ui/Ux',
  'Spline',
  'Tailwind CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sharmaarindam091@gmail.com',
}

export { header, about, projects, skills, contact }
