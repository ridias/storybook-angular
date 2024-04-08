import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { ToggleGroupButtonsComponent } from "../lib/components/toggles/toggle-group-buttons/toggle-group-buttons.component";

const meta: Meta<ToggleGroupButtonsComponent> = {
    title: 'Example/Toggles/ToggleGroupButtonsComponent',
    component: ToggleGroupButtonsComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ]
        })
    ],
    argTypes: {

    }
}

export default meta;
type Story = StoryObj<ToggleGroupButtonsComponent>;

export const ToggleGroupButtonsDefault: Story = {
    args: {
        
    }
}
