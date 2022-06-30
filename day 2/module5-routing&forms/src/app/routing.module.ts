import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MovieAddComponent } from "./components/movie-add/movie-add.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

const routes: Routes = [
    { path: '', component: MovieListComponent, pathMatch: 'full' },
    { path: 'add', component: MovieAddComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class RoutingModule {

}