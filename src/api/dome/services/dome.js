'use strict';

/**
 * dome service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dome.dome');
