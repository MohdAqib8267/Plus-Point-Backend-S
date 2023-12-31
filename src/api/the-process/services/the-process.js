'use strict';

/**
 * the-process service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::the-process.the-process');
