import { request } from "drivers/http-request";
import { USER_DETAIL } from "utils/const";
import { User } from "../enitites/user.entites";

export async function fetchUser(id: string) {
  const req = await request<User>({
    endPoint: USER_DETAIL,
    path: id + ".json?print=pretty",
  });
  return req;
}
