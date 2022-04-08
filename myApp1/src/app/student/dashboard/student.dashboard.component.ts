import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'student-dashboard',
    templateUrl: 'student.dashboard.component.html',
    styleUrls:['./student.dashboard.component.css']
})

export class StudentDashboardComponent implements OnInit {
    activePath=''
    constructor(private router : Router) {
        
     }

     switchToComponent(path){
         this.activePath=path
         this.router.navigate([path])

     }

    ngOnInit() { }
}