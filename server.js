// Importar el módulo 'ws'
import { WebSocketServer } from 'ws'
const PORT = '3030'
// Crear un nuevo servidor WebSocket que escuche en el puerto 3030
const wss = new WebSocketServer({ port: PORT });

let clientIdCounter = 1;
const clients = new Map();

// Evento cuando un cliente se conecta al servidor WebSocket
wss.on('connection', function connection(ws) {
  const clientId = clientIdCounter++;
  console.log(`Cliente ${clientId} conectado`);

   // Almacenar el WebSocket y su ID
   clients.set(clientId, ws);

  // Evento para manejar mensajes recibidos del cliente
  ws.on('message', function incoming(message) {
    console.log(`Cliente ${clientId} envió el mensaje: ${message}`);

    // Enviar un mensaje de vuelta al cliente
    ws.send(`Mensaje recibido por el servidor. Tu ID es: ${clientId}`);
  });

  // Evento cuando se cierra la conexión con el cliente
  ws.on('close', function close() {
    console.log(`Cliente ${clientId} desconectado`);
    clients.delete(clientId);  });
});

console.log(`servidor WebSocket iniciado en ws://localhost:${PORT}`)