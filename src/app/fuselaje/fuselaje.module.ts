import { NgModule } from '@angular/core';


import { PAGES_ROUTES } from './fuselaje.routs';

import { MotorComponent } from './motor/motor.component';
import { CabinaComponent } from './cabina/cabina.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { ControlComponent } from './control/control.component';




@NgModule({
    declarations: [
        MotorComponent,
        CabinaComponent,
        InicioComponent,
        PlanetasComponent,
        ControlComponent
    ],
    exports: [
        MotorComponent,
        CabinaComponent,
        InicioComponent
    ],
    imports: [
        PAGES_ROUTES
    ]
})

export class FuselajeModule {}
