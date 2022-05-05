import type {NextApiRequest, NextApiResponse} from 'next'

const skills = {
  "core": [
    {
      "name": "PHP",
      "level": 100,
      "levelName": "Senior"
    },
    {
      "name": "Javascript",
      "level": 100,
      "levelName": "Senior"
    },
    {
      "name": "HTML/CSS",
      "level": 100,
      "levelName": "Senior"
    },
    {
      "name": "Node.js",
      "level": 66,
      "levelName": "Mid"
    },
    {
      "name": "React.js",
      "level": 33,
      "levelName": "Junior"
    },
    {
      "name": "Python",
      "level": 33,
      "levelName": "Junior"
    }
  ],
  "frameworks": [
    "Zend Framework",
    "Laminas",
    "Express.js",
    "Next.js",
    "Prebid.js",
    "jQuery"
  ],
  "databases": [
    "MySQL",
    "PostgreSQL",
    "MongoDB"
  ],
  "other": [
    "AWS S3",
    "Babel",
    "CRM",
    "Consent Management Platform",
    "Docker",
    "ERP",
    "Git",
    "Header Bidding Platform",
    "Nginx",
    "REST",
    "Real-time bidding",
    "Redis",
    "SCSS",
    "TDD",
    "Testing",
    "TypeScript",
    "UI/UX",
    "Webpack"
  ],
  "tools": [
    "Adobe Design",
    "PHPStorm",
    "Postman",
    "ClickUp"
  ],
  "soft": [
    "Agile",
    "Scrum",
    "Leadership",
    "Teamwork",
    "Team management",
    "Problem solving"
  ]
}

type ResponseData = {
  core: Array<{
    name: string;
    level: number;
    levelName: string;
  }>,
  frameworks: string[],
  databases: string[],
  tools: string[],
  soft: string[]
} | {}

const Skills = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  return res.status(200).json(skills);
}

export default Skills
