import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  nodes;

  constructor() { 
    
  }

  ngOnInit() {
    this.nodes = [
    {
      id: 1,
      name: 'Inleiding',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'Hoofdstuk 1',
      children: [
        { id: 5, name: 'Pagina 1.1' },
        {
          id: 6,
          name: 'Pagina 1.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  }

}
