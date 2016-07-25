export default (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');

    // socket.on('EXAMPLE_EVENT', () => {
    //   console.log('EXAMPLE_EVENT');
    //   socket.emit('EXAMPLE_EVENT_EMITTED', { data });
    // });

    socket.on('disconnect', () => {
      console.log('a user disconnected');
    });

    socket.on('error', () => {
      console.log('Socket error');
    });
  });
};
