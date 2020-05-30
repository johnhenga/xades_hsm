import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SignatureProductionPlace" type="SignatureProductionPlaceType"/>
 * <xsd:complexType name="SignatureProductionPlaceType">
 *     <xsd:sequence>
 *         <xsd:element name="City" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="StateOrProvince" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="PostalCode" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="CountryName" type="xsd:string" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class SignatureProductionPlace extends XadesObject {
    City: string;
    StateOrProvince: string;
    PostalCode: string;
    CountryName: string;
}
