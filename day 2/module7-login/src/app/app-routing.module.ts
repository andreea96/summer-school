import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth.guard";
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { LoginComponent } from "./login/login.component";

export const routes: Routes = [
    { path: '', component: MovieListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }