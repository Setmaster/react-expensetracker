import './Chart.css';
import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
const totalMaximum = Math.max(...dataPointValues); // Spread operator adds array elements as standalone elements

    return (
        <div className={"chart"}>
            {props.dataPoints.map(dataPoint => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        maxValue={totalMaximum}
                        label={dataPoint.label}
                    />
                )
            })}
        </div>
    );
};

export default Chart;