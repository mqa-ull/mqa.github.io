# Tema 3 — CSS

**CSS (Cascading Style Sheets)** es el lenguaje utilizado para definir la presentación y el diseño de los documentos HTML.

Permite controlar aspectos como colores, tamaños, fuentes, posiciones, espacios y distribución de los elementos.

## Reglas CSS

Una regla CSS está formada por un **selector** y un **bloque de declaraciones**:

```css
p {
    color: blue;
    font-size: 16px;
}
```

* **Selector:** determina qué elementos HTML serán afectados.
* **Declaraciones:** especifican las propiedades y valores que se aplicarán.

Cada declaración está formada por una propiedad y un valor separados por `:` y termina normalmente con `;`.

Los comentarios se escriben entre `/*` y `*/`.

## Selectores

CSS dispone de diferentes tipos de selectores.

### Selector de elemento

Selecciona todos los elementos de un determinado tipo:

```css
p {
    color: blue;
}
```

### Selector universal

El selector `*` selecciona todos los elementos:

```css
* {
    box-sizing: border-box;
}
```

### Selectores de clase e ID

Las clases se indican mediante `.` y los identificadores mediante `#`:

```css
.example {
    color: red;
}

#title {
    font-size: 24px;
}
```

### Selectores de atributo

Permiten seleccionar elementos en función de sus atributos:

```css
input[type="checkbox"] {
    ...
}
```

### Pseudoclases

Las pseudoclases permiten seleccionar elementos según su estado o posición:

```css
a:hover {
    ...
}

input:focus {
    ...
}
```

Algunos ejemplos son `:hover`, `:focus` y `:nth-child()`.

## La cascada

Cuando varias reglas CSS pueden aplicarse al mismo elemento, el resultado depende principalmente de:

1. **Importancia**, incluyendo el uso de `!important`.
2. **Especificidad** del selector.
3. **Orden de aparición** de las reglas.

Cuando las demás condiciones son equivalentes, una regla declarada posteriormente puede sobrescribir a una anterior.

## Herencia

Algunas propiedades CSS pueden heredarse de los elementos padres.

Las palabras clave `inherit`, `initial` y `unset` permiten controlar el comportamiento de determinadas propiedades.

## Modelo de caja

Cada elemento HTML puede representarse mediante el **modelo de caja (Box Model)**, formado por:

* **Content:** contenido del elemento.
* **Padding:** espacio entre el contenido y el borde.
* **Border:** borde del elemento.
* **Margin:** espacio exterior al borde.

La propiedad `box-sizing` permite controlar cómo se calcula el tamaño total de un elemento.

```css
.box {
    box-sizing: border-box;
}
```

## Unidades y viewport

CSS permite utilizar diferentes unidades para definir tamaños y distancias, como `px`, `%`, `em`, `rem`, `vh` y `vw`.

`vh` y `vw` representan respectivamente un porcentaje de la altura y de la anchura del viewport.

## Posicionamiento

La propiedad `position` permite controlar el posicionamiento de los elementos.

Los valores principales son:

* `static`: comportamiento normal.
* `relative`: permite desplazar el elemento respecto a su posición original.
* `absolute`: posiciona el elemento respecto a su ancestro posicionado más cercano.
* `fixed`: posiciona el elemento respecto al viewport.
* `sticky`: combina características del posicionamiento relativo y fijo dependiendo de la posición de desplazamiento.

## Texto

CSS permite controlar diferentes características del texto mediante propiedades como:

```css
font-family
font-size
font-style
font-weight
line-height
text-transform
```

También es posible utilizar fuentes externas, por ejemplo mediante servicios como Google Fonts.

## Colores

CSS permite representar colores utilizando diferentes sistemas.

### Hexadecimal

```css
color: #FF0000;
```

El formato hexadecimal utiliza tres pares de valores que representan las componentes roja, verde y azul (RGB).

Por ejemplo:

```text
#000000 → negro
#FFFFFF → blanco
#FF0000 → rojo
```

### RGB y RGBA

`rgb()` utiliza valores entre 0 y 255 para las componentes roja, verde y azul.

`rgba()` permite añadir además un valor de transparencia:

```css
color: rgba(255, 0, 0, 0.5);
```

### HSL

HSL representa los colores mediante:

* **Hue:** matiz, de 0° a 360°.
* **Saturation:** saturación.
* **Lightness:** luminosidad.

Por ejemplo:

```css
color: hsl(120, 100%, 75%);
```

## Agrupación de selectores

Es posible aplicar las mismas reglas a varios selectores separándolos mediante comas:

```css
h1, h2, p {
    font-family: Arial, sans-serif;
}
```
