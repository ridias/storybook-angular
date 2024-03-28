import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardTotalBarComponent } from "../lib/components/cards/card-total-bar/card-total-bar.component";

const meta: Meta<CardTotalBarComponent> = {
    title: 'Example/Cards/CardTotalBar',
    component: CardTotalBarComponent,
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
        isLoading: {
            description: "If the content is loading or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        isLoadingColor: {
            description: "Loading color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        min: {
            description: "Minimum capacity of the bar",
            type: "number",
            defaultValue: { summary: 0 }
        },
        max: {
            description: "Max capacity of the bar",
            type: "number",
            defaultValue: { summary: 1000 }
        },
        currentValue: {
            description: "Current value",
            type: "string",
            defaultValue: { summary: "0" }
        },
        compareValue: {
            description: "Value to compare",
            type: "number",
            defaultValue: { summary: 0 }
        },
        titleComponent: {
            description: "Title",
            type: "string",
            defaultValue: { summary: "Title" }
        },
        subtitle: {
            description: "Subtitle",
            type: "string",
            defaultValue: { summary: "Subtitle" }
        },
        colorTitle: {
            description: "Color of the title",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorSubtitle: {
            description: "Color of the subtitle",
            type: "string",
            defaultValue: { summary: "grey" },
            control: "color"
        },
        colorFilled: {
            description: "Color of the filled bar",
            type: "string",
            defaultValue: { summary: "purple" },
            control: "color"
        },
        bgColorWindow: {
            description: "Color miniline",
            type: "string",
            defaultValue: { summary: "purple" },
            control: "color"
        },
        bgColor: {
            description: "Background color of the component",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        bgColorBar: {
            description: "Background color of the bar",
            type: "string",
            defaultValue: { summary: "#ccc" },
            control: "color"
        },
        colorWindow: {
            description: "Font color of the text window",
            type: "string",
            defaultValue: { summary: "white"},
            control: "color" 
        }
    }
}

export default meta;
type Story = StoryObj<CardTotalBarComponent>;

export const CardTopRankingDefault: Story = {
    args: {
        
    }
}

export const CardTopRankingLoading: Story = {
    args: {
        isLoading: true,
        isLoadingColor: "black"
    }
}

export const CardTopRankingHalfFilled: Story = {
    args: {
        currentValue: "500",
        compareValue: 250,
        bgColorWindow: "#43185D"
    }
}