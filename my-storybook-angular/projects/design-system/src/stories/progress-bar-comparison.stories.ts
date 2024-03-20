import { Meta, StoryObj } from "@storybook/angular";
import { ProgressBarComparisonComponent } from "../lib/components/progress-bars/progress-bar-comparison/progress-bar-comparison.component";

const meta: Meta<ProgressBarComparisonComponent> = {
    title: 'Example/Progress Bars/ProgressBarComparison',
    component: ProgressBarComparisonComponent,
    tags: ['autodocs'],
    argTypes: {
        descriptionLeft: {
            description: "Description of the left bar",
            type: "string",
            defaultValue: ""
        },
        descriptionRight: {
            description: "Description of the right bar",
            type: "string",
            defaultValue: ""
        },
        percentageLeft: {
            description: "Percentage filled for left bar",
            type: "string",
            defaultValue: "0"
        },
        percentageRight: {
            description: "Percentage filled for right bar",
            type: "string",
            defaultValue: "0"
        },
        valueLeft: {
            description: "Value of the left bar filled",
            type: "string",
            defaultValue: "0"
        },
        valueRight: {
            description: "Value of the right bar filled",
            type: "string",
            defaultValue: "0"
        },
        colorFillLeft: {
            description: "Color of the left filled bar",
            type: "string",
            defaultValue: "#0298B3",
            control: "color"
        },
        colorFillRight: {
            description: "Color of the right filled bar",
            type: "string",
            defaultValue: "#CDC9C6",
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: "black",
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<ProgressBarComparisonComponent>;

export const ProgressBarComparisonPrimary: Story = {
    args: {
        descriptionLeft: "Males",
        descriptionRight: "Females", 
        percentageLeft: "50",
        percentageRight: "50",
        valueLeft: "500",
        valueRight: "500"
    }
}