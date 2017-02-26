
      <div class="row">
        <div class="col-xs-12">
          <!-- interactive chart -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">Interactive Area Chart</h3>

              <div class="box-tools pull-right">
                Real time
                <div class="btn-group" id="realtime" data-toggle="btn-toggle">
                  <button type="button" class="btn btn-default btn-xs active" data-toggle="on">On</button>
                  <button type="button" class="btn btn-default btn-xs" data-toggle="off">Off</button>
                </div>
              </div>
            </div>
            <div class="box-body">
              <div id="interactive" style="height: 300px;"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <div class="col-md-6">
          <!-- Line chart -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">Line Chart</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body">
              <div id="flot-line-chart" style="height: 300px;"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

          <!-- Area chart -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">Full Width Area Chart</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body">
              <div id="area-chart" style="height: 338px;" class="full-width-chart"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

        </div>
        <!-- /.col -->

        <div class="col-md-6">
          <!-- Bar chart -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">Bar Chart</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body">
              <div id="bar-chart" style="height: 300px;"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->

          <!-- Donut chart -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <i class="fa fa-bar-chart-o"></i>

              <h3 class="box-title">Donut Chart</h3>

              <div class="box-tools pull-right">
                <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
            </div>
            <div class="box-body">
              <div id="donut-chart" style="height: 300px;"></div>
            </div>
            <!-- /.box-body-->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>

<!-- Page script -->
<script>
  $(function () {
    /*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 100;

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(1);

      // Do a random walk
      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y = prev + Math.random() * 10 - 5;

        if (y < 0) {
          y = 0;
        } else if (y > 100) {
          y = 100;
        }

        data.push(y);
      }

      // Zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]]);
      }

      return res;
    }

    var interactive_plot = $.plot("#interactive", [getRandomData()], {
      grid: {
        borderColor: "#f3f3f3",
        borderWidth: 1,
        tickColor: "#f3f3f3"
      },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: "#3c8dbc"
      },
      lines: {
        fill: true, //Converts the line chart to area chart
        color: "#3c8dbc"
      },
      yaxis: {
        min: 0,
        max: 100,
        show: true
      },
      xaxis: {
        show: true
      }
    });

    var updateInterval = 500; //Fetch data ever x milliseconds
    var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
    function update() {

      interactive_plot.setData([getRandomData()]);

      // Since the axes don't change, we don't need to call plot.setupGrid()
      interactive_plot.draw();
      if (realtime === "on")
        setTimeout(update, updateInterval);
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === "on") {
      update();
    }
    //REALTIME TOGGLE
    $("#realtime .btn").click(function () {
      if ($(this).data("toggle") === "on") {
        realtime = "on";
      }
      else {
        realtime = "off";
      }
      update();
    });
    /*
     * END INTERACTIVE CHART
     */


    /*
     * LINE CHART
     * ----------
     */
    //LINE randomly generated data

    var sin = [], cos = [];
    for (var i = 0; i < 14; i += 0.5) {
      sin.push([i, Math.sin(i)]);
      cos.push([i, Math.cos(i)]);
    }
    var line_data1 = {
      data: sin,
      color: "#3c8dbc"
    };
    var line_data2 = {
      data: cos,
      color: "#00c0ef"
    };
    $.plot("#flot-line-chart", [line_data1, line_data2], {
      grid: {
        hoverable: true,
        borderColor: "#f3f3f3",
        borderWidth: 1,
        tickColor: "#f3f3f3"
      },
      series: {
        shadowSize: 0,
        lines: {
          show: true
        },
        points: {
          show: true
        }
      },
      lines: {
        fill: false,
        color: ["#3c8dbc", "#f56954"]
      },
      yaxis: {
        show: true,
      },
      xaxis: {
        show: true
      }
    });
    //Initialize tooltip on hover
    $('<div class="tooltip-inner" id="flot-line-chart-tooltip"></div>').css({
      position: "absolute",
      display: "none",
      opacity: 0.8
    }).appendTo("body");
    $("#flot-line-chart").bind("plothover", function (event, pos, item) {

      if (item) {
        var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);

        $("#flot-line-chart-tooltip").html(item.series.label + " of " + x + " = " + y)
            .css({top: item.pageY + 5, left: item.pageX + 5})
            .fadeIn(200);
      } else {
        $("#flot-line-chart-tooltip").hide();
      }

    });
    /* END LINE CHART */

    /*
     * FULL WIDTH STATIC AREA CHART
     * -----------------
     */
    var areaData = [[2, 88.0], [3, 93.3], [4, 102.0], [5, 108.5], [6, 115.7], [7, 115.6],
      [8, 124.6], [9, 130.3], [10, 134.3], [11, 141.4], [12, 146.5], [13, 151.7], [14, 159.9],
      [15, 165.4], [16, 167.8], [17, 168.7], [18, 169.5], [19, 168.0]];
    $.plot("#area-chart", [areaData], {
      grid: {
        borderWidth: 0
      },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color: "#00c0ef"
      },
      lines: {
        fill: true //Converts the line chart to area chart
      },
      yaxis: {
        show: false
      },
      xaxis: {
        show: false
      }
    });

    /* END AREA CHART */

    /*
     * BAR CHART
     * ---------
     */

    var bar_data = {
      data: [["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]],
      color: "#3c8dbc"
    };
    $.plot("#bar-chart", [bar_data], {
      grid: {
        borderWidth: 1,
        borderColor: "#f3f3f3",
        tickColor: "#f3f3f3"
      },
      series: {
        bars: {
          show: true,
          barWidth: 0.5,
          align: "center"
        }
      },
      xaxis: {
        mode: "categories",
        tickLength: 0
      }
    });
    /* END BAR CHART */

    /*
     * DONUT CHART
     * -----------
     */

    var donutData = [
      {label: "Series2", data: 30, color: "#3c8dbc"},
      {label: "Series3", data: 20, color: "#0073b7"},
      {label: "Series4", data: 50, color: "#00c0ef"}
    ];
    $.plot("#donut-chart", donutData, {
      series: {
        pie: {
          show: true,
          radius: 1,
          innerRadius: 0.5,
          label: {
            show: true,
            radius: 2 / 3,
            formatter: labelFormatter,
            threshold: 0.1
          }

        }
      },
      legend: {
        show: false
      }
    });
    /*
     * END DONUT CHART
     */

  });

  /*
   * Custom Label formatter
   * ----------------------
   */
  function labelFormatter(label, series) {
    return '<div style="font-size:13px; text-align:center; padding:2px; color: #fff; font-weight: 600;">'
        + label
        + "<br>"
        + Math.round(series.percent) + "%</div>";
  }
</script>
</body>
</html>
