import {Card, Col, Divider, Loading, Progress, Row, Spacer, Text} from '@nextui-org/react'

import useSWR from 'swr'

import ButtonBordered from "./ButtonBordered";

const fetcher = url => fetch(url).then(r => r.json())

const SkillButton = ({data, header}) => {
  return (
    <>
      <Spacer y={.5} />
      <Text h5>{header}</Text>
      <Row wrap="wrap">
        {data.map((skill, index) => <ButtonBordered key={index}>{skill}</ButtonBordered>)}
      </Row>
    </>
  )
}

const SkillProgress = ({data}) => {
  return (
    <>
      {data.map((skill, index) =>
        <Col key={index}>
          <Row justify="space-between" align="center">
            <Text>{skill.name}</Text>
            <Text small>{skill.levelName}</Text>
          </Row>
          <Row>
            <Progress value={skill.level} color="gradient" />
          </Row>
          <Spacer y={.5} />
        </Col>
      )}
    </>
  )
}

const SkillsCard = () => {
  const {data, error} = useSWR(`/api/skills`, fetcher)

  if (error) return <div>Error loading skills</div>

  return (
    <Card css={{background: '$card'}} bordered shadow={false}>
      <Card.Header>
        <Text h4>Skills</Text>
      </Card.Header>
      <Divider />
      <Card.Body css={{padding: "$sm"}}>
        {!data
          ? <Loading type="gradient">Loading</Loading>
          : <>
            <SkillProgress data={data.core} />
            <SkillButton header="Frameworks" data={data.frameworks} />
            <SkillButton header="Databases" data={data.databases} />
            <SkillButton header="Other" data={data.other} />
            <SkillButton header="Tools" data={data.tools} />
            <SkillButton header="Soft skills" data={data.soft} />
          </>
        }
      </Card.Body>
    </Card>
  )
}

export default SkillsCard

