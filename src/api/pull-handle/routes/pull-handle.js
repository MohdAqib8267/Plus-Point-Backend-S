'use strict';

/**
 * pull-handle router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::pull-handle.pull-handle');
