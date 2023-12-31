'use strict';

/**
 * lock-and-latch-filter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-and-latch-filter.lock-and-latch-filter');
