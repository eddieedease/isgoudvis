import {
  Component
} from '@angular/core';

import { GoudserService } from  './goudser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GoudserService]
})
export class AppComponent {
  
  title = 'app works!';

  // Show breadcrumbs
  showbreadcrumbs = false;


  history: string[] = [];


 constructor(private missionService: GoudserService) {
    missionService.breadcrumbs$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
      });
  }

}
