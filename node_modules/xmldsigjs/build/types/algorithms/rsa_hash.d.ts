import { HashAlgorithm } from "../algorithm";
export declare const SHA1 = "SHA-1";
export declare const SHA256 = "SHA-256";
export declare const SHA384 = "SHA-384";
export declare const SHA512 = "SHA-512";
export declare const SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#sha1";
export declare const SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmlenc#sha256";
export declare const SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#sha384";
export declare const SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmlenc#sha512";
export declare class Sha1 extends HashAlgorithm {
    algorithm: {
        name: string;
    };
    namespaceURI: string;
}
export declare class Sha256 extends HashAlgorithm {
    algorithm: {
        name: string;
    };
    namespaceURI: string;
}
export declare class Sha384 extends HashAlgorithm {
    algorithm: {
        name: string;
    };
    namespaceURI: string;
}
export declare class Sha512 extends HashAlgorithm {
    algorithm: {
        name: string;
    };
    namespaceURI: string;
}
