import { Meta, Story } from '@storybook/react/types-6-0'

import SplashScreen from '.'

export default {
  title: 'SplashScreen',
  component: SplashScreen
} as Meta

export const Default: Story = (args) => <SplashScreen {...args} />
