 
//  feeToMile

function feetToaMile(feet){
    var mile = feet / 5280;
    return mile;
}

// woodcalculator

function woodcaculator(chair,table){
    var chairtCount = chair * 12;
    var tableCount = table * 12;
    var totalWoodCount = chairtCount + tableCount;
    return totalWoodCount;

}


// tinyFriend

function tinyFriend(numbers){
    var tiny = numbers(0);
    for(var  i = 0; i < numbers.length; i++){
        list = numbers[i];
        if(list.length < tiny.length){
            tiny = list;
        }

    }
    return tiny;
}
