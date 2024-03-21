import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { ButtonComponent } from "../lib/components/buttons/button/button.component";


const meta: Meta<ButtonComponent> = {
    title: 'Example/Buttons/Button',
    component: ButtonComponent,
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
        clicked: {
            action: "clicked"
        }
    }
}

export default meta;
type Story = StoryObj<ButtonComponent>;

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