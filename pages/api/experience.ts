import type {NextApiRequest, NextApiResponse} from 'next'

const experience = [
  {
    "name": "Tri-table Sp. z o.o.",
    "positions": [
      {
        "position": "CIO / Team Lead",
        "dateFrom": "2022-01",
        "dateTo": null,
        "projects": [
          "Adserver (Node.js, Javascript, Typescript, PHP)",
          "CMP (ReactJS, Typescript)",
          "Header bidding (Javascript, Typescript)",
          "Prebid Server (Node.js, Javascript)",
          "CRM/ERP (PHP, HTML, JS, CSS, Redis, Sass, MySQL, Rest API, Python)"
        ]
      },
    ]
  },
  {
    "name": "Spolecznosci Sp. z o.o.",
    "positions": [
      {
        "position": "CIO / Team Lead",
        "dateFrom": "2017-02",
        "dateTo": "2021-12",
        "projects": null
      },
    ]
  },
  {
    "name": "Fotka Sp. z o.o.",
    "positions": [
      {
        "position": "Senior Full Stack Developer",
        "dateFrom": "2016-01",
        "dateTo": "2017-01",
        "projects": [
          "Prepare mailings (private messages, mailings, notifications, gifts)",
          "Profiles and special groups",
          "Behavioral targeting",
          "Contests",
          "Advertisements and mailings tools",
          "Creation of new functionality"
        ]
      },
      {
        "position": "Full Stack Developer",
        "dateFrom": "2012-09",
        "dateTo": "2015-12",
        "projects": null
      }
    ]
  },
  {
    "name": "Vene Studio",
    "positions": [
      {
        "position": "Web Developer",
        "dateFrom": "2012-02",
        "dateTo": "2012-08",
        "projects": [
          "Creating websites for hotels, restaurants, beauty and hair salons, etc.",
          "Designing page templates in Adobe Photoshop / Illustrator",
          "Preparing projects for printing"
        ]
      }
    ]
  }
]

type ResponseData = Array<{
  "name": string,
  "positions": {},
}> | []

const Experience = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  return res.status(200).json(experience);
}

export default Experience
