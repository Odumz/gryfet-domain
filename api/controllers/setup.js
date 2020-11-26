const { serverError, serverResponse } = require('../utils/serverResponse');
const {Post} = require('../utils/request/index');
const { addEntity, rollback } = require('../utils/request/data');
/**
 * @export
 * @class Profile
 */
class Setup {


  /**
   * @name post
   * @async
   * @static
   * @memberof Route
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async Create(req, res) {
    try {
        const createUrl = addEntity()['url']
        const domainHostsTable = {
            database_type: "default",
            host_name: "default",
            table_name: "domain_hosts",
            visibility: true,
            fields: [
                {
                    field_name: "domain_name",
                    field_type: "string",
                    visibility: true,
                    nullable: false
                },
                {
                    field_name: "identifier",
                    field_type: "string",
                    visibility: true,
                    nullable: false
                },
                {
                    field_name: "type",
                    field_type: "string",
                    visibility: true,
                    nullable: false
                },
                {
                    field_name: "baseUrl",
                    field_type: "string",
                    visibility: true,
                    nullable: true
                },
                {
                    field_name: "created_at",
                    field_type: "timestamp",
                    visibility: true,
                    nullable: true
                }
            ]
          }


        const domainAccessTable = {
          database_type: "default",
          host_name: "default",
          table_name: "domain_access",
          visibility: true,
          fields: [
              {
                  field_name: "domain_name",
                  field_type: "string",
                  visibility: true,
                  nullable: false
              },
              {
                  field_name: "identifier",
                  field_type: "string",
                  visibility: true,
                  nullable: false
              },
              {
                  field_name: "domain_hosts_id",
                  field_type: "integer",
                  visibility: true,
                  nullable: false
              },
              {
                  field_name: "type",
                  field_type: "string",
                  visibility: true,
                  nullable: false
              },
              {
                  field_name: "baseUrl",
                  field_type: "string",
                  visibility: true,
                  nullable: true
              },
              {
                  field_name: "created_at",
                  field_type: "timestamp",
                  visibility: true,
                  nullable: true
              }
          ]
        }

          const domainHostsResponse = await Post(createUrl, domainHostsTable);
          serverResponse(req, res, 200, {message: 'setup domain_hosts successfully', ...domainHostsResponse});
          const domainAccessResponse = await Post(createUrl, domainAccessTable);
          serverResponse(req, res, 200, {message: 'setup domain_access successfully', ...domainAccessResponse});
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }

    /**
   * @name post
   * @async
   * @static
   * @memberof Route
   * @param {Object} req express request object
   * @param {Object} res express response object
   * @returns {JSON} JSON object with details of new user
   */
  static async Reset(req, res) {
    try {
      const { domain_id } = req.body.OCXPayload
        const rollbackUrl = rollback()['url']
        const domainHostsTable = {
           domain_id
          }
         const response = await Post(rollbackUrl, domainHostsTable)
          serverResponse(req, res, 200, {message: 'setup rollback domain_hosts successfully', ...response});
    } catch (error) {
      return serverError(req, res, 500, { message: error.message });
    }
  }
}

module.exports = Setup;