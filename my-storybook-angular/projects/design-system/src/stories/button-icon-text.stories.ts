import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "../lib/components/buttons/button/button.component";
import { ButtonIconTextComponent } from "../lib/components/buttons/button-icon-text/button-icon-text.component";


const meta: Meta<ButtonIconTextComponent> = {
    title: 'Example/Buttons/ButtonIconText',
    component: ButtonIconTextComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        value: {
            description: 'Background color of the button',
            type: 'string',
            defaultValue: { summary: 'orange' }
        },
        disabled: {
            description: 'If the button is disabled',
            type: 'boolean',
            defaultValue: { summary: false }
        },
        color: {
            description: 'Font color',
            type: 'string',
            defaultValue: { summary: "white" },
            control: "color"
        },
        colorHover: {
            description: 'Color hover of the button',
            type: 'string',
            defaultValue: { summary: "white" },
            control: "color"
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
            description: 'Icon color',
            type: 'string',
            defaultValue: { summary: 'white' },
            control: "color"
        },
        clicked: {
            action: "clicked"
        }
    }
}

export default meta;
type Story = StoryObj<ButtonIconTextComponent>;

export const ButtonDefault: Story = {
    args: {

    }
}

export const ButtonDisable: Story = {
    args: {
        disabled: true
    }
}


export const ButtonLoading: Story = {
    args: {
        isLoading: true,
        isLoadingColor: "white"
    }
}