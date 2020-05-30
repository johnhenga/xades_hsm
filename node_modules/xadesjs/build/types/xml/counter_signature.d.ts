import { Signature } from "xmldsigjs";
import { UnsignedSignatureProperty } from "./unsigned_signature_properties";
import { XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="CounterSignature" type="CounterSignatureType"/>
 * <xsd:complexType name="CounterSignatureType">
 *     <xsd:sequence>
 *         <xsd:element ref="ds:Signature"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class CounterSignature extends XadesObject implements UnsignedSignatureProperty {
    Signature: Signature;
}
