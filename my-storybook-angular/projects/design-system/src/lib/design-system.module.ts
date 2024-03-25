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
import { CardBtnsComponent } from "./components/cards/card-btns/card-btns.component";
import { CardFull2fComponent } from "./components/cards/card-full-2f/card-full-2f.component";
import { CardIconSideComponent } from "./components/cards/card-icon-side/card-icon-side.component";
import { CardSelectComponent } from "./components/cards/card-select/card-select.component";
import { ButtonComponent } from "./components/buttons/button/button.component";
import { ButtonIconComponent } from "./components/buttons/button-icon/button-icon.component";
import { ButtonIconRoundedComponent } from "./components/buttons/button-icon-rounded/button-icon-rounded.component";
import { PillsRectComponent } from "./components/pills/pills-rect/pills-rect.component";
import { PillsRectVerticalComponent } from "./components/pills/pills-rect-vertical/pills-rect-vertical.component";
import { PillsRoundedComponent } from "./components/pills/pills-rounded/pills-rounded.component";
import { PillsRoundedVerticalComponent } from "./components/pills/pills-rounded-vertical/pills-rounded-vertical.component";
import { PillsSimpleComponent } from "./components/pills/pills-simple/pills-simple.component";
import { PillsSimpleVerticalComponent } from "./components/pills/pills-simple-vertical/pills-simple-vertical.component";
import { SelectSearchComponent } from "./components/inputs/select-search/select-search.component";
import { SemicircleKpi2cComponent } from "./components/semicircles/semicircle-kpi-2c/semicircle-kpi-2c.component";
import { ToggleButtonComponent } from "./components/toggles/toggle-button/toggle-button.component";
import { ModalDetailsComponent } from "./components/modals/modal-details/modal-details.component";
import { InputSimpleComponent } from "./components/inputs/input-simple/input-simple.component";
import { TabsSimpleComponent } from "./components/tabs/tabs-simple/tabs-simple.component";
import { TabsSimpleRoundedComponent } from "./components/tabs/tabs-simple-rounded/tabs-simple-rounded.component";
import { TabsIconsComponent } from "./components/tabs/tabs-icons/tabs-icons.component";
import { TabsIconsRoundedComponent } from "./components/tabs/tabs-icons-rounded/tabs-icons-rounded.component";
import { TabsIconsVerticalComponent } from "./components/tabs/tabs-icons-vertical/tabs-icons-vertical.component";
import { TabsIconsRoundedVerticalComponent } from "./components/tabs/tabs-icons-rounded-vertical/tabs-icons-rounded-vertical.component";
import { TabsSimpleVerticalComponent } from "./components/tabs/tabs-simple-vertical/tabs-simple-vertical.component";
import { TabsSimpleRoundedVerticalComponent } from "./components/tabs/tabs-simple-rounded-vertical/tabs-simple-rounded-vertical.component";
import { TimepickerComponent } from "./components/timerpickers/timerpicker/timepicker.component";

@NgModule({  
    declarations: [
        AccordionComponent,
        BadgeComponent,
        ButtonComponent,
        ButtonIconComponent,
        ButtonIconRoundedComponent,
        CardBtnsComponent,
        CardFull2fComponent,
        CardIconSideComponent,
        CardSelectComponent,
        CheckboxSelectorComponent,
        CheckboxSelectorSMComponent,
        InputComplexComponent,
        InputMultipleItemsComponent,
        InputSearchComponent,
        InputSimpleComponent,
        ModalDetailsComponent,
        NavBreadcrumbComponent,
        PaginationComponent,
        PaginationSimpleComponent,
        PillsRectComponent,
        PillsRectVerticalComponent,
        PillsRoundedComponent,
        PillsRoundedVerticalComponent,
        PillsSimpleComponent,
        PillsSimpleVerticalComponent,
        ProgressBarComparisonComponent,
        ProgressBarComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent,
        SelectSearchComponent,
        SemicircleKpi2cComponent,
        SliderComponent,
        TabsIconsComponent,
        TabsIconsRoundedComponent,
        TabsIconsRoundedVerticalComponent,
        TabsIconsVerticalComponent,
        TabsSimpleComponent,
        TabsSimpleRoundedComponent,
        TabsSimpleRoundedVerticalComponent,
        TabsSimpleVerticalComponent,
        TextComponent,
        TimepickerComponent,
        ToggleComponent,
        ToggleButtonComponent
    ],  
    imports: [
        CommonModule,
        FormsModule
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
        InputSimpleComponent,
        ModalDetailsComponent,
        NavBreadcrumbComponent,
        PaginationComponent,
        PaginationSimpleComponent,
        PillsRectComponent,
        PillsRectVerticalComponent,
        PillsRoundedComponent,
        PillsRoundedVerticalComponent,
        PillsSimpleComponent,
        PillsSimpleVerticalComponent,
        ProgressBarComparisonComponent,
        ProgressBarComponent,
        ProgressBarMinilineComponent,
        ProgressBarMinilineWindowComponent,
        SelectSearchComponent,
        SemicircleKpi2cComponent,
        SliderComponent,
        TabsIconsComponent,
        TabsIconsRoundedComponent,
        TabsIconsRoundedVerticalComponent,
        TabsIconsVerticalComponent,
        TabsSimpleComponent,
        TabsSimpleRoundedComponent,
        TabsSimpleRoundedVerticalComponent,
        TabsSimpleVerticalComponent,
        TextComponent,
        TimepickerComponent,
        ToggleComponent,
        ToggleButtonComponent
    ],
})

export class DesignSystemModule {}