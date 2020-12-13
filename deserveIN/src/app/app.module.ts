import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    GigExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
