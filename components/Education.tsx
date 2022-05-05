import {Col, Loading, Row, Spacer, Text} from '@nextui-org/react';
import Date from './utils/date'

import useSWR from "swr";
import {Fragment} from "react";

const fetcher = url => fetch(url).then(r => r.json())

const Education = () => {
  const {data, error} = useSWR(`/api/education`, fetcher)

  if (error) return <div>Error loading education</div>

  return (
    <>
      <Text h4>Education</Text>
      {!data
        ? <Loading type="gradient">Loading</Loading>
        : <>
          {data.map((result, index) =>
            <Fragment key={index}>
              <Spacer y={.5} />
              <Row key={result.dateFrom} wrap="wrap">
                <Col span={4} css={{paddingRight: '1rem', '@smMax': {width: '100%', margin: 0}}}>
                  <Text><Date dateString={result.dateFrom} dateFormat="yyyy" /> - <Date dateString={result.dateTo} dateFormat="yyyy" /></Text>
                </Col>

                <Col span={8} css={{'@smMax': {width: '100%'}}}>
                  <Text b>{result.name}</Text>
                  <Text>{result.specialization}</Text>
                </Col>
              </Row>
            </Fragment>
          )}
        </>
      }
    </>
  );
};

export default Education;