import { LineChart } from "@mui/x-charts/LineChart";
import { log } from "@/lib/shared/Logger";
import { useStockData } from "@/lib/client/hooks/useStockData";

export default function DailyChart() {
  const { stockData, isLoading, isError } = useStockData();
  const { xAxisData, seriesData } = stockData || {
    xAxisData: [],
    seriesData: [],
  };
  log(`Got this data for chart: ${JSON.stringify(xAxisData)}`);
  log(`Got this data for chart: ${JSON.stringify(seriesData)}`);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <LineChart
      xAxis={[
        {
          label: "Date",
          data: xAxisData,
          scaleType: "time",
          //valueFormatter: (date) => dayjs(date).format("MMM D"),
        },
      ]}
      yAxis={[{ label: "Close Price" }]}
      series={[{ label: "Close", data: seriesData }]}
      height={400}
    />
  );
}
