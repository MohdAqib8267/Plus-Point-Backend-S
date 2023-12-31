'use strict';

/**
 * door-stopper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::door-stopper.door-stopper');
