function checkSpam(str) {
    let str_2 = str.toLowerCase();
    return console.log(str_2.includes("viagra") 
    | str_2.includes("xxx") ? true : false);
}
  
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false


