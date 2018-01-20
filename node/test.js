//require.js  AMD
define(["sort"],function (sort) {
    var arr = [4,1,3,11];
    console.log(sort(arr));_
})

//sea.js CMD
define(function (require) {
    var arr  = [4,5,2,1];
    var sort = require("sort");
    console.log(sort(arr));
});