'use strict';

/**
 * lock-cylinde service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lock-cylinde.lock-cylinde');
