import { Any } from "./any";
import { EncapsulatedPKIData } from "./encapsulated_pki_data";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SignerRole" type="SignerRoleType"/>
 * <xsd:complexType name="SignerRoleType">
 *     <xsd:sequence>
 *         <xsd:element name="ClaimedRoles" type="ClaimedRolesListType" minOccurs="0"/>
 *         <xsd:element name="CertifiedRoles" type="CertifiedRolesListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="ClaimedRolesListType">
 *     <xsd:sequence>
 *         <xsd:element name="ClaimedRole" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CertifiedRolesListType">
 *     <xsd:sequence>
 *         <xsd:element name="CertifiedRole" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class ClaimedRole extends Any {
}
export declare class ClaimedRoles extends XadesCollection<ClaimedRole> {
}
export declare class CertifiedRole extends EncapsulatedPKIData {
}
export declare class CertifiedRoles extends XadesCollection<CertifiedRole> {
}
export declare class SignerRole extends XadesObject {
    ClaimedRoles: ClaimedRoles;
    CertifiedRoles: CertifiedRoles;
}
