import config from "../storage/config.js";

const getOption = (ing, egr)=>{
    return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: egr, name: 'Egresos' },
              { value: ing, name: 'Ingresos' },
              { value: ing-egr, name: "Disponible"},
              
            ]
          }
        ]
      };
}


const initCharts = ()=>{
    const grafica = echarts.init(document.querySelector("#Grf"));
    window.addEventListener("resize",()=>{
      grafica.resize();
    })
    let totalIngresos = 0;
    let totalEgresos = 0;
    config.registros.forEach(ele => {
        if (ele.operacion) {
            totalIngresos += ele.valor
        }else{
            totalEgresos += ele.valor
        }
    });
    grafica.setOption(getOption(totalIngresos, totalEgresos));
}




export default{
    initCharts
}