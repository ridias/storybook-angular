import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { PaginationSimpleComponent } from "../lib/components/paginations/pagination-simple/pagination-simple.component";

const meta: Meta<PaginationSimpleComponent> = {
    title: 'Example/Paginations/PaginationSimple',
    component: PaginationSimpleComponent,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {
        totalPages: {
            description: "Total pages",
            type: "number",
            defaultValue: { summary: 0 }
        },
        currentPage: {
            description: "Current page",
            type: "number",
            defaultValue: { summary: 0 }
        },
        itemsPerPage: {
            description: "Items per page",
            type: "number",
            defaultValue: { summary: 0 }
        },
        colorBorderBtns: {
            description: "Color border buttons",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        bgColorBtns: {
            description: "Background color buttons",
            type: "string",
            defaultValue: { summary: "#eee" },
            control: "color"
        },
        bgHoverColorBtns: {
            description: "Background color hover buttons",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorHoverIcon: {
            description: "Color icon hover",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        selectedPage: {
            action: 'selectedPage'
        }
    }
};

export default meta;
type Story = StoryObj<PaginationSimpleComponent>;

export const PaginationSimplePrimary: Story = {
    args: {
        totalPages: 100,
        currentPage: 1,
        itemsPerPage: 10
    },
}