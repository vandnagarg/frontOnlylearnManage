import {ModuleWithProviders  } from "@angular/core";
import {Routes,RouterModule,Router} from '@angular/router';

import {AppComponent } from './app.component';
import {CourseComponent } from './course/course.component';
import { BatchListComponent } from "./batch/batch.component";
import { StudentsComponent } from "./students/students.component";
import { SubjectsComponent } from "./subjects/subjects.component";
import { TeachersComponent } from "./teachers/teachers.component";
import { BatchesComponent } from "./batch/batches.component";
import { LecturesComponent } from "./lectures/lectures.component";
import { StudentDetailsComponent } from "./students/student_details.component";

// import {PageNotFoundComponent } from './page-not-found/page-not-found.component'


export const router:Routes = [
    {path: '',redirectTo:'batch',pathMatch:'full'}  ,                // base path i.e. for localhost 
    {path:'course',component:CourseComponent }  ,
    {path:'batch',component:BatchListComponent},
    {path:'students',component:StudentsComponent},
    {path:'subjects',component:SubjectsComponent},
    {path:'teachers',component:TeachersComponent},
    {path:'batches/:id',component:BatchesComponent},
    {path:'lecture/:id',component:LecturesComponent},
    {path:'student/:id',component:StudentDetailsComponent},
    // {path:'**',component:PageNotFoundComponent }  ,
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router)