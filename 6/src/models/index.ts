export interface StartStop {
  start: number;
  stop: number;
}

export interface Field {
  id: number;
  isStart?: boolean;
  isStop?: boolean;
  isObstackle?: boolean;
}

export interface Row extends Array<Field> {}

export interface Board extends Array<Row> {}
