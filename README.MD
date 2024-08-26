
# Consumo de API de One Piece a traves de Vuejs

Se consume la API con Vuejs y se maqueteo con htm y css nativo


## Authors

- [@EmmanuelIngSystem](https://github.com/EmmanuelIngSystem)


## Listado de paginas

Nombre            | Numero de data devuelta por la API | Estatus fin | Fecha fin
----------------- | ---------------------------------- | ----------- | --------- 
Hakis             | 3                                  | OK          | Unknown date
Gears de Luffy    | 6                                  | OK          | Unknown date
Sagas             | 10                                 | OK          | Unknown date
Films             | 15                                 | OK          | 16/08/2024
Swords            | 21                                 | OK          | 16/08/2024
Dials             | 34                                 | OK          | 19/08/2024
Bows              | 49                                 | OK          | 19/08/2024
Boats             | 100                                | OK          | 20/08/2024
Luffy's techniques| 104                                | OK          | 21/08/2024
Volumes           | 109                                | OK          | 22/08/2024
Locations         | 125                                | OK          | 22/08/2024
Crews             | 149                                | OK          | 22/08/2024
Fruits            | 206                                | OK          | 22/08/2024
Characters        | 773                                | OK          | 22/08/2024
Episodes          | 1104                               | OK          | 22/08/2024
Chapters          | 1112                               | OK          | 22/08/2024

## Colores principales
* #b2c8d8, #86adc3, #5593ac, #007a94

## Url de la web ded la api de One Piece la cual estoy consumiendo
* https://api-onepiece.com/fr

## Mejoras parte 1
1. Para la pagina sagas cambiare el diseño que le meti a las paginas de boats, chapters, etc.
2. Para la pagina fruits alineare las imagenes en foprma vertical por cada columna.
3. Para la pagina chapters alineare los botones verticalmente por cada calumna.
    * Tambien remover la palabra tome de la etiqueta label al abrir la modal tome ya que se me hace redundante.
    * Formatear la fecha a: dd-Nombre del mes-yyyy.
4. Para la pagina volumes formteare la fecha a: dd-Nombre del mes-yyyy.
5. Para la pagina episodes formteare la fecha a: dd-Nombre del mes-yyyy.
    * Ajustar los botones de las columnas del contenedor para que quede hasta abajo.
    * Meter alguna validacion ya sea para que no aparezcan las etiquetas label si no hay nada que mostrar o en su defecto ponerle algo asi como "no hay datos".
    * Implementar algo para cuando el texto de la descripcion sea muy largo no lo muestre todo.
6. De la pagina films aun no se si ponerle el diseño de las demas paginas o mejorar el que tiene porque no me agrado como quedo del todo.
    * Si no cambia el diseño tengo que ajustar el texto y al boton darle funcionalidad para que sea clickeable.
7. De la pagina swords solo seria ajustar el texto de la descripcion para evitar que se vea mucha letra en descripciones algo largas.
    * Remover el campo "roman_name"
8. De la pagina luffy_techniques quitar la etiqueta label de descripcion.
    * Moveer abajo de la desripcion "Translation" y "Type".
    * Remover etiqueta label de descripcion de la modal de "luffy gear".
9. De la pagina crews hay algunos crew que no tienen informacion (solo salen las etiquetas label sin nada de informacion) aun no se si meter validacion o dejarlo asi.
10. De la pagina characters hay algunos character que no tienen informacion (solo salen las etiquetas label sin nada de informacion) aun no se si meter validacion o dejarlo asi.
    * Algunas modales de "fruit" no traen nada de informacion tendria que meter una validacion.
    * Algunas modales de "crew" no traen nada de informacion tendria que meter una validacion.
11. En la pagina boats Ponerlo a 5 grillas.
    * En la modal captain remover la palabra fruit de la etiqueta label.
    * Opcionalmente podriamos remover los campos en el que no trae valor los datos (no mostrando tambien la etiqueta label).
    * Meter validacion para las modales que no tienen informacion
12. En la pagina locations remover los campos (tambien las etiquetas label) que no tengan informacion.

## Mejoras parte 2
1. Unificar la mayor parte de css
2. Implementar componentes en VueJs

## Notas
La pagina hakis me encanto como quedo el diseño
