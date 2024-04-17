import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CheckboxComponent } from "../lib/components/checkboxes/checkbox/checkbox.component";

const meta: Meta<CheckboxComponent> = {
    title: 'Example/Checkboxes/Checkbox',
    component: CheckboxComponent,
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
            defaultValue: { summary: "orange" },
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
type Story = StoryObj<CheckboxComponent>;

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