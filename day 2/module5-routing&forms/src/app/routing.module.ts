import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteMoviesComponent } from "./components/favorite-movies/favorite-movies.component";
import { MovieAddComponent } from "./components/movie-add/movie-add.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

const routes: Routes = [
    { path: '', component: MovieListComponent, pathMatch: 'full' },
    { path: 'add-review', component: MovieAddComponent },
    { path: 'favorite-movies', component: FavoriteMoviesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class RoutingModule {

}