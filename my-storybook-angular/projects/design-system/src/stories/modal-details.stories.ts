import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { FormsModule } from "@angular/forms";
import { ModalDetailsComponent } from "../lib/components/modals/modal-details/modal-details.component";
import { ButtonComponent } from "../lib/components/buttons/button/button.component";

const meta: Meta<ModalDetailsComponent> = {
    title: 'Example/Modals/ModalDetails',
    component: ModalDetailsComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule
            ],
            declarations: [
                ModalDetailsComponent, ButtonComponent 
            ]
        })
    ],
    argTypes: {
        open: {
            action: "open",
            type: "function"
        }
    }
    
}

// no se, no tira, no vemos la manera, verlo mas tarde...
export default meta;
type Story = StoryObj<ModalDetailsComponent>;

export const ModalDetailsDefault: Story = {
    args: {
       open: action("open")
    },
    render: (args) => ({
        props: args,
        template: `
            <div>
                <div>
                    <app-button (clicked)="${args.open()}"></app-button>
                </div>
                <app-modal-details
                    [modalTitle]="'Custom modal details'"
                    [saveDescription]="'Close'"
                    #modalDetails>
                    <div>Custom content</div>
                </app-modal-details>
            </div>
        `
    })
}