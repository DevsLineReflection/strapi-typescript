'use strict';

/**
 *  employee controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports  = createCoreController('api::employee.employee' ,({ strapi }) =>  ({
     // Method 1: Creating an entirely custom action
  async find(ctx) {
    try {
      // console.log(ctx)
      // const result = await service.find(ctx.req );
      // ctx.body = result;

      // using entity service api 
      // const entries = await strapi.entityService.findMany(
      //   'api::employee.employee',
      //   {
      //     sort: { createdAt: 'ASC' },
      //     limit: 5,
      //   });
      //   console.log(entries)

      //   const sanitizedEntries = await this.sanitizeOutput(entries, ctx);
      //   let result = this.transformResponse(sanitizedEntries);

      //   console.log(result)
      //   return result;

      // using query engine api 
      const entries = await strapi.db.query('api::employee.employee').findMany({ // uid syntax: 'api::api-name.content-type-name'
        where: {
          
          name: {
            // $startsWith: 'r',
          },
          salary: {
            // $startsWith: '1000000',
            // $endsWith: '2000000',
          },
        },
       
        populate: {
          category: true,
        },
      });
      console.log(entries)
      console.log("entries")
      return entries;
    } catch (err) {
      ctx.body = err;
    }
  },
  async create(ctx) {
    
    try {
      console.log(ctx)
      ctx.body = 'ok create api';
    } catch (err) {
      ctx.body = err;
    }
  },

  async update(ctx) {
    // todo
  },
  
 
  })
);

