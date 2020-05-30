import { SignatureAlgorithm } from "../algorithm";
export declare const RSA_PKCS1 = "RSASSA-PKCS1-v1_5";
export declare const RSA_PKCS1_SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#rsa-sha1";
export declare const RSA_PKCS1_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256";
export declare const RSA_PKCS1_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha384";
export declare const RSA_PKCS1_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#rsa-sha512";
export declare class RsaPkcs1Sha1 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class RsaPkcs1Sha256 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class RsaPkcs1Sha384 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class RsaPkcs1Sha512 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
