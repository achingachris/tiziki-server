'use strict';

/**
 * music-platform service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-platform.music-platform');
