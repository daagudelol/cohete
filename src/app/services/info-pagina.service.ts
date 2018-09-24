import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class InfoPaginaService {
    images: any[] = [];

    constructor( private http: HttpClient) {
      this.cargarPlanetas();
    }
    private cargarPlanetas() {
        this.http.get('http://demo0761779.mockable.io/angularspaceship/planets')
        .subscribe( (resp: any[]) => {
          this.images = resp;
          console.log(resp);
        });
      }

}
