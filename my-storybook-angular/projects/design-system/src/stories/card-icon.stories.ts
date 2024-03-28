import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardIconSideComponent } from "../lib/components/cards/card-icon-side/card-icon-side.component";

const meta: Meta<CardIconSideComponent> = {
    title: 'Example/Cards/CardIconSide',
    component: CardIconSideComponent,
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
        titleCard: {
            description: "Title card",
            control: "string",
            defaultValue: { summary: "Title card" }
        },
        icon: {
            description: "Bootstrap icon",
            type: "string",
            defaultValue: { summary: "bi bi-funnel-fill" }
        },
        iconSize: {
            description: "Size of the icon",
            type: "string",
            defaultValue: { summary: "md" }
        },
        iconColor: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        headerBorderBottomWidthPx: {
            description: "Border width",
            type: "number",
            defaultValue: { summary: 0 },
        },
        borderColor: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        fontSizeTitle: {
            description: "Font size title",
            type: "number",
            defaultValue: { summary: 24 },
        },
        fontSizeIcon: {
            description: "Font size icon",
            type: "number",
            defaultValue: { summary: 28 },
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        marginTopIcon: {
            description: "Margin top icon in px",
            type: "number",
            defaultValue: { summary: 0 },
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<CardIconSideComponent>;

export const CardIconSideDefault: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-icon-side>
        `
    })
}