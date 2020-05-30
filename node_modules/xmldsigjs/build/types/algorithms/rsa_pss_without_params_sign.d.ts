import { SignatureAlgorithm } from "../algorithm";
export declare const RSA_PSS_SHA1_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha1-rsa-MGF1";
export declare const RSA_PSS_SHA256_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha256-rsa-MGF1";
export declare const RSA_PSS_SHA384_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha384-rsa-MGF1";
export declare const RSA_PSS_SHA512_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#sha512-rsa-MGF1";
export declare class RsaPssWithoutParamsBase extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
    constructor();
}
export declare class RsaPssWithoutParamsSha1 extends RsaPssWithoutParamsBase {
    constructor();
}
export declare class RsaPssWithoutParamsSha256 extends RsaPssWithoutParamsBase {
    constructor();
}
export declare class RsaPssWithoutParamsSha384 extends RsaPssWithoutParamsBase {
    constructor();
}
export declare class RsaPssWithoutParamsSha512 extends RsaPssWithoutParamsBase {
    constructor();
}
