import { Meta, StoryObj } from "@storybook/angular";
import { ProgressBarComponent } from "../lib/components/progress-bars/progress-bar/progress-bar.component";

const meta: Meta<ProgressBarComponent> = {
    title: 'Example/Progress Bars/ProgressBar',
    component: ProgressBarComponent,
    tags: ['autodocs'],
    argTypes: {
        width: {
            description: "Width of the bar",
            type: "string",
            defaultValue: { summary: '100%' }
        },
        height: {
            description: "Height of the bar",
            type: "string",
            defaultValue: { summary: "50px" }
        },
        value: {
            description: "Value to fill in the bar",
            type: "number",
            defaultValue: { summary: 50 }
        },
        maxValue: {
            description: "Max capacity of the bar",
            type: "number",
            defaultValue: { summary: 100 }
        },
        colorBar: {
            description: "Color of the bar",
            type: "string",
            defaultValue: { summary: "#eee" }
        },
        colorFillBar: {
            description: "Color of the filled part",
            type: "string",
            defaultValue: { summary: "purple" }
        }
    }
}

export default meta;
type Story = StoryObj<ProgressBarComponent>;

export const ProgressBarPrimary: Story = {
    args: {
        width: "100%",
        height: "20px"
    }
}

export const ProgressBarFilled25: Story = {
    args: {
        width: "100%",
        height: "20px",
        value: 250,
        maxValue: 1000,
        colorBar: '#eee',
        colorFillBar: 'green'
    }
}

export const ProgressBarFilled75: Story = {
    args: {
        width: "100%",
        height: "20px",
        value: 750,
        maxValue: 1000,
        colorBar: '#eee',
        colorFillBar: 'green'
    }
}