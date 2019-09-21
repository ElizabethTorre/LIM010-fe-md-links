const fetch = require('node-fetch');

const objLinks = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];

export const reponseHTTP = (arrObjLinks) => {
  const arrObjValidate = arrObjLinks.map(obj => fetch(obj.href)
    .then(response => {
      if (response.status >= 200 && response.status < 400) {
        return {
          ...obj,
          status: response.status,
          ok: response.statusText,
        };
      }
      return {
        ...obj,
        status: response.status,
        ok: 'fail',
      };
    })
    .catch((error) => {
      return {
        ...obj,
        status: error.message,
        ok: 'fail',
      }
    })
  );
  return Promise.all(arrObjValidate);
};
// reponseHTTP(objLinks).then(val => console.log(val));


// https://www.npmjs.com/package/node-fetch
// PASO 1: npm install node-fetch --save
// PASO 2: const fetch = require('node-fetch');
// response
// La response representa una response HTTP del servidor. Normalmente, una response no se construye manualmente, pero está disponible como argumento para la devolución de llamada de promesa resuelta.

// Propiedades
// status (número) - Código de response HTTP en el rango 100–599
// statusText (Cadena): texto de estado según lo informado por el servidor, por ejemplo, "No autorizado"
// ok(booleano): verdadero si statuses HTTP 2xx
// headers( Encabezados )
// url (Cuerda)
// LINKS OK STATUS de 200 a 399


