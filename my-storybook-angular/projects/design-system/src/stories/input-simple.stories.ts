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
            defaultValue: { summary: "#fdfdfd" }
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

export const InputSimplePrimary: Story = {
    args: {
        placeholder: "First name..."
    },
}