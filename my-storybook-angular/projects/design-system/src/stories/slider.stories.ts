import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { SliderComponent } from "../lib/components/sliders/slider/slider.component";
import { FormsModule } from "@angular/forms";

const meta: Meta<SliderComponent> = {
    title: 'Example/Sliders/Slider',
    component: SliderComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        value: {
            description: "Current value of the slider",
            type: "number",
            defaultValue: { summary: 0 }
        },
        minValue: {
            description: "Min value of the slider",
            type: "number",
            defaultValue: { summary: 0 }
        },
        maxValue: {
            description: "Max value of the slider",
            type: "number",
            defaultValue: { summary: 0 }
        },
        bgcolor: {
            description: "Background color slider",
            type: "string",
            defaultValue: { summary: "#ccc" }
        },
        colorSliderThumb: {
            description: "Color slider thumb of the slider",
            type: "string",
            defaultValue: { summary: "orange" },
            control: "color"
        },
        colorRangeThumb: {
            description: "Color range thumb of the slider ",
            type: "string",
            defaultValue: { summary: "orange" },
            control: "color"
        },
        colorThumbHover: {
            description: "Shadow color thumb hover of the slider",
            type: "string",
            defaultValue: { summary: "rgba(255,85,0, .1)" },
            control: "color"
        },
        colorThumbActiveFocus: {
            description: "Shadow color when active or focus thumb of the slider",
            type: "string",
            defaultValue: { summary: "rgba(255,85,0, .2)" },
            control: "color"
        },
        valueChanged: {
            action: 'valueChanged'
        }
    }
};

export default meta;
type Story = StoryObj<SliderComponent>;

export const SliderPrimary: Story = {
    args: {
        minValue: 0,
        maxValue: 10,
        value: 5
    }
}