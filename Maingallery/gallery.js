timing = 0;
setInterval(slide, 6500)
function slide() {
    timing += 1;

    if (timing == 1) {
     document.getElementById('slide').src = "gallery_items/slider2.jpg"
    }

    else if (timing == 2) {
      document.getElementById('slide').src = "gallery_items/slider3.jpg"
    }

    else if (timing == 3) {
        document.getElementById('slide').src = "gallery_items/slider4.jpg"
      }

      else if (timing == 4) {
        document.getElementById('slide').src = "gallery_items/slider5.jpg"
      }

      else if (timing == 5) {
        document.getElementById('slide').src = "gallery_items/slider1.jpg"
        setTimeout(removetimer ,6 )
        function removetimer() {
        timing = 0;
        }
      }

}

