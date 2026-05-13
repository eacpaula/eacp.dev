import type { SkillGroup } from '../types/content'

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    priorityNote: 'Core delivery and architecture strengths',
    skills: [
      { name: 'React.js', yearsLabel: '6+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Angular', yearsLabel: '5+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Next.js', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'TypeScript', yearsLabel: '8+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Tailwind CSS', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Storybook', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', yearsLabel: '8+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Nest.js', yearsLabel: '4+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Express.js', yearsLabel: '6+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Fastify', yearsLabel: '3+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'C#', yearsLabel: '5+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: '.NET Core', yearsLabel: '4+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'PHP', yearsLabel: '3+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS', yearsLabel: '4+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Azure', yearsLabel: '3+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Application Insights', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Key Vault', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'GCP', yearsLabel: '1+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'DevOps/CI/CD',
    skills: [
      { name: 'CI/CD Pipelines', yearsLabel: '6+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Azure DevOps', yearsLabel: '3+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'GitHub Actions', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'GitLab CI', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Docker', yearsLabel: '8+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Kubernetes', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', yearsLabel: '8+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'SQL Server', yearsLabel: '5+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'MySQL', yearsLabel: '5+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Oracle', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'PL/SQL', yearsLabel: '2+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Redis', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'Testing/Quality',
    skills: [
      { name: 'Unit Testing', yearsLabel: '6+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Integration Testing', yearsLabel: '5+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'E2E Testing', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Jest', yearsLabel: '4+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Cypress', yearsLabel: '4+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'ESLint', yearsLabel: '5+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'SonarQube', yearsLabel: '2+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'APIs',
    skills: [
      { name: 'REST API', yearsLabel: '8+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'GraphQL', yearsLabel: '3+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Swagger', yearsLabel: '5+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Postman', yearsLabel: '5+', emphasis: 'supporting', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
  {
    category: 'AI/Automation',
    skills: [
      { name: 'GitHub Copilot', yearsLabel: '4+', emphasis: 'core', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'LangChain', yearsLabel: '1+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'n8n', yearsLabel: '1+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Cursor IDE', yearsLabel: '1+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
      { name: 'Codex', yearsLabel: '1+', emphasis: 'secondary', sourceRefs: ['docs/profile/skills.csv'] },
    ],
  },
]
