 
//  feeToMile

function feetToaMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToaMile(42240);
console.log(result);


// woodcalculator

function woodcaculator(chair,table, bed){
    var chairtCount = chair * 12;
    var tableCount = table * 12;
    var bedCount =  bed * 12;
    var totalWoodCount = chairtCount + tableCount + bedCount;
    return totalWoodCount;

}
var woodResult = woodcaculator(50, 80, 45);
console.log(woodResult);

// brickCaculator 

// tinyFriend

function tinyFriend(names){
    var tiny = names(0);
    for(var  i = 0; i < names.length; i++){
        list = names[i];
        if(list.length < tiny.length){
            tiny = list;
        }

    }
    return tiny;
}
var result = tinyFriend[("mahid", "hasan", "kamal", "ad")];
console.log(result);