import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CardBtnsComponent } from "../lib/components/cards/card-btns/card-btns.component";
import { FormsModule } from "@angular/forms";
import { PillOption } from "../lib/models/PillOption";

let items: PillOption[] = [
    { "id": 1, "value": "1D", "active": true, "icon": "", "disable": false },
    { "id": 2, "value": "1S", "active": false, "icon": "", "disable": false },
    { "id": 3, "value": "1M", "active": false, "icon": "", "disable": false }
]

const meta: Meta<CardBtnsComponent> = {
    title: 'Example/Cards/CardBtns',
    component: CardBtnsComponent,
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
        itemsBtns: {
            description: "List of buttons to display",
            control: "array"
        },
        titleCard: {
            description: "Title of the card",
            type: "string",
            defaultValue: "Title card"
        },
        idBtnSelected: {
            description: "Id of the button preselected",
            type: "number",
            defaultValue: 1
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: "white",
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: "#ddd",
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: "black",
            control: "color"
        },
        colorActive: {
            description: "Font color when active",
            type: "string",
            defaultValue: "white",
            control: "color"
        },
        bgColorBtn: {
            description: "Background color button",
            type: "string",
            defaultValue: "#fff",
            control: "color"
        },
        bgColorBtnActive: {
            description: "Background color button when active",
            type: "string",
            defaultValue: "#ddd",
            control: "color"
        },
        btnClicked: {
            action: 'btnClicked'
        }

    }
}

export default meta;
type Story = StoryObj<CardBtnsComponent>;

export const CardBtnsDefault: Story = {
    args: {
        itemsBtns: items,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}