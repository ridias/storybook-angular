import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { SeparatorVerticalComponent } from "../lib/components/separators/separator-vertical/separator-vertical.component";

const meta: Meta<SeparatorVerticalComponent> = {
    title: 'Example/Separators/SeparatorVertical',
    component: SeparatorVerticalComponent,
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
type Story = StoryObj<SeparatorVerticalComponent>;

export const SeparatorVerticalDefault: Story = {
    args: {
       
    },
    render: (args) => ({
        props: args,
        template: `
            <div style="width: 100%; height: 200px; display: flex; justify-content: center">
                <app-separator-vertical></app-separator-vertical>
            </div>
        `
    })
}