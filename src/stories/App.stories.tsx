import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import App from '../App';
import * as HeaderStories from './Header.stories';
import { BasketPage } from '../pages/PageBasket';

export default {
  title: 'Example/App',
  component: App,
} as ComponentMeta<typeof BasketPage>;

const Template: ComponentStory<typeof BasketPage> = (args) => <BasketPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
