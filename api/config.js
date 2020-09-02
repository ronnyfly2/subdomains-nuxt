/**
* Initialize Singleton
*/
import Vue from 'vue'
let instance = null;
export default class Config{
	constructor() {
		if (!instance) {
			let urlTkn = 'window.location';
			let apiUrl = null;
			this.global = {
				API_URL : urlTkn,
				TOKEN: 'diferencia de token',
				EXPIRES_IN: 120000,
				/**
				* Development local
				* @type {Number}
				*/
			}
			instance = this;
    }
    return instance;
  }
}
