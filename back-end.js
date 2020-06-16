
function legalStuff(age){
    if (age <18){
        return 'cant drive or drink'
    }
    else if (age >=18 && age<=20){
        return 'they can drive, no drinking '
    }
    else{
        return 'they can do both'
    }
}






module.exports = legalStuff;

