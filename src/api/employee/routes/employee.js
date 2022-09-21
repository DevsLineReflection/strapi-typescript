// path: ./src/api/restaurant/routes/custom-restaurant.js

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/employee',
      handler: 'employee.find',
      config: {
        auth: false,
        policies: [
          // // point to a registered policy
          // 'policy-name',

          // // point to a registered policy with some custom configuration
          // { name: 'policy-name', config: {} }, 

          // // pass a policy implementation directly
          // (policyContext, config, { strapi }) => {
          //   return true;
          // },
        ]
      },
    },
    {
      method: 'POST',
      path: '/employee',
      handler: 'employee.create',
      config: {
        auth: false,
        policies: [
          // // point to a registered policy
          // 'policy-name',

          // // point to a registered policy with some custom configuration
          // { name: 'policy-name', config: {} }, 

          // // pass a policy implementation directly
          // (policyContext, config, { strapi }) => {
          //   return true;
          // },
        ]
      },
    },
  ],
};
