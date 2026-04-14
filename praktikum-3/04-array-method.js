const nilaiMahasiswa = [75, 90, 55, 82, 68, 95, 77];

console.log('===forEach : Tampilkan Semua Nilai ===');
nilaiMahasiswa.forEach((nilai, indeks) => {
    console.log(`  Mahasiswa-${indeks +1}: ${nilai}`);
});

const gradeHuruf = nilaiMahasiswa.map(nilai => {
    if(nilai >= 90) return 'A';
    if(nilai >= 80) return 'B';
    if(nilai >= 70) return 'C';
    if(nilai >= 60) return 'D';
    return 'E';
});

console.log('\n===map: Nilai ke Grade ===');
console.log('Nilai :', nilaiMahasiswa);
console.log('Grade :', gradeHuruf);

console.log('\n=== filter : Lulus dan Tidak Lulus ===');
const nilaiLulus = nilaiMahasiswa.filter(nilai => nilai >= 75);
const nilaiGagal = nilaiMahasiswa.filter(nilai => nilai < 75);

console.log('Semua nilai  :', nilaiMahasiswa);
console.log('Nilai Lulus  :', nilaiLulus);
console.log('Nilai Gagal  :', nilaiGagal);

const totalNilai = nilaiMahasiswa.reduce((akumulator,nilai) =>{
    return akumulator+ nilai;
}, 0);

const rataRata = totalNilai / nilaiMahasiswa.length;

console.log('\n=== reduce :, Statistik Nilai ===');
console.log('Total nilai  :', totalNilai);
console.log('Rata-rata    :', rataRata.toFixed(2));

const rataRataNilaiLulus = nilaiMahasiswa
     .filter(nilai => nilai => 60)
     .reduce((acc, val, idx, arr) =>{
        return acc + val / arr.length;
     },0);

     console.log('\n=== Method Chaining ===');
     console.log('Rata-rata nilai lulus:', rataRataNilaiLulus.toFixed(2));


     console.log('=== latihan ke : 4');

     const produk =[{nama : 'Laptop', harga: 8500000, stock: 5},{nama : 'Mouse',  harga: 150000, stock: 0},
        {nama : 'Keyboard', harga: 450000, stok : 12},{nama : 'Monitor', harga : 3200000, stok : 0},
        {nama : 'Headset', harga : 350000, stok: 8}];

     const produkTersedia = produk.filter(p => p.stok > 
        0);
     console.log("Produk tersedia :", produkTersedia);

     const namaProduk = produkTersedia.map(p => p.nama);
     console.log("Nama produk tersedia:", namaProduk);

     const totalInventaris = produkTersedia.reduce((total, p) =>{
        return total + (p.harga * p.stok);
     }, 0);
     console.log("Total nilai inventaris:", totalInventaris);

     produk.forEach(p => {
        const status =p.stok > 0 ? "TERSEDIA" : "HABIS" ;

        if (p.stok > 0) {
            console.log(`[${status}] ${p.nama} -Rp$ {p.harga.toLocalestring()} (${p.stok} unit)`);
        }else {
            console.log(`[${status}] ${p.nama} - Rp${p.harga.toLocaleString()}`);
        }
     });