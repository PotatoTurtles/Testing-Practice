module.exports= function (word){
    let reversed ='';

    for(let i = 0;i<word.length;i++){
        reversed+=word[word.length-1-i];
    }

    return reversed
}