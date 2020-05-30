import { CertificateValues } from "./certificate_values";
import { CompleteCertificateRefs } from "./complete_certificate_refs";
import { CompleteRevocationRefs } from "./complete_revocation_refs";
import { RevocationValues } from "./revocation_values";
import { XAdESTimeStamp } from "./xades_time_stamp";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="UnsignedSignatureProperties" type="UnsignedSignaturePropertiesType"/>
 * <xsd:complexType name="UnsignedSignaturePropertiesType">
 *     <xsd:choice maxOccurs="unbounded">
 *         <xsd:element name="CounterSignature" type="CounterSignatureType"/>
 *         <xsd:element name="SignatureTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="CompleteCertificateRefs" type="CompleteCertificateRefsType"/>
 *         <xsd:element name="CompleteRevocationRefs" type="CompleteRevocationRefsType"/>
 *         <xsd:element name="AttributeCertificateRefs" type="CompleteCertificateRefsType"/>
 *         <xsd:element name="AttributeRevocationRefs" type="CompleteRevocationRefsType"/>
 *         <xsd:element name="SigAndRefsTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="RefsOnlyTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="CertificateValues" type="CertificateValuesType"/>
 *         <xsd:element name="RevocationValues" type="RevocationValuesType"/>
 *         <xsd:element name="AttrAuthoritiesCertValues" type="CertificateValuesType"/>
 *         <xsd:element name="AttributeRevocationValues" type="RevocationValuesType"/>
 *         <xsd:element name="ArchiveTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:any namespace="##other"/>
 *     </xsd:choice>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class SignatureTimeStamp extends XAdESTimeStamp implements UnsignedSignatureProperty {
}
export declare class SigAndRefsTimeStamp extends XAdESTimeStamp implements UnsignedSignatureProperty {
}
export declare class RefsOnlyTimeStamp extends XAdESTimeStamp implements UnsignedSignatureProperty {
}
export declare class ArchiveTimeStamp extends XAdESTimeStamp implements UnsignedSignatureProperty {
}
export declare class AttributeCertificateRefs extends CompleteCertificateRefs implements UnsignedSignatureProperty {
}
export declare class AttributeRevocationRefs extends CompleteRevocationRefs implements UnsignedSignatureProperty {
}
export declare class AttrAuthoritiesCertValues extends CertificateValues implements UnsignedSignatureProperty {
}
export declare class AttributeRevocationValues extends RevocationValues implements UnsignedSignatureProperty {
}
/**
 * Abstract class for UnsignedSignatureProperties
 *
 * @export
 * @class UnsignedSignatureProperty
 * @extends {XadesObject}
 */
export declare class UnsignedSignatureProperty extends XadesObject {
}
export declare class UnsignedSignatureProperties extends XadesCollection<UnsignedSignatureProperty> {
    Id: string;
    OnLoadXml(element: Element): void;
}
