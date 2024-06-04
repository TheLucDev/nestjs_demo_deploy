"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston = require("winston");
require("winston-daily-rotate-file");
const fs = require("fs");
const path = require("path");
const logDir = 'logs';
const datePattern = 'YYYY-MM-DD-HH';
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
const transport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, 'log-%DATE%.log'),
    datePattern,
    zippedArchive: false,
});
transport.on('rotate', function (oldFilename, newFilename) {
    console.log('log all');
});
const errorTransport = new winston.transports.DailyRotateFile({
    filename: path.join(logDir, 'error-%DATE%.log'),
    datePattern,
    zippedArchive: false,
    level: 'error',
});
const loggerWinston = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.json(), winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }))
        }),
        transport,
        errorTransport
    ],
});
const loggerAction = (level, message) => {
    loggerWinston.log({
        level,
        message: `(${new Date().toISOString()}) ${message}`
    });
};
exports.logger = {
    error: (message) => { loggerAction('error', message); },
    warn: (message) => { loggerAction('warn', message); },
    info: (message) => { loggerAction('info', message); },
    http: (message) => { loggerAction('http', message); },
    verbose: (message) => { loggerAction('verbose', message); },
    debug: (message) => { loggerAction('debug', message); },
    silly: (message) => { loggerAction('silly', message); },
};
//# sourceMappingURL=logger.js.map