const winston = require('winston');
require('winston-daily-rotate-file');
const appRoot = require('app-root-path');


const logger = winston.createLogger({
    transports: [
        new winston.transports.DailyRotateFile ({
            filename: 'application-%DATE%.log',
            dirname: `${appRoot}/logs/`,
            level: 'info',
            handleExceptions: true,
            colorize: true,
            json: false,
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'        
        })
    ],
    exitOnError: false
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        level: 'debug'
    }));
}

logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

module.exports = logger;