import { request } from "drivers/http-request";
import {
  ENDPOINT,
  ENDPOINT_DETAIL,
  USER_DETAIL,
  ROUTES_NAME,
} from "utils/const";
import { GenericNews } from "../entities/news.entities";

export async function fetchStories(
  route: keyof typeof ROUTES_NAME = "newstories"
) {
  const req = await request({
    endPoint: ENDPOINT,
    path: route + ".json?print=pretty",
  });
  return req as number[];
}

export async function fetchStoriesDetail(id: number) {
  const req = await request<GenericNews>({
    endPoint: ENDPOINT_DETAIL,
    path: id + ".json?print=pretty",
  });
  return req;
}
