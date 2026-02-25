
let str = "saippuakauppias";
let reverseStr = '';
for (let i= str.length -1; i>= 0; i--){
    reverseStr += str[i];
}

if(str == reverseStr){
    console.log("Sana on palindromi")
}
else{
    console.log("Sana ei ole palindromi")
}