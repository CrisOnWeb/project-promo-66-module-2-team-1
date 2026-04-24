## Cosas pendientes para HOY O NUNCA

- Meter required!!!
- function handleSubmitFillForm(ev){}:
  faltaría por meter:
  // guardar en un estado global
  // pasar a la siguiente sección
  // navegar a compartir
- Limitación imagen a 20KB (40KB envía, pero iván dijo 20KB)
- En la página de Share:
  Link "tarjeta generada"? Lleva de nuevo al principio
  Link "compartir en Instagram" - Cambiar a FB y que comparta

## SOLUCIONADO:

- Los iconos desaparecen al escribir en el input
- Hay que probar a escribir a ver cómo quedan los textos dentro de preview
- Al borrar el input, no vuelve al mensaje de default, se queda vacío
- Arreglar la función de RenderDesign, no hace cambios en la 2ª preview
- Añadir "años", "kg", etc desde JS
- Los tab-buttons en móvil pequeño se ven feos :(
- Años y nombre tienen mismo estilo y color
- ¿Nos gustan los colores default?
- CREO que habría que añadirle a .previewContainer un width: 100%
- querySelectorAll() para todos los inputs
  ERROR: no cambia ningún input
- Inputs solo funcionan en 1ª preview
- No tenemos nombre del proyecto : Refugio ADALAB
- cambiar facebook por FACEBOOK
  <<<<<<< HEAD
  =======
- Subir imagen y que cargue en la tarjeta
- enviar los datos a la API
  > > > > > > > 6d93329451381c7495749f5b519e427f5c680b64
- Centrar el enlace de Facebook tomando de medida el contenedor de descripcición (tanto en preview como en rellena).
- Cambiar el color al enlace de Facebook dado que si se escoge el el tercer estilo, se ve oscuro.
- Alinear el input de "raza" con respecto al de "edad".
- La raya que separa raza/peso que esté centrada y proporcionada en la preview de "rellena".
- El botón de reset colocarlo debajo de "todos los cambios son obligatorios" y que sea más pequeño con respecto al botón de "guardar y seguir".
- Poner "Completa la información " debajo de "Datos del animal" y cambiar estilo. Se trata de intercambiar posiciones.
- ¿El footer no se ve demasiado grande en móvil?
- ¿Añadir texto/botón de "pulsa en la tarjeta para volver a default"?
- ¿y si tiene 1 año?
- ¿Debería aparecer en la tarjeta ese enlace?
- Imagen no está en LS
- Falta imagen en :
  handleInputFill
  saveFillDataInLocalStorage
  loadFillDataFromLocalStorage
- En la página de share: Mensaje de error aparece aunque no de error
