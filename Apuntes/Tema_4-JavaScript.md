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
