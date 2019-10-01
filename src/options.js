const fetch = require('node-fetch');

// Opción --validate con retorno [{ href, text, file, status, ok }]
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

//Opción --stats con retorno de string 'Total: ,Unique: '
const optionStats = (objLinks) => {
      const total = objLinks.length;
      const arrLinks = objLinks.map(ele => ele.href);
      const unique = Array.from(arrLinks).length;
      return `Total: ${total}\nUnique: ${unique}`;
};

// Opción --stats --validate retorna string 'Total: ,Unique: ,Broken: '
const optionStatsValidate = (objLinks) => {
  const stats = optionStats(objLinks);
  return optionValidate(objLinks)
    .then(response => {
      const arrLinksBroken = response.filter(ele => ele.ok === 'FAIL').length;
      return `${stats} \nBroken: ${arrLinksBroken}`;
    });
};

export {
  optionValidate,
  optionStats,
  optionStatsValidate,
}

// https://www.npmjs.com/package/node-fetch
// PASO 1: npm install node-fetch --save
// PASO 2: const fetch = require('node-fetch');
