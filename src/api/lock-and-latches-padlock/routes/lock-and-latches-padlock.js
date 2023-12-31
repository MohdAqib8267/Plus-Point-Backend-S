'use strict';

/**
 * lock-and-latches-padlock router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lock-and-latches-padlock.lock-and-latches-padlock');
