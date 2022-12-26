var amqp = require('amqplib/callback_api');

amqp.connect('amqp://admin:admin@localhost:5672', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'queue.task';

        var msg = process.argv.slice(2).join(' ') || "Hello World!";

        // create when not exist queue 
        channel.assertQueue(queue, {
            durable: true
        });

        // send to queue
        channel.sendToQueue(queue, Buffer.from(msg), {
            persistent: true
        });

        console.log(" [x] Sent '%s'", msg);
    });
    setTimeout(function() {
        connection.close();
        process.exit(0);
    }, 500);
});
