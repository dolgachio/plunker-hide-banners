// Hide banners
document.documentElement.classList.toggle('plunker-hide-banners');

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 115) {
      // F4
      toggle();
    }
});

function toggle() {
    document.documentElement.classList.toggle('plunker-hide-sidebar');
}