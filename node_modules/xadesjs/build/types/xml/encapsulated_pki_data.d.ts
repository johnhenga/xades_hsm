import { XadesObject } from "./xml_base";
export declare type EncodingType = "der" | "ber" | "cer" | "per" | "xer" | null;
export declare class EncapsulatedPKIData extends XadesObject {
    Id: string;
    Encoding: EncodingType;
    Value: Uint8Array;
}
