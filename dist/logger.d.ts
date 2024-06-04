import 'winston-daily-rotate-file';
export declare const logger: {
    error: (message: any) => void;
    warn: (message: any) => void;
    info: (message: any) => void;
    http: (message: any) => void;
    verbose: (message: any) => void;
    debug: (message: any) => void;
    silly: (message: any) => void;
};
