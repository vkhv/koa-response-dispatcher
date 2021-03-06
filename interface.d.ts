export declare type Options = {
    body: Promise<any>;
    succesLogMessage: string;
    logger: Function;
    errorLogMessage: string;
    loggerLabel: string;
    errorStatusDescription: string;
};

export interface koaResponseDispatcher extends Function {
    (options: Options): Promise<any>
}
