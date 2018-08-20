import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

const appRoutes: Routes = [
	{ path: '', loadChildren: './pages/pages.module#PagesModule' },
	{ path: '**', redirectTo: '' },
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRountingModule {

}
