import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { SemicircleKpi2cComponent } from "../lib/components/semicircles/semicircle-kpi-2c/semicircle-kpi-2c.component";

const meta: Meta<SemicircleKpi2cComponent> = {
    title: 'Example/Semicircles/SemicircleKpi2c',
    component: SemicircleKpi2cComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        widthPx: {
            description: "Width in pixels",
            type: "number",
            defaultValue: { summary: 160 }
        },
        heightPx: {
            description: "Height in pixels",
            type: "number",
            defaultValue: { summary: 80 }
        },
        borderPx: {
            description: "Border width in pixels",
            type: "number",
            defaultValue: { summary: 25 }
        },
        currentDeg: {
            description: "Current degree",
            type: "number",
            defaultValue: { summary: 0 }
        },
        description: {
            description: "Description of the semicircle",
            type: "string",
            defaultValue: { summary: "" }
        },
        isLoading: {
            description: "If it is loading or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        iconArrowLeftPercentage: {
            description: "Icon arrow left percentage",
            type: "number",
            defaultValue: { summary: 47 }
        },
        borderBottomWidth: {
            description: "Border bottom width",
            type: "number",
            defaultValue: { summary: 75 }
        },
        colorLeft: {
            description: "Color left part of the semicircle",
            type: "string",
            defaultValue: { summary: "#4FBF9D" },
            control: "color"
        },
        colorRight: {
            description: "Color right part of the semicircle",
            type: "string",
            defaultValue: { summary: "#EB895F" },
            control: "color"
        },
        colorArrow: {
            description: "Color arrow of the semicircle",
            type: "string",
            defaultValue: { summary: "grey" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<SemicircleKpi2cComponent>;

export const SemicircleKpi2cDefault: Story = {
    args: {
        
    }
}

export const SemicircleKpi2cDescription: Story = {
    args: {
        description: "Test"
    }
}

export const SemicircleKpi2cDegreePositive: Story = {
    args: {
        currentDeg: 25
    }
}

export const SemicircleKpi2cDegreeNegative: Story = {
    args: {
        currentDeg: -50
    }
}