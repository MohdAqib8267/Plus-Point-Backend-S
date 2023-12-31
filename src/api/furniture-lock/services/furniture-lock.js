'use strict';

/**
 * furniture-lock service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::furniture-lock.furniture-lock');
