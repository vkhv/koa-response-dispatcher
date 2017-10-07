export declare type Options = {
    body: Promise<any>;
    succesLogMessage: string;
    logger: Function;
    errorLogMessage: string;
    loggerLabel: string;
    errorStatusDescription: string;
};

interface koaResponseDispatcher extends Function {
    (ptions: Options): Promise<any>
}