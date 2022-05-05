import type {NextApiRequest, NextApiResponse} from 'next'

const language = [
  {
    "language": "Polish",
    "level": "native",
  },
  {
    "language": "English",
    "level": "intermediate",
  }
]

type ResponseData = Array<{
  "language": string,
  "level": string,
}> | []

const Education = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  return res.status(200).json(language);
}

export default Education
