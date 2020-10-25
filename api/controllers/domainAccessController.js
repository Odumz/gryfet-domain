
/**
 * Gets the details of a single user
 *
 * @param {Object} request express request object
 * @param {Object} response express response object
 * @param {Function} next express next function
 *
 * @returns {Promise<Function | Object>} returns one of express next function or response object
 */

export const invite = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

export const approve = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

export const reject = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};