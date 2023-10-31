import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { DetailsComponent } from "../details/details.component";
import { DetailsMoviesComponent } from "../details-movies/details-movies.component";
import { SearchComponent } from "../search/search.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { NotfoundComponent } from "../notfound/notfound.component";
import { FeedbackComponent } from "../feedback/feedback.component";

const routes:Routes=[
    {path:'home',component:HomeComponent},
    {path:'details',component:DetailsComponent},
    {path:'details/details-movies',component:DetailsMoviesComponent},
    {path:'search',component:SearchComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'**',component:NotfoundComponent}
    
]

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports :[RouterModule]
})

export class AppRoutesModule{

}