//code created with help from mentors Rohit and Johnny and partner Mathew

const transpose = function (matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const result = [];
    // determine the dimension of the resulting array. exe.: if input array is 2*3 output array will be 3*2
    for (let j = 0; j < cols; j++) {
        result[j] = Array(rows);
    }
    // Push first set of arrays. Switch the position of the result of the array. i, j = j, i
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            result[j][i] = matrix[i][j];
        }
    }
    return result;
};

const wordSearch = (letters, word) => {
    console.log("we are in the function");
    const horizontalJoin = letters.map((ls) => {
        return ls.join('');
    });
    console.log(horizontalJoin)
    for (let i = 0; i < horizontalJoin.length; i++) {
        if (horizontalJoin[i].includes(word)) {
            return true;
        }
    }

    const verticalJoin = transpose(letters).map((ls) => {
        return ls.join('');
    })
    console.log(verticalJoin)
return verticalJoin.some((ls) => ls.includes(word));

    }

    
module.exports = wordSearch
