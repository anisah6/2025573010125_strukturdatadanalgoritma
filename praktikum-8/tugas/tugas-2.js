function subArrayJumlahK(arr, k) {
    const map = new Map();

    map.set(0, 1);

    let prefixSum = 0;
    let jumlah = 0;

    for (const num of arr) {
        prefixSum += num;

        if (map.has(prefixSum - k)) {
            jumlah += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return jumlah;
}

function karakterPertamaUnik(s) {
    const map = new Map();

    for (const huruf of s) {
        map.set(huruf, (map.get(huruf) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

function topKFrequent(arr, k) {
    const map = new Map();

    for (const angka of arr) {
        map.set(angka, (map.get(angka) || 0) + 1);
    }

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([angka]) => angka);
}

console.log("=== Soal 1: Subarray Jumlah K ===");
console.log(subArrayJumlahK([1, 1, 1], 2));
console.log(subArrayJumlahK([1, 2, 3], 3));

console.log("\n=== Soal 2: Karakter Pertama Unik ===");
console.log(karakterPertamaUnik("leetcode"));
console.log(karakterPertamaUnik("loveleetcode"));
console.log(karakterPertamaUnik("aabb"));

console.log("\n=== Soal 3: Top K Frequent ===");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([4, 4, 4, 5, 5, 6], 2));

/*
=================================================
ANALISIS BIG O
=================================================

1. subArrayJumlahK(arr, k)

Menggunakan Prefix Sum + HashMap.

Cara kerja:
- Menyimpan jumlah prefix yang sudah muncul ke dalam Map.
- Jika prefixSum - k ditemukan di Map, berarti ada subarray
  yang jumlah elemennya sama dengan k.

Kompleksitas:
Time Complexity  : O(n)
Space Complexity : O(n)

Solusi Naif:
- Memeriksa semua kemungkinan subarray menggunakan dua loop.

Time Complexity  : O(n²)
Space Complexity : O(1)

Perbandingan:
HashMap membuat pencarian prefix sum menjadi O(1),
sehingga jauh lebih cepat dibanding memeriksa seluruh
subarray satu per satu.

=================================================

2. karakterPertamaUnik(s)

Menggunakan Map untuk menghitung frekuensi karakter.

Cara kerja:
- Loop pertama menghitung frekuensi setiap karakter.
- Loop kedua mencari karakter pertama yang frekuensinya 1.

Kompleksitas:
Time Complexity  : O(n)
Space Complexity : O(n)

Solusi Naif:
- Untuk setiap karakter, hitung kembali jumlah
  kemunculannya pada seluruh string.

Time Complexity  : O(n²)
Space Complexity : O(1)

Perbandingan:
Dengan Map, frekuensi cukup dihitung satu kali sehingga
lebih efisien dibanding menghitung berulang-ulang.

=================================================

3. topKFrequent(arr, k)

Menggunakan Map dan Sorting.

Cara kerja:
- Hitung frekuensi setiap elemen menggunakan Map.
- Urutkan berdasarkan frekuensi terbesar.
- Ambil k elemen pertama.

Kompleksitas:
Time Complexity  : O(n + m log m)
Space Complexity : O(m)

Keterangan:
m = jumlah elemen unik.

Solusi Naif:
- Menghitung frekuensi setiap elemen dengan pencarian
  berulang menggunakan nested loop.

Time Complexity  : O(n²)
Space Complexity : O(1)

Perbandingan:
Map memungkinkan frekuensi dihitung dalam satu kali
traversal array sehingga lebih cepat dan efisien.

=================================================
KESIMPULAN

Penggunaan HashMap (Map) membuat operasi pencarian
dan penyimpanan data memiliki kompleksitas rata-rata
O(1). Oleh karena itu ketiga soal dapat diselesaikan
lebih efisien dibanding solusi naif yang umumnya
menggunakan nested loop dengan kompleksitas O(n²).

=================================================
*/