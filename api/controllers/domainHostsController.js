const { serverError, serverResponse } = require('../utils/serverResponse');
const {
  removeEntity,
  insertEntity,
  searchEntity,
} = require('../utils/request/data');
// eslint-disable-next-line no-unused-vars
const { Post } = require('../utils/request/index');
// eslint-disable-next-line no-unused-vars
const axios = require('axios');

class DomainHost {
  /**
   * @name add
   * @async
   * @static
   * @memberof DomainHost
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async add(req, res) {
    try {
      const { domain_name, identifier, type, baseUrl } = req.body;
      const domainTable = {
        table_name: 'domain_hosts',
        data: {
          domain_name,
          identifier,
          type,
          baseUrl,
          created_at: new Date(),
        },
        relationships: [],
      };
      // console.log(domainTable);
      const response = await Post(insertEntity()['url'], domainTable);
      // console.log(response);
      serverResponse(req, res, 201, {
        message: 'Domain added sucessfully',
        data: { ...response },
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
      // const { domain_name, identifier, type } = req.body.OCXPayload;
      const url = searchEntity()['url'];
      const searchData = {
        table_name: 'domain_hosts',
        where: [
          { column: 'id', operation: '=', value: req.params.id },
          // { column: 'identifier', operation: '=', value: identifier },
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
        table_name: 'domain_hosts',
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
      //   method,
      //   url: baseUrls,
      //   data: {
      //     ...payload,
      //   },
      // });
      // console.log(response, 'this is the response data>>>>');
      serverResponse(req, res, 200, {
        message: 'domain hosts fetched successfully',
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
      // const { domain_name, identifier, type, baseUrl } = req.body.OCXPayload;
      const domainTable = {
        table_name: 'domain_hosts',
        where: [
          { column: 'id', operation: '=', value: req.params.id },
          // { column: 'identifier', operation: '=', value: identifier },
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

module.exports = DomainHost;
