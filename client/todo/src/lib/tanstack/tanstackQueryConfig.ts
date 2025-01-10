import { QueryClient, QueryClientConfig } from "@tanstack/react-query";

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
};

const queryClientGlobal = new QueryClient(queryClientConfig);

export default queryClientGlobal;
