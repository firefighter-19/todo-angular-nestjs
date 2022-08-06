declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_URL: string;
      SERVER_PORT: string;
    }
  }
}

export {};
