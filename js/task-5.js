const countryName = "ЯПОНИЯ";

const CANCELED_BY_USER = 'Отменено пользователем!';
const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
const CHINA = 'Китай';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase();
  switch (country) {

    case CHINA:
      price = 100;
      	message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case AUSTRALIA:
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case INDIA:
      price = 80;
      	message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      case JAMAICA:
      price = 120;
      	message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
      default:
    	message = NO_DELIVERY;
  }
}

console.log(message);
// Write code on this line

//  message = `Доставка в ${country} будет стоить ${price} кредитов`;}

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'