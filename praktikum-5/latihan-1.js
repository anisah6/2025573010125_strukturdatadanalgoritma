function fnA(n) {
    return n * 2;
}

function fnB(n) {
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

function fnC(n) {
    for (let i = 1; i < n; i *= 2) {
        console.log(i);
    }
}

function fnD(arr) {
    arr.forEach(x => {
        arr.forEach(y => {
        arr.forEach(z => {
            console.log(x, y, z);
        });
    });
});
}

function hitungKompleksitas(n, fn, tipe = "n") {
    const start = Date.now();

    if (tipe === 'array') {
        const arr = Array.from({ length:n}, (_, i) => i);
        fn(arr);
    } else {
        fn(n);
    }

    const end = Date.now();
    console.log(`Waktu eksekusi: 4{end - start} ms\n`);
}


console.log("Fungsi A: ");
hitungKompleksitas(1000, fnA);

console.log("Fungsi B: ");
hitungKompleksitas(1000, fnB);

console.log("Fungsi C: ");
hitungKompleksitas(1000, fnC);

console.log("Fungsi D: ");
hitungKompleksitas(1000, fnD, "array");