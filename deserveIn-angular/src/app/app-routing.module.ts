import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttainmentsComponent } from './attainments/attainments.component';
import { HomeComponent } from './body/home/home.component';
import { FrameWorksComponent } from './frame-works/frame-works.component';
import { GigExperienceComponent } from './gig-experience/gig-experience.component';
import { GigProfileComponent } from './gig-profile/gig-profile.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { JobIntroductionComponent } from './job-introduction/job-introduction.component';
import { LoginComponent } from './login/login.component';
import { MeetStandardComponent } from './meet-standard/meet-standard.component';
import { ProjectMembershipComponent } from './project-membership/project-membership.component';
import { EditableComponent } from './ratification/editable/editable.component';
import { RatificationComponent } from './ratification/ratification.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ValidationComponent } from './validation/validation.component';
import { VerificationComponent } from './verification/verification.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'attainments', component: AttainmentsComponent},
  {path: 'frame-works', component: FrameWorksComponent},
  {path: 'gig-experience', component: GigExperienceComponent},
  {path: 'gig-profile', component: GigProfileComponent},
  {path: 'introduction', component: IntroductionComponent},
  {path: 'job-introduction', component: JobIntroductionComponent},
  {path: 'project-membership', component: ProjectMembershipComponent},
  {path: 'ractification', component: RatificationComponent},
  {path: 'rewards', component: RewardsComponent},
  {path: 'validation', component: ValidationComponent},
  {path: 'verification', component: VerificationComponent},
  {path: 'registeration', component: RegisterationComponent},
  {path: 'meet-deserveIn-standard', component: MeetStandardComponent},
  {path: 'ratification-editable', component: EditableComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
