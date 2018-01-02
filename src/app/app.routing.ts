import {NgModule}             from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent}         from './components/home.component';
import {PersonasListComponent} from './components/personas-list.component';
import {PersonaAddComponent}   from './components/persona-add.component';
import {PersonaEditComponent}  from './components/persona-edit.component';


const ROUTES: Routes = [
	{path : '' ,              component : HomeComponent},
	{path : 'home',           component : HomeComponent},
	{path : 'personas-list',  component : PersonasListComponent},
	{path : 'persona-add',    component : PersonaAddComponent},
	{path: 'persona-edit/:id', component: PersonaEditComponent},
	{path : '**' ,            component : HomeComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(ROUTES)],
	exports: [RouterModule]
})

export class AppRoutingModule{}