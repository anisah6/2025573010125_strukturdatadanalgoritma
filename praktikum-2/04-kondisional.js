let nilaiUjian = 78;

console.log('=== Konversi Grade ===');
console.log('Nilai:', nilaiUjian);

if (nilaiUjian >= 90) {
    console.log('Grade: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
    console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
    console.log('Grade: C (cukup)');
} else if (nilaiUjian >= 60) {
    console.log('Grade: D (kurang)');
} else {
    console.log('Grade:E (Tidak Lulus)');
}

let namaHari = 'Rabu';

console.log('\n=== Cek Jenis Hari ===');
switch (namaHari) {
    case 'senin':
    case 'selasa':
    case 'rabu':
    case 'kamis':
    case 'jumat':
        console.log('${namaHari} adalah hari kerja.');
        break;
    case 'sabtu':
    case 'minggu':
        console.log('${namaHari} adalah akhir pekan.');
        break;
    default:
        console.log('Nama hari tidak dikenali.');

    let nilaiAkhir = 65;
    let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';

    console.log('\n=== Status Kelulusan ===');
    console.log('Nilai ${nilaiAkhir}: ${statusLulus}');

    console.log('=== LATIHAN 2 ===');
    // 2. Deklarasi variabel bulan
const bulan = 7;

let musim;

if (bulan === 12 || bulan === 1 || bulan === 2) {
    musim = "Dingin";
} else if (bulan === 3 || bulan === 4 || bulan === 5) {
    musim = "Semi";
} else if (bulan === 6 || bulan === 7 || bulan === 8) {
    musim = "Panas";
} else if (bulan === 9 || bulan === 10 || bulan === 11) {
    musim = "Gugur";
} else {
    musim = "Bulan tidak valid";
}

console.log(`Bulan ${bulan} termasuk musim ${musim}`);

const adaAwan = true;
const adaAngin = false;

console.log(`Apakah cuaca mendung dan berangin? ${adaAwan && adaAngin}`);
console.log(`Apakah ada awan atau angin? ${adaAwan || adaAngin}`);
console.log(`Apakah langit cerah (tidak ada awan)? ${!adaAwan}`);





}