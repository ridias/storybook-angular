import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { SelectOption } from "../lib/models/SelectOption";
import { SelectComponent } from "../lib/components/selects/select/select.component";

let items: SelectOption[] = [
    { "value": "1", "description": "Element 1" },
    { "value": "2", "description": "Element 2" },
    { "value": "3", "description": "Element 3" },
    { "value": "4", "description": "Element 4" },
    { "value": "5", "description": "Element 5" },
]

const meta: Meta<SelectComponent> = {
    title: 'Example/Selects/Select',
    component: SelectComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        options: {
            description: "Current value selected",
            control: "array"
        },
        valueSelected: {
            description: "Value selected",
            type: "string",
            defaultValue: { summary: "-1" }
        },
        description: {
            description: "Description of initial option of the select",
            control: "string",
            defaultValue: { summary: "Select..."}
        },
        disabled: {
            description: "If the select is disabled or not",
            control: "boolean",
            defaultValue: { summary: false }
        },
        bgColor: {
            description: "Background color of the select",
            type: "string",
            defaultValue: { summary: "white" }
        },
        borderColor: {
            description: "Border color of the select",
            type: "string",
            defaultValue: { summary: "#ccc" }
        },
        color: {
            description: "Font color of the select",
            type: "string",
            defaultValue: { summary: "black" }
        },
        changedOption: {
            action: "changedOption"
        }
    }
}

export default meta;
type Story = StoryObj<SelectComponent>;

export const SelectDefault: Story = {
    args: {
        options: items,
        changedOption: action("changedOption")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-select ${argsToTemplate(args)}>
            </app-select>
        `
    })
}

export const SelectDisable: Story = {
    args: {
        options: items,
        disabled: true,
        changedOption: action("changedOption")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-select ${argsToTemplate(args)}>
            </app-select>
        `
    })
}

export const SelectValueSelected: Story = {
    args: {
        options: items,
        valueSelected: "2",
        changedOption: action("changedOption")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-select ${argsToTemplate(args)}>
            </app-select>
        `
    })
}