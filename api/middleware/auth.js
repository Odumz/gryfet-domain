const jwt = require ('jsonwebtoken');

export const protect = (req, res, next) => {
    try {
        const bearer = req.headers.authorization;
        if (!bearer || !bearer.startsWith('Bearer ')) {
            return res.status(401).end()
          }
        const token = bearer.split(' ')[1].trim();
        const decoded = jwt.verify(token, process.env.AUTH_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
};

export const verifyAccess = (req, res, next) => {
    try {
        const data = ({
            "OCX Schema": "v1",
            "OCXType": "Request",
            "OCXComponent": "OCXDomain",
            "OCXPayload": {}
          })
    } catch (e) {
        return res.status(500).end();
    }
};

export const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.AUTH_KEY, (err, payload) => {
      if (err) {
          return reject(err);
      }
      resolve(payload);
    })
  })