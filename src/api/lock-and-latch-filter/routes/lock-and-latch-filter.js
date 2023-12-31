'use strict';

/**
 * lock-and-latch-filter router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-and-latch-filter.lock-and-latch-filter');
