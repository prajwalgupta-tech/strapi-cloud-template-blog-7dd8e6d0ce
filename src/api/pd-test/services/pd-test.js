'use strict';

/**
 * pd-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pd-test.pd-test');
