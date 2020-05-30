import { Any } from "./any";
import { XadesDateTime } from "./date_time";
import { DigestAlgAndValueType } from "./signing_certificate";
import { UnsignedSignatureProperty } from "./unsigned_signature_properties";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="CompleteRevocationRefs" type="CompleteRevocationRefsType"/>
 * <xsd:complexType name="CompleteRevocationRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLRefs" type="CRLRefsType" minOccurs="0"/>
 *         <xsd:element name="OCSPRefs" type="OCSPRefsType" minOccurs="0"/>
 *         <xsd:element name="OtherRefs" type="OtherCertStatusRefsType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="CRLRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLRef" type="CRLRefType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CRLRefType">
 *     <xsd:sequence>
 *         <xsd:element name="DigestAlgAndValue" type="DigestAlgAndValueType"/>
 *         <xsd:element name="CRLIdentifier" type="CRLIdentifierType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CRLIdentifierType">
 *     <xsd:sequence>
 *         <xsd:element name="Issuer" type="xsd:string"/>
 *         <xsd:element name="IssueTime" type="xsd:dateTime"/>
 *         <xsd:element name="Number" type="xsd:integer" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="OCSPRef" type="OCSPRefType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPRefType">
 *     <xsd:sequence>
 *         <xsd:element name="OCSPIdentifier" type="OCSPIdentifierType"/>
 *         <xsd:element name="DigestAlgAndValue" type="DigestAlgAndValueType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="ResponderIDType">
 *     <xsd:choice>
 *         <xsd:element name="ByName" type="xsd:string"/>
 *         <xsd:element name="ByKey" type="xsd:base64Binary"/>
 *     </xsd:choice>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPIdentifierType">
 *     <xsd:sequence>
 *         <xsd:element name="ResponderID" type="ResponderIDType"/>
 *         <xsd:element name="ProducedAt" type="xsd:dateTime"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="OtherCertStatusRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="OtherRef" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class OtherRef extends Any {
}
export declare class OtherRefs extends XadesCollection<OtherRef> {
}
export declare class ResponderID extends XadesObject {
    ByName: string;
    ByKey: Uint8Array;
}
export declare class OCSPIdentifier extends XadesObject {
    URI: string;
    ResponderID: ResponderID;
    ProducedAt: XadesDateTime;
}
export declare class OCSPRef extends XadesObject {
    OCSPIdentifier: OCSPIdentifier;
    DigestAlgAndValue: DigestAlgAndValueType;
}
export declare class OCSPRefs extends XadesCollection<OCSPRef> {
}
export declare class CRLIdentifier extends XadesObject {
    URI: string;
    Issuer: string;
    IssueTime: XadesDateTime;
    Number: number;
}
export declare class CRLRef extends XadesObject {
    DigestAlgAndValue: DigestAlgAndValueType;
    CRLIdentifier: CRLIdentifier;
}
export declare class CRLRefs extends XadesCollection<CRLRef> {
}
export declare class CompleteRevocationRefs extends XadesObject implements UnsignedSignatureProperty {
    Id: string;
    CRLRefs: CRLRefs;
    OCSPRefs: OCSPRefs;
    OtherRefs: OtherRefs;
}
