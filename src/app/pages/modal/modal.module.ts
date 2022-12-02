import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ButtonModule } from "../button/button.module";
import { ModalComponent } from "./modal.component";

@NgModule ({
    imports: [
        CommonModule,
        ButtonModule
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ]
})
export class ModalModule { }