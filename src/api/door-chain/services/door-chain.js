'use strict';

/**
 * door-chain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::door-chain.door-chain');
