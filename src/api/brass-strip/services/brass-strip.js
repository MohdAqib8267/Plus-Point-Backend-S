'use strict';

/**
 * brass-strip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::brass-strip.brass-strip');
