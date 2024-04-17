import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { InputItem } from "../lib/models/InputItem";
import { GroupCheckboxesVerticalComponent } from "../lib/components/checkboxes/group-checkboxes-vertical/group-checkboxes-vertical.component";

let items: InputItem[] = [
    { id: 1, value: "Element 1", disable: false, "active": false },
    { id: 2, value: "Element 2", disable: true, "active": false },
    { id: 3, value: "Element 3", disable: false, "active": false },
    { id: 4, value: "Element 4", disable: false, "active": false },
    { id: 5, value: "Element 5", disable: false, "active": false },
    { id: 6, value: "Element 6", disable: false, "active": false },
    { id: 7, value: "Element 7", disable: false, "active": false },
]

const meta: Meta<GroupCheckboxesVerticalComponent> = {
    title: 'Example/Checkboxes/GroupCheckboxesVertical',
    component: GroupCheckboxesVerticalComponent,
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
        checkboxes: {
            description: "Checkboxes to display",
            control: "array"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" }
        },
        bgColorChecked: {
            description: "Background color input",
            type: "string",
            defaultValue: { summary: "orange" }
        },
        bgColorUnchecked: {
            description: "Border color input",
            type: "string",
            defaultValue: { summary: "#eee" }
        },
        bgColorHover: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "#ccc" }
        },
        colorCheckmark: {
            description: "Background color button hover",
            type: "string",
            defaultValue: { summary: "white" }
        },
        checkboxesSelected: {
            action: "radiobuttonSelected"
        }
    }
}

export default meta;
type Story = StoryObj<GroupCheckboxesVerticalComponent>;

export const GroupCheckboxesVerticalDefault: Story = {
    args: {
        checkboxes: items,
        checkboxesSelected: action("checkboxesSelected")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-group-checkboxes-vertical ${argsToTemplate(args)}>
            </app-group-checkboxes-vertical>
        `
    })
}