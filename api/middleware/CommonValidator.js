import { check, body } from 'express-validator';
import errorChecker from './errorChecker';

/**
 * @class CommonValidator
 * @classdesc Provides validation middlewares for login and signup route
 */
export default class CommonValidator {
  /**
   * Generic validator to be used by all others
   * @param {string} field
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static genericCheck(field) {
    return check(`${field}`)
      .exists()
      .withMessage(`${field} is missing`)
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage(`${field} cannot be blank`);
  }
   /**
   * Domain Id validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkDomainId() {
    return CommonValidator.genericCheck('domain_id')
      .trim()
      .isInt({ gt: 0, allow_leading_zeroes: false })
      .withMessage(
        'domain_id must be an integer, greater than 0 and must not contain leading zeros'
      );
  }

     /**
   * Domain Id validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkId() {
    return CommonValidator.genericCheck('id')
      .trim()
      .isInt({ gt: 0, allow_leading_zeroes: false })
      .withMessage(
        'id must be an integer, greater than 0 and must not contain leading zeros'
      );
  }

    /**
   * List Startup validator
   * @returns {function} call to a Check API middleware
   * @memberof Validation
   */
  static checkDomainInput() {
    return [
        CommonValidator.checkId(),
        CommonValidator.checkDomainId(),
        errorChecker
    ];
  }

  /**
 * @name makeLowerCase
 * @param {String} value string to be sanitized
 * @returns {String} lower case string
 */
static makeLowerCase (value)  {
  if (value !== '') {
    return value.toLowerCase();
  }
  return value;
};
}