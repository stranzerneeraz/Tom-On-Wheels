function menuPage() {
  window.location.href = "menu.html";
}

function showSignup() {
    var signupContainer = document.getElementById("signupContainer");
    signupContainer.style.display = "flex";
  }

  function hideSignup() {
    var signupContainer = document.getElementById("signupContainer");
    signupContainer.style.display = "none";
  }
function loadMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RyYW56ZXJuZWVyYXoiLCJhIjoiY2xqcjJhdjhsMDNrYjNjdnN4a3IyM3l1biJ9.DVRVAz534tJ0fGyhteiEEQ';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.9975, 52.5304], // [longitude, latitude]
      zoom: 14,
      scrollZoom: false
    });

    // Add navigation control
    map.addControl(new mapboxgl.NavigationControl());

    // Add custom marker
    var markerElement = document.createElement('div');
    markerElement.className = 'marker';
    var marker = new mapboxgl.Marker(markerElement)
      .setLngLat([-1.9975, 52.5304]) // [longitude, latitude]
      .addTo(map);

    var popup = new mapboxgl.Popup({ closeButton: false })
      .setHTML('<h3>Food Delivery App Office</h3><p>B71 2RJ, West Bromwich, United Kingdom</p>');

    marker.setPopup(popup);

    // Custom CSS for marker
    var markerStyle = document.createElement('style');
    markerStyle.textContent = '.marker { background-color: #f15a24; width: 24px; height: 24px; border-radius: 50%; cursor: pointer; }';
    document.head.appendChild(markerStyle);
}


// Remove Items From Cart
$('a.remove').click(function(){
  event.preventDefault();
  $( this ).parent().parent().parent().hide( 400 );
 
})

// Just for testing, show all items
  $('a.btn.continue').click(function(){
    $('li.items').show(400);
  })

  $(document).ready(function() {

    // Radio box border
    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });
  
    // Validation
    var $cardInput = $('.input-fields input');
  
    $('.next-btn').on('click', function(e) {
  
      $cardInput.removeClass('warning');
  
      $cardInput.each(function() {
         var $this = $(this);
  
         if (!$this.val()) {
           $this.addClass('warning');
         }
      });
  
    });
  
  });
