import { SignatureAlgorithm } from "../algorithm";
export declare const ECDSA = "ECDSA";
export declare const ECDSA_SHA1_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1";
export declare const ECDSA_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256";
export declare const ECDSA_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384";
export declare const ECDSA_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512";
export declare class EcdsaSha1 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class EcdsaSha256 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class EcdsaSha384 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class EcdsaSha512 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
