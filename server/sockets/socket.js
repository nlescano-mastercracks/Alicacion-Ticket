const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control')



const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente)
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket(),
        ultimo4: ticketControl.getUltimo4()
    })

    client.on('atendetTicket', (data, callback) => {

        if (!data.escritorio) {
            return callback({
                err: true,
                mensaje: 'El escritorio es necesario'
            })
        }
        let atendetTicket = ticketControl.atenderTicket(data.escritorio);
        callback(atendetTicket);

        client.broadcast.emit('ultimo4', {

            ultimo4: ticketControl.getUltimo4()
        })



    })

});