export type Dept = {
  code: string,
  name: string,
  amount: number,
  children: Dept[]
}

export class DataGenerator {
  static generateData():Dept[] {
    return [
      {
        code: "0",
        name: "全社",
        amount: 2000,
        children: [
          {
            code: "0-001",
            name: "工業事業部",
            amount: 500,
            children: [
              {
                code: "0-001-001",
                name: "大阪工業部",
                amount: 200,
                children: [],
              },
              {
                code: "0-001-002",
                name: "東京工業部",
                amount: 100,
                children: [],
              },
            ],
          },
          {
            code: "0-002",
            name: "農業事業部",
            amount: 700,
            children: [
              {
                code: "0-002-001",
                name: "農業工業部",
                amount: 100,
                children: [],
              },
              {
                code: "0-002-002",
                name: "農業工業部",
                amount: 200,
                children: [],
              },
            ],
          },
        ],
      },
    ];
  } 
}