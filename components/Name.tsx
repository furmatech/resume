import {Text} from '@nextui-org/react';

const Name = () => {
  const name = 'Mateusz Furs'
  const position = 'CIO / Team Lead at Tri-table Sp. z o.o.'

  return (
    <div>
      <Text h2 className="text-gradient" css={{'@xsMax': {width: '100%', margin: '0 auto'}}}>{name}</Text>
      <Text h5 weight="normal">{position}</Text>
    </div>
  );
};

export default Name;