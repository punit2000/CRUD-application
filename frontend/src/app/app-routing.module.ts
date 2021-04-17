import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ArticlesComponent } from './articles/articles.component';
import { VideosComponent } from './videos/videos.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProjectsComponent } from './projects/projects.component';
import { DatasheetComponent } from './datasheet/datasheet.component';
import { DesignComponent } from './design/design.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {path:'',redirectTo:'firstpage', pathMatch:'full'},
  {path:'login',component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component: UserhomeComponent} ,
  {path:'firstpage',component: FirstpageComponent} ,
  {path:'articles', component: ArticlesComponent},
  {path:'videos',component: VideosComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'datasheet', component:DatasheetComponent},
  {path:'design',component:DesignComponent},
  {path:'aboutus',component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
