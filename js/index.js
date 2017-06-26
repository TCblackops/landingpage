$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    center: true,
    slideBy: 3,
    responsive: {
          0: {
            items: 1,
            navigation: false,
            nav: false,
            slideBy: 1 // <!-- HERE
          },
          670: {
            items: 3,
            navigation: false,
            nav: false,
            slideBy: 3 // <!-- HERE
          }
        },  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
