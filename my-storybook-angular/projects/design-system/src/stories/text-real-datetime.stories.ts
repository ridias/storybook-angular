import { Meta, StoryObj } from "@storybook/angular";
import { TextRealDatetimeComponent } from "../lib/components/texts/text-real-datetime/text-real-datetime.component";

const meta: Meta<TextRealDatetimeComponent> = {
    title: 'Example/Texts/TextRealDatetime',
    component: TextRealDatetimeComponent,
    tags: ['autodocs'],
    argTypes: {
        months: {
            description: "List of months",
            control: "array"
        },
        colorDate: {
            description: "Font color date",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorTime: {
            description: "Font color time",
            type: "string",
            defaultValue: { summary: "#aaa" },
            control: "color"
        },
        fontSizeDate: {
            description: "Font size date",
            type: "string",
            defaultValue: { summary: "20px" },
            control: "text"
        },
        fontSizeTime: {
            description: "Font size time",
            type: "string",
            defaultValue: { summary: "16px" }
        }
    }
};

export default meta;
type Story = StoryObj<TextRealDatetimeComponent>;

export const TextPrimary: Story = {
    args: {
        months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"]
    }
}