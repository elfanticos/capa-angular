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
		return this._http.get(this.url).map(res => res.json());
	}

	insertarPersona(persona:Persona) {
		let json    = JSON.stringify(persona);
		let params  = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(this.url+'insertarPersona',params, {headers: headers})
							.map(res => res.json());
 	}

 	getPersona(id) {
		return this._http.get(this.url+'find/'+id).map(res => res.json());
	}

	editPersona(id,persona:Persona) {
		let json    = JSON.stringify(persona);
		let params  = 'json='+json;
		let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
		return this._http.post(this.url+'actualizarPersona/'+id,params,{headers:headers}).
					map(res => res.json());
	}

	deletePersona(id) {
		return this._http.get(this.url+'eliminarProducto/'+id).map(res => res.json());
	}
}