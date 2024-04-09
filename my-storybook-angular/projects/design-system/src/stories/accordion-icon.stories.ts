import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { AccordionIconComponent } from "../lib/components/accordions/accordion-icon/accordion-icon.component";

const meta: Meta<AccordionIconComponent> = {
    title: 'Example/Accordions/AccordionIcon',
    component: AccordionIconComponent,
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
            defaultValue: { summary: '#CCC' },
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
type Story = StoryObj<AccordionIconComponent>;

export const AccordionIconDefault: Story = {
    args: {},
    render: (args) => ({
        props: args,
        template: `
            <app-accordion-icon ${argsToTemplate(args)}>
                <span>This is my custom content!</span>
            </app-accordion-icon>
        ` 
    })
}

export const AccordionIconDisable: Story = {
    args: {
        disable: true
    },
    render: (args) => ({
        props: args,
        template: `
            <app-accordion-icon ${argsToTemplate(args)}>
                <span>This is my custom content!</span>
            </app-accordion-icon>
        ` 
    })
}

export const AccordionIconGroup: Story = {
    args: {
        
    },
    render: (args) => ({
        props: args,
        template: `
            <div style="width: 100%; display: flex; flex-direction: column; gap: 5px;">
                <app-accordion-icon [text]="'Accordion 1'">
                    <span>This is my custom content 1!</span>
                </app-accordion-icon>
                <app-accordion-icon [text]="'Accordion 2'" [disable]="true">
                    <span>This is my custom content 2!</span>
                </app-accordion-icon>
                <app-accordion-icon [text]="'Accordion 3'">
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                    <p>This is my custom content 3!</p>
                </app-accordion-icon>
            </div>
        ` 
    })
}