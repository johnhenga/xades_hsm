import { XadesCollection, XadesObject } from "./xml_base";
/**
 * <xsd:element name="Any" type="AnyType"/>
 * <xsd:complexType name="AnyType" mixed="true">
 * 	 <xsd:sequence minOccurs="0" maxOccurs="unbounded">
 * 	   <xsd:any namespace="##any" processContents="lax"/>
 * 	 </xsd:sequence>
 * 	 <xsd:anyAttribute namespace="##any"/>
 * </xsd:complexType>
 */
export declare class Any extends XadesObject {
    Value: string;
}
export declare class AnyCollection extends XadesCollection<XadesObject> {
}
