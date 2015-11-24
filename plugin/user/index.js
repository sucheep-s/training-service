var User = require('../.././model/user');

exports.register = function(server, options, next) {

    server.route([
        {
            method: 'GET',
            path: '/api/users',
            handler: function (request, reply) {
            	User.find({}, function(err, users){
                    if(err){
                        reply({status : 'error'});
                    }else{
                        reply({
                            status : 'success',
                            data : users
                        });
                    }

            	});
            }
        }
    ]);

    server.route([
        {
            method: 'GET',
            path: '/api/user/{id}',
            handler: function (request, reply) {
              var userId = request.params.id
            	User.findOne({_id : userId}, function(err, user){
                    if(err){
                        reply({status : 'error'});
                    }else{
                        reply({
                            status : 'success',
                            data : user
                        });
                    }

            	});
            }
        }
    ]);

    server.route([
        {
            method: 'POST',
            path: '/api/user',
            handler: function (request, reply) {
                var user = request.payload;
                var userObj = new User(user);
                userObj.save(function(err){
                	if(err){
                		reply({status : 'error'});
                	}else{
                		reply({
                            status : 'success',
                            data : userObj
                        });
                	}
                });
            }
        }
    ]);

    server.route([
        {
            method: 'PUT',
            path: '/api/user',
            handler: function (request, reply) {
                var updateUser = request.payload;
                User.update({ '_id' : updateUser._id}, updateUser, function(err, result){
                	if(err){
                		reply({status : 'error'});
                	}else{
                		reply({
                            status : 'success',
                            data : updateUser
                        });
                	}
                });
            }
        }
    ]);

    server.route([
        {
            method: 'PUT',
            path: '/api/booking',
            handler: function (request, reply) {
                var updateUser = request.payload;
                User.update({ '_id' : updateUser.userId}, updateUser, function(err, result){
                	if(err){
                		reply({status : 'error'});
                	}else{
                		reply({
                            status : 'success',
                            data : updateUser
                        });
                	}
                });
            }
        }
    ]);

    server.route([
        {
            method: 'GET',
            path: '/api/booking/{userId}',
            handler: function (request, reply) {
              var userId = request.params.userId
              User.findOne({_id : userId}).populate('rooms').exec(function(err, users){
                    if(err){
                        reply({status : 'error'});
                    }else{
                        reply({
                            status : 'success',
                            data : users
                        });
                    }
            	});
            
            }
        }
    ]);

    server.route([
        {
            method: 'DELETE',
            path: '/api/user/{userId}',
            handler: function (request, reply) {

                var deleteUser = request.params.userId;
                User.remove({ '_id' : deleteUser}, function(err, result){
                	if(err){
                		reply({status : 'error'});
                	}else{
                		reply({status:'success'});
                	}
                });

            }
        }
    ]);

    // Callback, completes the registration process
    next();
}

exports.register.attributes = {
    name: 'user', // Must be unique
    version: '1.0.0'
};
