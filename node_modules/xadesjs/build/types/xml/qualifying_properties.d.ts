import { SignedProperties } from "./signed_properties";
import { UnsignedProperties } from "./unsigned_properties";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="QualifyingProperties" type="QualifyingPropertiesType"/>
 * <xsd:complexType name="QualifyingPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="SignedProperties" type="SignedPropertiesType" minOccurs="0"/>
 *         <xsd:element name="UnsignedProperties" type="UnsignedPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Target" type="xsd:anyURI" use="required"/>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class QualifyingProperties extends XadesObject {
    Target: string;
    Id: string;
    SignedProperties: SignedProperties;
    UnsignedProperties: UnsignedProperties;
}
