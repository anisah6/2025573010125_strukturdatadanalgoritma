class HashMapLinearProbing {
    constructor(kapasitas = 53) {
        this.kapasitas = kapasitas;
        this.ukuran = 0;
        this.tabel = new Array(kapasitas);
        this.DELETED = { deleted: true };
    }

    _hash(key) {
        let hash = 0;
        const PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }

        return hash;
    }

    _loadFactor() {
        return this.ukuran / this.kapasitas;
    }

    _resize() {
        const tabelLama = this.tabel;

        this.kapasitas *= 2;
        this.tabel = new Array(this.kapasitas);
        this.ukuran = 0;

        for (const item of tabelLama) {
            if (item && item !== this.DELETED) {
                this.set(item.key, item.value);
            }
        }
    }

    set(key, value) {
        if (this._loadFactor() > 0.7) {
            this._resize();
        }

        let idx = this._hash(key);

        while (
            this.tabel[idx] &&
            this.tabel[idx] !== this.DELETED &&
            this.tabel[idx].key !== key
        ) {
            idx = (idx + 1) % this.kapasitas;
        }

        if (
            !this.tabel[idx] ||
            this.tabel[idx] === this.DELETED
        ) {
            this.ukuran++;
        }

        this.tabel[idx] = { key, value };
    }

    get(key) {
        let idx = this._hash(key);
        const start = idx;

        while (this.tabel[idx] !== undefined) {
            if (
                this.tabel[idx] !== this.DELETED &&
                this.tabel[idx].key === key
            ) {
                return this.tabel[idx].value;
            }

            idx = (idx + 1) % this.kapasitas;

            if (idx === start) {
                break;
            }
        }

        return undefined;
    }

    has(key) {
        return this.get(key) !== undefined;
    }

    delete(key) {
        let idx = this._hash(key);
        const start = idx;

        while (this.tabel[idx] !== undefined) {
            if (
                this.tabel[idx] !== this.DELETED &&
                this.tabel[idx].key === key
            ) {
                this.tabel[idx] = this.DELETED;
                this.ukuran--;
                return true;
            }

            idx = (idx + 1) % this.kapasitas;

            if (idx === start) {
                break;
            }
        }

        return false;
    }

    keys() {
        const result = [];

        for (const item of this.tabel) {
            if (item && item !== this.DELETED) {
                result.push(item.key);
            }
        }

        return result;
    }

    values() {
        const result = [];

        for (const item of this.tabel) {
            if (item && item !== this.DELETED) {
                result.push(item.value);
            }
        }

        return result;
    }

    infoDistribusi() {
        let terisi = 0;

        for (const item of this.tabel) {
            if (item && item !== this.DELETED) {
                terisi++;
            }
        }

        console.log(
            `Kapasitas: ${this.kapasitas}, Terisi: ${terisi}, Load Factor: ${this._loadFactor().toFixed(2)}`
        );
    }
}

const map = new HashMapLinearProbing();

map.set("javascript", 1);
map.set("python", 2);
map.set("java", 3);
map.set("c++", 4);
map.set("rust", 5);
map.set("go", 6);
map.set("typescript", 7);

console.log("=== HashMap Linear Probing ===");

console.log("get(java):", map.get("java"));
console.log("get(kotlin):", map.get("kotlin"));

console.log("has(python):", map.has("python"));

map.delete("java");

console.log("Setelah hapus java:", map.has("java"));

console.log("Keys:", map.keys());
console.log("Values:", map.values());

map.infoDistribusi();