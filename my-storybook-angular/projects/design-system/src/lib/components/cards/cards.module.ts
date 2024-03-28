import { NgModule } from "@angular/core";
import { CardBtnsComponent } from "./card-btns/card-btns.component";
import { CardFull2fComponent } from "./card-full-2f/card-full-2f.component";
import { CardFull3fComponent } from "./card-full-3f/card-full-3f.component";
import { CardIconSideComponent } from "./card-icon-side/card-icon-side.component";
import { CardSelectComponent } from "./card-select/card-select.component";
import { CardSimpleComponent } from "./card-simple/card-simple.component";
import { CardSimpleTitleCenterComponent } from "./card-simple-title-center/card-simple-title-center.component";
import { CardSimpleTitleSubtitleCenterComponent } from "./card-simple-title-subtitle-center/card-simple-title-subtitle-center.component";
import { CardSimpleTitleSubtitleCenterSelectComponent } from "./card-simple-title-subtitle-center-select/card-simple-title-subtitle-center-select.component";
import { CardTopRankingComponent } from "./card-top-ranking/card-top-ranking.component";
import { CardTotalBarComponent } from "./card-total-bar/card-total-bar.component";
import { CommonModule } from "@angular/common";

@NgModule({  
    declarations: [
        CardBtnsComponent,
        CardFull2fComponent,
        CardFull3fComponent,
        CardIconSideComponent,
        CardSelectComponent,
        CardSimpleComponent,
        CardSimpleTitleCenterComponent,
        CardSimpleTitleSubtitleCenterComponent,
        CardSimpleTitleSubtitleCenterSelectComponent,
        CardTopRankingComponent,
        CardTotalBarComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CardBtnsComponent,
        CardFull2fComponent,
        CardFull3fComponent,
        CardIconSideComponent,
        CardSelectComponent,
        CardSimpleComponent,
        CardSimpleTitleCenterComponent,
        CardSimpleTitleSubtitleCenterComponent,
        CardSimpleTitleSubtitleCenterSelectComponent,
        CardTopRankingComponent,
        CardTotalBarComponent
    ]
})

export class CardsModule {}