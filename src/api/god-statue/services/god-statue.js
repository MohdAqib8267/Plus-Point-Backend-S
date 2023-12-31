'use strict';

/**
 * god-statue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::god-statue.god-statue');
