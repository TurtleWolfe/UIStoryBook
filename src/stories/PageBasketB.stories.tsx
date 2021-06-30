import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasketPage } from '../pages/PageBasket';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/BasketPage',
  component: BasketPage,
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
