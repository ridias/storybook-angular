import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { ListCheckboxesComponent } from "../lib/components/list-boxes/list-checkboxes/list-checkboxes.component";
import { FormsModule } from "@angular/forms";
import { SelectSearchOption } from "../lib/models/SelectSearchOption";

let items: SelectSearchOption[] = [
    { "value": "Element 1", "active": false, "optionDescription": "Element 1"},
    { "value": "Element 2", "active": false, "optionDescription": "Element 2"},
    { "value": "Element 3", "active": false, "optionDescription": "Element 3"},
    { "value": "Element 4", "active": false, "optionDescription": "Element 4"},
    { "value": "Element 5", "active": false, "optionDescription": "Element 5"},
    { "value": "Element 6", "active": false, "optionDescription": "Element 6"},
    { "value": "Element 7", "active": false, "optionDescription": "Element 7"},
    { "value": "Element 8", "active": false, "optionDescription": "Element 8"},
    { "value": "Element 9", "active": false, "optionDescription": "Element 9"},
    { "value": "Element 10", "active": false, "optionDescription": "Element 10"}
]

const meta: Meta<ListCheckboxesComponent> = {
    title: 'Example/ListBoxes/ListCheckboxes',
    component: ListCheckboxesComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        values: {
            description: "List of options to display",
            control: "array"
        },
        cacheValues: {
            description: "List cache of options to display",
            control: "array"
        },
        btnAll: {
            description: "Description of the button to select all options",
            type: "string",
            defaultValue: {summary: "Select All"}
        },
        placeholder: {
            description: "Placeholder of the input",
            type: "string",
            defaultValue: {summary: "Search..."}
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: {summary: "#white"},
            control: "color"
        },
        bgColorHover: {
            description: "Background color hover",
            type: "string",
            defaultValue: {summary: "#eee"},
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: {summary: "#ddd"},
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: {summary: "black"},
            control: "color"
        },
        colorHover: {
            description: "Font color hover",
            type: "string",
            defaultValue: {summary: "white"},
            control: "color"
        },
        updatedOptions: {
            action: 'updatedOptions'
        }
    }
    
}

export default meta;
type Story = StoryObj<ListCheckboxesComponent>;

export const ListCheckboxesDefault: Story = {
    args: {
       values: items,
       cacheValues: items,
       updatedOptions: action("updatedOptions") 
    },
    render: (args) => ({
        props: args,
        template: `
            <app-list-checkboxes ${argsToTemplate(args)}>
            </app-list-checkboxes>
        `
    })
}