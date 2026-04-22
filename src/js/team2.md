Cosas que hablar con las chicas el MARTES 21:

- No tenemos nombre del proyecto :(

- ¿Instagram o Threads u otra? FACEBOOK
    ¿Debería aparecer en la tarjeta ese enlace?
- ¿El footer no se ve demasiado grande en móvil?
    ¿Tal vez hay que poner menos info o más pequeña?

- ¿Añadir texto/botón de "pulsa en la tarjeta para volver a default"?

- CREO que habría que añadirle a .previewContainer un width: 100%
- querySelectorAll() para todos los inputs
  ERROR: no cambia ningún input
- Inputs solo funcionan en 1ª preview
- Description tiene un error, he dejado comentada la linea
- La imagen no he mirado como se puede cambiar
- He quitado los required SOLO en esta rama
- ¡Elegir paletas! (Se pueden meter más, pero hay que añadirlas en HTML/JS)


SOLUCIONADO:
- Los iconos desaparecen al escribir en el input 
- Hay que probar a escribir a ver cómo quedan los textos dentro de preview
- Al borrar el input, no vuelve al mensaje de default, se queda vacío
- Arreglar la función de RenderDesign, no hace cambios en la 2ª preview
- Añadir "años", "kg", etc desde JS
- Los tab-buttons en móvil pequeño se ven feos :(
  - Años y nombre tienen mismo estilo, ¿lo dejamos así?
- "Elige el diseño" está abajo y "completa info" arriba
    Tienen distintos tamaños y color
    ¿"Datos del perro" y "completa info" o solo 1?
- ¿Nos gustan los colores default?

CRIS:
<div class="preview">
  <div id="previewCard" class="preview__card">
    <div class="preview__info">
      <p class="preview__name js_nameValue">Nala</p>
      <p class="preview__age js_ageValue">,<span>4</span></p>
    </div>
    <div class="preview__imgContainer">
      <div class="preview__img"></div>
      <!-- <img class="preview__img js_imgValue" src=".\imgs\images.jfif" /> -->
    </div>
    <div class="preview__content">
      <div class="preview__features">
        <p class="preview__breed js_breedValue">
          <i class="fa-solid fa-paw"></i> <span>Mestizo</span>
        </p>
        <p class="preview__weight js_weightValue">
          <i class="fa-solid fa-weight-hanging"></i> <span>15</span> kg
        </p>
      </div>
      <div class="preview__descContainer">
        <p class="preview__desc js_temperValue">
          Juguetona, cariñosa. Buena con personas y perros. Ideal para una casa
          con niños o gatos
        </p>
         <!-- Añadido enlace a Instagram  -->
        <!-- target="_blank" abre en nueva pestaña
            noopener protege la página
            noreferrer protege la privacidad -->
        <a
          class="instagramValue js_instagramValue"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          >Instagram</a
        >
      </div>
    </div>
  </div>
</div>
