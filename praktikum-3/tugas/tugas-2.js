function pangkat (basis, eksponen) {
    if (eksponen === 0) return 1;
    return basis * pangkat(basis, eksponen - 1);
} 

function balikString(str) {
    if (str.length <= 1) return str;
    return str[str.length - 1] +
    balikString(str.slice(0, -1));
}

function cekPalindrom(str) {
    return str === balikString(str);
}

console.log('=== Pangkat ===');
console.log(pangkat(2, 3));
console.log(pangkat(5, 2));

console.log('\n === Balik string ===');
console.log(balikString("halo"));
console.log("data");

console.log("\n === Cek Palindrom ===");
const kata = ["katak", "civic", "level", "halo"];

kata.forEach(k => {
    console.log(`${k} -> ${cekPalindrom(k) ? "Palindrom" : "Bukan"}`);
});