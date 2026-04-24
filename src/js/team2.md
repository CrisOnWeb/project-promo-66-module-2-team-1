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

- Hay const duplicados y el archivo no arranca.Hay redeclaraciones así que se quitan los repetidos de los bloques.
- Corregido renderPreview() porque redeclaraba variables. Se correige para que use solo finalPreview y no un nodo inexistente.
- La imagen no se persiste bien ni se limpia en fillData. Añadiendo photo: '', guarda la foto al cargarla y resetea el fondo.
- El handleSubmitFillForm() está incompleto. Ahora solo valida; falta pasar a compartir (HACER).
- Revisado el .hidden y funciona. Se aplica mejora que ahora si falla la red, no se muestra nada.
- Enlace a Facebook creado.
- Añadidos required.
