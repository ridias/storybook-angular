import { Meta, StoryObj } from "@storybook/angular";
import { ToggleButtonComponent } from "../lib/components/toggles/toggle-button/toggle-button.component";

const meta: Meta<ToggleButtonComponent> = {
    title: 'Example/Toggles/ToggleButton',
    component: ToggleButtonComponent,
    tags: ['autodocs'],
    argTypes: {
        valueOn: {
            description: "Value when toggle activated",
            type: "string",
            defaultValue: { summary: "On" }
        },
        valueOff: {
            description: "Value when toggle inactive",
            type: "string",
            defaultValue: { summary: "Off" }
        },
        disabled: {
            description: "Disable or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        color: {
            description: "Font color when toggle inactive",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorHover: {
            description: "Font color hover when toggle inactive",
            type: "string",
            defaultValue: { summary: "black" },
        },
        colorActive: {
            description: "Font color when toggle active",
            type: "string",
            defaultValue: { summary: "white"}
        },
        colorActiveHover: {
            description: "Font color hover when toggle active",
            type: "string",
            defaultValue: { summary: "white" }
        },
        bgColor: {
            description: "Background color when toggle inactive",
            type: "string",
            defaultValue: { summary: "#fdfdfd" }
        },
        bgColorHover: {
            description: "Background color hover toggle inactive",
            type: "string",
            defaultValue: { summary: "#eee" }
        },
        bgColorActive: {
            description: "Background color when toggle active",
            type: "string",
            defaultValue: { summary: "orange" }
        },
        bgColorActiveHover: {
            description: "Background color hover when toggle active",
            type: "string",
            defaultValue: { summary: "orangered" }
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        active: {
            description: "If the toggle is active or not",
            type: "boolean",
            defaultValue: false
        },
        activated: {
            action: "activated"
        }
    }
};

export default meta;
type Story = StoryObj<ToggleButtonComponent>;

export const ToggleButtonDefault: Story = {
    args: {
        
    }
}