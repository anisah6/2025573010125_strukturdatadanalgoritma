class Produk {
  constructor(id, nama, harga, stok) {
    this.id = id;
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  info() {
    return `ID: ${this.id}, Nama: ${this.nama}, Harga: ${this.harga}, Stok: ${this.stok}`;
  }

  tersedia() {
    return this.stok > 0;
  }

  jual(jumlah) {
    if (jumlah > this.stok) {
      console.log(`Stok ${this.nama} tidak cukup!`);
      return;
    }
    this.stok -= jumlah;
    console.log(`Berhasil menjual ${jumlah} ${this.nama}. Sisa stok: ${this.stok}`);
  }
}

// =========================================
// CLASS PRODUK DIGITAL
// =========================================
class ProdukDigital extends Produk {
  constructor(id, nama, harga, ukuranFile, formatFile) {
    super(id, nama, harga, 999); // stok tidak relevan
    this.ukuranFile = ukuranFile;
    this.formatFile = formatFile;
  }

  info() {
    return `${super.info()}, Ukuran: ${this.ukuranFile}MB, Format: ${this.formatFile}`;
  }

  download() {
    console.log(`${this.nama} sedang didownload...`);
  }

  jual() {
    console.log(`${this.nama} berhasil dibeli (produk digital tidak mengurangi stok).`);
  }
}

class ProdukFisik extends Produk {
  constructor(id, nama, harga, stok, beratGram, dimensi) {
    super(id, nama, harga, stok);
    this.beratGram = beratGram;
    this.dimensi = dimensi;
  }

  info() {
    return `${super.info()}, Berat: ${this.beratGram}g, Dimensi: ${this.dimensi}`;
  }

  hitungOngkir(tarifPerKg) {
    const beratKg = this.beratGram / 1000;
    return beratKg * tarifPerKg;
  }
}

const daftarProduk = [
  new ProdukDigital(1, "Ebook JS", 50000, 5, "PDF"),
  new ProdukDigital(2, "Video Course", 150000, 1000, "MP4"),
  new ProdukFisik(3, "Laptop", 7000000, 5, 2000, "30x20x5 cm"),
  new ProdukFisik(4, "Mouse", 200000, 10, 200, "10x5x3 cm"),
];

console.log("\n=== Semua Produk ===");
daftarProduk.forEach((p) => console.log(p.info()));

console.log("\n=== Produk Tersedia ===");
const tersedia = daftarProduk.filter((p) => p.tersedia());
tersedia.forEach((p) => console.log(p.nama));

console.log("\n=== Nama Produk ===");
const namaProduk = daftarProduk.map((p) => p.nama);
console.log(namaProduk);