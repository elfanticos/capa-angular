import {Component}                      from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PersonaService}                 from '../services/persona.service';
import {Persona}                        from '../models/persona';
import {GLOBAL}							from '../services/global';

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
					this.personas = result.response;
				}
			},error => {
				console.log(<any>error);
			}
		);
	}


	onDeletePersona(id) {
		// this.user=id;
		// this._personaService.deletePersona(this.user).subscribe(
		// 	response => {
		// 		if(response.code == 200) {
		// 		}else {
		// 			console.log('error al borrar el registro');
		// 		}
		// 	},error => {
		// 		console.log(<any>error);
		// 	}
		// );
	}
}