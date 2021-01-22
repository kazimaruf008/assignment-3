//   github link:- https://github.com/kazimaruf008/assignment-3

//   Kilometer To Meter

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter
}
var meterResult = kilometerToMeter(5);
console.log(meterResult)

//   Budget Calculator

function budgetCalculator(was, mobile, laptop){
    var value = 0
    if(was>0, mobile>0, laptop>10){
        var wasValue = was*50
        var mobileValue = mobile*100
        var laptopValue = laptop*500
        var value = wasValue+mobileValue+laptopValue
    }
    return value;
}
console.log(budgetCalculator(25,27,45))

//   Hotle Cost

function hotelCost (cost) {
    var totalCost
    if (cost<=10) {
        totalCost=cost*100;
    }
    else if (cost<=20) {
        var fastPart = 10*100;
        var remainingDay = cost-10;
        var secondpart = remainingDay*80;
        totalCost = fastPart + secondpart;
    }
    else{
        var fastPart = 10*100;
        var secondpart = 10*80;
        remainingDay = cost-20;
        thirdPatr = remainingDay*50;
        totalCost =fastPart +secondpart + thirdPatr
    }
    return totalCost
}

console.log(hotelCost(21))
