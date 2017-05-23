// EVENTOS
window.addEventListener("load", function (){
  resizeImage();
});
window.addEventListener("resize", function (){
  resizeImage();
});
// FUNCIONES
// Obtiene el ancho de una imagen, y establece hight = width
function resizeImage (){
  var catalogue_images = document.querySelectorAll("#catalogue .img-container img");
  var base_width = String(catalogue_images[0].offsetWidth + "px");
  for (var i = 0; i < catalogue_images.length; i++) {
    catalogue_images[i].style.height = base_width;
  }
  return;
}
