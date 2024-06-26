import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { AccordionComponent } from "../lib/components/accordions/accordion/accordion.component";

const meta: Meta<AccordionComponent> = {
    title: 'Example/Accordions/Accordion',
    component: AccordionComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    argTypes: {
        text: {
            description: 'Value of the header',
            type: 'string',
            defaultValue: { summary: 'Accordion 1'}
        },
        disable: {
            description: 'Disable accordion',
            type: 'boolean',
            defaultValue: { summary: false }
        },
        borderColor: {
            description: 'Border color',
            type: 'string',
            defaultValue: { summary: '#DDD' },
            control: "color"
        },
        bgColor: {
            description: 'Background color',
            type: 'string',
            defaultValue: { summary: 'white' },
            control: "color"
        },
        color: {
            description: 'Font color',
            type: 'string',
            defaultValue: { summary: 'black' },
            control: "color"
        },
        iconColor: {
            description: 'Icon color',
            type: 'string',
            defaultValue: { summary: '#CCC' },
            control: "color"
        },
        isOpen: {
            description: 'Open or not accordion',
            type: 'boolean',
            defaultValue: { summary: false }
        },
        accordionOpened: {
            action: 'accordionOpened'
        }
    }
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const AccordionDefault: Story = {
    args: {},
    render: (args) => ({
        props: args,
        template: `
            <app-accordion ${argsToTemplate(args)}>
                <span>This is my custom content!</span>
            </app-accordion>
        ` 
    })
}

export const AccordionDisable: Story = {
    args: {
        disable: true
    },
    render: (args) => ({
        props: args,
        template: `
            <app-accordion ${argsToTemplate(args)}>
                <span>This is my custom content!</span>
            </app-accordion>
        ` 
    })
}

export const AccordionGroup: Story = {
    args: {
        
    },
    render: (args) => ({
        props: args,
        template: `
            <div style="width: 100%; display: flex; flex-direction: column; gap: 5px;">
                <app-accordion [text]="'Accordion 1'">
                    <span>This is my custom content 1!</span>
                </app-accordion>
                <app-accordion [text]="'Accordion 2'" [disable]="true">
                    <span>This is my custom content 2!</span>
                </app-accordion>
                <app-accordion [text]="'Accordion 3'">
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                </app-accordion>
            </div>
        ` 
    })
}