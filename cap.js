function capitalization(word) {
    if(word.length>0){
        return `${word[0].toUpperCase()}${word.slice(1)}`;
    }
    else{
        return null
    }
}

module.exports=capitalization;