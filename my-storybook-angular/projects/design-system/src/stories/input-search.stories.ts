import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { InputSearchComponent } from "../lib/components/inputs/input-search/input-search.component";

const meta: Meta<InputSearchComponent> = {
    title: 'Example/Inputs/InputSearch',
    component: InputSearchComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        maxLength: {
            description: "Max length of the input",
            type: "number",
            defaultValue: { summary: 100 }
        },
        isLoading: {
            description: "If the input is loading or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        bgColor: {
            description: "Background color of the input",
            type: "string",
            defaultValue: { summary: "#fdfdfd" }
        },
        colorBorder: {
            description: "Color border of the input",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" }
        },
        colorIconHover: {
            description: "Color Icon hover",
            type: "string",
            defaultValue: { summary: "#ddd" }
        },
        bgColorHover: {
            description: "Background color hover of the button",
            type: "string",
            defaultValue: { summary: "#aaa" }
        },
        searchCompleted: {
            action: "searchCompleted"
        }
    }

}

export default meta;
type Story = StoryObj<InputSearchComponent>;

export const InputSearchPrimary: Story = {
    args: {
        
    }
}