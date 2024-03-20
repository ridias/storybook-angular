import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonRoundedComponent } from '../lib/components/buttons/button-rounded/button-rounded.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonRoundedComponent> = {
  title: 'Example/Buttons/ButtonRounded',
  component: ButtonRoundedComponent,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonRoundedComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonRoundedPrimary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const ButtonRoundedSecondary: Story = {
  args: {
    label: 'Button',
  },
};

export const ButtonRoundedLarge: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const ButtonRoundedSmall: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
