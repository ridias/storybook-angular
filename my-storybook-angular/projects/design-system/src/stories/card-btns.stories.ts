import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { action } from '@storybook/addon-actions';
import { CardBtnsComponent } from "../lib/components/cards/card-btns/card-btns.component";
import { FormsModule } from "@angular/forms";
import { PillOption } from "../lib/models/PillOption";
import { NgApexchartsModule } from "ng-apexcharts";

let itemsDays: PillOption[] = [
    { "id": 1, "value": "1D", "active": true, "icon": "", "disable": false },
    { "id": 2, "value": "1S", "active": false, "icon": "", "disable": false },
    { "id": 3, "value": "1M", "active": false, "icon": "", "disable": false }
]

let items: PillOption[] = [
    { "id": 1, "value": "Option 1", "active": true, "icon": "", "disable": false },
    { "id": 2, "value": "Option 2", "active": false, "icon": "", "disable": false },
    { "id": 3, "value": "Option 3", "active": false, "icon": "", "disable": false }
]

const meta: Meta<CardBtnsComponent> = {
    title: 'Example/Cards/CardBtns',
    component: CardBtnsComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        moduleMetadata({
            imports: [
                FormsModule,
                NgApexchartsModule
            ]
        })
    ],
    argTypes: {
        itemsBtns: {
            description: "List of buttons to display",
            control: "array"
        },
        titleCard: {
            description: "Title of the card",
            type: "string",
            defaultValue: { summary: "Title card" }
        },
        idBtnSelected: {
            description: "Id of the button preselected",
            type: "number",
            defaultValue: { summary: 1 }
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        colorActive: {
            description: "Font color when active",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        bgColorBtn: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "#fff" },
            control: "color"
        },
        bgColorBtnActive: {
            description: "Background color button when active",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        btnClicked: {
            action: 'btnClicked'
        }

    }
}

export default meta;
type Story = StoryObj<CardBtnsComponent>;

export const CardBtnsDefault: Story = {
    args: {
        itemsBtns: items,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartDonut: Story = {
    args: {
        titleCard: "Donut Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div>
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[44, 55, 13, 33]"
                            [labels]="['Apple', 'Mango', 'Orange', 'Watermelon']"
                            [chart]="{'type': 'donut', 'foreColor': '#444', 'width': '100%', 'toolbar': { 'show': false }}"
                            [stroke]="{'curve': 'smooth'}"
                            [dataLabels]="{'enabled': false }"
                            [tooltip]="{'x': { 'format': 'dd/MM/yy HH:mm' }}"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']" >
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartBar: Story = {
    args: {
        titleCard: "Bar Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div style="width: 100%;">
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[
                                { 'name': 'Apple', 'data': [25, 40, 10, 5] }, 
                                { 'name': 'Mango', 'data': [30, 20, 10, 3] }, 
                                { 'name': 'Orange', 'data': [50, 60, 30, 1] }, 
                                { 'name': 'Watermelon', 'data': [35, 35, 20, 10] }
                            ]"
                            [labels]="['Week 1', 'Week 2', 'Week 3', 'Week 4']"
                            [chart]="{'type': 'bar', 'foreColor': '#444', 'width': '100%', 'height': 350, 'toolbar': { 'show': false }}"
                            [stroke]="{'curve': 'smooth'}"
                            [xaxis]="{ 'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }"
                            [dataLabels]="{'enabled': false }"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']" 
                            [plotOptions]="{ 'bar': { 'horizontal': true } }">
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartColumn: Story = {
    args: {
        titleCard: "Column Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div style="width: 100%;">
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[
                                { 'name': 'Apple', 'data': [25, 40, 10, 5] }, 
                                { 'name': 'Mango', 'data': [30, 20, 10, 3] }, 
                                { 'name': 'Orange', 'data': [50, 60, 30, 1] }, 
                                { 'name': 'Watermelon', 'data': [35, 35, 20, 10] }
                            ]"
                            [chart]="{'type': 'bar', 'foreColor': '#444', 'width': '100%', 'height': 350, 'toolbar': { 'show': false }}"
                            [stroke]="{'curve': 'smooth'}"
                            [xaxis]="{ 'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }"
                            [dataLabels]="{'enabled': false }"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']">
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartLine: Story = {
    args: {
        titleCard: "Line Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div style="width: 100%;">
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[
                                { 'name': 'Apple', 'data': [25, 40, 10, 5] }, 
                                { 'name': 'Mango', 'data': [30, 20, 10, 3] }, 
                                { 'name': 'Orange', 'data': [50, 60, 30, 1] }, 
                                { 'name': 'Watermelon', 'data': [35, 35, 20, 10] }
                            ]"
                            [chart]="{'type': 'line', 'foreColor': '#444', 'width': '100%', 'height': 350, 'toolbar': { 'show': false }}"
                            [stroke]="{'curve': 'straight'}"
                            [xaxis]="{ 'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }"
                            [dataLabels]="{'enabled': false }"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']" >
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartArea: Story = {
    args: {
        titleCard: "Area Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div style="width: 100%;">
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[
                                { 'name': 'Apple', 'data': [25, 40, 10, 5] }, 
                                { 'name': 'Mango', 'data': [30, 20, 10, 3] }, 
                                { 'name': 'Orange', 'data': [50, 60, 30, 1] }, 
                                { 'name': 'Watermelon', 'data': [35, 35, 20, 10] }
                            ]"
                            [chart]="{'type': 'area', 'foreColor': '#444', 'width': '100%', 'height': 350, 'toolbar': { 'show': false }}"
                            [stroke]="{'curve': 'straight'}"
                            [xaxis]="{ 'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }"
                            [dataLabels]="{'enabled': false }"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']" >
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

export const CardIconSideApexchartHeatmap: Story = {
    args: {
        titleCard: "Heatmap Apexchart Card",
        itemsBtns: itemsDays,
        btnClicked: action("btnClicked")
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-btns ${argsToTemplate(args)}>
                <div style="display: flex; width: 100%;">
                    <div style="width: 100%;">
                        <apx-chart 
                            #chartIntensity id="chartIntensity"
                            [series]="[
                                { 'name': 'Apple', 'data': [25, 40, 10, 5] }, 
                                { 'name': 'Mango', 'data': [30, 20, 10, 3] }, 
                                { 'name': 'Orange', 'data': [50, 60, 30, 1] }, 
                                { 'name': 'Watermelon', 'data': [35, 35, 20, 10] }
                            ]"
                            [chart]="{'type': 'heatmap', 'foreColor': '#444', 'width': '100%', 'height': 350, 'toolbar': { 'show': false }}"
                            [xaxis]="{ 'categories': ['Week 1', 'Week 2', 'Week 3', 'Week 4'] }"
                            [dataLabels]="{'enabled': false }"
                            [colors]="['#2E93fA','#00E396','#FEB019','#FF4560']" >
                        </apx-chart>
                    </div>
                </div>
            </app-card-btns>
        `
    })
}

