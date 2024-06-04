export declare function getGMTTime(time: Date, GMT?: any): Date;
export declare const getUTCTime: (time: Date) => Date;
export declare const getNowUTCTime: () => Date;
export declare const JoinNotNull: (input: string[], seperator?: string) => string;
export declare const TodayIsBirth: (birth_day: any) => boolean;
export declare const FormatPhoneNumber: (phone_number: any) => any;
export declare function DataMapper<B>(source: any, dest: B): B;
export declare function ReplaceChar(ori: any, replaceBy: any, idx: any): any;
export declare const GroupObjToExpandMenuCode: (array: any) => any[];
export declare const Vat8: (items: any) => any;
export declare const Vat10: (items: any) => any;
export declare const TotalPrice: (items: any) => any;
export declare const FlattenObj: (obj: any, parent: any, res?: {}) => {};
export declare const UniqueArray: (array: any) => any;
export declare const UniqueArrayItem: (array: any) => any;
export declare const AddZeroBefore: (number: any, length?: number) => string;
export declare const GetKeyByValue: (obj: any, value: any) => string;
export declare class GeneratePasswdClass {
    constructor();
    Pick(str: string, min: number, max: number): string;
    Shuffle(str: string): string;
    GeneratePassword: () => string;
}
