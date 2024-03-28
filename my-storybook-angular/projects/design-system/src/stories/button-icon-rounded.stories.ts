import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { ButtonIconRoundedComponent } from "../lib/components/buttons/button-icon-rounded/button-icon-rounded.component";

const meta: Meta<ButtonIconRoundedComponent> = {
    title: 'Example/Buttons/ButtonIconRounded',
    component: ButtonIconRoundedComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        disabled: {
            description: 'If the button is disabled',
            type: 'boolean',
            defaultValue: { summary: false }
        },
        icon: {
            description: 'Icon',
            type: 'string',
            defaultValue: { summary: 'bi bi-person' }
        },
        bgColor: {
            description: 'Background color of the button',
            type: 'string',
            defaultValue: { summary: 'orange' },
            control: "color"
        },
        bgColorHover: {
            description: 'Background color hover of the button',
            type: 'string',
            defaultValue: { summary: 'orangered' },
            control: "color"
        },
        colorBorder: {
            description: 'Border color',
            type: 'string',
            defaultValue: { summary: 'orange' },
            control: "color"
        },
        iconColor: {
            description: 'Color of the icon',
            type: 'string',
            defaultValue: { summary: 'white' },
            control: "color"
        },
        iconColorHover: {
            description: 'Color hover of the icon',
            type: 'string',
            defaultValue: { summary: 'white' },
            control: "color"
        },
        iconSize: {
            description: 'Size of the icon',
            type: 'string',
            defaultValue: { summary: 'md' }
        },
        clicked: {
            action: "clicked"
        }
        
    }
};

export default meta;
type Story = StoryObj<ButtonIconRoundedComponent>;

export const ButtonIconRoundedDefault: Story = {
  args: {
    
  },
};

export const ButtonIconRoundedExtraSm: Story = {
    args: {
      iconSize: "extra-sm"
    }
};

export const ButtonIconRoundedSm: Story = {
    args: {
      iconSize: "sm"
    }
};

export const ButtonIconRoundedMd: Story = {
    args: {
      iconSize: "md"
    }
};

export const ButtonIconRoundedLg: Story = {
    args: {
      iconSize: "lg"
    }
};

export const ButtonIconRoundedExtraLg: Story = {
    args: {
      iconSize: "extra-lg"
    }
};

export const ButtonIconRoundedLoading: Story = {
    args: {
        isLoading: true,
        isLoadingColor: "white"
    }
}

export const ButtonIconRoundedDisable: Story = {
    args: {
        disabled: true
    }
}

