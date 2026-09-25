# Tema 1 — Conceptos fundamentales

## Frontend y Backend

Una aplicación web puede dividirse, de forma general, en dos partes:

* **Frontend:** la parte de la aplicación con la que interactúa el usuario. Incluye la estructura, el diseño y la interacción de la página.
* **Backend:** la parte que se ejecuta en el servidor y se encarga, entre otras cosas, de la lógica de la aplicación, el acceso a bases de datos y el procesamiento de las solicitudes.

El frontend y el backend pueden comunicarse mediante **APIs (Application Programming Interfaces)**, que definen cómo diferentes componentes o aplicaciones pueden intercambiar información.

### World Wide Web

La **World Wide Web (WWW)** es un sistema de recursos y documentos interconectados mediante enlaces y accesibles a través de Internet.

Internet y la Web no son exactamente lo mismo: Internet es la infraestructura de red que permite la comunicación entre dispositivos, mientras que la Web es uno de los servicios que funciona sobre esa infraestructura.

### HTTP

**HTTP (Hypertext Transfer Protocol)** es un protocolo utilizado para la comunicación entre clientes y servidores web.

Una comunicación HTTP suele seguir el modelo:

**Request → Response**

El cliente realiza una solicitud y el servidor devuelve una respuesta.

### Cliente y servidor

En una aplicación web, el **cliente** suele ser el navegador del usuario, mientras que el **servidor** recibe solicitudes y proporciona los recursos o datos correspondientes.

El cliente y el servidor no tienen por qué ser máquinas físicamente diferentes. Por ejemplo, durante el desarrollo de una aplicación es posible ejecutar un servidor localmente en el mismo ordenador desde el que se accede a él.

### HTML

**HTML (HyperText Markup Language)** es un lenguaje de marcado utilizado para estructurar el contenido de las páginas web.

HTML define elementos como títulos, párrafos, enlaces, imágenes, listas y formularios.

### URI

Una **URI (Uniform Resource Identifier)** es un identificador que permite identificar un recurso.

Las URL, utilizadas habitualmente para localizar recursos en la Web, son un tipo de URI.

### JSON

**JSON (JavaScript Object Notation)** es un formato ligero para representar e intercambiar datos. Su estructura es fácilmente legible tanto por humanos como por máquinas.

Por ejemplo:

```json
{
    "name": "Mónica",
    "age": 25
}
```

### AJAX

**AJAX (Asynchronous JavaScript and XML)** es una técnica que permite realizar solicitudes desde una página web de forma asíncrona, sin necesidad de recargar toda la página.

Aunque su nombre hace referencia a XML, actualmente es muy habitual utilizar **JSON** para intercambiar los datos.

---

# Tema 2 — HTML

HTML se utiliza para definir la **estructura y el contenido** de una página web.

Una página HTML está formada por elementos, normalmente representados mediante etiquetas.

Por ejemplo:

```html
<h1>Título</h1>
<p>Este es un párrafo.</p>
```

HTML no se encarga principalmente de la apariencia de los elementos. Para ello se utiliza CSS.

---

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

---

# Tema 4 — JavaScript

**JavaScript** es un lenguaje de programación ampliamente utilizado para añadir comportamiento e interactividad a las páginas web.

En el navegador, JavaScript puede interactuar con el contenido de la página y modificarlo dinámicamente.

## DOM

El **DOM (Document Object Model)** es una representación estructurada del documento HTML que permite a JavaScript acceder y modificar sus elementos.

Por ejemplo, JavaScript puede:

* modificar el contenido de un elemento;
* cambiar sus atributos;
* crear o eliminar elementos;
* modificar sus estilos;
* responder a eventos producidos por el usuario.

## Incorporar JavaScript en HTML

JavaScript puede incluirse en una página mediante la etiqueta `<script>`:

```html
<script src="script.js"></script>
```

También puede escribirse directamente dentro de la etiqueta:

```html
<script>
    console.log("Hello!");
</script>
```

## Variables

Las variables permiten almacenar información que puede utilizarse posteriormente en el programa.

JavaScript proporciona principalmente `let` y `const` para declarar variables. `var` también existe por motivos históricos, pero generalmente se prefiere utilizar `let` y `const` en código moderno.

```javascript
const name = "Mónica";
let age = 25;
```

`const` se utiliza cuando la variable no va a ser reasignada, mientras que `let` permite reasignar su valor.

JavaScript es un lenguaje de **tipado dinámico**, por lo que no es necesario declarar explícitamente el tipo de una variable al crearla.

## Tipos de datos

Entre los tipos de datos básicos de JavaScript se encuentran:

* `string`: cadenas de texto.
* `number`: números.
* `boolean`: `true` o `false`.
* `undefined`: ausencia de un valor asignado.
* `null`: ausencia intencionada de un valor.
* `object`: objetos y otras estructuras.
* `symbol` y `bigint`.

Los arrays, por ejemplo, son objetos especializados que permiten almacenar colecciones de valores.

## Objetos

Los objetos permiten agrupar información mediante propiedades:

```javascript
const person = {
    name: "Mónica",
    age: 25,
    likes_programming: true,
    hobbies: ["Cycling", "Gardening", "Reading"]
};
```

Las propiedades pueden contener diferentes tipos de datos, incluyendo otros objetos y arrays.

## Node.js

**Node.js** no es un lenguaje de programación. Es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador.

Esto permite utilizar JavaScript, por ejemplo, para desarrollar aplicaciones y servicios del lado del servidor.

---

# Reflexión

Estos conceptos constituyen una introducción a algunas de las tecnologías y herramientas fundamentales del desarrollo web. A partir de ellos, el aprendizaje continúa con aspectos como manipulación del DOM, eventos, funciones, estructuras de control, APIs, desarrollo backend y frameworks y bibliotecas modernas.
