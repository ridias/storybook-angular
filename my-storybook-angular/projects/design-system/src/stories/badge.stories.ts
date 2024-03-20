
import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { BadgeComponent } from "../lib/components/badges/badge/badge.component";

const meta: Meta<BadgeComponent> = {
    title: 'Example/Badges/Badge',
    component: BadgeComponent,
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'Value of the badge',
            type: 'string',
            defaultValue: ''
        },
        size: {
            description: 'Font size in px',
            type: 'number',
            defaultValue: '16'
        },
        bgcolor: {
            description: 'Background color',
            type: 'string',
            defaultValue: 'black'
        },
        color: {
            description: 'Color font',
            type: 'string',
            defaultValue: 'white'
        }
    }
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const BadgePrimary: Story = {
  args: {
    text: 'Pending',
  },
};

export const BadgeColorfull: Story = {
  args: {
    text: 'Completed',
    bgcolor: 'green',
    color: '#FDFDFD',
  },
  
};

export const BadgesLarge: Story = {
  args: {
    text: 'large',
    size: 24,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
        <app-badge [size]="24" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge>
        <app-badge [size]="24" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge>
        <app-badge [size]="24" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge>
        <app-badge [size]="24" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge>
        <app-badge [size]="24" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge>
        <app-badge [size]="24" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge>
        <app-badge [size]="24" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge>
      </div>
    `
  })
};

export const BadgesSmall: Story = {
  args: {
    text: 'small',
    size: 12,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 5px 20px; flex-wrap: wrap;">
        <app-badge [size]="12" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge>
        <app-badge [size]="12" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge>
        <app-badge [size]="12" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge>
        <app-badge [size]="12" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge>
        <app-badge [size]="12" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge>
        <app-badge [size]="12" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge>
        <app-badge [size]="12" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge>
      </div>
    `
  })
};

export const MultipleBadges: Story = {
  args: {
    text: "Value"
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
        <app-badge [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge>
        <app-badge [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge>
        <app-badge [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge>
        <app-badge [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge>
        <app-badge [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge>
        <app-badge [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge>
        <app-badge [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge>
      </div>
    `
  })
}