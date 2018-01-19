import {Component}      from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Persona}        from '../models/persona';
import {PersonaService} from '../services/persona.service';

@Component({
	selector    : 'persona-edit',
	templateUrl : '../views/persona-add.html',
	providers   : [PersonaService]
})

export class PersonaEditComponent{
	public titulo:string;
	public persona:Persona;

	constructor(private _personaService: PersonaService, private _route: ActivatedRoute, private _router: Router) {
		this.titulo = 'Editar registro de persona';
		this.persona = new Persona(0,'','','',0,'');
	}

	ngOnInit() {
		this.getPersona();
	}

	getPersona() {
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this._personaService.getPersona(id).subscribe(
				response => {
					if(response.code == 200) {
						// this.persona = response.response;
					}else {
						this._router.navigate(['/personas-list']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}

	insertarPersona() {
		this._route.params.forEach((params: Params) => {
			let id = params['id'];
			this._personaService.editPersona(id,this.persona).subscribe(
				result => {
					if(result.code == 200) {
						this._router.navigate(['/personas-list']);
					}else {
						console.log(result);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}