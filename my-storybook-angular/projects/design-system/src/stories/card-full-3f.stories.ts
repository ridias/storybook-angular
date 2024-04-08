import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardFull3fComponent } from "../lib/components/cards/card-full-3f/card-full-3f.component";

const meta: Meta<CardFull3fComponent> = {
    title: 'Example/Cards/CardFull3f',
    component: CardFull3fComponent,
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
        valueMain: {
            description: "Main value of the card",
            type: "string",
            defaultValue: { summary: "Main Value" }
        },
        value: {
            description: "Sub value of the card",
            type: "string",
            defaultValue: { summary: "Sub Value" }
        },
        description: {
            description: "Description of the card",
            type: "string",
            defaultValue: { summary: "Description" }
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "#37C9F0" }
        },
        colorValueMain: {
            description: "Color of the main value text",
            type: "string",
            defaultValue: { summary: "#FFF" }
        },
        colorValue: {
            description: "Color of the sub value text",
            type: "string",
            defaultValue: { summary: "#FFF" }
        },
        colorDescription: {
            description: "Color of the description text",
            type: "string",
            defaultValue: { summary: "#FFF" }
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
type Story = StoryObj<CardFull3fComponent>;

export const CardFull3fDefault: Story = {
    args: {
        
    }
}

export const CardFull3fCustom: Story = {
    args: {
        valueMain: "2.500",
        value: "Completed",
        description: "Orders",
    }
}


export const CardFull3fLoading: Story = {
    args: {
        isLoading: true
    }
}