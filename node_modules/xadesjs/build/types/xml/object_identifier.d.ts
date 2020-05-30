import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <!-- Start ObjectIdentifierType-->
 * <xsd:element name="ObjectIdentifier" type="ObjectIdentifierType"/>
 * <xsd:complexType name="ObjectIdentifierType">
 *   <xsd:sequence>
 *     <xsd:element name="Identifier" type="IdentifierType"/>
 *     <xsd:element name="Description" type="xsd:string" minOccurs="0"/>
 *     <xsd:element name="DocumentationReferences" type="DocumentationReferencesType" minOccurs="0"/>
 *   </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="IdentifierType">
 *   <xsd:simpleContent>
 *     <xsd:extension base="xsd:anyURI">
 *       <xsd:attribute name="Qualifier" type="QualifierType" use="optional"/>
 *     </xsd:extension>
 *   </xsd:simpleContent>
 * </xsd:complexType>
 * <xsd:simpleType name="QualifierType">
 *   <xsd:restriction base="xsd:string">
 *     <xsd:enumeration value="OIDAsURI"/>
 *     <xsd:enumeration value="OIDAsURN"/>
 *   </xsd:restriction>
 * </xsd:simpleType>
 * <xsd:complexType name="DocumentationReferencesType">
 *   <xsd:sequence maxOccurs="unbounded">
 *      <xsd:element name="DocumentationReference" type="xsd:anyURI"/>
 *   </xsd:sequence>
 * </xsd:complexType>
 * <!-- End ObjectIdentifierType-->
 *
 */
export declare type IdentifierQualifier = "OIDAsURI" | "OIDAsURN";
export declare class Identifier extends XadesObject {
    Qualifier: IdentifierQualifier;
    Value: string;
}
export declare class DocumentationReference extends XadesObject {
    Uri: string;
    protected OnLoadXml(e: Element): void;
    protected OnGetXml(e: Element): void;
}
export declare class DocumentationReferences extends XadesCollection<DocumentationReference> {
}
export declare class ObjectIdentifier extends XadesObject {
    Identifier: Identifier;
    Description: string;
    DocumentationReferences: DocumentationReferences;
}
