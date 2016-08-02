var chartRender = window.chartRender || {};

(function(chartRender, $) {
    chartRender.bar = new function() {
        var $this = this;

        $this.getOption = function (options){
            return new option(options);
        };

        var superChart = null;

        $this.instances = function (dom, attrs) {
            //这里用到了寄生组合式继承
            //详见http://ronghuaxueleng.github.io/2016/07/31/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B9%8B%E7%BB%A7%E6%89%BF/
            superChart = chartRender.biz.configuration();
            chartRender.inheritPrototype(biz, superChart);
            return new biz(dom, attrs);
        };

        function biz(dom, plot_attrs) {
            superChart.call(this, dom, plot_attrs);
            this.dom = dom;
            var self = this;

            var default_option = {
                "tooltip" : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                "legend": {
                    "data": [],
                    "x": "right",
                    "y": "top"
                },
                "xAxis":
                    {
                        "name": "X",
                         type : 'category',
                         axisLabel: {
                             show: true,
                             interval: 0,
                             rotate:45
                         },
                        "position": "bottom",
                        "data": []

                    }
                ,
                "backgroundColor": "transparent",
                "title": {
                    "show": false,
                    "text": {
                        "left": "center"
                    }
                },
                "toolbox": {
                    "x": "right",
                    "y": "bottom",
                    "feature": {
                        "dataZoom": {},
                        "dataView": {
                            "readOnly": false
                        },
                        "magicType": {
                            "type": [
                                "line",
                                "bar",
                                 'stack', 'tiled'
                            ]
                        },
                        "restore": {},
                        "saveAsImage": {}
                    }
                },
                "yAxis":
                    {
                        "name":"Y",
                        "position":"left"
                    }
                ,
                "series": [
                    {
                        "name": "count",
                        "type": "bar",
                        "data": []
                    }
                ],
                ySelected : [],
                ysize:100
            };

            this.plot_attrs = $.extend( {}, default_option, plot_attrs );
            
        };
    };
})(chartRender, $);
