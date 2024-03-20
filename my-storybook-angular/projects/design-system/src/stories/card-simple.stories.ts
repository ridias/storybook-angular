import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardSimpleComponent } from "../lib/components/cards/card-simple/card-simple.component";

const meta: Meta<CardSimpleComponent> = {
    title: 'Example/Cards/CardSimple',
    component: CardSimpleComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        titleCard: {
            description: "Title card",
            type: "string",
            defaultValue: { summary: "Title card" }
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "white"},
            control: "color"
        },
        colorBorder: {
            description: "Border color of the card",
            type: "string",
            defaultValue: { summary: "#ddd"},
            control: "color"
        },
        color: {
            description: "Font color of the card",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<CardSimpleComponent>;

export const CardSimpleDefault: Story = {
    args: {
        
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-simple>
        `,
        
    })
}