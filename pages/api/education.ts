import type {NextApiRequest, NextApiResponse} from 'next'

const education = [
  {
    "name": "Politechnika Gdańska",
    "specialization": "Systems and Mobile Technologies",
    "dateFrom": "2012",
    "dateTo": "2014"
  },
  {
    "name": "Państwowa Wyższa Szkoła Zawodowa w Elblągu",
    "specialization": "Database Design and Application Software",
    "dateFrom": "2008",
    "dateTo": "2012"
  }
]

type ResponseData = Array<{
  "name": string,
  "specialization": string,
  "dateFrom": string,
  "dateTo": string,
}> | []

const Education = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  return res.status(200).json(education);
}

export default Education
