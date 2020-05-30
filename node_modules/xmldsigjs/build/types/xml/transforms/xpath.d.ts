import { Transform } from "../transform";
/**
 * <complexType name="TransformType" mixed="true">
 *   <choice minOccurs="0" maxOccurs="unbounded">
 *     <any namespace="##other" processContents="lax"/>
 *     <!-- (1,1) elements from (0,unbounded) namespaces -->
 *     <element name="XPath" type="string"/>
 *   </choice>
 *   <attribute name="Algorithm" type="anyURI" use="required"/>
 * </complexType>
 */
export declare class XmlDsigXPathTransform extends Transform {
    Algorithm: string;
    XPath: string;
    /**
     * Returns the output of the current XmlDsigXPathTransform object
     */
    GetOutput(): any;
    protected Filter(node: Node, xpath: string): void;
    protected GetEvaluator(node: Node): XPathEvaluator;
    protected Evaluate(node: Node, xpath: string): boolean;
}
