
/*var bxfs = "field"; // 报销方式

jQuery(function () {
    jQuery("#" + bxfs).bindPropertyChange(function () {
        var bxfs_value = jQuery("#" + bxfs).val();
        if (bxfs_value == '1') {
            $("[name='test']").hide();
        } else {
            $("[name='test']").show();
        }
    });
});*/

var fee_type = "field513857";   // 费用类型
var amount = "field513862";

var bxfs = "field513854";   // 报销方式
var fylx = "field513857";   // 明细1-费用类型
var je = "field513862";     // 明细1-金额
jQuery(function(){
    jQuery("#"+bxfs).bindPropertyChange(function(){
        var bxfs_v = jQuery("#"+bxfs).val();
        if(bxfs_v == '1'){
            $("[name='test']").hide();
        }else {
            $("[name='test']").show();
        }
        if(bxfs_v == '0'){
            $("[name='tips']").show();
        }else {
            $("[name='tips']").hide();
        }
    });

    var indexnum0 = parseInt($("#indexnum0").val());
    for(var i = 0; i < indexnum0; i++){
        handleSelect(i);
    }
    $("[name='addbutton0']").click(function(){
        var index = parseInt($("#indexnum0").val()) - 1;
        handleSelect(index);
    });

    checkCustomize = function () {
        $("input[name^='"+fylx+"']").each(function () {
            var fylx_v = $(this).val();
            var index = $(this).attr("id");
            var je_v = parseFloat(jQuery("#"+je + "_" + index).val());

            $(this).attr("checked", !$(this).attr("checked"));
        })
    }
});
function handleSelect(index){
    jQuery("#"+fylx + "_" + index).bindPropertyChange(function(){
        handle(index);
    });
    jQuery("#"+je + "_" + index).bindPropertyChange(function(){
        handle(index);
    });
}
function handle(index){
    var fylx_v = jQuery("#"+fylx + "_" + index).val();
    var je_v = parseFloat(jQuery("#"+je + "_" + index).val());
    if(fylx_v == '1' && je_v > 100){
        window.top.Dialog.alert("招待费金额不能超过100元");
    }
}
