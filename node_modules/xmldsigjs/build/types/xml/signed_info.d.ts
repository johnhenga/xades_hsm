import { CanonicalizationMethod } from "./canonicalization_method";
import { References } from "./reference";
import { SignatureMethod } from "./signature_method";
import { XmlSignatureObject } from "./xml_object";
/**
 *
 * <complexType name="SignedInfoType">
 *   <sequence>
 *     <element ref="ds:CanonicalizationMethod"/>
 *     <element ref="ds:SignatureMethod"/>
 *     <element ref="ds:Reference" maxOccurs="unbounded"/>
 *   </sequence>
 *   <attribute name="Id" type="ID" use="optional"/>
 * </complexType>
 *
 */
/**
 * The SignedInfo class represents the <SignedInfo> element
 * of an XML signature defined by the XML digital signature specification
 *
 * @export
 * @class SignedInfo
 * @extends {XmlSignatureObject}
 */
export declare class SignedInfo extends XmlSignatureObject {
    /**
     * Gets or sets the ID of the current SignedInfo object.
     *
     * @type {string}
     * @memberOf SignedInfo
     */
    Id: string;
    /**
     * Gets or sets the canonicalization algorithm that is used before signing
     * for the current SignedInfo object.
     */
    CanonicalizationMethod: CanonicalizationMethod;
    /**
     * Gets or sets the name of the algorithm used for signature generation
     * and validation for the current SignedInfo object.
     */
    SignatureMethod: SignatureMethod;
    References: References;
}
