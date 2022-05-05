import {Col, Loading, Row, Spacer, Text} from '@nextui-org/react';
import Date, {diffYearsAndMonths} from './utils/date'

import useSWR from "swr";
import {Fragment} from "react";

const fetcher = url => fetch(url).then(r => r.json())

const Projects = ({projects}) => {
  return (
    <ul style={{listStyleType: 'circle'}}>
      {projects.map((result, index) =>
        <li key={index} style={{marginBottom: '.25rem', fontSize: '.875rem'}}>{result}</li>
      )}
    </ul>
  )
}

const Experience = () => {
  const {data, error} = useSWR(`/api/experience`, fetcher)

  if (error) return <div>Error loading experience</div>

  return (
    <>
      <Text h4>Experience</Text>
      {!data
        ? <Loading type="gradient">Loading</Loading>
        : <>
          {data.map((result, index) =>
            <Fragment key={index}>
              <Spacer y={.5} />
              {result.positions.map((resultPosition, index2) =>
              <Row key={index2} wrap="wrap">
                <Col span={4} css={{paddingRight: '1rem', '@smMax': {width: '100%', margin: 0}}}>
                  <Text><Date dateString={resultPosition.dateFrom} dateFormat="MMM yyyy" /> - {resultPosition.dateTo ? <Date dateString={resultPosition.dateTo} dateFormat="MMM yyyy" /> : 'now'}</Text>

                  <Text className="printarea-hide" small css={{color: '$gray500'}}>{diffYearsAndMonths(resultPosition.dateFrom, resultPosition.dateTo)}</Text>
                </Col>

                <Col span={8} css={{'@smMax': {width: '100%'}}}>
                  <Text b>{result.name}</Text>
                  <Text>{resultPosition.position}</Text>
                  {resultPosition.projects && <Projects projects={resultPosition.projects} />}
                </Col>
              </Row>
              )}
            </Fragment>
          )
          }
        </>
      }
    </>
  );
};

export default Experience;