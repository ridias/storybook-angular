
import { Meta, StoryObj } from "@storybook/angular";
import { BadgeRoundedComponent } from "../lib/components/badges/badge-rounded/badge-rounded.component";

const meta: Meta<BadgeRoundedComponent> = {
    title: 'Example/Badges/BadgeRounded',
    component: BadgeRoundedComponent,
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'Value of the badge',
            type: 'string',
            defaultValue: { summary: '' }        
        },
        size: {
            description: 'Font size in px',
            type: 'number',
            defaultValue: { summary: '16' }
        },
        bgcolor: {
            description: 'Background color',
            type: 'string',
            defaultValue: { summary: 'black' }
        },
        color: {
            description: 'Color font',
            type: 'string',
            defaultValue: { summary: 'white' }
        }
    }
};

export default meta;
type Story = StoryObj<BadgeRoundedComponent>;

export const BadgeRoundedPending: Story = {
  args: {
    text: 'Pending',
  },
};

export const BadgeRoundedColorfull: Story = {
  args: {
    text: 'Completed',
    bgcolor: 'green',
    color: '#FDFDFD',
  },
};

export const BadgesRoundedLarge: Story = {
  args: {

  },
  render: (args) => ({
    props: args,
    template: `
    <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
        <app-badge-rounded [size]="24" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-rounded>
        <app-badge-rounded [size]="24" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-rounded>
    </div>
    `
  })
};

export const BadgesRoundedSmall: Story = {
  args: {
    
  },
  render: (args) => ({
    props: args,
    template: `
    <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
        <app-badge-rounded [size]="12" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-rounded>
        <app-badge-rounded [size]="12" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-rounded>
    </div>
    `
  })
};

export const MultipleBadgesRounded: Story = {
  args: {
    
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
        <app-badge-rounded [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-rounded>
        <app-badge-rounded [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-rounded>
      </div>
    `
  })
}