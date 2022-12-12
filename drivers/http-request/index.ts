const ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;

interface RequestInterface {
  path: string;
  endPoint?: string;
}

export async function request<T = any>(
  req: RequestInterface = { endPoint: ENDPOINT, path: "" }
): Promise<T> {
  try {
    const url = new URL(req.endPoint + req.path);
    const request = await fetch(url);
    return await request.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
