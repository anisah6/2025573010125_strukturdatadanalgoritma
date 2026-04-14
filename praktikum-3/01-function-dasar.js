function sapa () {
    console.log(`Halo ! selamat datang di praktikum JavaScript.`);
}
sapa();
sapa();

function sapaNama(nama) {
    console.log(`Halo, ${nama}! selamat belajar.`);
}
sapaNama('Budi');;
sapaNama('siti)');

function tambah(angka1, angka2) {
    const hasil = angka1 + angka2;
    return hasil;
}

const hasilpenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilpenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali = 1) {
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));

const pesanGlobal ='saya ada di mana saja';

function cekScope() {
    const pesanLokal = 'saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);
}
cekScope()
console.log(pesanGlobal);

//---LATIHAN 1 : FUNCTION KALKULATOR LENGKAP---

function tambah(a, b){
    return a + b;
}
function kurang(a, b){
    return a - b;
}
function kali(a, b){
    return a * b;
}
function bagi(a, b){
    if (b === 0) {
        console.log("Error : tidak bisa membagi dengan nol");
        return null;
    }
    return a / b;
}

function kalkulator(a, operator ,b) {
    switch (operator) {
        case "+":
            return tambah(a, b);
        case "-":
            return kurang(a, b);
        case "*":
            return kali (a, b);
        case "/":
            return bagi(a, b);
        default:
            return "Operator tidak valid";
            }
}

console.log(kalkulator(10, "+", 5));
console.log(kalkulator(10, "-", 5));
console.log(kalkulator(10, "*", 5));
console.log(kalkulator(10, "/", 5));
console.log(kalkulator(10, "/", 0)); 