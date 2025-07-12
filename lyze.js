module.exports= function (arr){
    function avg(arr){
        return arr.reduce((sum,val)=>sum+val,0)/arr.length;
    }
    function min(arr){
        return Math.min(...arr);
    }
    function max(arr){
        return Math.max(...arr);
    }
    function length(arr){
        return arr.length;
    }
    return {average: avg(arr), min: min(arr), max: max(arr), length: length(arr)}
}