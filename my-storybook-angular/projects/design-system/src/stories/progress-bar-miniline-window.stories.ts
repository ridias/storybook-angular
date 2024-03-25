import { Meta, StoryObj } from "@storybook/angular";
import { ProgressBarMinilineWindowComponent } from "../lib/components/progress-bars/progress-bar-miniline-window/progress-bar-miniline-window.component";

const meta: Meta<ProgressBarMinilineWindowComponent> = {
    title: 'Example/Progress Bars/ProgressBarMinilineWindow',
    component: ProgressBarMinilineWindowComponent,
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
            defaultValue: { summary: 0 }
        },
        titleToolTip: {
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
        topLine: {
            description: "Top of the miniline",
            type: "string",
            defaultValue: { summary: "-10px" }
        },
        topWindow: {
            description: "Top of the window",
            type: "string",
            defaultValue: { summary: "100%" }
        }
    }
}

export default meta;
type Story = StoryObj<ProgressBarMinilineWindowComponent>;

export const ProgressBarMinilineWindowPrimary: Story = {
    args: {
        height: "80px",
        value: 250,
        compareValue: 500,
        
    }
}