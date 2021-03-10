export interface Params {
  name: string;
  nameStartsWith: string;
  modifiedSince: string;
  comics: string;
  series: string;
  events: string;
  stories: string;
  orderBy: params;
  limit: number;
  offset: number;
}
enum params {
  nameA_Z = 'name',
  nameZ_A = '-name',
  currentFirst = 'modified',
  oldFirst = '-modified',
}
