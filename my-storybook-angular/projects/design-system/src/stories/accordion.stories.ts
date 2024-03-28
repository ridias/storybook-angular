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