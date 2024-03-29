// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Web Development', 'Javascript', 'Languages'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Powershell',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Azure Function',
    competency: 3,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'Azure Data Factory V2',
    competency: 3,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'Azure Service Bus',
    competency: 2,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'Azure Blob',
    competency: 3,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'Azure SQL',
    competency: 3,
    category: ['Web Development', 'Cloud', 'Databases'],
  },
  {
    title: 'Azure Directory Auth.',
    competency: 2,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'Azure SaaS',
    competency: 3,
    category: ['Web Development', 'Cloud'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'SSIS',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'MS SQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'Microsoft Dynamics 365',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: '.NET Framework 4.6+',
    competency: 4,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Source Control', 'Tools'],
  },
  {
    title: 'Open XML',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'EP PLUS Utility',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Telerik Reporting Web tool',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Bit Bucket',
    competency: 2,
    category: ['Source Control', 'Tools'],
  },
  {
    title: 'ASP .NET MVC',
    competency: 4,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'ASP. NET REST API',
    competency: 4,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GitLab',
    competency: 3,
    category: ['Source Control'],
  },
  {
    title: 'Azure DevOps',
    competency: 3,
    category: ['Source Control', 'Cloud', 'Project Management'],
  },
  {
    title: 'TFS/ VSTS',
    competency: 4,
    category: ['Source Control', 'Tools'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Engineering', 'Javascript'],
  },
  {
    title: 'Microsoft Visual Studio 2022 IDE',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Visual Code',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'nUnit',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Kingswaysoft SSIS toolkit',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Entity Framework',
    competency: 3,
    category: ['Frameworks', 'Web Development'],
  },
  {
    title: '.NET Core',
    competency: 3,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'LINQ',
    competency: 4,
    category: ['Frameworks'],
  },
  {
    title: 'XRM Toolbox (FetchXML)',
    competency: 4,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'JIRA',
    competency: 4,
    category: ['Project Management', 'Tools'],
  },
  {
    title: 'Asana',
    competency: 4,
    category: ['Project Management'],
  },
  {
    title: 'Agile',
    competency: 4,
    category: ['Project Management'],
  },
  {
    title: 'Scrum Methodology',
    competency: 4,
    category: ['Project Management'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
