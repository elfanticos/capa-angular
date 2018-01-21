import {Component}      from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Persona}        from '../models/persona';
import {PersonaService} from '../services/persona.service';

@Component({
	selector    : 'persona-add',
	templateUrl : '../views/persona-add.html',
	providers   : [PersonaService]
})

export class PersonaAddComponent{
	public titulo:string;
	public persona:Persona;

	constructor(private _personaService: PersonaService, private _route: ActivatedRoute, private _router: Router) {
		this.titulo = 'Registrar nuevas personas';
		this.persona = new Persona(0,'','','',0,'');
	}

	insertarPersona() {
		this._personaService.insertarPersona(this.persona).subscribe(
			result => {
				if(result.data.code == 200) {
					console.log(result.response);
					this._router.navigate(['/personas-list']);
				}else {
					console.log(result);
				}
			},error => {
				console.log(<any>error);
			}
		);
	}
}