import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { ButtonIconComponent } from "../lib/components/buttons/button-icon/button-icon.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<ButtonIconComponent> = {
    title: 'Example/Buttons/ButtonIcon',
    component: ButtonIconComponent,
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
            defaultValue: { summary: 'orange' }
        },
        bgColorHover: {
            description: 'Background color hover of the button',
            type: 'string',
            defaultValue: { summary: 'orangered' }
        },
        colorBorder: {
            description: 'Border color',
            type: 'string',
            defaultValue: { summary: 'orange' }
        },
        iconColor: {
            description: 'Color of the icon',
            type: 'string',
            defaultValue: { summary: 'white' }
        },
        iconColorHover: {
            description: 'Color hover of the icon',
            type: 'string',
            defaultValue: { summary: 'white' }
        },
        iconSize: {
            description: 'Size of the icon',
            type: 'string',
            defaultValue: { summary: 'md' }
        },
        isLoading: {
            description: 'If it is loading or not',
            type: 'boolean',
            defaultValue: { summary: false }
        },
        isLoadingColor: {
            description: 'Color of the loading',
            type: 'string',
            defaultValue: { summary: 'white' }
        },
        clicked: {
            action: "clicked"
        }
    }
};

export default meta;
type Story = StoryObj<ButtonIconComponent>;

export const ButtonIconDefault: Story = {
  args: {
    
  }
};

export const ButtonIconExtraSm: Story = {
    args: {
      iconSize: "extra-sm"
    }
};

export const ButtonIconSm: Story = {
    args: {
      iconSize: "sm"
    }
};

export const ButtonIconMd: Story = {
    args: {
      iconSize: "md"
    }
};

export const ButtonIconLg: Story = {
    args: {
      iconSize: "lg"
    }
};

export const ButtonIconExtraLg: Story = {
    args: {
      iconSize: "extra-lg"
    }
};

export const ButtonIconLoading: Story = {
    args: {
        isLoading: true,
        isLoadingColor: "white"
    }
}

export const ButtonIconDisable: Story = {
    args: {
        disabled: true
    }
}