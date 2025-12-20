import { Dimensions, ScrollView, Text } from 'react-native';
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';

export default function Chart() {  
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        }
    };
    const screenWidth = Dimensions.get("window").width;
    
    const pieData = [
        {
            name: "January",
            population: 20,
            color: "#FF6384",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "February",
            population: 45,
            color: "#36A2EB",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "March",
            population: 28,
            color: "#FFCE56",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "April",
            population: 80,
            color: "#4BC0C0",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "May",
            population: 99,
            color: "#9966FF",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        },
        {
            name: "June",
            population: 43,
            color: "#FF9F40",
            legendFontColor: "#7F7F7F",
            legendFontSize: 12
        }
    ];

    const progressData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        data: [0.20, 0.45, 0.28, 0.80, 0.99, 0.43] // Progress values between 0 and 1
    };

   return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding : 10 }}>            
        <Text style={{ fontSize : 20, marginBottom: 10 }}>
            Bezier Line Chart
        </Text>
        <LineChart
            data={data}
            width={screenWidth-20} // from react-native
            height={220}
            chartConfig={chartConfig}
            bezier={true}
            style={{
                marginVertical : 10,
                borderRadius: 15
            }}
        />
        
        <Text style={{ fontSize : 20, marginTop: 20, marginBottom: 10 }}>
            Pie Chart
        </Text>
        <PieChart
            data={pieData}
            width={screenWidth-20}
            height={220}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            style={{
                marginVertical : 10,
                borderRadius: 15
            }}
        />
        
        <Text style={{ fontSize : 20, marginTop: 20, marginBottom: 10 }}>
            Bar Chart
        </Text>
        <BarChart
            data={data}
            width={screenWidth-20}
            height={220}
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            yAxisLabel=""
            yAxisSuffix=""
            style={{
                marginVertical : 10,
                borderRadius: 15
            }}
        />
        
        <Text style={{ fontSize : 20, marginTop: 20, marginBottom: 10 }}>
            Progress Chart
        </Text>
        <ProgressChart
            data={progressData}
            width={screenWidth-20}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            style={{
                marginVertical : 10,
                borderRadius: 15
            }}
        />
    </ScrollView>

   );
}

