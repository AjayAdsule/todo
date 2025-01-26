import apiRequest from "../axiosConfig";

interface PostRequest<DataType = unknown> {
  url: string;
  data: DataType;
  options?: Record<string, string>;
}

interface AxiosErrorResponse {
  response?: {
    data: {
      message: string;
    };
  };
}

const globalPostRequest = async <DataType, ResponseType>({
  url,
  data,
  options,
}: PostRequest<DataType>): Promise<ResponseType> => {
  try {
    const res = await apiRequest.post<ResponseType>(url, data, {
      headers: options,
    });
    return res.data;
  } catch (error) {
    if (error instanceof Error) {
      const axiosError = error as Error & AxiosErrorResponse;
      if (axiosError.response) {
        throw new Error(axiosError.response.data.message);
      }
    }
    throw error;
  }
};

export default globalPostRequest;
