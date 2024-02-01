let altura = Number(prompt('Digita a sua altura: '));
let peso = Number(prompt('Digite o seu peso: '));

let imc1 = peso / (altura * altura);
let imc2 = peso / (altura ** 2);
// let imc = peso / (altura**2); Exponenciação

alert(`O seu IMC é de: ${imc1} , ${imc2}`);