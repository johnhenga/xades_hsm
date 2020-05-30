import { EncapsulatedPKIData } from "./encapsulated_pki_data";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="RevocationValues" type="RevocationValuesType"/>
 * <xsd:complexType name="RevocationValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLValues" type="CRLValuesType" minOccurs="0"/>
 *         <xsd:element name="OCSPValues" type="OCSPValuesType" minOccurs="0"/>
 *         <xsd:element name="OtherValues" type="OtherCertStatusValuesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="CRLValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="EncapsulatedCRLValue" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="EncapsulatedOCSPValue" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OtherCertStatusValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="OtherValue" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class OtherValue extends EncapsulatedPKIData {
}
export declare class OtherValues extends XadesCollection<OtherValue> {
}
export declare class EncapsulatedOCSPValue extends EncapsulatedPKIData {
}
export declare class OCSPValues extends XadesCollection<EncapsulatedOCSPValue> {
}
export declare class EncapsulatedCRLValue extends EncapsulatedPKIData {
}
export declare class CRLValues extends XadesCollection<EncapsulatedCRLValue> {
}
export declare class RevocationValues extends XadesObject {
    Id: string;
    CRLValues: CRLValues;
    OCSPValues: OCSPValues;
    OtherValues: OtherValues;
}
