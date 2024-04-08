import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { FormsModule } from "@angular/forms";
import { ModalDetailsComponent } from "../lib/components/modals/modal-details/modal-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

const meta: Meta<ModalDetailsComponent> = {
    title: 'Example/Modals/ModalDetails',
    component: ModalDetailsComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                NgbModule
            ],
            declarations: [
                ModalDetailsComponent 
            ]
        })
    ],
    argTypes: {
        modalTitle: {
            description: "Title of the modal",
            type: "string",
            defaultValue: { summary: "Modal details" }
        },
        saveDescription: {
            description: "Description of the button",
            type: "string",
            defaultValue: { summary: "Close" }
        },
        bgColor: {
            description: "Background color of the modal",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorHover: {
            description: "Font color hover of the button",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        bgColorButton: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "orange" },
            control: "color"
        },
        colorBorderButton: {
            description: "Color border button",
            type: "string",
            defaultValue: { summary: "orange" },
            control: "color"
        },
        colorButton: {
            description: "Font color button",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        bgColorButtonHover: {
            description: "Background color button hover",
            type: "string",
            defaultValue: { summary: "orangered" },
            control: "color"
        },
        showInstantly: {
            description: "Show instantly or not the modal",
            type: "boolean",
            defaultValue: { summary: false }
        },
        open: {
            action: "open",
            type: "function"
        },
        shown: {
            action: "shown",
            type: "function"
        },
        modalComplete: {
            action: "modalComplete",
            type: "function"
        },
        closedModal: {
            action: "closedModal"
        }
    }
    
}

// no se, no tira, no vemos la manera, verlo mas tarde...
export default meta;
type Story = StoryObj<ModalDetailsComponent>;


export const ModalDetailsDefault: Story = {
    args: {
       showInstantly: true,
       modalTitle: "Custom Modal details",
       saveDescription: "Close"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-modal-details ${argsToTemplate(args)}
                #modalDetails>
                <div>Custom content</div>
            </app-modal-details>
        `
    })
}
