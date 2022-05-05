import {Col, Loading, Row, Spacer, Text} from '@nextui-org/react';

import useSWR from "swr";
import {Fragment} from "react";

const fetcher = url => fetch(url).then(r => r.json())

const Languages = () => {
  const {data, error} = useSWR(`/api/languages`, fetcher)

  if (error) return <div>Error loading languages</div>

  return (
    <>
      <Text h4>Languages</Text>
      {!data
        ? <Loading type="gradient">Loading</Loading>
        : <>
          {data.map((result, index) =>
            <Fragment key={index}>
              <Spacer y={.5} />
              <Row key={result.dateFrom} wrap="wrap">
                <Col span={4} css={{paddingRight: '1rem', '@smMax': {width: '100%', margin: 0}}}>
                  <Text>{result.language}</Text>
                </Col>

                <Col span={8} css={{'@smMax': {width: '100%'}}}>
                  <Text b>{result.level}</Text>
                </Col>
              </Row>
            </Fragment>
          )}
        </>
      }
    </>
  );
};

export default Languages;