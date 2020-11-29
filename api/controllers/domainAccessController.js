// eslint-disable-next-line no-unused-vars
const axios = require('axios');
const {
  removeEntity,
  insertEntity,
  searchEntity,
} = require('../utils/request/data');
// eslint-disable-next-line no-unused-vars
const { Post } = require('../utils/request/index');
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
      const {
        domain_name,
        domain_hosts_id,
        identifier,
        type,
        baseUrl,
      } = req.body;
      const domainTable = {
        table_name: 'domain_access',
        data: {
          domain_name,
          identifier,
          domain_hosts_id,
          type,
          baseUrl,
          created_at: new Date(),
        },
        relationships: [],
      };
      const response = await Post(insertEntity()['url'], domainTable);
      serverResponse(req, res, 201, {
        message: 'Domain added sucessfully',
        data: { ...response },
      });
    } catch (error) {
      // console.log(error);
      return serverError(req, res, 500, { message: error.message });
    }
  }

  /**
   * @name check
   * @async
   * @static
   * @memberof domainAccessController
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async check(req, res) {
    try {
      const { domain_name } = req.body;
      console.log(domain_name);
      // const subdomain_name = domain_name.split('.').pop();
      // const remove_sub = domain_name.indexOf('.');
      // console.log(remove_sub);
      const subdomain_name = domain_name.substring(
        domain_name.indexOf('.') + 1
      );
      console.log(subdomain_name);
      const url = searchEntity()['url'];
      console.log(url);
      const searchData = {
        table_name: 'domain_hosts',
        where: [
          { column: 'domain_name', operation: '=', value: subdomain_name },
        ],
        joins: [],
        reverse_joins: [],
        order: { column: 'id', operation: 'asc' },
        count: null,
        pagination: null,
      };
      const response = await Post(url, searchData);
      if (response.data.length < 1) {
        return serverResponse(req, res, 201, {
          message: 'domain does not exist',
        });
      }
      serverResponse(req, res, 200, {
        message: 'domain info fetched successfully',
        ...response.data,
      });
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

  /**
   * @name get
   * @async
   * @static
   * @memberof Route
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async find(req, res) {
    try {
      // const { domain_name, domain_hosts_id, type, identifier } = req.body;
      const url = searchEntity()['url'];
      const searchData = {
        table_name: 'domain_access',
        where: [
          { column: 'id', operation: '=', value: req.params.id },
          // { column: 'identifier', operation: '=', value: identifier },
          // { column: 'domain_hosts_id', operation: '=', value: domain_hosts_id },
          // { column: 'type', operation: '=', value: type },
        ],
        joins: [],
        reverse_joins: [],
        order: { column: 'id', operation: 'asc' },
        count: null,
        pagination: null,
      };
      const response = await Post(url, searchData);
      if (response.data.length < 1) {
        return serverResponse(req, res, 201, {
          message: 'domain does not exist',
        });
      }
      // let baseUrls = `${response.data[0].baseUrl}${response.data[0].name}`;
      // if (query) {
      //   baseUrls = `${baseUrls}${query}`;
      // }
      // const responseData = await axios({
      //   method,
      //   url: baseUrls,
      //   data: {
      //     ...payload,
      //   },
      // });
      // console.log(response, 'this is the response data>>>>');
      serverResponse(req, res, 200, {
        message: 'domain info fetched successfully',
        ...response.data,
      });
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

  /**
   * @name getAll
   * @async
   * @static
   * @memberof Route
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async findAll(req, res) {
    try {
      // const { domain_name, identifier, type } = req.body.OCXPayload;
      const url = searchEntity()['url'];
      const searchData = {
        table_name: 'domain_access',
        where: [],
        joins: [],
        reverse_joins: [],
        order: { column: 'id', operation: 'asc' },
        count: null,
        pagination: null,
      };
      const response = await Post(url, searchData);
      if (response.data.length < 1) {
        return serverResponse(req, res, 201, {
          message: 'no domain exists here',
        });
      }
      // let baseUrls = `${response.data[0].baseUrl}${response.data[0].name}`;
      // if (query) {
      //   baseUrls = `${baseUrls}${query}`;
      // }
      // const responseData = await axios({
      //   // method,
      //   // url: baseUrls,
      //   data: {
      //     ...payload,
      //   },
      // });
      // console.log(response, 'this is the response data>>>>');
      serverResponse(req, res, 200, {
        message: 'domain accesses fetched successfully',
        ...response.data,
      });
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

  /**
   * @name remove
   * @async
   * @static
   * @memberof Route
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async remove(req, res) {
    try {
      // const { domain_name, domain_hosts_id, type, baseUrl } = req.body;
      const domainTable = {
        table_name: 'domain_access',
        where: [
          { column: 'id', operation: '=', value: req.params.id },
          // { column: 'domain_hosts_id', operation: '=', value: domain_hosts_id },
          // { column: 'type', operation: '=', value: type },
          // { column: 'baseUrl', operation: '=', value: baseUrl },
        ],
        order: { column: 'domain_name', operation: 'asc' },
        count: null,
      };
      const response = await Post(removeEntity()['url'], domainTable);
      serverResponse(req, res, 200, {
        message: `domain removed successfully`,
        response,
      });
    } catch (error) {
      // console.log(error, 'this is the error');
      return serverError(req, res, 500, { message: error.message });
    }
  }
}

module.exports = domainAccessController;
