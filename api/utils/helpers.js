
/**
 * Gets the details of a single user
 *
 * @param {Object} request express request object
 * @param {Object} response express response object
 * @param {Function} next express next function
 *
 * @returns {Promise<Function | Object>} returns one of express next function or response object
 */

const { uuid } = require( "uuidv4" );


 // create query
exports.query_create = async (req, res, next) => {
    try {
        const tablename = req.body.tablename;
        const data = req.body.data;
        const payload = {
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {
                "table_name": tablename,
                "data": data,
                "relationships": [
        
                ]
            }
        }

        // get all domains
        const domains = this.query_fetch(tablename);

        // check if domain exists else create
        // data-service endpoint
        app.post('http://a5d059be08f7d46479b591d06eb3d776-1484042849.eu-west-1.elb.amazonaws.com/query/create', (req, res, next) => {
            domains.findOne({domain_name: req.body.domain_name})
            .exec()
            .then(domain => {
                if (domain) {
                    return res.status(422).json({
                        message: 'Domain exists!'
                    });
                } else {
                    const domain = new domains ({
                        id: uuid(),
                        domain_name: req.body.domain_name,
                        type: req.body.type,
                    });
                    domain.save
                }
                req.post({
                    headers: {'content-type': 'application/json'},
                    // url: `${heroesService}/hero/${req.body.heroId}`,
                    body: payload,
                }, (err, heroResponse, body) => {
                    if (!err) {
                        const threatId = parseInt(req.body.threatId);
                        const threat = threats.find(subject => subject.id === threatId);
                        threat.assignedHero = req.body.heroId;
                        res.status(202).send(threat);
                    } else {
                        res.status(400).send({problem: `Hero Service responded with issue ${err}`});
                    }
                })
                .then(result => {
                    res.status(201).json({
                        message: 'Domain Host saved successfully',
                        payload: result.data,
                    });
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({error: err});
            });

            })
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

// update query
exports.query_update = async (req, res, next) => {
    try {
        const tablename = req.body.tablename;
        const data = req.body.data;

        const payload = {
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {
                "table_name": table_name,
                "where": [
                    {"column": "id", "operation": "=", "value": data.id}
                    ],
                "data": data,
                "order": { "column": "domain_name", "operation": "asc" },
                "count": null
            }
        }

        // update domain details
        // data-service endpoint
        app.post('http://a5d059be08f7d46479b591d06eb3d776-1484042849.eu-west-1.elb.amazonaws.com/query/update', (req, res) => {
            request.post({
                headers: {'content-type': 'application/json'},
                // url: `${heroesService}/hero/${req.body.heroId}`,
                body: payload,
            }, (err, heroResponse, body) => {
                if (!err) {
                    const threatId = parseInt(req.body.threatId);
                    const threat = threats.find(subject => subject.id === threatId);
                    threat.assignedHero = req.body.heroId;
                    res.status(202).send(threat);
                } else {
                    res.status(400).send({problem: `Hero Service responded with issue ${err}`});
                }
            });
          });

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

// get one domain query
exports.query_fetch_one = async (req, res, next) => {
    try {
        const tablename = req.body.tablename;
        const data = req.body.data;
        const payload = {
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {
                "table_name": tablename,
                "where": [
                    {"column": "domain_name", "operation": "=", "value": data.domain_name}
                    ],
                "joins": [],
                "reverse_joins": [],
                "order": { "column": "domain_name", "operation": "asc" },
                "count": null,
                "pagination": null
            }
        }

        // get a particular domain info
        // data-service endpoint
        app.post('http://a5d059be08f7d46479b591d06eb3d776-1484042849.eu-west-1.elb.amazonaws.com/query/retrieve', (req, res) => {
            request.post({
                headers: {'content-type': 'application/json'},
                // url: `${heroesService}/hero/${req.body.heroId}`,
                body: payload,
            }, (err, heroResponse, body) => {
                if (!err) {
                    const threatId = parseInt(req.body.threatId);
                    const threat = threats.find(subject => subject.id === threatId);
                    threat.assignedHero = req.body.heroId;
                    res.status(202).send(threat);
                } else {
                    res.status(400).send({problem: `Hero Service responded with issue ${err}`});
                }
            });
          });

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

// get all domain query
exports.query_fetch = async (req, res, next) => {
    try {
        const tablename = req.body.tablename;
        // const data = req.body.data;
        const payload = {
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {
                "table_name": tablename,
                "where": [],
                "joins": [],
                "reverse_joins": [],
                "order": { "column": "domain_name", "operation": "asc" },
                "count": null,
                "pagination": null
            }
        }

        // get all domains in db
        // data-service endpoint
        app.post('http://a5d059be08f7d46479b591d06eb3d776-1484042849.eu-west-1.elb.amazonaws.com/query/retrieve', (req, res) => {
            request.post({
                headers: {'content-type': 'application/json'},
                // url: `${heroesService}/hero/${req.body.heroId}`,
                body: payload,
            }, (err, heroResponse, body) => {
                if (!err) {
                    const threatId = parseInt(req.body.threatId);
                    const threat = threats.find(subject => subject.id === threatId);
                    threat.assignedHero = req.body.heroId;
                    res.status(202).send(threat);
                } else {
                    res.status(400).send({problem: `Hero Service responded with issue ${err}`});
                }
            });
          });

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

// delete query
exports.query_delete = async (req, res, next) => {
    try {
        const tablename = req.body.tablename;
        const data = req.body.data;

        const payload = {
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {
                "table_name": tablename,
                "where": [
                    {"column": "id", "operation": "=", "value": data.id}
                    ],
                "data": {
                    "domain_name": data.domain_name,
                },
                "order": { "column": "domain_name", "operation": "asc" },
                "count": null
            }
        }
        
        // delete a particular domain
        // data-service endpoint
        app.post('http://a5d059be08f7d46479b591d06eb3d776-1484042849.eu-west-1.elb.amazonaws.com/query/delete', (req, res) => {
            request.post({
                headers: {'content-type': 'application/json'},
                // url: `${heroesService}/hero/${req.body.heroId}`,
                body: payload,
            }, (err, heroResponse, body) => {
                if (!err) {
                    const threatId = parseInt(req.body.threatId);
                    const threat = threats.find(subject => subject.id === threatId);
                    threat.assignedHero = req.body.heroId;
                    res.status(202).send(threat);
                } else {
                    res.status(400).send({problem: `Hero Service responded with issue ${err}`});
                }
            });
          });

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};


exports.table_create = async (req, res, next) => {
    try {

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.table_update = async (req, res, next) => {
    try {

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.table_fetch = async (req, res, next) => {
    try {

        return successResponse(res, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.table_delete = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};


exports.field_create = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.field_update = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.field_fetch = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

exports.field_delete = async (req, res, next) => {
    try {

        return successResponse(response, 'successfully retrieved user', 200, { user: userObject });
    } catch (error) {
        return errorResponse(next, error.message, 500);
    };
};

