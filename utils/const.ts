export const AVAILABLE_ROUTES = [
  "newstories",
  "topstories",
  "beststories",
  "askstories",
  "showstories",
  "jobstories",
] as const;

export const ROUTES_NAME = {
  newstories: "News",
  topstories: "Top",
  beststories: "Best",
  askstories: "Ask",
  showstories: "Show",
  jobstories: "Job",
};

export const ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;
export const ENDPOINT_DETAIL = process.env.NEXT_PUBLIC_DETAIL_API_ENDPOINT!;
