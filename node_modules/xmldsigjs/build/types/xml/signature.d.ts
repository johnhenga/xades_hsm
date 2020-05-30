import { DataObjects } from "./data_object";
import { KeyInfo } from "./key_info";
import { SignedInfo } from "./signed_info";
import { XmlSignatureObject } from "./xml_object";
/**
 *
 * <element name="Signature" type="ds:SignatureType"/>
 * <complexType name="SignatureType">
 *   <sequence>
 *     <element ref="ds:SignedInfo"/>
 *     <element ref="ds:SignatureValue"/>
 *     <element ref="ds:KeyInfo" minOccurs="0"/>
 *     <element ref="ds:Object" minOccurs="0" maxOccurs="unbounded"/>
 *   </sequence>
 *   <attribute name="Id" type="ID" use="optional"/>
 * </complexType>
 *
 */
/**
 * Represents the <Signature> element of an XML signature.
 */
export declare class Signature extends XmlSignatureObject {
    /**
     * Gets or sets the ID of the current Signature.
     */
    Id: string;
    /**
     * Gets or sets the SignedInfo of the current Signature.
     */
    SignedInfo: SignedInfo;
    /**
     * Gets or sets the value of the digital signature.
     */
    SignatureValue: Uint8Array | null;
    /**
     * Gets or sets the KeyInfo of the current Signature.
     */
    KeyInfo: KeyInfo;
    ObjectList: DataObjects;
}
