/**
 * Created by caoqiang on 16-05-18.
 */

var chartRender = window.chartRender || {};

(function(chartRender, $){
    var $this = this;

    function object(o){
        function F(){}
        F.prototype = o;
        return new F();
    }

    chartRender.inheritPrototype = function (subType,superType) {
        var prototype = object(superType.prototype);
        prototype.constructor = superType;
        subType.prototype = prototype;
    } 




    chartRender.resize = function(chart) {
    	$(window).resize(function(){
    		if(chart != null && chart != undefined){
	            chart.resize();
	        }
    	});
    };

})(chartRender, $);

