// https://www.npmjs.com/package/node-fetch
// PASO 1: npm install node-fetch --save
// PASO 2: const fetch = require('node-fetch');
// Respuesta
// La respuesta representa una respuesta HTTP del servidor. Normalmente, una respuesta no se construye manualmente, pero está disponible como argumento para la devolución de llamada de promesa resuelta.

// Propiedades
// status (número) - Código de respuesta HTTP en el rango 100–599
// statusText (Cadena): texto de estado según lo informado por el servidor, por ejemplo, "No autorizado"
// ok(booleano): verdadero si statuses HTTP 2xx
// headers( Encabezados )
// url (Cuerda)
// LINKS ROTOS STATUS de 200 a 299
const fetch = require('node-fetch');
const objLinks = [
    {
        href: 'https://nodejs.org/es/',
        title: 'Node.js',
        file: 'C:\\Users\\Etorre\\Desktop\\TRACK-FRONT-END\\LIM010-fe-md-links\\markdown\\first.md'
    },
    {
        href: 'https://developers.google.com/v8/',
        title: 'motor de JavaScript V8 de Chrome',
        file: 'C:\\Users\\Etorre\\Desktop\\TRACK-FRONT-END\\LIM010-fe-md-links\\markdown\\first.md'
    }
];
const reponseHTTP = (arrObjLinks) => {
    // for (let i = 0; i <= arrObjLinks.length; i++) {
        console.log(arrObjLinks.map(el => el.href));
        // fetch(arrObjLinks.href)
        //     .then(respuesta => {
        //         console.log(respuesta.status);
        //         if (respuesta.status < 200 || respuesta.status > 299) {
        //             console.log('FILE');
        //         }
        //         console.log('OK');
        //     });
    // };
};
reponseHTTP(objLinks);
