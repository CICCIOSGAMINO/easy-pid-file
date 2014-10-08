easy-pid-file
=============

### Intro
Easy management of the crucial file.pid with minimal impact on the code (no more than one line of code),
with a little and easy implementation the goal of this library is to forget the file.pid management.
Pass a valid path parameter for your OS  ('/var/mynodeprocess.pid'), if the path is not
valid or the process does NOT have the permission to that folder a ENOENT or EACCES raised.

### HOW it works
When you use the requirement statement in the head of the file pass a valid path. The path give the location
of your pid file, example :

    var pidfile = require('./easy-pid-file.js')('meteo.pid');

this path put the meteo.pid file in the project folder.

If you want to put file.pid in system folders like '/run/..' '/var/..' and so on, be sure that your
Node.js process granted the right privilege (otherwise you give back a false and the building of file.pid fails).

### methods
You get only two methods you can use the getPath() and the getState() :

    var pidfile = require('./easy-pid-file.js')('myfile.pid');

    pidfile.getPath();       // get you the path  you have inserted

    pidfile.getState();      // get you the status true(file creted) of false(NOPE)

### example
to use this module use the require and pass the path for place your file.pid :

    var pidfile = require('./easy-pid-file.js')('myprocess.pid');

and if you want handle the boolean returned :

    var pidfile = require('./easy-pid-file.js')('myprocess.pid');
    if(pidfile.getState()){
      // true
    }else{
      // false
    }


### true / false
If the file is created in the path passed you can read the boolean value true with the getState() function :

      var pidfile = require('./easy-pid-file.js')('meteo.pid');
      // use a custom if else clauses if you want manage this case  true / false
      pidfile.getState();

a false value is returned only when raise an exception, tested for a ENOENT and EACCES excpetions. With
a boolean value returned that catch all error you can use it without other complications.


### NO throw
No throw and no error are launched from the module, only a silence true/false concerned all the
operation involved. That's all !!

#### exists / no exists
the library do NOT create new folder, if the path does NOT exists a false is returned and the file.pid
won't be create. The simplicity of this package give at you the responsibility to pass a valid
path in the package call.

That's it, that's all !! 
