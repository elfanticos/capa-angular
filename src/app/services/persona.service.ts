import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Persona}    from '../models/persona';
import {GLOBAL}     from './global';

@Injectable()
export class PersonaService{
	public url:string;

	constructor(private _http:Http) {
		this.url =GLOBAL.url;
	}

	getPersonas() {
		let headers = new Headers({'Content-Type' : 'application/json'});
		return this._http.post(this.url+'getListadoPersonas',null,{headers:headers}).map(res => res.json());
	}

	insertarPersona(persona:Persona) {
		let params    = JSON.stringify(persona);
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'insertPersona',params, {headers: headers})
							.map(res => res.json());
 	}

 	getPersona(id) {
		let params = JSON.stringify({"id":id});
		 let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'getPersona',params , {headers: headers})
		             .map(res => res.json());
	}

	editPersona(persona:Persona) {
		let params    = JSON.stringify(persona);
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'editPersona',params,{headers:headers}).
					map(res => res.json());
	}

	deletePersona(id) {
		let params = JSON.stringify({"id":id});
		let headers = new Headers({'Content-Type':'application/json'});
		return this._http.post(this.url+'deletePersona',params,{headers:headers}).
					map(res => res.json());
	}
}