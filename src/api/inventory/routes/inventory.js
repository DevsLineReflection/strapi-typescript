// path: ./src/api/[apiName]/routes/[routerName].js (e.g './src/api/inventory/routes/inventory.js')

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::inventory.inventory', {
  prefix: '',
  only: ['find','create'],
  except: [],
  config: {
    find: {
      auth: false,
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: { 
      auth: false,
      policies: [],
      middlewares: [],
    },
    update: {},
    delete: {},
  },
});
