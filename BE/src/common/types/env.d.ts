namespace NodeJs {
  interface ProcessEnv {
    // database
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_PORT: number;
    DB_HOST: string;

    // secrets
    JWT_SECRET: string;
  }
}
