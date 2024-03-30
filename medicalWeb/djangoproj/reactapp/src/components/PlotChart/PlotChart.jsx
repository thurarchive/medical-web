import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PlotChart = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('General_Health');
  const [chartType, setChartType] = useState('bar'); // Default to bar chart
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/clean_cardiovasc-disease-pred.csv');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvData = await response.text();
        Papa.parse(csvData, {
          header: true,
          dynamicTyping: true,
          complete: (results) => {
            console.log('BMI data:', results.data.map(item => item['BMI']));

            setData(results.data);
            setIsLoading(false);
          },
        });
      } catch (error) {
        console.error('Error fetching CSV data:', error);
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, []);
  

  useEffect(() => {
    if (!isLoading && data.length > 0) {
      renderChart();
    }
  }, [isLoading, data, selectedCategory, chartType]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  const renderChart = () => {

    if (!data.length) return;

    // Extract categories based on the selected category
    const categories = data.map(item => item[selectedCategory]);

    // Filter out null and undefined values
    const filteredCategories = categories.filter(category => category !== null && category !== undefined);

    // Calculate the frequency of each category
    const categoryCounts = filteredCategories.reduce((counts, category) => {       // HORIZONTAL AXIS
      counts[category] = (counts[category] || 0) + 1;
      return counts;
    }, {});

    // Extract unique categories and sort them
    const uniqueCategories = Object.keys(categoryCounts).sort();   // VERTICAL AXIS

    // Extract data for the selected column
    const seriesData = uniqueCategories.map(category => ({
      name: category,
      y: categoryCounts[category],
    }));

    // Render the chart
    const options = {
      chart: {
        type: chartType,
        backgroundColor: '#184397', // Lighter shade of #0a3791
        borderRadius: 10 // Set border radius to 10px
      },
      title: {
        text: selectedCategory, // Update chart title with the selected category
        style: {
          color: 'white' // Font color set to white
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        series: {
          turboThreshold: 200000, // Number of data points
          color: '#59c3ff', 
          borderWidth: 0 // Remove border around bars
        },
        pie: {
          colors: ['#5FC6E6', '#07216A', '#8595F0', '#651997', '#1D56F6', '#8c564b'], // Adjusted colors for pie chart slices
        }        
      },
      legend: {
        itemStyle: {
          color: 'white' // Legend text color set to white
        }
      },
      xAxis: {
        categories: uniqueCategories,
        title: {
          text: 'Category',
          style: {
            color: 'white' // Font color set to white
          }
        },
        labels: {
          style: {
            color: 'white' // Font color set to white
          }
        }
      },
      yAxis: {
        title: {
          categories: categoryCounts,
          text: 'Frequency',
          style: {
            color: 'white' // Font color set to white
          }
        },
        labels: {
          style: {
            color: 'white' // Font color set to white
          }
        }
      },
      series: [
        {
          name: 'Frequency',
          data: seriesData,
        },
      ],
    };

    if (chartRef.current) {
      const chart = chartRef.current.chart;
      chart.setSize(795, 300); // Adjust width and height as needed
    }

    return <HighchartsReact highcharts={Highcharts} options={options} ref={chartRef} />;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ position: 'absolute', top: 10, left: 10, zIndex: 2000 }}>
        <select value={chartType} onChange={handleChartTypeChange} style={{ color: 'white' }}>
          <option value="bar" style={{ color: 'black' }}>Bar Chart</option>
          <option value="pie" style={{ color: 'black' }}>Pie Chart</option>
          <option value="area" style={{ color: 'black' }}>Area</option>
        </select>
      </div>
      <div style={{ position: 'absolute', top: 10, right: -230, zIndex: 1000 }}>
        <select value={selectedCategory} onChange={handleCategoryChange} style={{ color: 'white' }}>
          <option value="General_Health"  style={{ color: 'black' }}>General Health</option>
          <option value="Checkup"   style={{ color: 'black' }}>Checkup</option>
          <option value="Exercise"  style={{ color: 'black' }}>Exercise</option>
          <option value="Heart_Disease"   style={{ color: 'black' }}>Heart Disease</option>
          <option value="Skin_Cancer"   style={{ color: 'black' }}>Skin Cancer</option>
          <option value="Other_Cancer"  style={{ color: 'black' }}>Other Cancer</option>
          <option value="Depression"  style={{ color: 'black' }}>Depression</option>
          <option value="Diabetes"  style={{ color: 'black' }}>Diabetes</option>
          <option value="Arthritis" style={{ color: 'black' }}>Arthritis</option>
          <option value="Sex" style={{ color: 'black' }}>Sex</option>
          <option value="Age_Category"  style={{ color: 'black' }}>Age Category</option>
          <option value="Smoking_History" style={{ color: 'black' }}>Smoking History</option>


          
          <option value="Height_(cm)" style={{ color: 'black' }}>Height (cm)</option>
          <option value="Weight_(kg)" style={{ color: 'black' }}>Weight (kg)</option>
          <option value="BMI" style={{ color: 'black' }}>BMI</option>
          <option value="Alcohol_Consumption" style={{ color: 'black' }}>Alcohol Consumption</option>
          <option value="Fruit_Consumption" style={{ color: 'black' }}>Fruit Consumption</option>
          <option value="Green_Vegetables_Consumption"  style={{ color: 'black' }}>Green Vegetables Consumption</option>
          <option value="FriedPotato_Consumption" style={{ color: 'black' }}>Fried Potato Consumption</option>
        </select>
      </div>
      <div id="chart-container">
        {renderChart()}
      </div>
    </div>
  );
};

export default PlotChart;
