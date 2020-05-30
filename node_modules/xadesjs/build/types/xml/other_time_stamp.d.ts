import { CanonicalizationMethod } from "xmldsigjs";
import { EncapsulatedTimeStampCollection, ReferenceInfos, XMLTimeStampCollection } from "./generic_time_stamp";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="OtherTimeStamp" type="OtherTimeStampType"/>
 * <xsd:complexType name="OtherTimeStampType">
 *     <xsd:complexContent>
 *         <xsd:restriction base="GenericTimeStampType">
 *             <xsd:sequence>
 *                 <xsd:element ref="ReferenceInfo" maxOccurs="unbounded"/>
 *                 <xsd:element ref="ds:CanonicalizationMethod" minOccurs="0"/>
 *                 <xsd:choice>
 *                     <xsd:element name="EncapsulatedTimeStamp" type="EncapsulatedPKIDataType"/>
 *                     <xsd:element name="XMLTimeStamp" type="AnyType"/>
 *                 </xsd:choice>
 *             </xsd:sequence>
 *             <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *         </xsd:restriction>
 *     </xsd:complexContent>
 * </xsd:complexType>
 *
 */
export declare class OtherTimeStamp extends XadesObject {
    Id: string;
    ReferenceInfo: ReferenceInfos;
    CanonicalizationMethod: CanonicalizationMethod;
    EncapsulatedTimeStamp: EncapsulatedTimeStampCollection;
    XMLTimeStamp: XMLTimeStampCollection;
}
