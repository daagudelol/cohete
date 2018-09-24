import { Routes, RouterModule } from '@angular/router';

import { FuselajeComponent } from './fuselaje.component';
import { InicioComponent } from './inicio/inicio.component';







const pagesRoutes: Routes = [
    {
        path: '',
        component: FuselajeComponent,
        children: [
            {path: 'inicio', component: InicioComponent},
            { path: '', redirectTo: '/inicio', pathMatch: 'full'},
        ]
    }

];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
