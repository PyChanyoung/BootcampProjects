function fibonacci(n) {
    var arr =[];
    for (var i = 0; i < n.length; i++) {
        arr.push(i);
        if (n > 2) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}