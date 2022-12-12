import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
export function getDomain(url: string) {
  const domain = new URL(url);
  return domain.hostname;
}

export function getRelativeTo(date: number) {
  dayjs.extend(relativeTime);
  return dayjs().to(dayjs.unix(date));
}
