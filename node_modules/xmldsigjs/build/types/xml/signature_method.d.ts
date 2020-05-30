import { XmlObject } from "xml-core";
import { XmlSignatureCollection, XmlSignatureObject } from "./xml_object";
/**
 *
 * <element name="SignatureMethod" type="ds:SignatureMethodType"/>
 * <complexType name="SignatureMethodType" mixed="true">
 *   <sequence>
 *     <element name="HMACOutputLength" minOccurs="0" type="ds:HMACOutputLengthType"/>
 *     <any namespace="##other" minOccurs="0" maxOccurs="unbounded"/>
 *     <!--
 *     (0,unbounded) elements from (1,1) external namespace
 *     -->
 *   </sequence>
 *   <attribute name="Algorithm" type="anyURI" use="required"/>
 * </complexType>
 *
 */
export declare class SignatureMethodOther extends XmlSignatureCollection<XmlObject> {
    OnLoadXml(element: Element): void;
}
export declare class SignatureMethod extends XmlSignatureObject {
    Algorithm: string;
    /**
     * Parameters for the XML Signature HMAC Algorithm.
     * The parameters include an optional output length which specifies the MAC truncation length in bits.
     *
     * @type {number}
     * @memberOf SignatureMethod
     */
    HMACOutputLength: number;
    Any: SignatureMethodOther;
}
