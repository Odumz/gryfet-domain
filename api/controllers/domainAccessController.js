const axios = require('axios');
const { removeEntity, insertEntity, searchEntity } = require('../utils/request/data');
const { Post, Get, Patch, Delete } = require('../utils/request');
const { serverError, serverResponse } = require('../utils/serverResponse');

class domainAccessController {
    /**
   * @name add
   * @async
   * @static
   * @memberof domainAccessController
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */

  static async add(req, res) {
    try {
        const { domain_name, domain_hosts_id, version, baseUrl} = req.body.OCXPayload;
        const accessTable = {
          table_name: "domain_access",
          data: {
              domain_name,
              domain_hosts_id,
              version,
              baseUrl,
              created_at: new Date()
          },
          relationships: []
        }
       const response = await Post(insertEntity()['url'], accessTable);
      serverResponse(req, res, 201, {message: 'route added sucessfully', data: {...response}});
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

}

module.exports = domainAccessController;
