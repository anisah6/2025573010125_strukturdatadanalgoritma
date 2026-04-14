const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai     = [85, 92, 78, 95, 88];

console.log('=== Array Awal ===');
console.log('Mahasiswa :', mahasiswa);
console.log('Nilai     :', nilai);
console.log('Jumlah mahasiswa :', mahasiswa.length);

console.log('\n=== Akses Elemen ===');
console.log('Elemen pertama  :', mahasiswa[0]);
console.log('Elemen ketiga   :', mahasiswa[2]);
console.log('Elemen terakhir :', mahasiswa[mahasiswa.length - 1]);

mahasiswa[1] = 'siti Rahayu';
console.log('\nsetelah diubah', mahasiswa);

console.log('\n=== Manipulasi array ===');
mahasiswa.push ('Doni');
console.log('setelah push   :', mahasiswa);

mahasiswa.unshift('Zahra');
console.log('setelah unshift :',mahasiswa);

const dihapusAkhir = mahasiswa.pop();
console.log('Dihapus (pop)  :', dihapusAkhir);
console.log('setelah pop  :', mahasiswa);

let dihapusAwal = mahasiswa.shift();
console.log('Dihapus (shift):', dihapusAwal);
console.log('setelah shift  :', mahasiswa);

console.log("\n== Pencarian ===");
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina?    :', mahasiswa.includes('Rina'));
console.log('Ada Budi?    :', mahasiswa.includes('Budi'));

const sebagian = nilai.slice(1, 4);
console.log('\nNilai asli   :', nilai);
console.log('Slice [1, 4] :', sebagian);

console.log("===latihan 3 ; manajemen daftar belanja");

let daftarBelanja = ["Beras", "Gula", "Minyak", "Telur", "Kopi"];

console.log("Daftar Belanja :");
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log('${i + 1}. ${daftarBelanja[i]}');
}

daftarBelanja.push("Susu");
daftarBelanja.push("Roti");

console.log("\nSetelah menambah item : ");
console.log(daftarBelanja);

let hapusAwal = daftarBelanja.shift();
console.log('Dihapus (shift) :', hapusAwal);

let adaSusu = daftarBelanja.shift();
if (adaSusu) {
    console.log("Item 'Susu' ada didalam daftar.");
} else{
    console.log("Item 'Susu' tidak ada di dalam daftar.");
}
console.log(`\nJumlah item akhir : $ {daftarBelanja.length}`);