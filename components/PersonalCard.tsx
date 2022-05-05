import {Avatar, Card, Divider, Row, Spacer, Text} from '@nextui-org/react';

import LinkedinIcon from "./icons/LinkedinIcon";
import EmailIcon from "./icons/EmailIcon";
import BirthIcon from "./icons/BirthIcon";
import GithubIcon from "./icons/GithubIcon";
import LocationIcon from "./icons/LocationIcon";
import LinkIcon from "./icons/LinkIcon";

const PersonalCard = () => {
  const link = 'furmatech.pl'
  const linkedin = 'linkedin.com/in/mateusz-furs'
  const github = 'github.com/furmatech'
  const email = 'furmatech@gmail.com'
  const birth = 'December 1989'
  const address = 'Elbląg, Polska'

  return (
    <Card css={{background: '$card'}} bordered shadow={false}>
      <Card.Header>
        <Text h4>Personal information</Text>
      </Card.Header>
      <Divider />
      <Card.Body css={{padding: "$sm"}}>
        <Row wrap="wrap" justify="flex-start" align="center" css={{color: "$text"}}>
          <Avatar size="sm" squared icon={
            <LinkIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{link}</Text>
        </Row>
        <Spacer y={.5} />
        <Row wrap="wrap" justify="flex-start" align="center" css={{color: "$text"}}>
          <Avatar size="sm" squared icon={
            <LinkedinIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{linkedin}</Text>
        </Row>
        <Spacer y={.5} />
        <Row wrap="wrap" justify="flex-start" align="center">
          <Avatar size="sm" squared icon={<GithubIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{github}</Text>
        </Row>
        <Spacer y={.5} />
        <Row wrap="wrap" justify="flex-start" align="center">
          <Avatar size="sm" squared icon={<EmailIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{email}</Text>
        </Row>
        <Spacer y={.5} />
        <Row wrap="wrap" justify="flex-start" align="center">
          <Avatar size="sm" squared icon={<BirthIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{birth}</Text>
        </Row>
        <Spacer y={.5} />
        <Row wrap="wrap" justify="flex-start" align="center">
          <Avatar size="sm" squared icon={<LocationIcon size={16} fill="currentColor" />} css={{marginRight: '.5rem'}} />
          <Text>{address}</Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PersonalCard;