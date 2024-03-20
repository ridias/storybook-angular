import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { FormsModule } from "@angular/forms";
import { SelectSearchOption } from "../lib/models/SelectSearchOption";
import { ListBoxCheckboxesComponent } from "../lib/components/list-boxes/list-box-checkboxes/list-box-checkboxes.component";

let items: SelectSearchOption[] = [
    { "value": "Element 1", "active": false, "optionDescription": "Element 1"},
    { "value": "Element 2", "active": false, "optionDescription": "Element 2"},
    { "value": "Element 3", "active": false, "optionDescription": "Element 3"},
    { "value": "Element 4", "active": false, "optionDescription": "Element 4"},
    { "value": "Element 5", "active": false, "optionDescription": "Element 5"}
]

const meta: Meta<ListBoxCheckboxesComponent> = {
    title: 'Example/ListBoxes/ListBoxCheckboxes',
    component: ListBoxCheckboxesComponent,
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
        items: {
            description: "List of options to display",
            control: "array"
        },
        itemsCache: {
            description: "List cache of options to display",
            control: "array"
        },
        btnClean: {
            description: "Description of the button to clean all options",
            type: "string",
            defaultValue: {summary: "Clean all"}
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
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: {summary: "#ddd"},
            control: "color"
        },
        bgColorBtn: {
            description: "Background color of the button",
            type: "string",
            defaultValue: {summary: "#ddd"},
            control: "color"
        },
        bgColorHoverBtn: {
            description: "Background color hover of the button",
            type: "string",
            defaultValue: {summary: "#ccc"},
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
        totalSelected: {
            action: 'totalSelected'
        },
        itemsSelected: {
            action: 'itemsSelected'
        }

    }
}

export default meta;
type Story = StoryObj<ListBoxCheckboxesComponent>;

export const ListBoxCheckboxesDefault: Story = {
    args: {
        items: items,
        itemsCache: items,
        totalSelected: action("totalSelected"),
        itemsSelected: action("itemsSelected")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-list-box-checkboxes ${argsToTemplate(args)}>
                
            </app-list-box-checkboxes>
        `
    })
}