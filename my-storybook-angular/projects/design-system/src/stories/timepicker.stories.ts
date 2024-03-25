import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TimepickerComponent } from "../lib/components/timerpickers/timerpicker/timepicker.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<TimepickerComponent> = {
    title: 'Example/Timepickers/Timepicker',
    component: TimepickerComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        hours: {
            description: "Current hour",
            type: "number",
            defaultValue: { summary: 0 }
        },
        minutes: {
            description: "Current minute",
            type: "number",
            defaultValue: { summary: 0 }
        },
        seconds: {
            description: "Current second",
            type: "number",
            defaultValue: { summary: 0 }
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary: "#fdfdfd" },
            control: "color"
        },
        bgColorHover: {
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
        hoursDescription: {
            description: "Hours description",
            type: "string",
            defaultValue: { summary: "Hours" }
        },
        minutesDescription: {
            description: "Minutes description",
            type: "string",
            defaultValue: { summary: "Minutes" },
        },
        secondsDescription: {
            description: "Seconds description",
            type: "string",
            defaultValue: { summary: "Seconds" },
        },
        changedTime: {
            action: "changedTime"
        }
    }
};

export default meta;
type Story = StoryObj<TimepickerComponent>;

export const TimepickerDefault: Story = {
    args: {
        
    }
}

export const TextSpecificHour: Story = {
    args: {
        hours: 12,
        minutes: 30,
        seconds: 0
    }
}