import { styled, Avatar } from '@nextui-org/react';

const StyledAvatar = () => {
  const Result = styled(Avatar, {
    length: 0,
    '--nextui--avatarMd': '$space-36 !important',
    minWidth: '--nextui--avatarMd',
    minHeight: '--nextui--avatarMd',
    width: '--nextui--avatarMd',
    height: '--nextui--avatarMd'
  });

  return (
    <Result
      src="/images/profile.png"
      color="gradient"
      css={{
        padding: '$2',
        margin: '0 1rem 0 0',
        '@xsMax': {
          '--nextui--avatarMd': '$space-28 !important',
        },
      }}
      bordered
      pointer
    />
  );
};

export default StyledAvatar;