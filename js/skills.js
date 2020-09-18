// 基于准备好的dom，初始化echarts实例
var frontEndChart = echarts.init(document.getElementById('front-end-skill'));
var backEndChart = echarts.init(document.getElementById('back-end-skill'));
var computerChart = echarts.init(document.getElementById('computer-skill'));
// 指定图表的配置项和数据

var allLabelTextStyle = {
    color: '#fff',
    backgroundColor: '#777',
    fontSize: 12,
    borderRadius: 3,
    padding: [3, 5],
}

var computerOption = {
    legend: {
        data: ['技能情况'],
        show: false,
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: allLabelTextStyle,
        },
        indicator: [
            { name: '计算机网络', max: 10},
            { name: '操作系统', max: 10},
            { name: '计算机组成原理', max: 10},
            { name: '数据结构与算法', max: 10},
            { name: '设计模式', max: 10},
            { name: '软件工程', max: 10}
        ],
        axisLabel: {
            showMaxLabel: true,
        }
    },
    series: [{
        name: 'computer-skill',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [7, 5, 7, 7, 4, 5],
                name: '技能情况',
                label: {
                    show: true,
                    fontSize: 14,
                    offset: [13, 15],
                    color: '#0c0',
                },
                lineStyle: {
                    color: '#0c0',
                }
            }
        ]
    }]
};

var frontEndOption = {
    legend: {
        data: ['技能情况'],
        show: false,
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: allLabelTextStyle,
        },
        indicator: [
            { name: 'JavaScript', max: 10},
            { name: 'CSS', max: 10},
            { name: 'HTML', max: 10},
            { name: 'Vue', max: 10},
            { name: 'React', max: 10},
            { name: 'Webpack', max: 10}
        ],
        axisLabel: {
            showMaxLabel: true,
        }
    },
    series: [{
        name: 'front-end-skill',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [7, 7, 7, 6, 4, 4],
                name: '技能情况',
                label: {
                    show: true,
                    fontSize: 14,
                    offset: [13, 15],
                    color: '#07e',
                },
                lineStyle: {
                    color: '#07e',
                }
            }
        ]
    }]
};

var backEndOption = {
    legend: {
        data: ['技能情况'],
        show: false,
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: allLabelTextStyle,
        },
        indicator: [
            { name: 'Java', max: 10},
            { name: 'Golang', max: 10},
            { name: 'Mysql', max: 10},
            { name: 'Redis', max: 10},
            { name: 'MQ', max: 10},
            { name: 'ElasticSearch', max: 10}
        ],
        axisLabel: {
            showMaxLabel: true,
        }
    },
    series: [{
        type: 'radar',
        name: 'back-end-skill',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [7, 7, 6, 4, 4, 2],
                name: '技能情况',
                label: {
                    show: true,
                    fontSize: 14,
                    offset: [10, 0],
                },
            }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表。
frontEndChart.setOption(frontEndOption);
backEndChart.setOption(backEndOption);
computerChart.setOption(computerOption);