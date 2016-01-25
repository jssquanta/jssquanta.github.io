/* 
 * Shows the fixed header when, scrolling down, the static header disappears
 */
// Clone the header html into the hidden div
$("header").clone().appendTo("#header");

// Get the header height
var headerHeight = $("header").outerHeight();

// Scrolling down it slides down/up the fixed header
$(window).on('scroll', function() {
  if ($(this).scrollTop() > headerHeight) {
    $("#fading-header").slideDown(); // or fade in with .fadeIn()
  } else {
    $("#fading-header").slideUp(); // or fade out with .fadeIn
  }
});
