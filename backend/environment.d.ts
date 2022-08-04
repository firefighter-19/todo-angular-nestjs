declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_TYPE: string;
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      APP_PORT: string;
    }
  }
}

export {};
