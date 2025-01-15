import apiRequest from "../axiosConfig";

interface PostRequest<DataType = unknown> {
  url: string;
  data: DataType;
  options?: Record<string, string>;
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
      throw new Error(error.message);
    }
    throw error;
  }
};

export default globalPostRequest;
