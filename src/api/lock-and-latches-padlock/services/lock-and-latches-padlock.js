'use strict';

/**
 * lock-and-latches-padlock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-and-latches-padlock.lock-and-latches-padlock');
