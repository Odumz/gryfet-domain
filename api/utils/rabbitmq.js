const amqp = require('amqplib');
const { logger } = require('../helper');

const directExchange = (message) => {
    amqp.connect(process.env.OCX_RABBITMQ_URL).then(function(conn) {
        return conn.createChannel().then(function(ch) {
          const ex = 'direct_logs';
          const ok = ch.assertExchange(ex, 'direct', {durable: true});
      
          return ok.then(function() {
            ch.publish(ex, 'info', Buffer.from(message));
            logger.info(" [x] Sent %s:'%s'", 'info', message);
            return ch.close();
          });
        }).finally(function() { conn.close(); });
      }).catch(logger.error);
}

module.exports = directExchange;