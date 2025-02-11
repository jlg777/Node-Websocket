// Importar el módulo 'ws'
import { WebSocketServer } from 'ws'
const PORT = '3030'
// Crear un nuevo servidor WebSocket que escuche en el puerto 3030
const wss = new WebSocketServer({ port: PORT });

// Evento cuando un cliente se conecta al servidor WebSocket
wss.on('connection', function connection(ws) {
  console.log('Cliente conectado');

  // Evento para manejar mensajes recibidos del cliente
  ws.on('message', function incoming(message) {
    console.log('Mensaje recibido: %s', message);

    // Enviar un mensaje de vuelta al cliente
    ws.send('Mensaje recibido por el servidor: ' + message);
  });

  // Evento cuando se cierra la conexión con el cliente
  ws.on('close', function close() {
    console.log('Cliente desconectado');
  });
});

console.log(`servidor WebSocket iniciado en ws://localhost:${PORT}`)