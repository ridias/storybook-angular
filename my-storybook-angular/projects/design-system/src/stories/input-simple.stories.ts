import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { InputSimpleComponent } from "../lib/components/inputs/input-simple/input-simple.component";

const meta: Meta<InputSimpleComponent> = {
    title: 'Example/Inputs/InputSimple',
    component: InputSimpleComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        colorValue: {
            description: "Color value of the input",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorBorder: {
            description: "Color of the border",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        type: {
            description: "Type of the input",
            type: "string",
            defaultValue: { summary: "text" },
        },
        placeholder: {
            description: "Placeholder of the input",
            type: "string",
            defaultValue: { summary: "" },
        },
        required: {
            description: "Required of the input",
            type: "boolean",
            defaultValue: { summary: "true" },
        },
        disable: {
            description: "Disable or not the input",
            type: "boolean",
            defaultValue: { summary: "false" },
        },
        pattern: {
            description: "Pattern in regexp of the input",
            type: "string",
            defaultValue: { summary: "" },
        },
        errorValue: {
            description: "Custom error sentence",
            type: "string",
            defaultValue: { summary: "'Error!'" },
        },
        errorRequired: {
            description: "Custom error requried sentence",
            type: "string",
            defaultValue: { summary: "'Required!'" },
        },
        value: {
            description: "Current value of the input",
            type: "string",
            defaultValue: { summary: "" },
        },
        bgColor: {
            description: "Background color of the input",
            type: "string",
            defaultValue: { summary: "#fdfdfd" },
            control: "color"
        },
        colorPlaceholder: {
            description: "Color placeholder",
            type: "string",
            defaultValue: { summary: "#fdfdfd" },
            control: "color"
        },
        valueChanged: {
            action: "valueChanged"
        },
        valueValid: {
            action: "valueValid"
        }
    }
}

export default meta;
type Story = StoryObj<InputSimpleComponent>;

export const InputSimpleText: Story = {
    args: {
        placeholder: "First name..."
    },
}

export const InputSimpleTextDefaultValue: Story = {
    args: {
        placeholder: "First name...",
        value: "Ricardo"
    },
}

export const InputSimpleNumber: Story = {
    args: {
        placeholder: "Type of a number...",
        type: "number"
    },
}

export const InputSimplePassword: Story = {
    args: {
        placeholder: "Password...",
        type: "password",
        required: true,
        pattern: "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,}$",
        errorValue: "The passowrd must have a lower letter, a upper letter, a number and a minimum of 8 characters.",
        errorRequired: "This field is required!"
    }
}

export const InputSimpleEmail: Story = {
    args: {
        placeholder: "Type a number...",
        type: "email",
        required: false,
        value: "example@mail.com"
    }
}

export const InputSimpleSearch: Story = {
    args: {
        placeholder: "Search...",
        type: "search",
        required: false
    }
}

export const InputSimpleDisable: Story = {
    args: {
        type: "text",
        disable: true
    }
}