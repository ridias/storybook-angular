import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { CardFull2fComponent } from "../lib/components/cards/card-full-2f/card-full-2f.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<CardFull2fComponent> = {
    title: 'Example/Cards/CardFull2f',
    component: CardFull2fComponent,
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
        value: {
            description: "Value of the card",
            type: "string",
            defaultValue: { summary: "Value" }
        },
        description: {
            description: "Description of the card",
            type: "string",
            defaultValue: { summary: "Description" }
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "#37C9F0" },
            control: "color"
        },
        colorValue: {
            description: "Color of the value text",
            type: "string",
            defaultValue: { summary: "#FFF" },
            control: "color"
        },
        colorDescription: {
            description: "Color of the description text",
            type: "string",
            defaultValue: { summary: "#FFF" },
            control: "color"
        },
        isLoading: {
            description: "If the card is loading or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        isLoadingColor: {
            description: "Color of the loading",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<CardFull2fComponent>;

export const CardFull2fDefault: Story = {
    args: {
        
    }
}

export const CardFull2fLoading: Story = {
    args: {
        isLoading: true
    }
}