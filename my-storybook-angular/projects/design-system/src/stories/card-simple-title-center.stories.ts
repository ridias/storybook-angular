import { CommonModule } from "@angular/common";
import { CardSimpleTitleCenterComponent } from "../lib/components/cards/card-simple-title-center/card-simple-title-center.component";
import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";

const meta: Meta<CardSimpleTitleCenterComponent> = {
    title: 'Example/Cards/CardSimpleTitleCenter',
    component: CardSimpleTitleCenterComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule
            ]
        })
    ],
    argTypes: {
        titleCard: {
            description: "Title card",
            type: "string",
            defaultValue: { summary: "Title card" }
        },
        fontSizeIcon: {
            description: "Font size icon in pixels",
            type: "number",
            defaultValue: { summary: 28 }
        },
        fontSizeTitle: {
            description: "Font size title in pixels",
            type: "number",
            defaultValue: { summary: 24 }
        },
        icon: {
            description: "Bootstrap icon",
            type: "string",
            defaultValue: { summary: "" }
        },
        iconColor: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "" },
            control: "color"
        },
        headerBorderBottomWidthPx: {
            description: "Border bottom width in pixels",
            type: "number",
            defaultValue: { summary: 0 }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        bgColor: {
            description: "Background color card",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        borderColor: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "none" },
            control: "color"
        },
        borderWidth: {
            description: "Border width in pixels",
            type: "number",
            defaultValue: { summary: 0 }
        },
        borderStyle: {
            description: "Border style",
            type: "string",
            defaultValue: { summary: "none" }
        }
    }
}

export default meta;
type Story = StoryObj<CardSimpleTitleCenterComponent>;

export const CardSimpleTitleCenterDefault: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple-title-center ${argsToTemplate(args)}>
                <div style="width:100%; display: flex; justify-content: center; align-items: center;">
                    <span style="font-size: 36px; font-weight: 700;">
                        8.888
                    </span>
                </div>
            </app-card-simple-title-center>
        ` 
    })
}

export const CardSimpleTitleCenterIcon: Story = {
    args: {
        bgColor: "#b72525",
        color: "white",
        icon: "bi bi-star-fill",
        iconColor: "white",
        fontSizeIcon: 36
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple-title-center ${argsToTemplate(args)}>
                <div style="width:100%; display: flex; justify-content: center; align-items: center;">
                    <span style="font-size: 36px; font-weight: 700;">
                        8.888
                    </span>
                </div>
            </app-card-simple-title-center>
        ` 
    })
}