$.roundFractional = function(num,n){
    return Math.round(num * Math.pow(10,n))/Math.pow(10,n);
}
$(function(){
    console.log('hh');
    //get dom elm
    var $width = $("#width");
    var $height = $("#height");
    var $cal = $("#cal");
    var $length = $("#length");
    var $area = $("#area");
    //calculate click event
    $cal.click(function(){
        //get val
        var w = Number($("#width").val());
        var h = Number($("#height").val());
        //calculate
        var len = $.roundFractional(2*(w+h),1);
        var a = $.roundFractional(w*h,2);
        console.log(len);
        //output
        $length.val(len);
        $area.val(a);
    });
        
});