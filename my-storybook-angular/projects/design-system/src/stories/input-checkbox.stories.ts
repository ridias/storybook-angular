import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { InputCheckboxComponent } from "../lib/components/inputs/input-checkbox/input-checkbox.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<InputCheckboxComponent> = {
    title: 'Example/Inputs/Checkbox',
    component: InputCheckboxComponent,
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
type Story = StoryObj<InputCheckboxComponent>;

export const InputCheckboxDefault: Story = {
    args: {

    }
}

export const InputCheckboxChecked: Story = {
    args: {
        checked: true
    }
}

export const InputCheckboxDisable: Story = {
    args: {
        disable: true
    }
}