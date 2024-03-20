
import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { BadgeIconComponent } from "../lib/components/badges/badge-icon/badge-icon.component";

const meta: Meta<BadgeIconComponent> = {
    title: 'Example/Badges/BadgeIcon',
    component: BadgeIconComponent,
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
            defaultValue: { summary: 16 }
        },
        bgcolor: {
            description: 'Background color',
            type: 'string',
            defaultValue: { summary: 'black' },
            control: "color"
        },
        color: {
            description: 'Color font',
            type: 'string',
            defaultValue: { summary: 'white' },
            control: "color"
        },
        icon: {
            description: "Icon",
            type: "string",
            defaultValue: { summary: "" }
        },
        iconSize: {
            description: "Size of the icon",
            type: "string",
            defaultValue: { summary: "md" }
        }
    }
};

export default meta;
type Story = StoryObj<BadgeIconComponent>;

export const BadgeIconPending: Story = {
    args: {
      text: 'Pending',
    },
};

export const BadgeIconColorfull: Story = {
    args: {
      text: 'Completed',
      bgcolor: 'green',
      color: '#FDFDFD',
      icon: "bi bi-person",
      iconSize: "md"
    },
  };

export const BadgesIconLarge: Story = {
    args: {
  
    },
    render: (args) => ({
      props: args,
      template: `
      <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [size]="24" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-icon>
      </div>
      `
    })
};

export const BadgesIconSmall: Story = {
    args: {
  
    },
    render: (args) => ({
      props: args,
      template: `
      <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-icon>
          <app-badge-icon [icon]="'bi bi-person'" [iconSize]="'sm'" [size]="12" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-icon>
      </div>
      `
    })
};

export const MultipleBadgesIcon: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
        <div style="display: flex; align-items: center; gap: 5px 30px; flex-wrap: wrap;">
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 1'" [bgcolor]="'#4F46E5'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 2'" [bgcolor]="'#19AB4E'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 3'" [bgcolor]="'#0285C8'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 4'" [bgcolor]="'#0EA5E9'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 5'" [bgcolor]="'#EA580C'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 6'" [bgcolor]="'#9333EA'"></app-badge-icon>
            <app-badge-icon [icon]="'bi bi-person'" [text]="'Value 7'" [bgcolor]="'#DC2626'"></app-badge-icon>
        </div>
        `
    })
}