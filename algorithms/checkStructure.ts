function isValid(a) {
    // Write your code here
    var checkLeft = function (root, l) {
        for (let e of l) {
            if (e > root) {
                return false;
            }
        }
        return true;
    };

    var checkRight = function (root, r) {
        for (let e of r) {
            if (e < root) {
                return false;
            }
        }
        return true;
    };

    var constructTree = function (t) {
        let len = t.length;
        if (len <= 1) {
            return true;
        }

        let root = t[0];
        let switchPoint = len;

        for (let i = 1; i < len; i++) {
            if (t[i] > root) {
                switchPoint = i;
                break;
            }
        }

        let left = t.slice(1, switchPoint);
        let right = [];
        if (len !== switchPoint) {
            right = t.slice(switchPoint);
        }

        if (checkLeft(root, left) && checkRight(root, right)) {
            return (constructTree(left) && constructTree(right))
        } else {
            return false;
        }
    }

    if (constructTree(a) === false) {
        return "NO"
    }
    return "YES";
}


console.log(isValid([2, 1, 3]));
console.log(isValid([1, 3, 2]));
console.log(isValid([3, 2, 1, 5, 4, 6]));
console.log(isValid([3, 4, 5, 1, 2]));
console.log(isValid([1, 3, 4, 2]));