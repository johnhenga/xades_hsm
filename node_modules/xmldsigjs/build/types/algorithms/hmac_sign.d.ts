import { SignatureAlgorithm } from "../algorithm";
export declare const HMAC = "HMAC";
export declare const HMAC_SHA1_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#hmac-sha1";
export declare const HMAC_SHA256_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha256";
export declare const HMAC_SHA384_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha384";
export declare const HMAC_SHA512_NAMESPACE = "http://www.w3.org/2001/04/xmldsig-more#hmac-sha512";
export declare class HmacSha1 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class HmacSha256 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class HmacSha384 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
export declare class HmacSha512 extends SignatureAlgorithm {
    algorithm: any;
    namespaceURI: string;
}
