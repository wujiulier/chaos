function findDifferences(obj1, obj2) {
    function isObject(val) {
        return typeof val === 'object' && val !== null;
    }

    function compare(a, b) {
        if (a === b) return; // Values are the same, no need to record

        if (isObject(a) && isObject(b)) {
            if (Array.isArray(a) && Array.isArray(b)) {
                // Compare arrays
                const maxLength = Math.max(a.length, b.length);
                for (let i = 0; i < maxLength; i++) {
                    if (i < a.length && i < b.length) {
                        compare(a[i], b[i]);
                    } else if (i < a.length) {
                        differences[i] = [a[i], undefined];
                    } else {
                        differences[i] = [undefined, b[i]];
                    }
                }
            } else {
                // Compare objects
                const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
                for (const key of keys) {
                    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
                        compare(a[key], b[key]);
                    } else if (a.hasOwnProperty(key)) {
                        differences[key] = [a[key], undefined];
                    } else {
                        differences[key] = [undefined, b[key]];
                    }
                }
            }
        } else {
            // Primitive values or functions
            differences = [a, b];
        }
    }

    let differences = {};
    compare(obj1, obj2);

    return Object.keys(differences).length ? differences : {};
}

// Example usage:
const obj1 = {
    "a": 1,
    "v": 3,
    "x": [],
    "z": {
        "a": null
    }
};

const obj2 = {
    "a": 2,
    "v": 4,
    "x": [],
    "z": {
        "a": 2
    }
};

const obj3 = {}
const obj4 = {
  "a": 1, 
  "b": 2
}

console.log(findDifferences(obj1, obj2));
console.log(findDifferences(obj3, obj4));
