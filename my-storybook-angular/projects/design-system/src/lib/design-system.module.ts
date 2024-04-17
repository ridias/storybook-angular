import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { AccordionsModule } from "./components/accordions/accordions.module";
import { BadgesModule } from "./components/badges/badges.module";
import { CardsModule } from "./components/cards/cards.module";
import { CheckboxesModule } from "./components/checkboxes/checkboxes.module";
import { InputsModule } from "./components/inputs/inputs.module";
import { ListBoxesModule } from "./components/list-boxes/list-boxes.module";
import { NavBreadcurmbsModule } from "./components/nav-breadcrumbs/nav-breadcrumbs.module";
import { PaginationsModule } from "./components/paginations/paginations.module";
import { PillsModule } from "./components/pills/pills.module";
import { ProgressBarsModule } from "./components/progress-bars/progress-bars.module";
import { SemicirclesModule } from "./components/semicircles/semicircles.module";
import { SlidersModule } from "./components/sliders/sliders.module";
import { TabsModule } from "./components/tabs/tabs.module";
import { TextsModule } from "./components/texts/text.module";
import { TimepickersModule } from "./components/timerpickers/timerpickers.module";
import { TogglesModule } from "./components/toggles/toggles.module";
import { ButtonsModule } from "./components/buttons/buttons.module";
import { TablesModule } from "./components/tables/tables.module";
import { CarouselsModule } from "./components/carousels/carousels.module";
import { MenusModule } from "./components/menus/menus.module";
import { ListItemsModule } from "./components/list-items/list-items.module";

@NgModule({  
    declarations: [
        
    ],  
    imports: [
        CommonModule,
        FormsModule,
        AccordionsModule,
        BadgesModule,
        ButtonsModule,
        CardsModule,
        CarouselsModule,
        CheckboxesModule,
        InputsModule,
        ListBoxesModule,
        ListItemsModule,
        MenusModule,
        NavBreadcurmbsModule,
        PaginationsModule,
        PillsModule,
        ProgressBarsModule,
        SemicirclesModule,
        SlidersModule,
        TablesModule,
        TabsModule,
        TextsModule,
        TimepickersModule,
        TogglesModule,
    ],  
    exports: [
        
    ],
})

export class DesignSystemModule {}