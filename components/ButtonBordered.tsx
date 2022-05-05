import {Button} from '@nextui-org/react';

const ButtonBordered = ({children}) => {
  return <Button
    bordered
    color="gradient"
    auto
    size="sm"
    css={{marginRight: '.5rem', marginTop: '.25rem !important', marginBottom: '.25rem'}}
  >{children}</Button>
};

export default ButtonBordered;