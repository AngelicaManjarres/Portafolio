import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class CabeceraSticky {
	constructor(){
		this.cabecera = $('.cabecera');
		this.trigger = $('.cabecera__subtitulo');
		this.crearWaypoints();
		this.seccionPaginas = $('.seccion-pagina');
		this.linksCabecera = $('.cabecera a');
		this.smoothScrolling();
	}

	smoothScrolling(){
		this.linksCabecera.smoothScroll();
	}

	crearWaypoints(){
		var esto = this;
		new Waypoint ({
			element: this.trigger[0],
			handler: function(direccion){
				if(direccion == 'down'){
					esto.cabecera.addClass('cabecera--sticky');
					esto.trigger.addClass('cabecera__subtitulo--no-visible');
				}
				else {
					esto.cabecera.removeClass('cabecera--sticky');
					esto.trigger.removeClass('cabecera__subtitulo--no-visible');
				}
			}
		});
	}
}

export default CabeceraSticky;