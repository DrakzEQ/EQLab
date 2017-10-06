const sio      = require('socket.io'),
      sqlEvent = require('./db/db.js').sqlEvent,
      zone     = require("./models/zone.js"),
      env      = process.env.NODE_ENV || "development",
      path     = require("path"),
      config   = require(path.join(__dirname, 'config', 'db.json'))[env],
      dbName   = config.database;

exports.initialize = server => {
  const io = sio(server);
  io.serveClient(false);

  // App
  io.on('connection', socket => {
    console.log('socket.io: User Connected');
    
    // ZoneApp
    socket.on('ZoneApp Loaded', () => {
      const room = 'ZoneApp';
      socket.join(room);
      console.log('socket.io: User Loaded ZoneApp');

      if (io.sockets.adapter.rooms[room].length) {
        const onNewSpawn2 = sqlEvent.add(`${dbName}.spawn2`, async (oldRow, newRow, event) => {
          if (oldRow === null) { 
            let spawn2 = await zone.getSingleSpawn2Tree(newRow.fields.id)
            io.to(room).emit('spawn2insert', spawn2);
          }
        });  
      }

      socket.on('ZoneApp Unloaded', () => {
        socket.leave(room);
        console.log('socket.io: User Unloaded ZoneApp');  
      });
    });

    
    socket.on('disconnect', data => {
      console.log('socket.io: User Disconnected');
    });
  });
};