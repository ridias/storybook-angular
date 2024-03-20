import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavBreadcrumbComponent } from "../lib/components/nav-breadcrumbs/nav-breadcrumb/nav-breadcrumb.component";

const meta: Meta<NavBreadcrumbComponent> = {
    title: 'Example/NavBreadcrumbs/NavBreadcrumb',
    component: NavBreadcrumbComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                CommonModule
            ]
        })
    ],
    argTypes: {
        navBreadcrumb: {
            description: "Array of arrays where the content is the name of the page and url",
            defaultValue: { summary: "Administrator (/)"}
       },
       currentTitlePage: {
            description: "Current title page",
            type: "string",
            defaultValue: { summary: "Page"}
       },
       color: {
            description: "Color of the nav breadcrumb",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
       },
       colorActive: {
            description: "Color of the current page",
            type: "string",
            defaultValue: { summary: "grey"},
            control: "color"
       }
    }
}

export default meta;
type Story = StoryObj<NavBreadcrumbComponent>;

export const NavBreadcrumbPrimary: Story = {
    args: {
        
    },
}