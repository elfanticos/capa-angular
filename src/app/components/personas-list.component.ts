import {Component}                      from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PersonaService}                 from '../services/persona.service';
import {Persona}                        from '../models/persona';
import {GLOBAL}							from '../services/global';
import { Response } from '@angular/http/src/static_response';

@Component({
	selector    : 'personas-list',
	templateUrl : '../views/personas-list.html',
	providers   : [PersonaService]
})

export class PersonasListComponent{
	public titulo:string;
	public personas:Persona[];
	public user= null;

	constructor(private _route:ActivatedRoute, private _router:Router, private _personaService:PersonaService) {
		this.titulo = 'Lista de personas registradas';
	}

	ngOnInit() {
		this.getPersonas();
	}

	getPersonas() {
		this._personaService.getPersonas().subscribe(
			result => {
				if(result.code != 200) {
					console.log(result);
				}else {
					this.personas = result.data;
				}
			},error => {
				console.log(<any>error);
			}
		);
	}


	onDeletePersona(id) {
		// var id = id;
		// this._personaService.deletePersona(id).subscribe(
		// 	result => {
		// 		if(result.code != 200) {
		// 			console.log(result);
		// 		}else {
		// 			this.personas = result.data;
		// 		}
		// 	},error => {
		// 		console.log(<any>error);
		// 	}
		// );
	}
}