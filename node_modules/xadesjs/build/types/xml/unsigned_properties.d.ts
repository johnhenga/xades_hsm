import { UnsignedDataObjectProperties } from "./unsigned_data_object_property";
import { UnsignedSignatureProperties } from "./unsigned_signature_properties";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="UnsignedProperties" type="UnsignedPropertiesType"/>
 * <xsd:complexType name="UnsignedPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="UnsignedSignatureProperties" type="UnsignedSignaturePropertiesType" minOccurs="0"/>
 *         <xsd:element name="UnsignedDataObjectProperties" type="UnsignedDataObjectPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class UnsignedProperties extends XadesObject {
    Id: string;
    UnsignedSignatureProperties: UnsignedSignatureProperties;
    UnsignedDataObjectProperties: UnsignedDataObjectProperties;
}
