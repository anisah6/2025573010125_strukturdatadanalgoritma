function intersectionN2(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
    }
    return result;
}

// O(n) pakai Set
function intersectionSet(arr1, arr2) {
    let set2 = new Set(arr2);
    return [...new Set(arr1.filter(x => set2.has(x)))];
}
// Time: O(n), Space: O(n)

function groupAnagrams(arr) {
    let map = {};

    for (let word of arr) {
        let key = word.split('').sort().join('');
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    return Object.values(map);
}

function pythagorasN3(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (arr[i] + arr[j] === arr[k] * arr[k]) {
                    return true;
                }
            }
        }
    }
    return false;
}

function pythagorasOptimized(arr) {
    arr.sort((a, b) => a - b);

    let n = arr.length;

    for (let k = n - 1; k >= 0; k--) {
        let left = 0;
        let right = k - 1;

        while (left < right) {
            let sum = arr[left] + arr[right];
            let target = arr[k] * arr[k];

            if (sum === target) return true;
            else if (sum < target) left++;
            else right--;
        }
    }
    return false;
}

console.log("=== Fungsi A ===");
console.log(intersectionN2([1,2,3], [2,3,4]));
console.log(intersectionSet([1,2,3], [2,3,4]));

console.log("\n=== Fungsi B ===");
console.log(groupAnagrams(['eat','tea','tan','ate','nat','bat']));

console.log("\n=== Fungsi C ===");
console.log(pythagorasN3([1,2,3,4,5]));
console.log(pythagorasOptimized([1,2,3,4,5]));