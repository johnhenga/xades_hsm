import { SignedDataObjectProperties } from "./signed_data_object_properties";
import { SignedSignatureProperties } from "./signed_signature_properties";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SignedProperties" type="SignedPropertiesType"/>
 * <xsd:complexType name="SignedPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="SignedSignatureProperties" type="SignedSignaturePropertiesType" minOccurs="0"/>
 *         <xsd:element name="SignedDataObjectProperties" type="SignedDataObjectPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class SignedProperties extends XadesObject {
    Id: string;
    SignedSignatureProperties: SignedSignatureProperties;
    SignedDataObjectProperties: SignedDataObjectProperties;
}
