'use strict';

/**
 * denlock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::denlock.denlock');
