export type NewsType = "poll" | "job" | "story" | "comment" | "pollopt";

export interface GenericNews {
  by?: string;
  descendants?: number;
  id?: number;
  kids?: number[];
  parts?: number[];
  score?: number;
  time?: number;
  title?: string;
  type?: NewsType;
  url?: string;
  text?: string;
  parent?: string;
}
