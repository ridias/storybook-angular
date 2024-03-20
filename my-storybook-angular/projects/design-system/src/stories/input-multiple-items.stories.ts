import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { InputMultipleItemsComponent } from "../lib/components/inputs/input-multiple-items/input-multiple-items.component";
import { CommonModule } from "@angular/common";
import { MultipleItem } from "../lib/models/MultipleItem";

let items: MultipleItem[] = [
    { "id": 1, "name": "Element 1", "active": false },
    { "id": 2, "name": "Element 2", "active": false },
    { "id": 3, "name": "Element 3", "active": false },
    { "id": 4, "name": "Element 4", "active": false },
    { "id": 5, "name": "Element 5", "active": false },
    { "id": 6, "name": "Element 6", "active": false },
    { "id": 7, "name": "Element 7", "active": false },
    { "id": 8, "name": "Element 8", "active": false },
    { "id": 9, "name": "Element 9", "active": false },
    { "id": 10, "name": "Element 10", "active": false },
    { "id": 11, "name": "Element 11", "active": false },
    { "id": 12, "name": "Element 12", "active": false }
]

const meta: Meta<InputMultipleItemsComponent> = {
    title: 'Example/Inputs/InputMultipleItems',
    component: InputMultipleItemsComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                CommonModule
            ]
        })
    ],
    argTypes: {
        inputValue: {
            description: "Value of the input",
            type: "string",
            defaultValue: { summary: "" }
        },
        items: {
            description: "Items to display",
            control: "array"
        },
        cacheItems: {
            description: "Items to display",
            control: "array"
        },
        inputPlaceholderValue: {
            description: "Placeholder of the input",
            type: "string",
            defaultValue: { summary: "Select options..." }
        },
        descriptionSelectAll: {
            description: "Description of the option that allows you to select all options",
            type: "string",
            defaultValue: { summary: "Select all" }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" }
        },
        bgColorInput: {
            description: "Background color input",
            type: "string",
            defaultValue: { summary: "#fdfdfd" }
        },
        borderColorInput: {
            description: "Border color input",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColorBtn: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColorBtnHover: {
            description: "Background color button hover",
            type: "string",
            defaultValue: { summary: "#ccc" }
        },
        borderColorBtn: {
            description: "Border color button",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColorItem: {
            description: "Background color item",
            type: "string",
            defaultValue: { summary: "white" }
        },
        bgColorHoverItem: {
            description: "Background color item hover",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        updatedInputValue: {
            action: "updatedInputValue"
        }

    }
}

export default meta;
type Story = StoryObj<InputMultipleItemsComponent>;

export const InputMultipleItemsDefault: Story = {
    args: {
        items: items,
        cacheItems: items,
        updatedInputValue: action("updatedInputValue")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-input-multiple-items ${argsToTemplate(args)}>
            </app-input-multiple-items>
        `
    })
}