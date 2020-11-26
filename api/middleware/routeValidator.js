import checkForErrors from './CheckforErrors';
import CommonValidator from './CommonValidator';
/**
 * @class RouteValidator
 * @classdesc Provides validation middlewares for login and signup route
 */
export default class RouteValidator {
  /**
   * Name validator to be used by all others
   * @param {string} field
   * @returns {function} call to a Check API middleware
   * @memberof RouteValidator
   */
  static checkName() {
    return CommonValidator.genericCheck('name')
      .trim()
      .isLength({ min: 2 })
      .isString();
  }

  /**
   * Domain Id validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkProfileId() {
    return CommonValidator.genericCheck('profile_id')
      .trim()
      .isInt({ gt: 0, allow_leading_zeroes: false })
      .withMessage(
        'profile_id must be an integer, greater than 0 and must not contain leading zeros'
      );
  }

  /**
   * Domain Id validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkParent() {
    return CommonValidator.genericCheck('parent')
      .trim()
      .isLength({ min: 2 })
      .isString();
  }

  /**
   * Name validator to be used by all others
   * @param {string} field
   * @returns {function} call to a Check API middleware
   * @memberof RouteValidator
   */
  static checkHost() {
    return CommonValidator.genericCheck('host')
      .trim()
      .isLength({ min: 2 })
      .isString();
  }

  /**
   * Name validator to be used by all others
   * @param {string} field
   * @returns {function} call to a Check API middleware
   * @memberof RouteValidator
   */
  static checkTable() {
    return CommonValidator.genericCheck('table')
      .trim()
      .isLength({ min: 2 })
      .isString();
  }

  /**
   * Investor create Validator validation
   * @returns {array} an array of Check API middlewares
   * @memberof InvestorValidator
   */
  static checkMethod() {
    return CommonValidator.genericCheck('method')
      .trim()
      .isLength({ min: 2 })
      .customSanitizer((value) => CommonValidator.makeLowerCase(value))
      .isIn(['post', 'get', 'patch', 'delete', 'put']);
  }

  /**
   * Investor create Validator validation
   * @returns {array} an array of Check API middlewares
   * @memberof InvestorValidator
   */
  static checkFields() {
    return CommonValidator.genericCheck('field.*')
      .trim()
      .isLength({ min: 2 })
      .isString();
  }

  /**
   * Investor create Validator validation
   * @returns {array} an array of Check API middlewares
   * @memberof InvestorValidator
   */
  static checkRecord() {
    return CommonValidator.genericCheck('record.*');
  }

  /**
   * List Startup validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkAddRoutes() {
    return [
      RouteValidator.checkName(),
      RouteValidator.checkProfileId(),
      RouteValidator.checkParent(),
      RouteValidator.checkHost(),
      RouteValidator.checkTable(),
      RouteValidator.checkMethod(),
      RouteValidator.checkFields(),
      RouteValidator.checkRecord(),
      checkForErrors,
    ];
  }
}
