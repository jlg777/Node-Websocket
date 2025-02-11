const socket = new WebSocket('ws://localhost:3030');

socket.onopen = () => {
  console.log('Conexión establecida');
  socket.send('¡Hola desde el cliente!');
};

socket.onmessage = (event) => {
  console.log('Mensaje recibido:', event.data);
};

socket.onclose = () => {
  console.log('Conexión cerrada');
};