interface Config {
  [key: string]: string;
}

export const config: Config = {
  baseUrl: String(import.meta.env.VITE_BASE_API_URL),
};
