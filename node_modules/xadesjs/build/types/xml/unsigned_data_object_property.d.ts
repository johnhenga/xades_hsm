import { Any } from "./any";
import { XadesCollection } from "./xml_base";
/**
 *
 * <xsd:element name="UnsignedDataObjectProperties" type="UnsignedDataObjectPropertiesType"/>
 * <xsd:complexType name="UnsignedDataObjectPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="UnsignedDataObjectProperty" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class UnsignedDataObjectProperty extends Any {
}
export declare class UnsignedDataObjectProperties extends XadesCollection<UnsignedDataObjectProperty> {
    Id: string;
}
