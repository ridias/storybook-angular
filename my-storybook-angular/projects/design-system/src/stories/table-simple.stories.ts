import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { TableSimpleComponent } from "../lib/components/tables/table-simple/table-simple.component";
import { FormsModule } from "@angular/forms";
import { TableHeader } from "../lib/models/TableHeader";
import { SortableHeaderDirective } from "../lib/directives/sortable.directive";
import { CommonModule } from "@angular/common";

let headers: TableHeader[] = [
    { "id": "id", "name": "Id", "direction": "", "isSortCol": true },
    { "id": "firstName", "name": "First Name", "direction": "", "isSortCol": true },
    { "id": "lastName", "name": "Last Name", "direction": "", "isSortCol": true },
    { "id": "actions", "name": "Actions", "direction": "", "isSortCol": false }
]

const meta: Meta<TableSimpleComponent> = {
    title: 'Example/Tables/TableSimple',
    component: TableSimpleComponent,
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
        headers: {
            description: "",
            control: "array"
        },
        colorIconActive: {
            description: "Color icon when active",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        },
        colorIconInactive: {
            description: "Color icon when inactive",
            type: "string",
            defaultValue: { summary: "grey" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<TableSimpleComponent>;

export const TableSimpleDefault: Story = {
    args: {
        headers: headers
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-simple ${argsToTemplate(args)}>
                <tr>
                    <td>1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Action 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Maria</td>
                    <td>Smith</td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Brad</td>
                    <td>Connor</td>
                    <td>Action 3</td>
                </tr>
            </app-table-simple>
        `
    })
}