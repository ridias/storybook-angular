import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { PillOption } from "../lib/models/PillOption";
import { action } from '@storybook/addon-actions';
import { PillsRoundedVerticalComponent } from "../lib/components/pills/pills-rounded-vertical/pills-rounded-vertical.component";

let items: PillOption[] = [
    { "id": 1, "value": "Element 1", "icon": "general-icon-md bi bi-person", "active": true, "disable": false },
    { "id": 2, "value": "Element 2", "icon": "general-icon-md bi bi-person", "active": false, "disable": false },
    { "id": 3, "value": "Element 3", "icon": "general-icon-md bi bi-person", "active": false, "disable": false },
    { "id": 4, "value": "Element 4", "icon": "general-icon-md bi bi-person", "active": false, "disable": true }
]

const meta: Meta<PillsRoundedVerticalComponent> = {
    title: 'Example/Pills Menu/PillsRoundedVertical',
    component: PillsRoundedVerticalComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        pills: {
            description: "Pills to display",
            control: "array"
        },
        idPillActivated: {
            description: "Id pill activated",
            type: "number",
            defaultValue: { summary: 1 }
        },
        colorBorder: {
            description: "Border color of the button",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColor: {
            description: "Background color of the button",
            type: "string",
            defaultValue: { summary: "orange" }
        },
        bgColorHover: {
            description: "Background color hover of the button",
            type: "string",
            defaultValue: { summary: "orangered" }
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
        pillClicked: {
            action: "pillClicked"
        }
    }
}

export default meta;
type Story = StoryObj<PillsRoundedVerticalComponent>;

export const PillsRoundedVerticalDefault: Story = {
    args: {
        pills: items,
        idPillActivated: 1,
        pillClicked: action("pillClicked")
    },
    render: (args) => ({
        props: args,
        template: `
        <app-pills-rounded-vertical
            ${argsToTemplate(args)}>
            <div class="pills-simple-content-main" *ngIf="idPillActivated == 1">
                <h1>Content 1.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="pills-simple-content-main" *ngIf="idPillActivated == 2">
                <h1>Content 2.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="pills-simple-content-main" *ngIf="idPillActivated == 3">
                <h1>Content 3.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </app-pills-rounded-vertical>
        `
    })
}