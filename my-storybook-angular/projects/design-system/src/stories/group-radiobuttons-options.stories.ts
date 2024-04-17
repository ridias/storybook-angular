import { Meta, Preview, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { action } from '@storybook/addon-actions';
import { CommonModule } from "@angular/common";
import { InputItem } from "../lib/models/InputItem";
import { RadioButtonOptionComponent } from "../lib/components/radiobuttons/radiobutton-option/radiobutton-option.component";
import { TextsModule } from "../public-api";

let itemTest: InputItem = { id: 1, value: "Element 1", disable: false, "active": false };
let itemTest2: InputItem = { id: 2, value: "Element 2", disable: false, "active": false };

const meta: Meta<RadioButtonOptionComponent> = {
    title: 'Example/RadioButtons/GroupRadioButtonsOptions',
    component: RadioButtonOptionComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                CommonModule,
                TextsModule
            ]
        })
    ],
    argTypes: {
        radiobutton: {
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
        radiobuttonSelected: {
            action: "radiobuttonSelected"
        }
    }
}

export default meta;
type Story = StoryObj<RadioButtonOptionComponent>;

export const RadioButtonOptionDefault: Story = {
    args: {
        radiobutton: itemTest,
        radiobuttonSelected: action("updatedInputValue")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-radiobutton-option ${argsToTemplate(args)}>
                <i style="margin-bottom: 5px;"
                    class="general-icon-md bi bi-sun"></i>
                <app-text 
                    value="Summer plan"
                    [size]="'16px'"
                    [color]="'#444'">
                </app-text>
            </app-radiobutton-option>
        `
    })
}

/*export const RadioButtonOptionGroupDefault: Story = {
    args: {
        radiobutton: itemTest2,
        radiobuttonSelected(e) {
            console.log(e);
        }
    },
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; gap: 20px; width: 100%;">
                
                <app-radiobutton-option ${argsToTemplate(preview)}>
                    <i style="margin-bottom: 5px;"
                        class="general-icon-md bi bi-sun"></i>
                    <app-text 
                        value="Summer plan"
                        [size]="'16px'"
                        [color]="'#444'">
                    </app-text>
                </app-radiobutton-option>

                <app-radiobutton-option ${argsToTemplate(args)}>
                    <i style="margin-bottom: 5px;"
                        class="general-icon-md bi bi-sun"></i>
                    <app-text 
                        value="Spring plan"
                        [size]="'16px'"
                        [color]="'#444'">
                    </app-text>
                </app-radiobutton-option>
            </div>
        `
    })
}*/

const preview: Preview  = {
    args: { 
        radiobutton: itemTest,
        radiobuttonSelected(e: InputItem) {
            console.log(e);
        }
    }
}