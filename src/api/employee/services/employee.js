'use strict';

/**
 * employee service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee.employee',({ strapi }) =>  ({
    // Method 1: Creating an entirely new custom service
    async findEmploy(...args) {
      let response = { okay: true }
  
      if (response.okay === false) {
        return { response, error: true }
      }
  
      return response
    }
  
 
  })
);
