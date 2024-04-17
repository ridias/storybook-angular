import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { PillOption } from "../lib/models/PillOption";
import { action } from '@storybook/addon-actions';
import { TabsSimpleRoundedComponent } from "../lib/components/tabs/tabs-simple-rounded/tabs-simple-rounded.component";

let items: PillOption[] = [
    { "id": 1, "value": "Element 1", "icon": "bi bi-person", "active": true, "disable": false },
    { "id": 2, "value": "Element 2", "icon": "", "active": false, "disable": false },
    { "id": 3, "value": "Element 3", "icon": "bi bi-person", "active": false, "disable": false },
    { "id": 4, "value": "Element 4", "icon": "bi bi-person", "active": false, "disable": true }
]


const meta: Meta<TabsSimpleRoundedComponent> = {
    title: 'Example/Tabs Menu/TabsSimpleRounded',
    component: TabsSimpleRoundedComponent,
    tags: ['autodocs'],
    argTypes: {
        tabs: {
            description: "Tabs to display",
            control: "array"
        },
        idTabSelected: {
            description: "Id tab selected",
            type: "number",
            defaultValue: { summary : 1 }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary : "#bbb" },
            control: "color"
        },
        colorHover: {
            description: "Font color hover",
            type: "string",
            defaultValue: { summary : "black" },
            control: "color"
        },
        colorActive: {
            description: "Font color when tab activated",
            type: "string",
            defaultValue: { summary : "black" },
            control: "color"
        },
        colorBorder: {
            description: "Border color",
            type: "string",
            defaultValue: { summary : "#ddd" },
            control: "color"
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary : "white" },
            control: "color"
        },
        bgColorHover: {
            description: "Background color hover",
            type: "string",
            defaultValue: { summary : "orange" },
            control: "color"
        },
        tabClicked: {
            action: "tabClicked"
        }
    }
};

export default meta;
type Story = StoryObj<TabsSimpleRoundedComponent>;

export const TabsSimplePrimary: Story = {
    args: {
        tabs: items,
        idTabSelected: 1,
        tabClicked(e) {
            console.log(e);
            this.idTabSelected = e.id
        }
    },
    render: (args) => ({
        props: args,
        template: `
        <app-tabs-simple-rounded
            ${argsToTemplate(args)}>
            <div class="tabs-simple-content-main" *ngIf="idTabSelected == 1">
                <h1>Content 1.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="tabs-simple-content-main" *ngIf="idTabSelected == 2">
                <h1>Content 2.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div class="tabs-simple-content-main" *ngIf="idTabSelected == 3">
                <h1>Content 3.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        </app-tabs-simple-rounded>
        `
    })
}