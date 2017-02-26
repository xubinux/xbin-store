
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">全功能表格实例</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
        	<div class="clearfix">
	        	<div class="col-md-4">
			        <div class="input-group date ">
	                  <div class="input-group-addon">
	                    <i class="fa fa-calendar"></i>
	                  </div>
	                  <input type="text" class="form-control pull-right" id="tableParam">
	                </div>
	        	</div>
	        	<div class="col-md-4">
	        		<div class="input-group">
		                <span class="input-group-addon"><i class="fa fa-search"></i></span>
		                <input type="text" class="form-control" id="search">
		            </div>
	        	</div>
	        	<div class="col-md-4">
	        		<button type="submit" id="submitExample4" class="btn btn-primary">Submit</button>
	        		<a class="btn btn-default" target="navTab" href="/include/index.html?cid=123">更多</a>
	        	</div>
        	</div>
			<table id="example4" class="table table-bordered table-striped" >
		        <thead>
		            <tr>
		                <th>Name</th>
		                <th>Position</th>
		                <th>Office</th>
		                <th>Salary</th>
		                <th>Start date</th>
		                <th>more</th>
		            </tr>
		        </thead>
		        <tfoot>
		            <tr>
		                <th>Name</th>
		                <th>Position</th>
		                <th>Office</th>
		                <th>Salary</th>
		                <th>Start date</th>
		                <th>more</th>
		            </tr>
		        </tfoot>
		    </table>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->

<div class="modal fade" id="deleteUser">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span></button>
        <h4 class="modal-title">提示</h4>
      </div>
      <div class="modal-body">
        <p>确认删除？</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">确认</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
<script>
// 表格使用 datatables插件，请查看文档http://datatables.club/reference/
// 下面是一个异步请求数据的案例
  $(function () {
    //Date picker
    $('#tableParam').datepicker({
      autoclose: true
    });
	//初始化表格

     var example4 = $('#example4').DataTable( {
        "dom": 'itflp',
        "processing": true,
		"searching": false,
        "serverSide": true,   //启用服务器端分页
		// "bInfo": false,  
        "language": {
            "url": "plugins/datatables/language.json"
        },
        "ajax": "datatable.json",
        "columns": [
            { "data": "name" },
            { "data": "hr.position" },
            { "data": "contact.0" },
            { "data": "contact.1" },
            { "data": "hr.start_date" },
            { "data": null }
        ],
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "render": function(data){
				return '<a class="btn btn-primary" target="modal" modal="lg" href="include/index.html">查看</a> &nbsp;<a class="btn btn-default" data-body="确认要删除吗？" callback="cb(\''+data.name+'\')" target="ajaxTodo" href="include/index.html?uid=123">删除</a>'
			}
        } ]
    } );

$("#submitExample4").on("click",function(){
	reloadTable(example4);
})

cb = function(name){
  // console.log(name)
  alertMsg("删除"+name+"成功!","success");
}

//当你需要多条件查询，你可以调用此方法，动态修改参数传给服务器
function reloadTable(oTable) {
    var date = $("#tableParam").val();
    var search = $("#search").val();
    var param = {
        "date": date,
        "search": search
    };
    oTable.settings()[0].ajax.data = param;
    oTable.ajax.reload();
}
  });
</script>