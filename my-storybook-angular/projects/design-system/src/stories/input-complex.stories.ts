import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { InputComplexComponent } from "../lib/components/inputs/input-complex/input-complex.component";

const meta: Meta<InputComplexComponent> = {
    title: 'Example/Inputs/InputComplex',
    component: InputComplexComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        colorLabel: {
            description: "Color label",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorValue: {
            description: "Color value of the input",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        labelValue: {
            description: "Label value",
            type: "string",
            defaultValue: { summary: "'Field'" },
        },
        colorBorderBottom: {
            description: "Color of the border bottom",
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
        valueChanged: {
            action: "valueChanged"
        },
        valueValid: {
            action: "valueValid"
        }
    }
}

export default meta;
type Story = StoryObj<InputComplexComponent>;

export const InputComplexPrimary: Story = {
    args: {
        
    },
}