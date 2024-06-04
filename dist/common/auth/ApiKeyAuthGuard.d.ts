import { ExecutionContext } from '@nestjs/common';
export declare class ApiKeyAuthGuard {
    constructor();
    canActivate(context: ExecutionContext): Promise<string>;
}
