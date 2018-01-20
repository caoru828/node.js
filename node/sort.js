define(["isarray"],function (isArray) {
    function sort(arr) {
        if(isArray(arr)){
            return arr.sort(function (a, b) {
                return a-b;
            })
        }else{
            return "传入的数组不是数组";
        }
    }
    return sort;
})