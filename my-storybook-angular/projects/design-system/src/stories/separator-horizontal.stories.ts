import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { SeparatorHorizontalComponent } from "../lib/components/separators/separator-horizontal/separator-horizontal.component";

const meta: Meta<SeparatorHorizontalComponent> = {
    title: 'Example/Separators/SeparatorHorizontal',
    component: SeparatorHorizontalComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                
            ]
        })
    ],
    argTypes: {
        
        borderWith: {
            description: "Border width in pixels.",
            type: "number",
            defaultValue: { summary: "1" },
        },
        borderStyle: {
            description: "Border style",
            type: "string",
            defaultValue: { summary: "solid" }
        },
        borderColor: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        opacity: {
            description: "Opacity",
            type: "number",
            defaultValue: { summary: 0.6 }
        }
    }
};

export default meta;
type Story = StoryObj<SeparatorHorizontalComponent>;

export const SeparatorHorizontalDefault: Story = {
    args: {
       
    }
}