import {useTheme as useNextTheme} from 'next-themes'
import {Switch, useTheme} from '@nextui-org/react'

import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

const SwitchTheme = () => {
  const {setTheme} = useNextTheme();
  const {isDark} = useTheme();

  return (
    <Switch
      css={{
        marginLeft: '1rem'
      }}
      checked={isDark}
      size="xl"
      iconOn={<MoonIcon filled={!isDark} />}
      iconOff={<SunIcon filled={isDark} />}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  );
};

export default SwitchTheme;