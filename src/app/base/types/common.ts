export interface IMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export interface IStat {
  title: string;
  value: string;
  icon: React.ReactNode;
  percentage: number;
  color: string;
  bgColor: string;
}
