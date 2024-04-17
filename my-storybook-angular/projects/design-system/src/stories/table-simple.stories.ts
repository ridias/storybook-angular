import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { TableSimpleComponent } from "../lib/components/tables/table-simple/table-simple.component";
import { FormsModule } from "@angular/forms";
import { TableHeader } from "../lib/models/TableHeader";
import { SortableHeaderDirective } from "../lib/directives/sortable.directive";
import { CommonModule } from "@angular/common";
import { BadgesModule } from "../public-api";

let headers: TableHeader[] = [
    { "id": "id", "name": "Id", "direction": "", "isSortCol": true },
    { "id": "firstName", "name": "First Name", "direction": "", "isSortCol": true },
    { "id": "lastName", "name": "Last Name", "direction": "", "isSortCol": true },
    { "id": "actions", "name": "Actions", "direction": "", "isSortCol": false }
]

let headersCustom: TableHeader[] = [
    { "id": "id", "name": "Id", "direction": "", "isSortCol": true },
    { "id": "product", "name": "Product", "direction": "", "isSortCol": true },
    { "id": "client", "name": "Client", "direction": "", "isSortCol": true },
    { "id": "status", "name": "Status", "direction": "", "isSortCol": false },
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
                CommonModule,
                BadgesModule
            ]
        })
    ],
    argTypes: {
        headers: {
            description: "",
            control: "array"
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
        },
        isLoading: {
            description: "If the table is loading",
            type: "boolean",
            defaultValue: { summary: false}
        },
        isLoadingColor: {
            description: "Color loading",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
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

export const TableSimpleStretch: Story = {
    args: {
        headers: headers
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-simple ${argsToTemplate(args)}>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td>1</td>
                    <td>John</td>
                    <td>Doe</td>
                    <td>Action 1</td>
                </tr>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td>2</td>
                    <td>Maria</td>
                    <td>Smith</td>
                    <td>Action 2</td>
                </tr>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td>3</td>
                    <td>Brad</td>
                    <td>Connor</td>
                    <td>Action 3</td>
                </tr>
            </app-table-simple>
        `
    })
}

export const TableSimpleStretchColor: Story = {
    args: {
        headers: headers
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-simple ${argsToTemplate(args)}>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td style="background-color: green; color: white;">1</td>
                    <td style="background-color: green; color: white;">John</td>
                    <td style="background-color: green; color: white;">Doe</td>
                    <td style="background-color: green; color: white;">Action 1</td>
                </tr>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td>2</td>
                    <td>Maria</td>
                    <td>Smith</td>
                    <td>Action 2</td>
                </tr>
                <tr style="line-height: 15px; min-height: 15px; height: 15px;">
                    <td>3</td>
                    <td>Brad</td>
                    <td>Connor</td>
                    <td>Action 3</td>
                </tr>
            </app-table-simple>
        `
    })
}

export const TableSimpleCustom: Story = {
    args: {
        headers: headersCustom
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-simple ${argsToTemplate(args)}>
                <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>John Doe</td>
                    <td style="display: flex; justify-content: center; ">
                        <div>
                            <app-badge text="Pending" bgcolor="orange"></app-badge>
                        </div>
                    </td>
                    <td>Action 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>Maria Smith</td>
                    <td style="display: flex; justify-content: center;">
                        <div>
                            <app-badge text="Delivered" bgcolor="green"></app-badge>
                        </div>
                    </td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>Brad Connor</td>
                    <td style="display: flex; justify-content: center;">
                        <div>
                            <app-badge text="Canceled" bgcolor="red"></app-badge>
                        </div>
                    </td>
                    <td>Action 3</td>
                </tr>
            </app-table-simple>
        `
    })
}

export const TableSimpleLoading: Story = {
    args: {
        headers: headersCustom,
        isLoading: true,
        isLoadingColor: "#444"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-table-simple ${argsToTemplate(args)}>
                <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>John Doe</td>
                    <td style="display: flex; justify-content: center; ">
                        <div>
                            <app-badge text="Pending" bgcolor="orange"></app-badge>
                        </div>
                    </td>
                    <td>Action 1</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>Maria Smith</td>
                    <td style="display: flex; justify-content: center;">
                        <div>
                            <app-badge text="Delivered" bgcolor="green"></app-badge>
                        </div>
                    </td>
                    <td>Action 2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>Brad Connor</td>
                    <td style="display: flex; justify-content: center;">
                        <div>
                            <app-badge text="Canceled" bgcolor="red"></app-badge>
                        </div>
                    </td>
                    <td>Action 3</td>
                </tr>
            </app-table-simple>
        `
    })
}