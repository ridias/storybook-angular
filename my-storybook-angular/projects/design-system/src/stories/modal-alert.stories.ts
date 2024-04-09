import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CommonModule } from "@angular/common";
import { ModalAlertComponent } from "../lib/components/modals/modal-alert/modal-alert.component";

const meta: Meta<ModalAlertComponent> = {
    title: 'Example/Modals/ModalAlert',
    component: ModalAlertComponent,
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
                ModalAlertComponent 
            ]
        })
    ],
    argTypes: {
        titleValue: {
            description: "Title of the modal",
            type: "string",
            defaultValue: { summary: "Title" }
        },
        description: {
            description: "Description message of the modal",
            type: "string",
            defaultValue: { summary: "Description" }
        },
        descriptionBtn: {
            description: "Description message of the modal",
            type: "string",
            defaultValue: { summary: "Description" }
        },
        icon: {
            description: "Icon to use",
            type: "string",
            defaultValue: { summary: "general-icon-md bi bi-question" }
        },
        iconColor: {
            description: "Color of the icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
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
        bgColorCircle: {
            description: "Background color of the circle",
            type: "string",
            defaultValue: { summary: "#F6F6F6"},
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
        savedButton: {
            action: "savedButton"
        }
    }
    
}

export default meta;
type Story = StoryObj<ModalAlertComponent>;

export const ModalAlertDefault: Story = {
    args: {
       showInstantly: true,
    },
    render: (args) => ({
        props: args,
        template: `
            <app-modal-alert ${argsToTemplate(args)}
                #modalCU>
                <div>Custom content</div>
            </app-modal-alert>
        `
    })
}
