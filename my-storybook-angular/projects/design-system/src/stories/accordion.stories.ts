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
            defaultValue: 'Accordion 1'
        },
        disable: {
            description: 'Disable accordion',
            type: 'boolean',
            defaultValue: false
        },
        borderWidth: {
            description: 'Border width in px',
            type: 'number',
            defaultValue: 1
        },
        borderStyle: {
            description: 'Border style',
            type: 'string',
            defaultValue: 'solid'
        },
        borderColor: {
            description: 'Border color',
            type: 'string',
            defaultValue: '#CCC'
        },
        iconColor: {
            description: 'Icon color',
            type: 'string',
            defaultValue: '#CCC'
        },
        isOpen: {
            description: 'Open or not accordion',
            type: 'boolean',
            defaultValue: false
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