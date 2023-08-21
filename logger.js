import pino from "pino";

const fileTransport = pino.transport({
  target: "pino/file",
  options: { destination: `${__dirname}/app.log` },
});

export default pino(
  {
    level: "error",
    timestamp: pino.stdTimeFunctions.isoTime,
    node_version: process.version,
    // transport: [
    //   {
    //     level: "error",
    //     type: "file",
    //     filename: "/var/logs/nextjs.log",
    //   },
    // ],
  },
  fileTransport
);

// ({
//     level: 'info',
//     transports: [{
//         level: 'info',
//         type: 'file',
//         filename: '/var/logs/nextjs.log',
//         format: pino.stdSerializer(),
//       },],
// })

/**
 * To use
 * import logger from './logger.js'
 * logger.error(error, 'error here');
 */
