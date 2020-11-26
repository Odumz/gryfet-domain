const { serverError, serverResponse } = require('../utils/serverResponse');
const { removeEntity, insertEntity, searchEntity } = require('../utils/request/data');
const { Post, Get, Patch, Delete } = require('../utils/request/index');
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
            const { domain_name, identifier, type, baseUrl } = req.body.OCXPayload;
            const domainTable = {
              table_name: "domain_hosts",
              data: {
                  domain_name,
                  identifier,
                  type,
                  baseUrl,
                  created_at: new Date()
              },
              relationships: []
            }
           const response = await Post(insertEntity()['url'], domainTable);
          serverResponse(req, res, 201, {message: 'Domain added sucessfully', data: {...response}});
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
            const { domain_name, identifier, type } = req.body.OCXPayload;
            const url = searchEntity()['url']
            const searchData = {
              table_name: "domain_hosts",
              where: [
                  {"column": "domain_name", "operation": "=", "value": domain_name},
                  {"column": "identifier", "operation": "=", "value": identifier},
                  {"column": "type", "operation": "=", "value": type},
                  ],
              joins: [],
              reverse_joins: [],
              order: { "column": "id", "operation": "asc" },
              count: null,
              pagination: null
          }
          const response = await Get(url, searchData);
          if(response.data.length < 1) {
           return serverResponse(req, res, 201, {message: 'domain does not exist' });
          } 
          let baseUrls = `${response.data[0].baseUrl}${response.data[0].name}`;
          if(query){
            baseUrls = `${baseUrls}${query}`
          }
         const responseData = await axios({
            method,
            url: baseUrls,
            data: {
              ...payload
            }
          })
          console.log(responseData, "this is the response data>>>>")
          serverResponse(req, res, 200, {message: 'domain info fetched successfully', ...responseData.data});
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
            const { domain_name, identifier, type } = req.body.OCXPayload;
            const url = searchEntity()['url']
            const searchData = {
              table_name: "domain_hosts",
              where: [],
              joins: [],
              reverse_joins: [],
              order: { "column": "id", "operation": "asc" },
              count: null,
              pagination: null
          }
          const response = await Get(url, searchData);
          if(response.data.length < 1) {
           return serverResponse(req, res, 201, {message: 'no domain exists here' });
          } 
          let baseUrls = `${response.data[0].baseUrl}${response.data[0].name}`;
          if(query){
            baseUrls = `${baseUrls}${query}`
          }
         const responseData = await axios({
            method,
            url: baseUrls,
            data: {
              ...payload
            }
          })
          console.log(responseData, "this is the response data>>>>")
          serverResponse(req, res, 200, {message: 'domain hosts fetched successfully', ...responseData.data});
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
          const { domain_name, identifier, type, baseUrl} = req.body.OCXPayload;
          const domainTable = {
                table_name: "domain_hosts",
                where: [
                  {"column": "domain_name", "operation": "=", "value": domain_name},
                  {"column": "identifier", "operation": "=", "value": identifier},
                  {"column": "type", "operation": "=", "value": type},
                  {"column": "baseUrl", "operation": "=", "value": baseUrl},
                  ],
                order: { "column": "domain_name", "operation": "asc" },
                count: null
          }
          const response = await Delete(removeEntity()['url'], domainTable);
          serverResponse(req, res, 200, {message: `domain removed successfully`, response});
        } catch (error) {
          console.log(error, 'this is the error')
          return serverError(req, res, 500, { message: error.message });
        }
      }
    }
    
module.exports = DomainHost;