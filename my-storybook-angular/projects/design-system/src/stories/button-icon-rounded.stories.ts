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
            defaultValue: false
        },
        icon: {
            description: 'Icon',
            type: 'string',
            defaultValue: 'bi bi-person'
        },
        bgColor: {
            description: 'Background color of the button',
            type: 'string',
            defaultValue: 'orange'
        },
        bgColorHover: {
            description: 'Background color hover of the button',
            type: 'string',
            defaultValue: 'orangered'
        },
        colorBorder: {
            description: 'Border color',
            type: 'string',
            defaultValue: 'orange'
        },
        iconColor: {
            description: 'Color of the icon',
            type: 'string',
            defaultValue: 'white'
        },
        iconColorHover: {
            description: 'Color hover of the icon',
            type: 'string',
            defaultValue: 'white'
        },
        iconSize: {
            description: 'Size of the icon',
            type: 'string',
            defaultValue: ''
        }
    }
};

export default meta;
type Story = StoryObj<ButtonIconRoundedComponent>;

export const ButtonIconRoundedDefault: Story = {
  args: {
    
  },
};
