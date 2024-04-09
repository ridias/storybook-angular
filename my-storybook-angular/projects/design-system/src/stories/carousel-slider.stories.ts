import { Meta, StoryObj, argsToTemplate, componentWrapperDecorator, moduleMetadata } from "@storybook/angular";
import { CarouselSliderComponent } from "../lib/components/carousels/carousel-slider/carousel-slider.component";
import { Slide } from "../lib/models/Slide";
import { CardFull2fComponent } from "../lib/components/cards/card-full-2f/card-full-2f.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CardFull3fComponent, CardSimpleComponent } from "../public-api";
import { NgApexchartsModule } from "ng-apexcharts";

let slides: Slide[] = [
    { "id": "1", "active": true },
    { "id": "2", "active": false },
    { "id": "3", "active": false },
    { "id": "4", "active": false }
]

const meta: Meta<CarouselSliderComponent> = {
    title: 'Example/Carousels/CarouselSlider',
    component: CarouselSliderComponent,
    subcomponents: { CardFull2fComponent, CardFull3fComponent, CardSimpleComponent },
    decorators: [
        moduleMetadata({
            declarations: [
                CarouselSliderComponent, 
                CardFull2fComponent, 
                CardFull3fComponent,
                CardSimpleComponent
            ],
            imports: [
                CommonModule, 
                FormsModule, 
                NgApexchartsModule
            ],
        }),
      ],
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    argTypes: {
        sliders: {
            description: "Sliders with id and description",
            control: "array"
        },
        bgColorBtn: {
            description: "Background color button",
            type: "string",
            defaultValue: { summary: "rgba(0, 0, 0, 0.5)" }
        },
        bgColorHoverBtn: {
            description: "Background color hover button",
            type: "string",
            defaultValue: { summary: "rgba(0, 0, 0, 0.7)" }
        },
        color: {
            description: "Font color",
            type: "string",
            defaultValue: { summary: "white" }
        },
        colorIcon: {
            description: "Color icon",
            type: "string",
            defaultValue: { summary: "white" }
        },
        colorHoverIcon: {
            description: "Color hover icon",
            type: "string",
            defaultValue: { summary: "white" }
        },
        prevClicked: {
            action: "prevClicked"
        },
        nextClicked: {
            action: "nextClicked"
        }
    }
};

export default meta;
type Story = StoryObj<CarouselSliderComponent>;

export const CarouselSliderDefault: Story = {
    args: {
        sliders: slides,
        nextClicked(e) {
            let index = 0
            for(let i = 0; i < slides.length; i++){
                slides[i].active = false;
                if(slides[i].id == e.id){
                    index = i;
                    slides[i].active = true;
                }
            }



        },
        prevClicked(e) {
            let index = 0;
            for(let i = 0; i < slides.length; i++){
                slides[i].active = false;
                if(slides[i].id == e.id){
                    index = i;
                    slides[i].active = true;
                }
            }
        }
    },
    render: (args) => ({
        props: args,
        template: `
            <app-carousel-slider [sliders]="sliders"
                (nextClicked)="nextClicked($event)"
                (prevClicked)="prevClicked($event)">
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    background-color: red;
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[0].active ? 'block' : 'none'">
                    1
                </div>
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    background-color: green;
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[1].active ? 'block' : 'none'">
                    2
                </div>
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    background-color: blue;
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[2].active ? 'block' : 'none'">
                    3
                </div>
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    background-color: yellow;
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[3].active ? 'block' : 'none'">
                    4
                </div>
            </app-carousel-slider>
        ` 
    })
}

export const CarouselSliderComplex: Story = {
    args: {
        sliders: slides,
        nextClicked(e) {
            let index = 0
            for(let i = 0; i < slides.length; i++){
                slides[i].active = false;
                if(slides[i].id == e.id){
                    index = i;
                    slides[i].active = true;
                }
            }



        },
        prevClicked(e) {
            let index = 0;
            for(let i = 0; i < slides.length; i++){
                slides[i].active = false;
                if(slides[i].id == e.id){
                    index = i;
                    slides[i].active = true;
                }
            }
        }
    },
    render: (args) => ({
        props: args,
        template: `
            <app-carousel-slider [sliders]="sliders"
                (nextClicked)="nextClicked($event)"
                (prevClicked)="prevClicked($event)">
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[0].active ? 'block' : 'none'">
                    <app-card-full-2f></app-card-full-2f>
                </div>
                <div class="slide"
                    style="text-align: center; 
                    font-size: 3em; 
                    padding: 20px; 
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[1].active ? 'block' : 'none'">
                    <app-card-full-3f></app-card-full-3f>
                </div>
                <div class="slide"
                    style="padding: 20px;
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[2].active ? 'block' : 'none'">
                    <app-card-simple [titleCard]="'Title card'">
                        <div style="display: flex; width: 100%;">
                            <div style="width: 100%;">
                                <apx-chart
                                    #chartIntensity
                                    id="chartIntensity"
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
                    </app-card-simple>
                </div>
                <div class="slide"
                    style="padding: 20px; 
                    transition: transform 0.5s ease;"
                    [style.display]="sliders[3].active ? 'block' : 'none'">
                    <app-card-simple [titleCard]="'Title card'">
                        <div>
                            <div>
                                <h1>Custom Content.</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                        </app-card-simple>
                    </div>
            </app-carousel-slider>
        ` 
    })
}