'use strict';

/**
 * usp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::usp.usp');
