import $ from 'jquery';

class MenuDesplegable {
	constructor () {
		this.cabecera = $('.cabecera');
		this.subtitulo = $('.cabecera__subtitulo')
		this.cabeceraMenu = $('.cabecera__menu');
		this.menuContenido = $('.cabecera__contenido-menu');
		this.eventos();
	}
	eventos(){
		this.cabeceraMenu.click(this.toggleMenu.bind(this));
	}
	toggleMenu(){
		this.menuContenido.toggleClass('cabecera__contenido-menu--visible');
		this.cabeceraMenu.toggleClass('cabecera__menu--icono-x');

	}
}

export default MenuDesplegable;