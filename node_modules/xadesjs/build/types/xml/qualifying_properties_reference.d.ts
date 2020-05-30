import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="QualifyingPropertiesReference" type="QualifyingPropertiesReferenceType"/>
 * <xsd:complexType name="QualifyingPropertiesReferenceType">
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="required"/>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class QualifyingPropertiesReference extends XadesObject {
    Uri: string;
    Id: string;
}
