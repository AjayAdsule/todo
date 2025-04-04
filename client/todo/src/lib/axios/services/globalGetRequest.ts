import apiRequest from "../axiosConfig";

interface GlobalGetRequest {
  url: string;
  param?: Record<string, string>;
}

const globalGetRequest = async <T>({
  url,
  param,
}: GlobalGetRequest): Promise<T> => {
  try {
    const queryParams = new URLSearchParams(param).toString();
    const fullUrl = `${url}?${queryParams}`;
    const response = await apiRequest.get<T>(fullUrl);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw error;
  }
};

export default globalGetRequest;
