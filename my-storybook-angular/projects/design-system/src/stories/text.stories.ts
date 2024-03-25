import { Meta, StoryObj } from "@storybook/angular";
import { TextComponent } from "../lib/components/texts/text/text.component";

const meta: Meta<TextComponent> = {
    title: 'Example/Texts/Text',
    component: TextComponent,
    tags: ['autodocs'],
    argTypes: {
        value: {
            description: "Value of the text",
            type: "string",
            defaultValue: { summary: "Text" }
        },
        size: {
            description: "Font size of the text",
            type: "string",
            defaultValue: { summary: "28px" }
        },
        color: {
            description: "Color of the text",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        }
    }
};

export default meta;
type Story = StoryObj<TextComponent>;

export const TextPrimary: Story = {
    args: {
        
    }
}