export interface Params {
  name: string;
  nameStartsWith: string;
  modifiedSince: string;
  comics: string;
  series: string;
  events: string;
  stories: string;
  orderBy: OrderBy;
  limit: number;
  offset: number;
}
export enum OrderBy {
  nameA_Z = 'name',
  nameZ_A = '-name',
  currentFirst = 'modified',
  oldFirst = '-modified',
}
