class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(data) { // O(1)
        const node = new Node(data);

        if (!this.tail) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.size++;
    }

    dequeue() { // O(1)
        if (this.isEmpty()) return null;

        const data = this.head.data;
        this.head = this.head.next;

        if (!this.head) this.tail = null;

        this.size--;
        return data;
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
        let cur = this.head;

        while (cur) {
            console.log(
                `ID:${cur.data.id} | ${cur.data.nama} | ${cur.data.prioritas}`
            );
            cur = cur.next;
        }
    }
}

class Pasien {
    constructor(id, nama, prioritas, waktuDaftar) {
        this.id = id;
        this.nama = nama;
        this.prioritas = prioritas;
        this.waktuDaftar = waktuDaftar;
    }
}

class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa = new Queue();
    }

    daftar(pasien) {
        if (pasien.prioritas === "darurat") {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }

        console.log(
            `${pasien.nama} berhasil didaftarkan (${pasien.prioritas})`
        );
    }

    layani() {
        let pasien = null;

        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        }

        if (pasien) {
            console.log(
                `Melayani: ${pasien.nama} (${pasien.prioritas})`
            );
        } else {
            console.log("Tidak ada pasien dalam antrian");
        }
    }

    tampilkanAntrian() {
        console.log("\n=== ANTRIAN DARURAT ===");

        if (this.antrianDarurat.isEmpty()) {
            console.log("Kosong");
        } else {
            this.antrianDarurat.print();
        }

        console.log("\n=== ANTRIAN BIASA ===");

        if (this.antrianBiasa.isEmpty()) {
            console.log("Kosong");
        } else {
            this.antrianBiasa.print();
        }
    }
}

// ==========================
// SIMULASI
// ==========================

const rs = new AntrianRS();

const dataPasien = [
    new Pasien(1, "Andi", "biasa", Date.now()),
    new Pasien(2, "Budi", "darurat", Date.now()),
    new Pasien(3, "Citra", "biasa", Date.now()),
    new Pasien(4, "Dina", "darurat", Date.now()),
    new Pasien(5, "Eko", "biasa", Date.now()),
    new Pasien(6, "Farah", "darurat", Date.now()),
    new Pasien(7, "Gina", "biasa", Date.now()),
    new Pasien(8, "Hadi", "darurat", Date.now()),
    new Pasien(9, "Indah", "biasa", Date.now()),
    new Pasien(10, "Joko", "darurat", Date.now())
];

for (const pasien of dataPasien) {
    rs.daftar(pasien);
}

rs.tampilkanAntrian();

console.log("\n=== PROSES PELAYANAN ===");

while (
    !rs.antrianDarurat.isEmpty() ||
    !rs.antrianBiasa.isEmpty()
) {
    rs.layani();
}