// D - TASK  Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.

//MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!



const moment = require('moment');

class Shop {
  constructor(bread, pasta, fanta) {
    this.bread = bread;
    this.pasta = pasta;
    this.fanta = fanta;
    this.log = [];
  }

  getCurrentTime() {
    return moment().format('HH:mm');
  }

  qoldiq() {
    const currentTime = this.getCurrentTime();
    this.log.push(`${currentTime}da ${this.bread}ta bread, ${this.pasta}ta pasta va ${this.fanta}ta fanta mavjud!`);
  }

  sotish(product, quantity) {
    if (this[product] >= quantity) {
      const currentTime = this.getCurrentTime();
      this[product] -= quantity;
      this.log.push(`${currentTime}da ${quantity}ta ${product} sotildi.`);
    } else {
      console.log(`Kechirasiz, bizda yetarli ${product} mavjud emas.`);
    }
  }

  qabul(product, quantity) {
    const currentTime = this.getCurrentTime();
    this[product] += quantity;
    this.log.push(`${currentTime}da ${quantity}ta ${product} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq(); 

shop.sotish('bread', 3);
shop.qabul('pasta', 4);
shop.qoldiq(); 

console.log(shop.log); 


