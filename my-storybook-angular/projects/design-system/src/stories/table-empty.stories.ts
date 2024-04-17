import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { SortableHeaderDirective } from "../lib/directives/sortable.directive";
import { CommonModule } from "@angular/common";
import { TableEmptyComponent } from "../lib/components/tables/table-empty/table-empty.component";

const meta: Meta<TableEmptyComponent > = {
    title: 'Example/Tables/TableEmpty',
    component: TableEmptyComponent   ,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            declarations: [
                SortableHeaderDirective
            ],
            imports: [
                FormsModule,
                CommonModule
            ]
        })
    ],
    argTypes: {
        titleEmpty: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "No data yet"},
        },
        description: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "Try to use search or filters to display data"},
        },
        borderColor: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "#DEE2E6"},
            control: "color"
        },
        bgColor: {
            description: "Background color",
            type: "string",
            defaultValue: { summary: "#FFFFFF"},
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "#444"},
            control: "color"
        },
        colorIcon: {
            description: "Color icon when active",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<TableEmptyComponent>;

export const TableEmptyDefault: Story = {
    args: {
        
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-empty ${argsToTemplate(args)}>    
            </app-table-empty>
        `
    })
}