import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GoudserService {

   // Observable string sources
   // NOTE observable
  private breadcrumbs = new Subject<string>();
  breadcrumbs$ = this.breadcrumbs.asObservable();

  // Service message commands
  announceMission(mission: string) {
    console.log('From service' + this.breadcrumbs)
  }

  //
  constructor() { }

}
