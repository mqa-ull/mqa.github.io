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
