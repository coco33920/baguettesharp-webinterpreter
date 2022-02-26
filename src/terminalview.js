import {Terminal} from "./resources/terminal"
export class Terminalview {

    attached (){
        console.log("Loading terminal....")

        var commands = {
            hi: function() {
              return '<span>Hi there!</span><br/>'
            }
          }
        
        Terminal.init(document.getElementById("terminal"), commands, document.getElementById("toclick"))
        
       
    }


}