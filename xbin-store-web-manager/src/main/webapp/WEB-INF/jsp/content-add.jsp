<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<link href="/js/kindeditor-4.1.10/themes/default/default.css" type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="/js/kindeditor-4.1.10/kindeditor-all-min.js"></script>
<script type="text/javascript" charset="utf-8" src="/js/kindeditor-4.1.10/lang/zh_CN.js"></script>
<div style="padding:10px 10px 10px 10px">
	<form id="contentAddForm" class="itemForm" method="post">
		<input type="hidden" name="categoryId"/>
	    <table cellpadding="5">
	        <tr>
	            <td>内容标题:</td>
	            <td><input class="easyui-textbox" type="text" name="title" data-options="required:true" style="width: 280px;"></input></td>
	        </tr>
	        <tr>
	            <td>内容子标题:</td>
	            <td><input class="easyui-textbox" type="text" name="subTitle" style="width: 280px;"></input></td>
	        </tr>
	        <tr>
	            <td>内容描述:</td>
	            <td><input class="easyui-textbox" name="titleDesc" data-options="multiline:true,validType:'length[0,150]'" style="height:60px;width: 280px;"></input>
	            </td>
	        </tr>
	         <tr>
	            <td>URL:</td>
	            <td><input class="easyui-textbox" type="text" name="url" style="width: 280px;"></input></td>
	        </tr>
	        <tr>
	            <td>图片:</td>
	            <td>
	                <input type="hidden" name="pic" />
	                <a href="javascript:void(0)" class="easyui-linkbutton onePicUpload">图片上传</a>
	            </td>
	        </tr>
	        <tr>
	            <td>图片2:</td>
	            <td>
	            	<input type="hidden" name="pic2" />
	            	<a href="javascript:void(0)" class="easyui-linkbutton onePicUpload">图片上传</a>
	            </td>
	        </tr>
	        <tr>
	            <td>内容:</td>
	            <td>
	                <textarea style="width:800px;height:300px;visibility:hidden;" name="content"></textarea>
	            </td>
	        </tr>
	    </table>
	</form>
	<div style="padding:5px">
	    <a href="javascript:void(0)" class="easyui-linkbutton" onclick="contentAddPage.submitForm()">提交</a>
	    <a href="javascript:void(0)" class="easyui-linkbutton" onclick="contentAddPage.clearForm()">重置</a>
	</div>
</div>
<script type="text/javascript">
	var contentAddEditor ;
	$(function(){
		contentAddEditor = TT.createEditor("#contentAddForm [name=content]");
		TT.initOnePicUpload();
		$("#contentAddForm [name=categoryId]").val($("#contentCategoryTree").tree("getSelected").id);
	});
	
	var contentAddPage  = {
			submitForm : function (){
				if(!$('#contentAddForm').form('validate')){
					$.messager.alert('提示','表单还未填写完成!');
					return ;
				}
				contentAddEditor.sync();
				
				$.post("/content/save",$("#contentAddForm").serialize(), function(data){
					if(data.status == 200){
						$.messager.alert('提示','新增内容成功!');
    					$("#contentList").datagrid("reload");
    					TT.closeCurrentWindow();
					}
				});
			},
			clearForm : function(){
				$('#contentAddForm').form('reset');
				contentAddEditor.html('');
			}
	};
</script>
