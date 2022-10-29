const eventEmitter = require('events');
const denemeEmitter=new eventEmitter;

// denemeEmitter.on('dersler', (rakam1,rakam2)=> {
//     console.log(rakam1+rakam2);
// });

// denemeEmitter.emit('dersler', 1,2);

class Isim extends eventEmitter{
    constructor(isim){
        super()
    this.isim1=isim;
    }
    get isim(){
        return this.isim1;
    }


    

}
let Nur= new Isim('Nur');

Nur.on('isim',()=>{
    console.log('Benim adım ' +Nur.isim);

});
Nur.emit('isim');