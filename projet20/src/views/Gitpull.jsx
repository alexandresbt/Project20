import React from "react"; 

var sys = require('sys');

var exec = require('child_process').exec;

var child;

class Gitpull extends React.Component {


  child = exec("cd /root/projet20/Project20 && git pull", function (error, stdout, stderr) {

    sys.print('stdout: ' + stdout);
  
    sys.print('stderr: ' + stderr);
  
    if (error !== null) {
  
      console.log('exec error: ' + error);
  
    }
  
  });
}

export default Gitpull;
