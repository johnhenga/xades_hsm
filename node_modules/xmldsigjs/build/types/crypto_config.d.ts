import { IHashAlgorithm, ISignatureAlgorithm } from "./algorithm";
import { SignatureMethod } from "./xml/signature_method";
import { HashAlgorithm, SignatureAlgorithm } from "./algorithm";
import { Transform } from "./xml";
export declare class CryptoConfig {
    /**
     * Creates Transform from given name
     * if name is not exist then throws error
     *
     * @static
     * @param {(string |)} [name=null]
     * @returns
     *
     * @memberOf CryptoConfig
     */
    static CreateFromName(name: string | null): Transform;
    static CreateSignatureAlgorithm(method: SignatureMethod): SignatureAlgorithm;
    static CreateHashAlgorithm(namespace: string): HashAlgorithm;
    static GetHashAlgorithm(algorithm: AlgorithmIdentifier): IHashAlgorithm;
    static GetSignatureAlgorithm(algorithm: Algorithm): ISignatureAlgorithm;
}
