import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { SelectSearchOption } from "../lib/models/SelectSearchOption";
import { SelectSearchComponent } from "../lib/components/selects/select-search/select-search.component";

let items: SelectSearchOption[] = [
    { "value": "1", "active": false, "optionDescription": "Element 1" },
    { "value": "2", "active": false, "optionDescription": "Element 2" },
    { "value": "3", "active": false, "optionDescription": "Element 3" },
    { "value": "4", "active": false, "optionDescription": "Element 4" },
    { "value": "5", "active": false, "optionDescription": "Element 5" },
]

const meta: Meta<SelectSearchComponent> = {
    title: 'Example/Selects/SelectSearch',
    component: SelectSearchComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        inputValue: {
            description: "Current value selected",
            type: "string",
            defaultValue: { summary: "" }
        },
        placeholder: {
            description: "Placeholder of the input",
            type: "string",
            defaultValue: { summary: "Select option..." }
        },
        options: {
            description: "Options to display in the select",
            control: "array"
        },
        optionsCache: {
            description: "Options to display in the select",
            control: "array"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary: "#fdfdfd" }
        },
        bgColorHover: {
            description: "Background color hover",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" }
        },
        colorHover: {
            description: "Font color hover",
            type: "string",
            defaultValue: { summary: "white" }
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" }
        },
        colorIconHover: {
            description: "Color icon hover",
            type: "string",
            defaultValue: { summary: "white" }
        },
        selectedOptionEvent: {
            action: "selectedOptionEvent"
        }
    }
}

export default meta;
type Story = StoryObj<SelectSearchComponent>;

export const SelectSearchDefault: Story = {
    args: {
        options: items,
        optionsCache: items,
        selectedOptionEvent: action("selectedOptionEvent")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-select-search ${argsToTemplate(args)}>
            </app-select-search>
        `
    })
}