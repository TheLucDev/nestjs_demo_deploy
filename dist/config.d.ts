export declare const config: {
    PORT: string;
    BASE_PATH: string;
    SWAGGER_PATH: string;
    API_KEY: string;
    AUTH: {
        SECRET: string;
        EXPIRES_IN: string;
        SALT_ROUND: number;
    };
    MYSQL: {
        HOST: string;
        PORT: string;
        USERNAME: string;
        PASSWORD: string;
        DATABASE: string;
        IS_SYNCHORNIZE: any;
    };
    SQL: {
        HOST: string;
        PORT: string;
        USERNAME: string;
        PASSWORD: string;
        DATABASE: string;
        IS_SYNCHORNIZE: string | boolean;
    };
};
