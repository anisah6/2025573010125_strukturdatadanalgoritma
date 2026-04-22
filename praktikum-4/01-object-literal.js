const mahasiswa = {
    nama    : 'Budi Santoso',
    umur    :  20,
    jurusan : 'Teknik Informatika',
    ipk     :  3.75,
    aktif   : true,
};

console.log('=== Akses Property ===');
console.log('Nama       :', mahasiswa.nama);
console.log('Jurusan    :',mahasiswa['jurusan']);

const keyYangDicari = 'ipk';
console.log('IPK    :', mahasiswa[keyYangDicari]);

mahasiswa.email = 'budi@email.com';
mahasiswa.umur  = 21;

console.log('\nSetelah diubah:', mahasiswa);

delete mahasiswa.aktif;
console.log('Setelah delete:', mahasiswa);

const dosen = {
    nama        : 'Dr. Ahmad Fauzi',
    mataKuliah  : 'Struktur Data',
    pengalaman  : 10,   //tahun 

    perkenalan() {
        return `Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },
    
    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};
console.log('\n=== Method Object');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log('\n=== Iterasi Object');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(` ${key}: ${dosen[key]}`);
    }
}

//Object.keys(), Object.values(), Object.entries()
console.log('Keys   :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));

// Latihan 1 Object Buku dan Perpustakaan

const buku = {
    judul          : "Algoritma dan Struktur Data",
    pengarang      : "Dr. Ahmad Fauzi",
    tahunTerbit    :  2022,
    harga          :  100000,
    tersedia       :  true,

    info: function() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun : ${this.tahunTerbit}, Harga : Rp$(this.harga), Tersedia : ${this.tersedia}`;
    },

    diskon : function (persen) {
        return this.harga -(this.harga * persen / 100);
    }
};

console.log("=== INFO BUKU ===");
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));

const koleksiBuku = [
    {
        judul         : "JavaScript Dasar",
        pengarang     : "Andi",
        tahunTerbit   :  2021,
        harga         :  85000,
        tersedia      :  true
    },
    {
        judul         : "pemrograman C",
        pengarang     : "Budi",
        tahunTerbit   : 2020,
        harga         : 90000,
        tersedia      : false
    },
    {
        judul         : "Database MySQL",
        pengarang     : "Citra",
        tahunTerbit   :  2023,
        harga         :  95000,
        tersedia      :  true
    }
];

console.log("\n=== DAFTAR KOLEKSI BUKU ===");
koleksiBuku.forEach(function (item, index) {
    console.log(`${index + 1}. ${item.judul} - $ {item.pengarang}`);
});

const bukuTersedia = koleksiBuku.filter(function(item) {
    return item.tersedia === true ;
});

console.log("\n === BUKU YANG TERSEDIA ===");
console.log(bukuTersedia);