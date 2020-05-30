import { DigestMethod, X509IssuerSerial } from "xmldsigjs";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SigningCertificate" type="CertIDListType"/>
 * <xsd:complexType name="CertIDListType">
 *     <xsd:sequence>
 *         <xsd:element name="Cert" type="CertIDType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CertIDType">
 *     <xsd:sequence>
 *         <xsd:element name="CertDigest" type="DigestAlgAndValueType"/>
 *         <xsd:element name="IssuerSerial" type="ds:X509IssuerSerialType"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="DigestAlgAndValueType">
 *     <xsd:sequence>
 *         <xsd:element ref="ds:DigestMethod"/>
 *         <xsd:element ref="ds:DigestValue"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class DigestAlgAndValueType extends XadesObject {
    DigestMethod: DigestMethod;
    DigestValue: Uint8Array;
}
export declare class IssuerSerial extends X509IssuerSerial {
}
export declare class Cert extends XadesObject {
    CertDigest: DigestAlgAndValueType;
    IssuerSerial: X509IssuerSerial;
    Uri: string;
}
export declare class CertIDList extends XadesCollection<Cert> {
}
export declare class SigningCertificate extends CertIDList {
}
