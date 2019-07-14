var socket = io();
var label1 = $('#lblTicket1');
var label2 = $('#lblTicket2');
var label3 = $('#lblTicket3');
var label4 = $('#lblTicket4');

var lblEsc1 = $('#lblEscritorio1');
var lblEsc2 = $('#lblEscritorio2');
var lblEsc3 = $('#lblEscritorio3');
var lblEsc4 = $('#lblEscritorio4');


var lblT = [label1, label2, label3, label4];
var lblE = [lblEsc1, lblEsc2, lblEsc3, lblEsc4];

socket.on('estadoActual', function(data) {
    actualizaHTML(data.ultimo4);

})

socket.on('ultimo4', function(data) {

    var audio = new Audio('audio/new-ticket.mp3');
    console.log(audio);
    debugger
    audio.play;
    actualizaHTML(data.ultimo4);
})

function actualizaHTML(ultimo4) {
    for (let i = 0; i < ultimo4.length; i++) {
        lblT[i].text('Ticket ' + ultimo4[i].numero);
        lblE[i].text('Escritorio ' + ultimo4[i].escritorio)

    }

}