import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { MenuVerticalComponent } from "../lib/components/menus/menu-vertical/menu-vertical.component";

const meta: Meta<MenuVerticalComponent> = {
    title: 'Example/Menus/MenuVertical',
    component: MenuVerticalComponent,
    tags: ['autodocs'],
    argTypes: {
        
    }
};

export default meta;
type Story = StoryObj<MenuVerticalComponent>;

export const TabsSimplePrimary: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-menu-vertical>

            </app-menu-vertical>
        `
    })
}