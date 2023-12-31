'use strict';

/**
 * what-we-use service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::what-we-use.what-we-use');
