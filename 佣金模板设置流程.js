<script type="text/javascript">
    /* 逻辑梳理 - 选择模板类型（浏览按钮）
    * 1. 选择后显示对应的明细行 - for循环遍历值
    * 2. 更新后删除已有明细行的信息 - deleteDetailX(X)
    *
    * */

    /* 逻辑梳理 - 添加明细
    * 1. 判断明细表当前行数(是否有必要？)
    * 2. 取出选择的交易类别名：单选
    * 3. 遍历选择的证券类别名：多选
    * 4. 分别赋值
    * */
    $(document).ready(function(){
        $("[name='btn']").each(function(index){
            $(this).append('<input type="button" onclick="javascript:addDetail('+index+');" value="生成明细" title="生成明细" class="e8_btn_top_first" style="max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">');
        });
        jQuery("#" + template_type).bindPropertyChange(function() {
            handleSelect();
        });
    });

    function handleSelect() {
        var template_type_value = $("#" + template_type).val();
        var array = template_type_value.split(","); // 将取出的用逗号分隔的字符串转成数组，方便遍历
        for (var i = 0; i < 13; i++) {
            if(array.indexOf(i) < 0){
                $("tr[name='mx" + i + "']").hide();
                deleteDetail(i);
            }
        }
        for(i = 0; i < array.length; i++) {
            $("tr[name='mx" + (array[i] - 1) + "']").show();
        }
    }

    function deleteDetail0(){
        $("[name = check_node_0]:checkbox").attr("checked", true);
        deleteRow0(0,true);
    }
    function deleteDetail1(){
        $("[name = check_node_1]:checkbox").attr("checked", true);
        deleteRow1(1,true);
    }
    function deleteDetail2(){
        $("[name = check_node_2]:checkbox").attr("checked", true);
        deleteRow2(2,true);
    }
    function deleteDetail3(){
        $("[name = check_node_3]:checkbox").attr("checked", true);
        deleteRow3(3,true);
    }
    function deleteDetail4(){
        $("[name = check_node_4]:checkbox").attr("checked", true);
        deleteRow4(4,true);
    }
    function deleteDetail5(){
        $("[name = check_node_5]:checkbox").attr("checked", true);
        deleteRow5(5,true);
    }
    function deleteDetail6(){
        $("[name = check_node_6]:checkbox").attr("checked", true);
        deleteRow6(6,true);
    }
    function deleteDetail7(){
        $("[name = check_node_7]:checkbox").attr("checked", true);
        deleteRow7(7,true);
    }
    function deleteDetail8(){
        $("[name = check_node_8]:checkbox").attr("checked", true);
        deleteRow8(8,true);
    }
    function deleteDetail9(){
        $("[name = check_node_9]:checkbox").attr("checked", true);
        deleteRow9(9,true);
    }
    function deleteDetail10(){
        $("[name = check_node_10]:checkbox").attr("checked", true);
        deleteRow10(10,true);
    }
    function deleteDetail11(){
        $("[name = check_node_11]:checkbox").attr("checked", true);
        deleteRow11(11,true);
    }
    function deleteDetail12(){
        $("[name = check_node_12]:checkbox").attr("checked", true);
        deleteRow12(12,true);
    }
</script>
