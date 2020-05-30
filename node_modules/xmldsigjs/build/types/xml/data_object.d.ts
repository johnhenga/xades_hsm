import { XmlSignatureCollection, XmlSignatureObject } from "./xml_object";
/**
 *
 * <element name='Object' >
 *   <complexType content='mixed'>
 *     <element ref='ds:Manifest' minOccurs='1' maxOccurs='unbounded'/>
 *     <any namespace='##any' minOccurs='1' maxOccurs='unbounded'/>
 *     <attribute name='Id' type='ID' use='optional'/>
 *     <attribute name='MimeType' type='string' use='optional'/> <!-- add a grep facet -->
 *     <attribute name='Encoding' type='uriReference' use='optional'/>
 *   </complexType>
 * </element>
 *
 */
/**
 * Represents the object element of an XML signature that holds data to be signed.
 */
export declare class DataObject extends XmlSignatureObject {
    Id: string;
    MimeType: string;
    Encoding: string;
}
export declare class DataObjects extends XmlSignatureCollection<DataObject> {
}
