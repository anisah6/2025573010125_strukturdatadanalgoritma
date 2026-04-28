function jumlahArray(arr) {
    let total = 0;
    for (const x of arr) total +=x;
    return total;
}
 function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
 }

 function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif( n - 1);
 }

 function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i;
    return hasil;
 }

 const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 console.log('Jumlah array    :', jumlahArray(arr));
 console.log('Duplikasi array :', duplikasiArray(arr));
 console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
 console.log('faktorial 10 iteratif:', faktorialIteratif(10));

 function hitungUnik(arr) {
    const seen = new Set();
    for (const x of arr) seen.add(x);
    return seen.size;
 }
 const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
 console.log('Elemen unik:', hitungUnik(dataAcak));

 console.log('Latihan : 3 Class BankAccount');
 
 function cariPasanganLambat(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[i] === target) {
                return [arr[i], arr[i]];
            }
        }
    }
    return null;
 }

 function cariPasanganCepat(arr, target) {
    let seen = new Set();

    for (let num of arr) {
        let pasangan = target - num;

        if (seen.has(pasangan)) {
            return [pasangan, num];
        }
        seen.add(num);
    }
    return null;
 }

 let data = [2, 7, 11, 15];
 let target = 9;

 console.log("Hasil Lambat :",
    cariPasanganLambat(data, target));
    console.log("Hasil Cepat :", cariPasanganCepat(data,target));

    let arrayBesar = [];

    for (let i = 0; i < 5000; i++) {
        arrayBesar.push(Math.floor(Math.random() * 100000));
    }

    let targetTidakAda = -1;

    console.time("Waktu Lambat");
    cariPasanganLambat(arrayBesar, targetTidakAda);
    console.timeEnd("Waktu Lambat");

    console.time("Waktu Cepat");
    cariPasanganCepat(arrayBesar, targetTidakAda);
    console.timeEnd("Waktu Cepat");

    console.log("/nKesimpulan:");
    console.log("Fungsi cepat lebih baik untuk data besar karena O(n).");
    console.log("Trade-off: membutuhkan memori tambahan untuk Set.");
    console.log("Fungsi lambat tidak butuh memori tambahan, tapi sangat lambat untuk data besar.");