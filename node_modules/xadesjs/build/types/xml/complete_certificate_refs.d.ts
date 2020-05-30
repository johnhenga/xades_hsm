import { CertIDList } from "./signing_certificate";
import { UnsignedSignatureProperty } from "./unsigned_signature_properties";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="CompleteCertificateRefs" type="CompleteCertificateRefsType"/>
 * <xsd:complexType name="CompleteCertificateRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CertRefs" type="CertIDListType"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class CompleteCertificateRefs extends XadesObject implements UnsignedSignatureProperty {
    Id: string;
    CertRefs: CertIDList;
}
