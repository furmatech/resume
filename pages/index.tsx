import Head from 'next/head'
import Layout, {siteTitle} from '../components/Layout'

import {Card, Container, Row, Text, Col, Spacer, Divider} from '@nextui-org/react'

import About from '../components/About';
import Avatar from "../components/Avatar";
import Name from "../components/Name";
import PersonalCard from "../components/PersonalCard";
import SkillsCard from "../components/SkillsCard";
import SwitchTheme from "../components/SwitchTheme";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Languages from "../components/Languages";
import ButtonDownload from "../components/ButtonDownload";

const Index = () => (
  <Layout>
    <Head>
      <title>{siteTitle}</title>
    </Head>

    <Container sm>
      <Row wrap="wrap" justify="center" align="center" className="printarea-hide" css={{margin: "$lg 0"}}>
        <Col offset={3} span={6} css={{'@smMax': {width: '100%', margin: 0}}}>
          <Text h2 margin="0" css={{textAlign: 'center'}}>Resume</Text>
        </Col>
        <Col span={3} css={{'@smMax': {width: '100%', margin: 0}}}>
          <Row wrap="wrap" justify="flex-end" align="center">
            <ButtonDownload />
            <SwitchTheme />
          </Row>
        </Col>
      </Row>

      <Card shadow={true} bordered={false}>
        <Card.Body className="printarea" css={{padding: "$lg"}}>
          <Row wrap="wrap">
            <Col span={7} className="col-responsive-7" css={{paddingRight: '1rem'}}>
              <Row justify="flex-start" align="center">
                <Avatar />
                <Name />
              </Row>

              <Spacer y={1} />

              <Row>
                <Col>
                  <About />

                  <Spacer y={1} />
                  <Divider />
                  <Spacer y={1} />

                  <Experience />

                  <Spacer y={1} />
                  <Divider />
                  <Spacer y={1} />

                  <Education />

                  <Spacer y={1} />
                  <Divider />
                  <Spacer y={1} />

                  <Languages />

                  <Spacer y={1} />
                </Col>
              </Row>
            </Col>

            <Col span={5} className="col-responsive-5">
              <Row>
                <Col>
                  <PersonalCard />
                  <Spacer y={1} />
                  <SkillsCard />
                </Col>
              </Row>
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </Container>
    <Spacer y={2} />
  </Layout>
)

export default Index
