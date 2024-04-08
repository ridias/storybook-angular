import { Meta, StoryObj, argsToTemplate, moduleMetadata } from "@storybook/angular";
import { FormsModule } from "@angular/forms";
import { CardIconSideComponent } from "../lib/components/cards/card-icon-side/card-icon-side.component";
import { NgApexchartsModule } from "ng-apexcharts";

const meta: Meta<CardIconSideComponent> = {
    title: 'Example/Cards/CardIconSide',
    component: CardIconSideComponent,
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
            control: "string",
            defaultValue: { summary: "Title card" }
        },
        icon: {
            description: "Bootstrap icon",
            type: "string",
            defaultValue: { summary: "bi bi-funnel-fill" }
        },
        iconSize: {
            description: "Size of the icon",
            type: "string",
            defaultValue: { summary: "md" }
        },
        iconColor: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        },
        headerBorderBottomWidthPx: {
            description: "Border width",
            type: "number",
            defaultValue: { summary: 0 },
        },
        borderColor: {
            description: "Border color",
            type: "string",
            defaultValue: { summary: "#ddd" },
            control: "color"
        },
        fontSizeTitle: {
            description: "Font size title",
            type: "number",
            defaultValue: { summary: 24 },
        },
        fontSizeIcon: {
            description: "Font size icon",
            type: "number",
            defaultValue: { summary: 28 },
        },
        bgColor: {
            description: "Background color of the card",
            type: "string",
            defaultValue: { summary: "white" },
            control: "color"
        },
        marginTopIcon: {
            description: "Margin top icon in px",
            type: "number",
            defaultValue: { summary: 0 },
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "black" },
            control: "color"
        }
    }
}

export default meta;
type Story = StoryObj<CardIconSideComponent>;

export const CardIconSideDefault: Story = {
    args: {

    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
                <div>
                    <div>
                        <h1>Custom Content.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartDonut: Story = {
    args: {
        titleCard: "Donut Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartBar: Story = {
    args: {
        titleCard: "Bar Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartColumn: Story = {
    args: {
        titleCard: "Column Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartLine: Story = {
    args: {
        titleCard: "Line Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartArea: Story = {
    args: {
        titleCard: "Area Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

export const CardIconSideApexchartHeatmap: Story = {
    args: {
        titleCard: "Heatmap Apexchart Card",
        icon: "bi bi-bar-chart-fill"
    },
    render: (args) => ({
        props: args,
        template: `
            <app-card-icon-side ${argsToTemplate(args)}>
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
            </app-card-icon-side>
        `
    })
}

