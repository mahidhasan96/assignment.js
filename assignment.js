 
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

// tinyFriend
function tinyFriend(numbers){
    var tiny =numbers[0];
    for(var i=0; i<numbers.length; i++){
    var fList = numbers[i];
    if(fList.length < tiny.length){
    tiny = fList;
    }
    }
    return tiny;
    }
    var friendsList = ['Hellel', 'bashir', 'ab', 'monu', 'jamal'];
    console.log(tinyFriend(friendsList));

