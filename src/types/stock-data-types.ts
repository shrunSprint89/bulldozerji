export interface StockData {
  status: string;
  data: Data;
}

export interface Data {
  candles: Array<[string, number, number, number, number, number, number]>;
}
