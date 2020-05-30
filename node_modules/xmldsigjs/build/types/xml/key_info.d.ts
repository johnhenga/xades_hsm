import { KeyInfoClause } from "./key_infos";
import { XmlSignatureCollection } from "./xml_object";
/**
 *
 * <element name="KeyInfo" type="ds:KeyInfoType"/>
 * <complexType name="KeyInfoType" mixed="true">
 *   <choice maxOccurs="unbounded">
 *     <element ref="ds:KeyName"/>
 *     <element ref="ds:KeyValue"/>
 *     <element ref="ds:RetrievalMethod"/>
 *     <element ref="ds:X509Data"/>
 *     <element ref="ds:PGPData"/>
 *     <element ref="ds:SPKIData"/>
 *     <element ref="ds:MgmtData"/>
 *     <any processContents="lax" namespace="##other"/>
 *     <!--  (1,1) elements from (0,unbounded) namespaces  -->
 *   </choice>
 *   <attribute name="Id" type="ID" use="optional"/>
 * </complexType>
 *
 */
/**
 * Represents an XML digital signature or XML encryption <KeyInfo> element.
 */
export declare class KeyInfo extends XmlSignatureCollection<KeyInfoClause> {
    Id: string;
    protected OnLoadXml(element: Element): void;
}
