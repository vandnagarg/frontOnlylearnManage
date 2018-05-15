import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { BatchService } from './batch.service';
import { routes } from './app.router';
import { BatchListComponent } from './batch/batch.component';
import { StudentsComponent } from './students/students.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BatchesComponent } from './batch/batches.component';
import { StudentDetailsComponent } from './students/student_details.component';
import { LecturesComponent } from './lectures/lectures.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    BatchListComponent,
    BatchListComponent,
    StudentsComponent,
    SubjectsComponent,
    TeachersComponent,
    BatchesComponent,
    StudentDetailsComponent,
    LecturesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
    FormsModule
    
  ],
  providers: [
    BatchService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
