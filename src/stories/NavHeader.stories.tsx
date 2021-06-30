import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavHeader } from '../components/NavHeader';

export default {
  title: 'Example/HeaderNav',
  component: NavHeader,
} as ComponentMeta<typeof NavHeader>;

const Template: ComponentStory<typeof NavHeader> = (args) => <NavHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
