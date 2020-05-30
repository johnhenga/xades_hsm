import { SignatureAlgorithm } from "../algorithm";
export declare const RSA_PSS = "RSA-PSS";
export declare const RSA_PSS_WITH_PARAMS_NAMESPACE = "http://www.w3.org/2007/05/xmldsig-more#rsa-pss";
export declare class RsaPssBase extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
    constructor(saltLength?: number);
}
export declare class RsaPssSha1 extends RsaPssBase {
    constructor(saltLength?: number);
}
export declare class RsaPssSha256 extends RsaPssBase {
    constructor(saltLength?: number);
}
export declare class RsaPssSha384 extends RsaPssBase {
    constructor(saltLength?: number);
}
export declare class RsaPssSha512 extends RsaPssBase {
    constructor(saltLength?: number);
}
