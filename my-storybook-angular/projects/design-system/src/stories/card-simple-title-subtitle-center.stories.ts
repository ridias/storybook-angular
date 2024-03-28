import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { CardSimpleTitleSubtitleCenterComponent } from "../public-api";
import { CommonModule } from "@angular/common";

const meta: Meta<CardSimpleTitleSubtitleCenterComponent> = {
    title: 'Example/Cards/CardSimpleTitleSubtitleCenter',
    component: CardSimpleTitleSubtitleCenterComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                CommonModule
            ]
        })
    ],
    argTypes: {
        
    }
}

export default meta;
type Story = StoryObj<CardSimpleTitleSubtitleCenterComponent>;

export const CardSimpleTitleSubtitleCenterDefault: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple-title-subtitle-center ${argsToTemplate(args)}>
                <div style="width:100%; display: flex; justify-content: center; align-items: center;">
                    <span style="font-size: 36px; font-weight: 700;">
                        8.888
                    </span>
                </div>
            </app-card-simple-title-subtitle-center>
        `
    })
}

export const CardSimpleTitleSubtitleCenterIcon: Story = {
    args: {
        bgColor: "#b72525",
        color: "white",
        icon: "bi bi-star-fill",
        iconColor: "white",
        fontSizeIcon: 36
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple-title-subtitle-center ${argsToTemplate(args)}>
                <div style="width:100%; display: flex; justify-content: center; align-items: center;">
                    <span style="font-size: 36px; font-weight: 700;">
                        8.888
                    </span>
                </div>
            </app-card-simple-title-subtitle-center>
        `
    })
}