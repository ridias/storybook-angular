import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalCUComponent } from "../lib/components/modals/modal-cu/modal-cu.component";
import { CommonModule } from "@angular/common";

const meta: Meta<ModalCUComponent> = {
    title: 'Example/Modals/ModalCU',
    component: ModalCUComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule,
                FormsModule,
                NgbModule
            ],
            declarations: [
                ModalCUComponent 
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
            description: "Description of the button 'save'",
            type: "string",
            defaultValue: { summary: "Save" }
        },
        cancelDescription: {
            description: "Description of the button 'cancel'",
            type: "string",
            defaultValue: { summary: "Cancel"}
        },
        isLoadingSaveButton: {
            description: "Is loading save button or not",
            type: "boolean",
            defaultValue: { summary: false }
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
        modalConfig: {
            description: "Modal configuration",
            control: "ModalConfig"
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
        savePressed: {
            action: "SavePressed"
        },
        cancelPressed: {
            action: "CancelPressed"
        }
    }
    
}

export default meta;
type Story = StoryObj<ModalCUComponent>;

export const ModalCUDefault: Story = {
    args: {
       showInstantly: true,
       modalTitle: "Custom Modal details",
       saveDescription: "Save",
       cancelDescription: "Cancel",
       modalConfig: {
        modalTitle: "",
        disableCloseButton: () => {
            return false;
        }
       }
    },
    render: (args) => ({
        props: args,
        template: `
            <app-modal-cu ${argsToTemplate(args)}
                #modalCU>
                <div>Custom content</div>
            </app-modal-cu>
        `
    })
}
