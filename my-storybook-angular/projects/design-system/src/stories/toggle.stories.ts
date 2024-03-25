import { Meta, StoryObj } from "@storybook/angular";
import { ToggleComponent } from "../lib/components/toggles/toggle/toggle.component";

const meta: Meta<ToggleComponent> = {
    title: 'Example/Toggles/Toggle',
    component: ToggleComponent,
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
        changeToggle: {
            action: 'changeToggle'
        }
    }
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const TogglePrimary: Story = {
    args: {
        
    }
}

export const ToggleColor: Story = {
    args: {
        colorChecked: "green",
        colorUnchecked: "#eee"
    }
}

export const ToggleActive: Story = {
    args: {
        active: true
    }
}

export const ToggleDisable: Story = {
    args: {
        disabled: true,
        colorDisable: "#eee"
    }
}