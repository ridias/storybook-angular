import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { SortableHeaderDirective } from "../lib/directives/sortable.directive";
import { CommonModule } from "@angular/common";
import { CardsModule } from "../public-api";
import { ListItemCalendarComponent } from "../lib/components/list-items/list-item-calendar/list-item-calendar.component";

const meta: Meta<ListItemCalendarComponent > = {
    title: 'Example/ListItems/ListItemCalendar',
    component: ListItemCalendarComponent   ,
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
        
    }
}

export default meta;
type Story = StoryObj<ListItemCalendarComponent>;

export const ListItemTimeDefault: Story = {
    args: {
        description: "Ordered canceled",
    },
    render: (args) => ({
        props: args,
        template: `
            <app-list-item-calendar ${argsToTemplate(args)}>    
            </app-list-item-calendar>
        `
    })
}
