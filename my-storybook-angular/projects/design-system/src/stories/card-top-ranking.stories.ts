import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardTopRankingComponent } from "../lib/components/cards/card-top-ranking/card-top-ranking.component";
import { TopItem } from "../lib/models/TopItem";

let items: TopItem[] = [
    { "name": "Top Element 1", "color": "#2C91D5" },
    { "name": "Top Element 2", "color": "#37C9F0" },
    { "name": "Top Element 3", "color": "#3EDAD7" },
]

const meta: Meta<CardTopRankingComponent> = {
    title: 'Example/Cards/CardTopRanking',
    component: CardTopRankingComponent,
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
        values: {
            description: ""
        },
        isLoading: {
            description: "If the content is loading or not",
            type: "boolean",
            defaultValue: { summary: false }
        },
        isLoadingColor: {
            description: "Loading color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        titleValue: {
            description: "Title",
            type: "string",
            defaultValue: { summary: "Title" }
        },
        subtitleValue: {
            description: "Subtitle",
            type: "string",
            defaultValue: { summary: "Subtitle" }
        },
        emptyValue: {
            description: "Sentence when there is empty content",
            type: "string",
            defaultValue: { summary: "Empty!" }
        },
        colorIcon: {
            description: "Color of the icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        colorTitle: {
            description: "Font color title",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorSubtitle: {
            description: "Font color subtitle",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<CardTopRankingComponent>;

export const CardTopRankingDefault: Story = {
    args: {
        values: items
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-top-ranking ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-top-ranking>
        `
    })
}

export const CardTopRankingLoading: Story = {
    args: {
        isLoading: true,
        isLoadingColor: "black"
    }
}

export const CardTopRankingEmpty: Story = {
    args: {
        emptyValue: "Empty content!"
    }
}