import Api from '@/api/api';

/*
 * Clase para peticiciones HTTP AJAX
 * Inicia para crear el token de usuario y traer las lista de locales que pertenece.
 */
export default class Init extends Api {
	// Trae el token
	getLoginInit(callback, params, onError){
		let service = '/auth/' + params;
		//this.config.global.TOKENURL;
    this.get(service, callback, params, onError);
	}
	// Trae los locales
	getLocals(callback, params, onError){
		let service = '/users/locals';
		console.log(callback, params, onError)
    this.get(service, callback, params, onError);
  }
}
