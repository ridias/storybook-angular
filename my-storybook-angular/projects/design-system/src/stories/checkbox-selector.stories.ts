import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { CheckboxSelectorComponent } from "../lib/components/checkboxes/checkbox-selector/checkbox-selector.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<CheckboxSelectorComponent> = {
    title: 'Example/Checkboxes/CheckboxSelector',
    component: CheckboxSelectorComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        active: {
            description: "Checkbox activated or not",
            type: "boolean",
            defaultValue: false
        },
        description: {
            description: "Description of the checkbox",
            type: "string",
            defaultValue: "Item"
        },
        bgColor: {
            description: "Background color of the checkbox when it is inactive",
            type: "string",
            defaultValue: "transparent",
            control: "color"
        },
        bgColorActive: {
            description: "Background color of the checkbox when it is active",
            type: "string",
            defaultValue: "orange",
            control: "color"
        },
        borderColor: {
            description: "Border color when it is inactive",
            type: "string",
            defaultValue: "#ddd",
            control: "color"
        },
        borderColorActive: {
            description: "Border color when it is active",
            type: "string",
            defaultValue: "orange",
            control: "color"
        },
        colorActive: {
            description: "Font color when it is active",
            type: "string",
            defaultValue: "white",
            control: "color"
        },
        color: {
            description: "Font color when it is inactive ",
            type: "string",
            defaultValue: "black",
            control: "color"
        },
        colorIcon: {
            description: "Icon color when it is inactive",
            type: "string",
            defaultValue: "grey",
            control: "color"
        },
        colorIconActive: {
            description: "Icon color when it is active",
            type: "string",
            defaultValue: "white",
            control: "color"
        },
        activeChanged: {
            action: "activeChanged"
        }
    }
}

export default meta;
type Story = StoryObj<CheckboxSelectorComponent>;

export const CheckboxSelectorPrimary: Story = {
    args: {
        
    },
}