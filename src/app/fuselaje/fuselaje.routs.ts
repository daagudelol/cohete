import { Routes, RouterModule } from '@angular/router';

import { FuselajeComponent } from './fuselaje.component';
import { InicioComponent } from './inicio/inicio.component';
import { PlanetasComponent } from './planetas/planetas.component';
import { ControlComponent } from './control/control.component';







const pagesRoutes: Routes = [
    {
        path: '',
        component: FuselajeComponent,
        children: [
            {path: 'inicio', component: InicioComponent},
            {path: 'control', component: ControlComponent},
            {path: 'planetas/:images', component: PlanetasComponent},
            { path: '', redirectTo: '/inicio', pathMatch: 'full'},
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
