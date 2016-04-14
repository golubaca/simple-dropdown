$( '[data-action="dropdown"]' ).click( function ( e ) {
    e.preventDefault();
    e.stopPropagation();



    var isShown,
        dataTarget,
        dataStyle,
        topVal;

    dataTarget = $( this ).attr( "data-target" );
    isShown = $( dataTarget ).hasClass( "dropdown-open" );
    dataStyle = $( this ).data( 'style' );


    var posleft = $( this )[0].getBoundingClientRect().left;
    var posbottom = $ (this )[0].getBoundingClientRect().bottom;
    var clientWidth = $( this )[0].clientWidth;

    if ( isShown ) {
        $( document ).find( '.dropdown-open' ).removeClass( "dropdown-open" );
        $( document ).find( '.bg-white' ).removeClass( "bg-white" );
    } else {
        $( document ).find( '.dropdown-open' ).removeClass( "dropdown-open" );
        $( document ).find( '.bg-white' ).removeClass( 'bg-white' );
        $( this ).addClass( "bg-white" );
        $( dataTarget ).addClass( "dropdown-open" );
        if ( dataStyle != null ){
          topVal = posbottom + 8;
        } else {
          topVal = posbottom;
        }
        $( dataTarget ).css({
            "left": ( posleft ) + "px",
            "top": ( topVal ) + "px"
        });
    }

});

$( document ).click( function () {
    $( this ).find( '.dropdown-open' ).removeClass( 'dropdown-open' );
    $( this ).find( '.bg-white' ).removeClass( 'bg-white' );
});
