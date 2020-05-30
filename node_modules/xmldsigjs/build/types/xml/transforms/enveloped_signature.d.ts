import { Transform } from "../transform";
/**
 * Represents the enveloped signature transform for an XML digital signature as defined by the W3C.
 */
export declare class XmlDsigEnvelopedSignatureTransform extends Transform {
    Algorithm: string;
    /**
     * Returns the output of the current XmlDsigEnvelopedSignatureTransform object.
     * @returns string
     */
    GetOutput(): any;
}
