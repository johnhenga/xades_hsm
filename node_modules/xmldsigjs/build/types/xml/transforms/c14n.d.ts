import { XmlCanonicalizer } from "../../canonicalizer";
import { Transform } from "../transform";
/**
 * Represents the C14N XML canonicalization transform for a digital signature
 * as defined by the World Wide Web Consortium (W3C), without comments.
 */
export declare class XmlDsigC14NTransform extends Transform {
    Algorithm: string;
    protected xmlCanonicalizer: XmlCanonicalizer;
    /**
     * Returns the output of the current XmlDSigC14NTransform object.
     * @returns string
     */
    GetOutput(): string;
}
/**
 * Represents the C14N XML canonicalization transform for a digital signature
 * as defined by the World Wide Web Consortium (W3C), with comments.
 */
export declare class XmlDsigC14NWithCommentsTransform extends XmlDsigC14NTransform {
    Algorithm: string;
    protected xmlCanonicalizer: XmlCanonicalizer;
}
