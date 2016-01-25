// IE10+
document.getElementsByTagName( "html" )[0].classList.remove( "loader" );

// All browsers
document.getElementsByTagName( "html" )[0].className.replace( /loader/, "" );
