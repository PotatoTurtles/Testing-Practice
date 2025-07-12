module.exports=function (word,num){
    let total = "";
    for(let i = 0; i<word.length;i++){
        let char = word.charCodeAt(i);

        if(char>=65&&char<=90){
            total+=String.fromCharCode((word.charCodeAt(i)+num-65)%26+65);
        }
        else if(char>=97&&char<=122){
            total+=String.fromCharCode((word.charCodeAt(i)+num-97)%26+97);
        }
        else{
            total+=word[i];
        }
        
    }
    return total
}