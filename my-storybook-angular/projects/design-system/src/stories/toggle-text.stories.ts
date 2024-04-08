import { Meta, StoryObj } from "@storybook/angular";
import { ToggleTextComponent } from "../lib/components/toggles/toggle-text/toggle-text.component";

const meta: Meta<ToggleTextComponent> = {
    title: 'Example/Toggles/ToggleText',
    component: ToggleTextComponent,
    tags: ['autodocs'],
    argTypes: {
        colorChecked: {
            description: "Color when checked toggle",
            type: "string",
            defaultValue: { summary: "orange" }
        },
        colorDisable: {
            description: "Color when disable toggle",
            type: "string",
            defaultValue: { summary: "#EEE" }
        },
        colorUnchecked: {
            description: "Color when unchecked toggle",
            type: "string",
            defaultValue: { summary: "#EEE" }
        },
        bgcolor: {
            description: "Background Color toggle",
            type: "string",
            defaultValue: { summary: "grey" }
        },
        active: {
            description: "Active toggle",
            type: "boolean",
            defaultValue: { summary: false }
        },
        disabled: {
            description: "Disabled or not toggle",
            type: "boolean",
            defaultValue: { summary: false }
        },
        textActive: {
            description: "Text when toggle active",
            type: "string",
            defaultValue: { summary: "On" }
        },
        textInactive: {
            description: "Text when toggle inactive",
            type: "string",
            defaultValue: { summary: "Off" }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        changeToggle: {
            action: 'changeToggle'
        }
    }
};

export default meta;
type Story = StoryObj<ToggleTextComponent>;

export const ToggleTextPrimary: Story = {
    args: {
        
    }
}

export const ToggleTextColor: Story = {
    args: {
        colorChecked: "green",
        colorUnchecked: "#eee"
    }
}

export const ToggleTextActive: Story = {
    args: {
        active: true
    }
}

export const ToggleTextDisable: Story = {
    args: {
        disabled: true,
        colorDisable: "#eee"
    }
}