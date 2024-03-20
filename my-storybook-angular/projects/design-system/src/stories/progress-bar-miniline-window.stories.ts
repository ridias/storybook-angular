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
            defaultValue: "100%"
        },
        height: {
            description: "Height of the progress bar",
            type: "string",
            defaultValue: "20px"
        },
        min: {
            description: "Min value of the progress bar",
            type: "number",
            defaultValue: 0
        },
        max: {
            description: "Max value of the progress bar",
            type: "number",
            defaultValue: 0
        },
        value: {
            description: "Current value of the progress bar",
            type: "number",
            defaultValue: 500
        },
        compareValue: {
            description: "Value to compare to the current value",
            type: "number",
            defaultValue: 0
        },
        titleToolTip: {
            description: "Value to compare to the current value",
            type: "string",
            defaultValue: "0",
        },
        colorFilled: {
            description: "Color of the filled progress bar",
            type: "string",
            defaultValue: "#CDC9C6",
            control: "color"
        },
        colorBar: {
            description: "Color of the progress bar",
            type: "string",
            defaultValue: "#eee",
            control: "color"
        },
        colorMiniLine: {
            description: "Color of the miniline",
            type: "string",
            defaultValue: "#CDC9C6",
            control: "color"
        },
        topLine: {
            description: "Top of the miniline",
            type: "string",
            defaultValue: "-10px"
        },
        topWindow: {
            description: "Top of the window",
            type: "string",
            defaultValue: "100%"
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