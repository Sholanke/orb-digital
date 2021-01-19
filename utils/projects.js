const AllProjects = [
  {
    title: 'Mallbly.',
    website: 'https://mallbly.com/',
    subTitles: [
      'Website Development',
      'Web App Development',
      'Brand / Content Development',
    ],
    dataClasses: '0  : { add: active }, 50vh : {remove : active}',
    workImage: 'mallbly.png',
    slug: 'mallbly',
    image: '/images/projects/mallbly.png',
    pageContent: {
      description: '',
      clientReview: '',
      author: {
        image: '/images/icons/logo-pills/mallbly.svg',
        name: 'Oluwaseun O.',
      },
    },
  },
  {
    title: 'Babelos.',
    website: 'https://babelos.net/',
    subTitles: ['Website Development'],
    dataClasses: '50vh : { add: active }, 100vh : { remove : active }',
    workImage: 'babelos.png',
    slug: 'babelos',
    image: '/images/projects/babelos.png',
    pageContent: {
      description:
        'Babelos is  a multilingual solutions company offering a wide range of linguistic services – translation, transcription, web, mobile and game localisation, voice solutions and cultural consultation.They are very passionate about economic expansion.',
      clientReview:
        'We were thrilled to work with Orb Digital on making our visual identity come alive. We got a fast and reliable Website and Mobile Application from the best designers on the Orb Digital team.',
      author: {
        image: '/images/icons/logo-pills/babelos.svg',
        name: 'Obinna N.',
      },
    },
  },
  {
    title: 'Jollof Republik.',
    website: 'https://jollof-republik.netlify.app/',
    subTitles: [
      'Website Development',
      'Mobile App ( User Interface and Experience Design)',
    ],
    description: '...In Progress',
    dataClasses: '100vh : { add: active }, 150vh : { remove : active }',
    workImage: 'jollof-r.png',
    slug: 'jollof-r',
    image: '/images/projects/jollof-r.png',
    pageContent: {
      description:
        'Jollof Republik is a social networking app that unites people of a common and colorful heritage, created  to celebrate and preserve the rich culture, as well as to empower individuals of African descent.',
      clientReview:
        'It was great working with young, vibrant and innovative minds like the Orb Digital team on our project. We would say it was a job well done!',
      author: {
        image: '/images/icons/logo-pills/jr.svg',
        name: 'Micah I.',
      },
    },
  },
  {
    title: 'P2Vest.',
    website: 'http://p2vest.com/',
    subTitles: [
      'Website Development',
      'Mobile App ( User Interface and Experience Design)',
    ],
    dataClasses: '150vh  : { add: active }, 200vh : {remove : active}',
    workImage: 'p2vest.png',
    slug: 'p2Vest',
    image: '/images/projects/p2vest.png',
    iframe:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOx62FPufeeYLyMCywFfm6x%2FP2Vest%3Fnode-id%3D530%253A0%26viewport%3D66%252C-105%252C0.9400813579559326%26scaling%3Dscale-down',
    pageContent: {
      description:
        'P2Vest is an online financial platform that brings borrowers and lenders together, transforming the way people access credit and lend money. P2Vest creates an avenue for everyone to get the financial future they deserve.',
      clientReview:
        'We appreciate Orb digital for bringing our ideas to live with a tasteful website design and creative contents. We worked closely with the team and they were very keen on helping us achieve a visual representation of our mission and services.',
      author: {
        image: '/images/icons/logo-pills/p2vest.svg',
        name: 'Austine A.',
      },
    },
  },
  {
    title: 'Woven Finance.',
    website: 'https://woven.finance/',
    subTitles: ['Website ( User Interface and Experience Design)'],
    dataClasses: '200vh : { add: active }, 250vh : { remove : active }',
    workImage: 'woven.png',
    slug: 'woven-finance',
    image: '/images/projects/woven.png',
    pageContent: {
      description:
        'Woven Finance is a digital financial service system that provides businesses with a secure digital payments platform to receive and make payments the fastest way. Their system also includes added benefits of exceptional transaction success rates, instant settlement, and easy reconciliation.',
      clientReview: 'Orb Digital',
      author: {
        image: '/images/icons/logo-pills/woven.svg',
        name: 'Adedeji O.',
      },
    },
  },
  {
    title: 'HR Flex.',
    website: 'http://hr-flex.com/',
    subTitles: ['Website Development'],
    dataClasses: '250vh : { add: active }, 300vh : { remove : active }',
    workImage: 'hr-flex.png',
    slug: 'hr-flex',
    image: '/images/projects/hr-flex.png',
    pageContent: {
      description:
        'HR Flex is  full service Human Resources solutions provider with a fourth generation Human Resources Management system built to allow organisations manage their Human capital efficiently, securely and with near to zero down-time.',
      clientReview: 'Orb Digital',
      author: {
        image: '/images/icons/logo-pills/hr-flex.svg',
        name: 'Adebayo A-S.',
      },
    },
  },
  {
    title: 'F. O. Akinrele.',
    website: 'http://foa-web.netlify.app/',
    subTitles: ['Website Development'],
    dataClasses: '300vh : { add: active }',
    workImage: 'fo-akinrele.png',
    slug: 'fo-akinrele',
    image: '/images/projects/fo-a.png',
    pageContent: {
      description:
        'F.O Akinrele Legal service provider to both public and private sectors in Nigeria. With 53years of experience in practice F.O Akinrele has been involved in the development of ideas and legal concepts across a wide range of practice areas from the Energy & Natural Resources sector to the Transport & Telecommunications sectors and from the Banking & Financial Services sector to Project Financing & Infrastructure.',
      clientReview:
        'Orb Digital helped in creating a website that’s fit for our long standing statue and achievement. The website embodies all the details we seek to get the right audience for our practice. They’re very reliable and timely.',
      author: {
        image: '/images/icons/logo-pills/fo-a.svg',
        name: 'Chioma N',
      },
    },
  },
]

const _handleKeyDown = ({ keyCode }) => {
  if (keyCode === 37) projects.goToPreviousProject()
  else if (keyCode === 39) projects.goToNextProject()
}

const projects = {
  all: AllProjects,
  getProject(slug) {
    const projectsThatMatchedSlug = this.all.filter(
      (project) => project.slug === slug
    )
    return projectsThatMatchedSlug[0]
  },
  goToProjectsList() {
    this.$router.push('/')
    setTimeout(
      () => {
        window.scrollTo(0, 100)
      },
      window.innerWidth > 600 ? 1000 : 3000
    )
  },
  homePageIsActive() {
    return this.$route.path === '/'
  },
  goToNextProject() {
    window.scrollBy(0, 0.5 * window.innerHeight)
  },
  goToPreviousProject() {
    window.scrollBy(0, -(0.5 * window.innerHeight))
  },
  initControls() {
    window.addEventListener('keydown', _handleKeyDown)
  },
  stopControls() {
    window.removeEventListener('keydown', _handleKeyDown)
  },
}

// left = 37
// up = 38
// right = 39
// down = 40

export { projects }
