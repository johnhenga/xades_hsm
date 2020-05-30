import { XadesObject } from "./xml_base";
export declare class XadesDateTime extends XadesObject {
    Value: Date;
    /**
     * Format of the datetime value
     *
     * Check [dateformat]{@link https://www.npmjs.com/package/dateformat} for supported formatting options.
     * If not specified, [Date#toISOString()]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString} is used.
     */
    Format?: string;
    protected OnLoadXml(e: Element): void;
    protected OnGetXml(e: Element): void;
}
