exports.arrSort = function (a) {
    console.log("jjj");
    return a.sort(function (a, b) {
        return a-b;
    })
};
exports.fn = function () {
    console.log("fn");
};
exports.fn();