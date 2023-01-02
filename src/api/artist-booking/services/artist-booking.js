'use strict';

/**
 * artist-booking service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::artist-booking.artist-booking');
