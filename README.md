easy-pid-file
=============

### Intro
Easy management of the crucial file.pid with minimal impact on the code (no more than one line of code),
with a little and easy implementation the goal of this library is to forget the file.pid management.
Be careful with the path parameter,write a value path ('/run/mynodeprocess.pid'). if the path is not
valid or the process does NOT have the permission to that folder a ENOENT or EACCES raised.

### HOW it works
When you use the requirement statement in the head of the file pass a valid path where to put the file with the name
of your pid file, example :

    var pidfile = require('./easy-pin-file.js')('meteo.pid');

this path put the meteo.pid file in the project folder.
If you want to put the file .pid in folder like /run /var and so on on the OS be sure that your Node.js process
granted the right privilege (otherwise a you give back a false and the file does NOT be create).

### example
to use this module require and pass the path :

    var pidfile = require('./easy-pin-file.js')('myprocess.pid');

and if you want handle the boolean returned :

    var pidfile = require('./easy-pin-file.js')('myprocess.pid');
    if(pidfile){
      // true
    }else{
      // false 
    }


### true / false
If the file is created in the path passed you can read the boolean value true with the getState() function :

      var pidfile = require('./easy-pin-file.js')('meteo.pid');
      // use a custom if else clauses if you want manage this case  true / false
      pidfile.getState();

a false value is returned only when raise an exception, tested for a ENOENT and EACCES excpetion. With
a boolean value returned that catch all error you can use it without other complications.


### NO throw
No throw and no error are launch from the module, only a silence true/false concerned all the
operation involved in check the path create or rewrite the file. That's all !!

#### exists / no exists
the library do NOT create new folder if is put in the path then throw an exception
