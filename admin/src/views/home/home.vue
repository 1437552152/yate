<template>
	<div class="home">
	<h5>亚特后台管理系统</h5>
	 <div class="chartStyle" ref="chart"></div>
	</div>
</template>

<script>
import {
  BASEURL,
  getLookRecord
} from "@/service/getData";
export default {
  data() {
    return {};
  },
  methods: {
    initCharts(res) {
     let arr=[];
     let arr1=[];
     res.map((item,index)=>{
       arr.push(item.address);
       arr1.push(item.num)
     })
      let myChart = this.$echarts.init(this.$refs.chart);
      console.log(this.$refs.chart); // 绘制图表
      myChart.setOption({
        color: ['#9BBB59'],
        title: {
            textStyle: {  
                color: '#000',
                fontWeight: '600'
            },
            text: "访客记录(次)",
            x:'100'//设置标题的偏移
        },
        tooltip: {
            trigger: 'axis',
          formatter: "完成次数 : <br/>{b} : {c}"
        },
         toolbox: {
            show : true,
            x:'800',
            feature : {
                dataView : {show: false, readOnly: false},  
                magicType : {show: true, type: ['line', 'bar']},  
                restore : {show: true},  
                saveAsImage : {show: true}
            }
        },
        xAxis: {
          data: arr
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: arr1
          }
        ]
      });
    },
      getData() {
      getLookRecord().then(res => {
         this.initCharts(res.data);
      });
    },
  },
  mounted() {
    this.getData();
  }
};
</script>
<style lang="less" scoped>
h5 {
  font-size: 40px;
  color: #2d8cf0;
  text-align: center;
  margin-top: 50px;
}
.chartStyle{
	width:1000px;
	height:500px;
	margin: 50px auto;
	margin-top: 100px;
}
</style>
