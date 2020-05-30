import { Any } from "./any";
import { EncapsulatedPKIData } from "./encapsulated_pki_data";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="CertificateValues" type="CertificateValuesType"/>
 * <xsd:complexType name="CertificateValuesType">
 *     <xsd:choice minOccurs="0" maxOccurs="unbounded">
 *         <xsd:element name="EncapsulatedX509Certificate" type="EncapsulatedPKIDataType"/>
 *         <xsd:element name="OtherCertificate" type="AnyType"/>
 *     </xsd:choice>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class OtherCertificate extends Any {
}
export declare class OtherCertificateCollection extends XadesCollection<OtherCertificate> {
}
export declare class EncapsulatedX509Certificate extends EncapsulatedPKIData {
}
export declare class EncapsulatedX509CertificateCollection extends XadesCollection<EncapsulatedX509Certificate> {
}
export declare class CertificateValues extends XadesObject {
    Id: string;
    EncapsulatedX509Certificates: EncapsulatedX509CertificateCollection;
    OtherCertificates: OtherCertificateCollection;
}
