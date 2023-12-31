'use strict';

/**
 * pull-handle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pull-handle.pull-handle');
