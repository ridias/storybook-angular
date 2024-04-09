import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { InputItem } from "../lib/models/InputItem";
import { GroupRadiobuttonsComponent } from "../lib/components/radiobuttons/group-radiobuttons/group-radiobuttons.component";

let items: InputItem[] = [
    { id: 1, value: "Element 1", disable: false, "active": false },
    { id: 2, value: "Element 2", disable: false, "active": false },
    { id: 3, value: "Element 3", disable: false, "active": false },
    { id: 4, value: "Element 4", disable: false, "active": false },
    { id: 5, value: "Element 5", disable: false, "active": false },
    { id: 6, value: "Element 6", disable: false, "active": false },
    { id: 7, value: "Element 7", disable: false, "active": false },
]

const meta: Meta<GroupRadiobuttonsComponent> = {
    title: 'Example/RadioButtons/GroupRadioButtons',
    component: GroupRadiobuttonsComponent,
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
        radiobuttons: {
            description: "Radiobuttons to display",
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
            defaultValue: { summary: "#fdfdfd" }
        },
        bgColorUnchecked: {
            description: "Border color input",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColorHover: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        colorCheckmark: {
            description: "Background color button hover",
            type: "string",
            defaultValue: { summary: "#ccc" }
        },
        radiobuttonSelected: {
            action: "radiobuttonSelected"
        }
    }
}

export default meta;
type Story = StoryObj<GroupRadiobuttonsComponent>;

export const SelectMultipleItemsDefault: Story = {
    args: {
        radiobuttons: items,
        radiobuttonSelected: action("updatedInputValue")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-group-radiobuttons ${argsToTemplate(args)}>
            </app-group-radiobuttons>
        `
    })
}