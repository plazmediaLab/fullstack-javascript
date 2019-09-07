# Node JS *configuration*

**Comenzamos iniciando NODE js con nuestro archivo `package.json`**

~~~ 
 $ npm init -y 
~~~

**Instalamos las dependencias que utilizaremos**

+ Express --> Framework de node para la estructura dentro del proyecto.
+ Mongoose --> Conección con la DB de MongoDB.
+ Morgan --> Visualizar las peticiones por consola del servidor, peticiones HTTP.
+ Multer --> Subir archivos (imagenes).
+ Dotenv --> Trabajar con variables de entorno.
+ Cross-env --> Definir entorno de producción.
+ Cors --> Permite la comunicación entre dos servidores.

~~~ 
 $ npm i express mongoose morgan multer dotenv cross-env cors
~~~

**Instalamos modulo fs-extra**

Permite trabajar con archivos del sistema aplicando promesas.

~~~ 
 $ npm i fs-extra 
~~~

**Instalamos modulo Nodemon como dependencia de desarrollo**

Nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js al reiniciar automáticamente la aplicación de nodo cuando se detectan cambios en el directorio.

~~~ 
 $ npm i nodemon -D
~~~