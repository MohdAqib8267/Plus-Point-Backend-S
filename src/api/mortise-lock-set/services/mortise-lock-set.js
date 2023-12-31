'use strict';

/**
 * mortise-lock-set service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mortise-lock-set.mortise-lock-set');
