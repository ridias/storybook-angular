import { Meta, StoryObj } from "@storybook/angular";
import { ProgressBarMinilineComponent } from "../lib/components/progress-bars/progress-bar-miniline/progress-bar-miniline.component";

const meta: Meta<ProgressBarMinilineComponent> = {
    title: 'Example/Progress Bars/ProgressBarMiniline',
    component: ProgressBarMinilineComponent,
    tags: ['autodocs'],
    argTypes: {
        width: {
            description: "Width of the progress bar",
            type: "string",
            defaultValue: { summary: "100%" }
        },
        height: {
            description: "Height of the progress bar",
            type: "string",
            defaultValue: { summary: "20px" }
        },
        min: {
            description: "Min value of the progress bar",
            type: "number",
            defaultValue: { summary: 0 }
        },
        max: {
            description: "Max value of the progress bar",
            type: "number",
            defaultValue: { summary: 0 }
        },
        value: {
            description: "Current value of the progress bar",
            type: "number",
            defaultValue: { summary: 500 }
        },
        compareValue: {
            description: "Value to compare to the current value",
            type: "number",
            defaultValue: { summary: 0}
        },
        compareValueStr: {
            description: "Value to compare to the current value",
            type: "string",
            defaultValue: { summary: "0" },
        },
        colorFilled: {
            description: "Color of the filled progress bar",
            type: "string",
            defaultValue: { summary: "#CDC9C6" },
            control: "color"
        },
        colorBar: {
            description: "Color of the progress bar",
            type: "string",
            defaultValue: { summary: "#eee" },
            control: "color"
        },
        colorMiniLine: {
            description: "Color of the miniline",
            type: "string",
            defaultValue: { summary: "#CDC9C6" },
            control: "color"
        },
        colorCompareValue: {
            description: "Color of the compare value",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        showCompareValue: {
            description: "Show or not the compare value",
            type: "boolean",
            defaultValue: { summary: true }
        },
        fontSizeCompareValue: {
            description: "Font size of the compare value",
            type: "number",
            defaultValue: { summary: 24 }
        },
        marginTopCompareValue: {
            description: "Margin top of the compare value",
            type: "number",
            defaultValue: { summary: 35 }
        },
        fontWeight: {
            description: "Font weight of the compare value",
            type: "number",
            defaultValue: { summary: 400 }
        },
        fontFamily: {
            description: "Font family of the compare value",
            type: "string",
            defaultValue: { summary: "Arial" }
        },
        topCompareValue: {
            description: "Top of the compare value",
            type: "string",
            defaultValue: { summary: "150%" }
        }
    }
}

export default meta;
type Story = StoryObj<ProgressBarMinilineComponent>;

export const ProgressBarMinilinePrimary: Story = {
    args: {
        height: "50px",
        compareValue: 500,
        compareValueStr: "500"
    }
}