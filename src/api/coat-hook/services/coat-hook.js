'use strict';

/**
 * coat-hook service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::coat-hook.coat-hook');
