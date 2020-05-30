import { Transform } from "./transform";
import { XmlSignatureCollection } from "./xml_object";
/**
 * The Transforms element contains a collection of transformations
 */
export declare class Transforms extends XmlSignatureCollection<Transform> {
    protected OnLoadXml(element: Element): void;
}
