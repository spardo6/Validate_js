/**
 * OBJECTO DE VALIDACIONES
 * @author Steven Pardo
 */
var Validate = ( function () {
	/** Constructor */
	function Validate () {
		// Expresiones regulares
		this.regExp = {
			// Email
			'email' : /^[\.\-(\w)]+@(\w)+\.(\w){2,4}(\.(\w){2,4})?$/
		} ;
	}


	/** Validar email */
	Validate.prototype.email = function ( email ) {
		// Valida el email
		return this.regExp.email.test( email ) ;
	}


	// Respuesta con el contructor
	return new Validate ;
} ) () ;