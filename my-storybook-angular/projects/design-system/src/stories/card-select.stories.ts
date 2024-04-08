import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardSelectComponent } from "../lib/components/cards/card-select/card-select.component";
import { FilterOption } from "../lib/models/FilterOption";
import { NgApexchartsModule } from "ng-apexcharts";

let items: FilterOption[] = [
    { "id": 1, "value": "Element 1", "active": true, "lastDays": -1 },
    { "id": 2, "value": "Element 2", "active": false, "lastDays": -1 },
    { "id": 3, "value": "Element 3", "active": false, "lastDays": -1 },
    { "id": 4, "value": "Element 4", "active": false, "lastDays": -1 },
    { "id": 5, "value": "Element 5", "active": false, "lastDays": -1 },
    { "id": 6, "value": "Element 6", "active": false, "lastDays": -1 },
    { "id": 7, "value": "Element 7", "active": false, "lastDays": -1 },
    { "id": 8, "value": "Element 8", "active": false, "lastDays": -1 },
    { "id": 9, "value": "Element 9", "active": false, "lastDays": -1 },
    { "id": 10, "value": "Element 10", "active": false, "lastDays": -1 }
]

const meta: Meta<CardSelectComponent> = {
    title: 'Example/Cards/CardSelect',
    component: CardSelectComponent,
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
        titleCard: {
            description: "Title card",
            type: "string",
            defaultValue: { summary: "Title card" }
        },
        optionIdSelected: {
            description: "Option id selected",
            type: "number",
            defaultValue: { summary: 1 }
        },
        options: {
            description: "Options of the select",
            control: "array"
        },
        value: {
            description: "Value selected",
            type: "string",
            defaultValue: { summary: "Element 1" }
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "white"},
            control: "color"
        },
        bgColorHover: {
            description: "Background color hover of the card",
            type: "string",
            defaultValue: { summary: "#eee"},
            control: "color"
        },
        colorBorder: {
            description: "Color border",
            type: "string",
            defaultValue: { summary: "#ddd"},
            control: "color"
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        },
        colorIconHover: {
            description: "Color icon hover",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black"},
            control: "color"
        },
        changedStateSelect: {
            action: "changedStateSelect"
        }
    }
}

export default meta;
type Story = StoryObj<CardSelectComponent>;

export const CardSelectDefault: Story = {
    args: {
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-select>
        `
    })
}

export const CardSelectApexchartDonut: Story = {
    args: {
        titleCard: "Donut Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

export const CardSelectApexchartBar: Story = {
    args: {
        titleCard: "Bar Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

export const CardSelectApexchartColumn: Story = {
    args: {
        titleCard: "Column Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

export const CardSelectApexchartLine: Story = {
    args: {
        titleCard: "Line Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

export const CardSelectApexchartArea: Story = {
    args: {
        titleCard: "Area Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

export const CardSelectApexchartHeatmap: Story = {
    args: {
        titleCard: "Heatmap Apexchart Card",
        options: items,
        optionIdSelected: 1,
        value: "Element 1"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-select ${argsToTemplate(args)}>
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
            </app-card-select>
        `
    })
}

