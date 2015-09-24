(function ( $ ) {

    var shade = "#556b2f";

    $.fn.colorify = function(newShade) {
        if ( typeof newShade != 'undefined') {
            shade = newShade;
        }
        this.css( "color", shade );
        return this;
    };

}( jQuery ));
