import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { InputColorPickerComponent } from "../lib/components/inputs/input-colorpicker/input-colorpicker.component";

const meta: Meta<InputColorPickerComponent> = {
    title: 'Example/Inputs/InputColorPicker',
    component: InputColorPickerComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        colorValue: {
            description: "Color picked",
            type: "string",
            defaultValue: { summary: "#fdfdfd" },
            control: "color"
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary: "#fdfdfd" },
            control: "color"
        },
        bgColorHoverBtn: {
            description: "Background color hover",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorIconHover: {
            description: "Color icon hover",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorPicked: {
            action: "colorPicked"
        }
    }
};

export default meta;
type Story = StoryObj<InputColorPickerComponent>;

export const InputColorPickerDefault: Story = {
    args: {
        
    }
}

export const InputColorPickerColor: Story = {
    args: {
        colorValue: "#95E39D"
    }
}

export const InputColorPickerColorDisable: Story = {
    args: {
        disable: true
    }
}

