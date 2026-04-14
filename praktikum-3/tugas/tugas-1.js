const dataMahasiswa =[
    {nama : "Ani",  nilai : 85},
    {nama : "Budi", nilai : 70},
    {nama : "Citra",nilai : 90}, 
    {nama : "Doni", nilai : 60},
    {nama : "Eka",  nilai : 75},
    {nama : "Fajar",nilai : 50}
];

function hitungStatistik(arrMahasiswa) {
    const total = arrMahasiswa.length;

    const hasil = arrMahasiswa.reduce((acc, mhs) => {
        acc.totalNilai += mhs.nilai;
        acc.tertinggi = Math.max(acc.tertinggi,mhs.nilai);
        acc.terendah = Math.min(acc.terendah,mhs.nilai);
        return acc;
    },
    {
        totalNilai :0,
        tertinggi : arrMahasiswa[0].nilai,
        terendah : arrMahasiswa[0].nilai
    }
);
return {
    total,
    rataRata  : hasil.totalNilai / total,
    tertinggi : hasil.tertinggi,
    terendah  : hasil.terendah
};
}

function filterLulus(arrMahasiswa, batasLulus){
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrmahasiswa) {
    return arrMahasiswa,map(mhs => {
        let grade;

        if (mhs.nilai >= 85) grade = "A";
        else if (mhs.nilai >= 75) grade = "B";
        else if (mhs.nilai >= 65) grade ="C";
        else if (mhs.nilai >= 50) grade ="D";
        else grade = "E";

        return { ...mhs, grade };
    });
}

const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 70);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

console.log("=== Statistik ===");
console.log(`Total    : ${statistik.total}`);
console.log(`Rata-rata: ${statistik.rataRata}`);
console.log(`Tetinggi : ${statistik.tertinggi}`);
console.log(`Terendah : ${statistik.terendah}`);

console.log("\n=== Mahasiswa Lulus ===");
mahasiswaLulus.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai}`);
});

console.log("\n=== Mahasiswa dengan Grade ===");
mahasiswaDenganGrade.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai} ({mhs.grade})`);
});