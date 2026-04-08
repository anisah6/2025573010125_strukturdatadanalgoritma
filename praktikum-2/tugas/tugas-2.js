console.log('===KALKULATOR BMI (BODY MASS INDEX)===');
let berat = 68;      // kg
let tinggi = 1.72;   // meter

let bmi = berat / (tinggi * tinggi);
let kategori = "";

// Menentukan kategori BMI
if (bmi < 18.5) {
    kategori = "Kurus";
} else if (bmi < 25) {
    kategori = "Normal";
} else if (bmi < 30) {
    kategori = "Kelebihan Berat";
} else {
    kategori = "Obesitas";
}

// Tampilkan hasil
console.log(
    "Berat: " + berat + " kg | Tinggi: " + tinggi +
    " m | BMI: " + bmi.toFixed(2) +
    " | Kategori: " + kategori
);