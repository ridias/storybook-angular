import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { SortableHeaderDirective } from "../lib/directives/sortable.directive";
import { CommonModule } from "@angular/common";
import { ListItemTimeComponent } from "../lib/components/list-items/list-item-time/list-item-time.component";
import { CardsModule } from "../public-api";

const meta: Meta<ListItemTimeComponent > = {
    title: 'Example/ListItems/ListItemTime',
    component: ListItemTimeComponent   ,
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
                CardsModule
            ]
        })
    ],
    argTypes: {
        time: {
            description: "Description time",
            type: "string",
            defaultValue: { summary: "Just now"},
        },
        description: {
            description: "Description",
            type: "string",
            defaultValue: { summary: "Description"},
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "#444" },
            control: "color"
        },
        colorTime: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "grey" },
            control: "color"
        },
        fontSizeDescription: {
            description: "Font size description",
            type: "number",
            defaultValue: { summary: 16 },
        },
        fontSizeTime: {
            description: "Font size time",
            type: "number",
            defaultValue: { summary: 14 },
        }
    }
}

export default meta;
type Story = StoryObj<ListItemTimeComponent>;

export const ListItemTimeDefault: Story = {
    args: {
        description: "Ordered canceled",
        time: "Just now"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-list-item-time ${argsToTemplate(args)}>    
            </app-list-item-time>
        `
    })
}

export const ListItemTimeMultiple: Story = {
    args: {
        
    },
    render: (args) => ({
        props: args,
        template: `
            <div style="display: flex; flex-direction: column;">
                <app-list-item-time
                    [fontSizeDescription]="14"
                    [fontSizeTime]="12"
                    description="Ordered canceled"
                    time="Just now">    
                </app-list-item-time>
                <app-list-item-time
                    [fontSizeDescription]="14"
                    [fontSizeTime]="12"
                    description="Ordered pending"
                    time="1h">    
                </app-list-item-time>
                <app-list-item-time
                    [fontSizeDescription]="14"
                    [fontSizeTime]="12"    
                    description="Ordered payed"
                    time="4h30">    
                </app-list-item-time>
            </div>
        `
    })
}

export const ListItemTimeCardSimple: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-simple>
                <div style="width: 100%; display: flex; flex-direction: column; gap: 5px;">
                    <app-list-item-time
                        [fontSizeDescription]="14"
                        [fontSizeTime]="12"
                        description="Ordered canceled"
                        time="Just now">    
                    </app-list-item-time>
                    <app-list-item-time
                        [fontSizeDescription]="14"
                        [fontSizeTime]="12"
                        description="Ordered pending"
                        time="1h">    
                    </app-list-item-time>
                    <app-list-item-time
                        [fontSizeDescription]="14"
                        [fontSizeTime]="12"    
                        description="Ordered payed"
                        time="4h30">    
                    </app-list-item-time>
                </div>
            </app-card-simple>
        `
    })
}