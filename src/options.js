const fetch = require('node-fetch');

const objLinks = [
  { href: 'https://docs.npmjs.com/about-npm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docs.npmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
  { href: 'https://docsnpmjs.com/aboutnpm/', text: 'nodeJs', file: 'C:/Users/albit/Desktop/Track front/LIM010-fe-md-links/dir test/first.md' },
];

const optionValidate = (arrObjLinks) => {
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
        ok: 'FAIL',
      };
    })
    .catch(() => {
      return {
        ...obj,
        status: 'ERROR',
        ok: 'FAIL',
      }
    })
  );
  return Promise.all(arrObjValidate);
};
// reponseHTTP(objLinks).then(val => console.log(val));

const optionStats = (objLinks) => {
      const total = objLinks.length;
      const arrLinks = objLinks.map(ele => ele.href);
      const unique = Array.from(arrLinks).length;
      return `Total: ${total}\nUnique: ${unique}`;
};
// optionStats(objLinks);

const optionStatsValidate = (objLinks) => {
  const stats = optionStats(objLinks);
  return optionValidate(objLinks)
    .then(response => {
      const arrLinksBroken = response.filter(ele => ele.ok === 'FAIL').length;
      return `${stats} \nBroken: ${arrLinksBroken}`;
    });
};
// optionStatsValidate(objLinks);

export {
  optionValidate,
  optionStats,
  optionStatsValidate,
}

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
