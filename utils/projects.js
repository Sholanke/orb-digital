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
  },
  {
    title: 'Babelos.',
    website: 'https://babelos.net/',
    subTitles: ['Website Development'],
    dataClasses: '50vh : { add: active }, 100vh : { remove : active }',
    workImage: 'babelos.png',
    slug: 'babelos',
    image: '/images/projects/babelos.png',
  },
  {
    title: 'Jollof Republik.',
    website: 'https://jollof-republik.netlify.app/',
    subTitles: ['Website Development', 'Mobile App ( UI : UX )'],
    description: '...In Progress',
    dataClasses: '100vh : { add: active }, 150vh : { remove : active }',
    workImage: 'jollof-r.png',
    slug: 'jollof-r',
    image: '/images/projects/jollof-r.png',
  },
  {
    title: 'P2Vest.',
    website: 'http://p2vest.com/',
    subTitles: ['Website Development', 'Mobile App ( UI : UX )'],
    dataClasses: '150vh  : { add: active }, 200vh : {remove : active}',
    workImage: 'p2vest.png',
    slug: 'p2Vest',
    image: '/images/projects/p2vest.png',
    iframe:
      'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOx62FPufeeYLyMCywFfm6x%2FP2Vest%3Fnode-id%3D530%253A0%26viewport%3D66%252C-105%252C0.9400813579559326%26scaling%3Dscale-down',
  },
  {
    title: 'Woven Finance.',
    website: 'https://woven.finance/',
    subTitles: ['Website ( UI : UX )'],
    dataClasses: '200vh : { add: active }, 250vh : { remove : active }',
    workImage: 'woven.png',
    slug: 'woven-finance',
    image: '/images/projects/woven.png',
  },
  {
    title: 'HR Flex.',
    website: 'http://hr-flex.com/',
    subTitles: ['Website Development'],
    dataClasses: '250vh : { add: active }, 300vh : { remove : active }',
    workImage: 'hr-flex.png',
    slug: 'hr-flex',
    image: '/images/projects/hr-flex.png',
  },
  {
    title: 'F. O. Akinrele.',
    website: 'http://foa-web.netlify.app/',
    subTitles: ['Website Development'],
    dataClasses: '300vh : { add: active }',
    workImage: 'fo-akinrele.png',
    slug: 'fo-akinrele',
    image: '/images/projects/fo-a.png',
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
