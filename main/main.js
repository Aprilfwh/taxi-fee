function Charge(Input) {
    function getPrice(Input) {
        var distance = Input[0];
        var time = Input[1];
        var time_price = time * 0.25;
        var dis_price;
        var totalPrice;
        var result;
        if(distance<=2){
            dis_price = 6;
        }
        if(distance>2 && distance<=8){
            dis_price=6+(distance-2)*0.8;
        }
        if(distance>8){
            dis_price = 6+(8-2)*0.8+(distance-8)*1.2
        }
        totalPrice = Math.round(dis_price+time_price);
        result = '============= 价格明细 =============\n'
        result += '总计：' + totalPrice.toString() +'元\n';
        result += '===================================';
        return result;
    }
    var result = getPrice(Input);
    console.log(result);
    return result;
}
module.exports=Charge;