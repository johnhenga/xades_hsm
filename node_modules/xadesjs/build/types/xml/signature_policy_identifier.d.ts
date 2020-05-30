import { Transforms } from "xmldsigjs";
import { AnyCollection } from "./any";
import { ObjectIdentifier } from "./object_identifier";
import { DigestAlgAndValueType } from "./signing_certificate";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SignaturePolicyIdentifier" type="SignaturePolicyIdentifierType"/>
 * <xsd:complexType name="SignaturePolicyIdentifierType">
 *     <xsd:choice>
 *         <xsd:element name="SignaturePolicyId" type="SignaturePolicyIdType"/>
 *         <xsd:element name="SignaturePolicyImplied"/>
 *     </xsd:choice>
 * </xsd:complexType>
 * <xsd:complexType name="SignaturePolicyIdType">
 *     <xsd:sequence>
 *         <xsd:element name="SigPolicyId" type="ObjectIdentifierType"/>
 *         <xsd:element ref="ds:Transforms" minOccurs="0"/>
 *         <xsd:element name="SigPolicyHash" type="DigestAlgAndValueType"/>
 *         <xsd:element name="SigPolicyQualifiers" type="SigPolicyQualifiersListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="SigPolicyQualifiersListType">
 *     <xsd:sequence>
 *         <xsd:element name="SigPolicyQualifier" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:element name="SPURI" type="xsd:anyURI"/>
 * <xsd:element name="SPUserNotice" type="SPUserNoticeType"/>
 * <xsd:complexType name="SPUserNoticeType">
 *     <xsd:sequence>
 *         <xsd:element name="NoticeRef" type="NoticeReferenceType" minOccurs="0"/>
 *         <xsd:element name="ExplicitText" type="xsd:string" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="NoticeReferenceType">
 *     <xsd:sequence>
 *         <xsd:element name="Organization" type="xsd:string"/>
 *         <xsd:element name="NoticeNumbers" type="IntegerListType"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="IntegerListType">
 *     <xsd:sequence>
 *         <xsd:element name="int" type="xsd:integer" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class SigPolicyId extends ObjectIdentifier {
}
export declare class SigPolicyHash extends DigestAlgAndValueType {
}
export declare class SigPolicyQualifier extends AnyCollection {
}
export declare class Integer extends XadesObject {
    Value: number;
}
export declare class IntegerList extends XadesCollection<Integer> {
}
export declare class NoticeReference extends XadesObject {
    Organization: string;
    NoticeNumbers: IntegerList;
}
export declare class SPUserNotice extends XadesObject {
    NoticeRef: NoticeReference;
    ExplicitText: string;
}
export declare class SPURI extends XadesObject {
    Value: string;
}
export declare class SigPolicyQualifiers extends XadesCollection<SigPolicyQualifier> {
}
export declare class SignaturePolicyId extends XadesObject {
    SigPolicyId: SigPolicyId;
    Transforms: Transforms;
    SigPolicyHash: SigPolicyHash;
    SigPolicyQualifiers: SigPolicyQualifiers;
}
export declare class SignaturePolicyIdentifier extends XadesObject {
    SignaturePolicyId: SignaturePolicyId;
    SignaturePolicyImplied: boolean;
}
