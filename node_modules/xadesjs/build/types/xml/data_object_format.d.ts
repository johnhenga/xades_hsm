import { ObjectIdentifier } from "./object_identifier";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="DataObjectFormat" type="DataObjectFormatType"/>
 * <xsd:complexType name="DataObjectFormatType">
 *     <xsd:sequence>
 *         <xsd:element name="Description" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="ObjectIdentifier" type="ObjectIdentifierType" minOccurs="0"/>
 *         <xsd:element name="MimeType" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="Encoding" type="xsd:anyURI" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="ObjectReference" type="xsd:anyURI" use="required"/>
 * </xsd:complexType>
 *
 */
export declare class DataObjectFormat extends XadesObject {
    ObjectReference: string;
    Description: string;
    ObjectIdentifier: ObjectIdentifier;
    MimeType: string;
    Encoding: string;
}
