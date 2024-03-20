import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { InputRadioButtonComponent } from "../lib/components/inputs/input-radiobutton/input-radiobutton.component";

const meta: Meta<InputRadioButtonComponent> = {
    title: 'Example/Inputs/RadioButton',
    component: InputRadioButtonComponent,
    tags: ['autodocs'],
    decorators: [ 
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        label: {
            description: "Description label",
            type: "string",
            defaultValue: { summary: "Element" }
        },
        checked: {
            description: "If it is checked or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        color: {
            description: "Font color of the label",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        bgColorChecked: {
            description: "Background color of the checkbox when checked",
            type: "string",
            defaultValue: { summary: "#2196F3" },
            control: "color"
        },
        bgColorUnchecked: {
            description: "Background color of the checkbox when not checked",
            type: "string",
            defaultValue: { summary: "#eee" },
            control: "color"
        },
        bgColorHover: {
            description: "Background color of the checkbox when hover",
            type: "string",
            defaultValue: { summary: "#ccc" },
            control: "color"
        },
        colorCheckmark: {
            description: "Color checkmark",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        disable: {
            description: "Disable checkbox",
            type: "boolean",
            defaultValue: { summary: false }
        }

    }
}

export default meta;
type Story = StoryObj<InputRadioButtonComponent>;

export const InputRadioButtonDefault: Story = {
    args: {

    }
}

export const InputRadioButtonChecked: Story = {
    args: {
        checked: true
    }
}

export const InputRadioButtonDisable: Story = {
    args: {
        disable: true
    }
}