import { addons } from '@storybook/manager-api';
import frostedTokens from './FrostedTokens';
import favicon from '../favicon.svg';

const link = document.createElement('link');
link.setAttribute('rel', 'shortcut icon');
link.setAttribute('href', favicon);
document.head.appendChild(link);

addons.setConfig({
  theme: frostedTokens
});
