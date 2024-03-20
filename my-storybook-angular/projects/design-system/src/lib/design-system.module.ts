import { NgModule } from "@angular/core";
import { BadgeComponent } from "./components/badges/badge/badge.component";
import { AccordionComponent } from "./components/accordions/accordion/accordion.component";
import { ToggleComponent } from "./components/toggles/toggle/toggle.component";
import { ProgressBarComponent } from "./components/progress-bars/progress-bar/progress-bar.component";
import { ProgressBarComparisonComponent } from "./components/progress-bars/progress-bar-comparison/progress-bar-comparison.component";
import { ProgressBarMinilineComponent } from "./components/progress-bars/progress-bar-miniline/progress-bar-miniline.component";
import { ProgressBarMinilineWindowComponent } from "./components/progress-bars/progress-bar-miniline-window/progress-bar-miniline-window.component";
import { SliderComponent } from "./components/sliders/slider/slider.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TextComponent } from "./components/texts/text/text.component";
import { PaginationComponent } from "./components/paginations/pagination/pagination.component";
import { PaginationSimpleComponent } from "./components/paginations/pagination-simple/pagination-simple.component";
import { CheckboxSelectorComponent } from "./components/checkboxes/checkbox-selector/checkbox-selector.component";
import { CheckboxSelectorSMComponent } from "./components/checkboxes/checkbox-selector-sm/checkbox-selector-sm.component";
import { InputComplexComponent } from "./components/inputs/input-complex/input-complex.component";
import { InputSearchComponent } from "./components/inputs/input-search/input-search.component";
import { InputMultipleItemsComponent } from "./components/inputs/input-multiple-items/input-multiple-items.component";
import { NavBreadcrumbComponent } from "./components/nav-breadcrumbs/nav-breadcrumb/nav-breadcrumb.component";
import { RouterModule } from "@angular/router";
import { CardBtnsComponent } from "./components/cards/card-btns/card-btns.component";
import { CardFull2fComponent } from "./components/cards/card-full-2f/card-full-2f.component";
import { CardIconSideComponent } from "./components/cards/card-icon-side/card-icon-side.component";
import { CardSelectComponent } from "./components/cards/card-select/card-select.component";

@NgModule({  
    declarations: [
        AccordionComponent,
        BadgeComponent,
        CardBtnsComponent,
        CardFull2fComponent,
        CardIconSideComponent,
        CardSelectComponent,
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent,
        InputComplexComponent,
        InputMultipleItemsComponent,
        InputSearchComponent,
        NavBreadcrumbComponent,
        PaginationComponent,
        PaginationSimpleComponent,
        ProgressBarComparisonComponent,
        ProgressBarComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent,
        SliderComponent,
        TextComponent,
        ToggleComponent
    ],  
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],  
    exports: [
        AccordionComponent,
        BadgeComponent,
        CardBtnsComponent,
        CardFull2fComponent,
        CardIconSideComponent,
        CardSelectComponent,
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent,
        InputComplexComponent,
        InputMultipleItemsComponent,
        InputSearchComponent,
        NavBreadcrumbComponent,
        PaginationComponent,
        PaginationSimpleComponent,
        ProgressBarComparisonComponent,
        ProgressBarComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent,
        SliderComponent,
        TextComponent,
        ToggleComponent
    ],
})

export class DesignSystemModule {}