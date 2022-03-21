
import { add, divide } from "./index";
import { Tramite } from "./tramite";

console.log(add(1,0));

var miTramite = new Tramite(10,"tramite 1");
// miTramite.id = 10;
// miTramite.desc = "holaaa";
console.log(miTramite.id);
console.log(miTramite.desc);