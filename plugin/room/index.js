var Room = require('../.././model/room');

exports.register = function(server, options, next) {

  server.route([
      {
          method: 'GET',
          path: '/api/rooms',
          handler: function (request, reply) {
            Room.find({}, function(err, rooms){
                  if(err){
                      reply({status : 'error'});
                  }else{
                      reply({
                          status : 'success',
                          data : rooms
                      });
                  }
            });
          }
      }
  ]);

  server.route([
      {
          method: 'POST',
          path: '/api/room',
          handler: function (request, reply) {
              var room = request.payload;
              console.log(room);
              var roomObj = new Room(room);
              roomObj.save(function(err){
                if(err){
                  reply({status : 'error'});
                }else{
                  reply({
                          status : 'success',
                          data : roomObj
                      });
                }
              });
          }
      }
  ]);


    // Callback, completes the registration process
    next();
}

exports.register.attributes = {
    name: 'room', // Must be unique
    version: '1.0.0'
};
