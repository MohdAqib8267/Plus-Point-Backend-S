'use strict';

/**
 * cupboard-pull service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cupboard-pull.cupboard-pull');
