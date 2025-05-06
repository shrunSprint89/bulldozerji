import { LineChartData } from "@/types/chart-types";
import { StockData } from "@/types/stock-data-types";
import { useQuery } from "@tanstack/react-query";

export function useStockData() {
  const {
    data: stockData,
    isLoading,
    isError,
    isSuccess,
  } = useQuery<LineChartData>({
    queryKey: ["upstox-data"],
    queryFn: async () =>
      fetch(`/api/stock`)
        .then((res) => res.json<StockData>())
        .then((data: StockData) => {
          const { candles } = data.data || { candles: [] };
          const stockData: LineChartData = {
            xAxisData: candles.map((candle) => new Date(candle[0])),
            seriesData: candles.map((candle) => candle[4]), // Closing price
          };
          return stockData;
        }),
    enabled: true,
    initialData: { xAxisData: [], seriesData: [] },
  });
  return {
    stockData,
    isLoading,
    isError,
    isSuccess,
  };
}
