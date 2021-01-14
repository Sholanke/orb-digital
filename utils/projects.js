const AllProjects = [
  {
    title: 'Mallbly.',
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
    subTitles: ['Website Development'],
    dataClasses: '50vh : { add: active }, 100vh : { remove : active }',
    workImage: 'babelos.png',
    slug: 'babelos',
    image: '/images/projects/babelos.png',
  },
  {
    title: 'Jollof Republik.',
    subTitles: ['Website Development', 'Mobile App ( UI : UX )'],
    description: '...In Progress',
    dataClasses: '100vh : { add: active }, 150vh : { remove : active }',
    workImage: 'jollof-r.png',
    slug: 'jollof-r',
    image: '/images/projects/jollof-r.png',
  },
  {
    title: 'P2Vest.',
    subTitles: ['Website Development', 'Mobile App ( UI : UX )'],
    dataClasses: '150vh  : { add: active }, 200vh : {remove : active}',
    workImage: 'p2vest.png',
    slug: 'p2Vest',
    image: '/images/projects/p2vest.png',
  },
  {
    title: 'Woven Finance.',
    subTitles: ['Website ( UI : UX )'],
    dataClasses: '200vh : { add: active }, 250vh : { remove : active }',
    workImage: 'woven.png',
    slug: 'woven-finance',
    image: '/images/projects/woven.png',
  },
  {
    title: 'HR Flex.',
    subTitles: ['Website Development'],
    dataClasses: '250vh : { add: active }, 300vh : { remove : active }',
    workImage: 'hr-flex.png',
    slug: 'hr-flex',
    image: '/images/projects/hr-flex.png',
  },
  {
    title: 'F. O. Akinrele.',
    subTitles: ['Website Development'],
    dataClasses: '300vh : { add: active }',
    workImage: 'fo-akinrele.png',
    slug: 'fo-akinrele',
    image: '/images/projects/fo-a.png',
  },
]

const projects = {
  all: AllProjects,
  getProject(slug) {
    const projectsThatMatchedSlug = this.all.filter(
      (project) => project.slug === slug
    )
    return projectsThatMatchedSlug[0]
  },
}
export { projects }
