<script type="text/javascript">
    var req_object = "field523353";     // 需求对象 - 0投顾序列，1经纪人，2混合
    var req_type = "field523354";       // 需求类型 - 0居间关系，1薪酬考核，2入离转调
    var is_detail_sp = "field523356";   // 是否零售板块专项事项 - 0是，1否
    jQuery(function(){
        jQuery("#" + req_object).bindPropertyChange(function() {
            var req_object_value = jQuery("#" + req_object).val();
            if(req_object_value == '2') {
                $("[name='obj_tips']").show(); // obj_tips 提示：投顾序列及经纪人均涉及的事项，例如跨序列转岗、营销竞赛奖励等
            } else {
                $("[name='obj_tips']").hide();
            }
        });
        jQuery("#" + req_type).bindPropertyChange(function () {
            var req_type_value = jQuery("#" + req_type).val();
            if ((req_type_value == '0')) {
                $("[name='type_tips0']").show();
            } else {
                $("[name='type_tips0']").hide();
            }
            if ((req_type_value == '1')) {
                $("[name='type_tips1']").show();
            } else {
                $("[name='type_tips1']").hide();
            }
            if ((req_type_value == '2')) {
                $("[name='type_tips2']").show();
            } else {
                $("[name='type_tips2']").hide();
            }
        });
        jQuery("#" + is_detail_sp).bindPropertyChange(function () {
            var is_detail_sp_value = jQuery("#" + is_detail_sp).val();
            if ((is_detail_sp_value == '0')) {
                $("[name='detail_tips']").show();
            } else {
                $("[name='detail_tips']").hide();
            }

        })
    });
</script>
