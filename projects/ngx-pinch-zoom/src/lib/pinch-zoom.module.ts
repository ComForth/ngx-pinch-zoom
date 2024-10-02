import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinchZoomComponent } from './pinch-zoom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PinchZoomComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        PinchZoomComponent
    ],
    providers: [

    ],
    bootstrap: [
        
    ],
    entryComponents: [
        PinchZoomComponent
    ]
})
export class PinchZoomModule { }
