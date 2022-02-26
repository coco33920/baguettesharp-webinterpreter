import {PLATFORM} from 'aurelia-pal';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './resources/terminal'
export class App {
  
  created () {
    console.log("App loaded")
    console.log("so whyy?")
  }

  //configure router
  configureRouter(config, router){
    config.title = "Baguette# Web Interpreter"
    config.options.pushStates = true
    config.options.root = "/"

    this.router = router
  }
  
  message = 'Hello World!';
}
