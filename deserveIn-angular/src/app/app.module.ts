import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { JobIntroductionComponent } from './job-introduction/job-introduction.component';
import { FrameWorksComponent } from './frame-works/frame-works.component';
import { ValidationComponent } from './validation/validation.component';
import { VerificationComponent } from './verification/verification.component';
import { AttainmentsComponent } from './attainments/attainments.component';
import { ProjectMembershipComponent } from './project-membership/project-membership.component';
import { RewardsComponent } from './rewards/rewards.component';
import { RatificationComponent } from './ratification/ratification.component';
import { GigProfileComponent } from './gig-profile/gig-profile.component';
import { GigExperienceComponent } from './gig-experience/gig-experience.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AuthService } from "./service/auth.service";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
import { HomeComponent } from './body/home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MeetStandardComponent } from './meet-standard/meet-standard.component';
import { EditableComponent } from './ratification/editable/editable.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IntroductionComponent,
    JobIntroductionComponent,
    FrameWorksComponent,
    ValidationComponent,
    VerificationComponent,
    AttainmentsComponent,
    ProjectMembershipComponent,
    RewardsComponent,
    RatificationComponent,
    GigProfileComponent,
    GigExperienceComponent,
    HomeComponent,
    RegisterationComponent,
    MeetStandardComponent,
    EditableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireFunctionsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
