import * as XmlCore from "xml-core";
export declare enum XmlCanonicalizerState {
    BeforeDocElement = 0,
    InsideDocElement = 1,
    AfterDocElement = 2
}
export declare class XmlCanonicalizer {
    protected withComments: boolean;
    protected exclusive: boolean;
    protected propagatedNamespaces: XmlCore.NamespaceManager;
    protected document: Document;
    protected result: string[];
    protected visibleNamespaces: XmlCore.NamespaceManager;
    protected inclusiveNamespacesPrefixList: string[];
    protected state: XmlCanonicalizerState;
    constructor(withComments: boolean, excC14N: boolean, propagatedNamespaces?: XmlCore.NamespaceManager);
    get InclusiveNamespacesPrefixList(): string;
    set InclusiveNamespacesPrefixList(value: string);
    Canonicalize(node: Node): string;
    protected WriteNode(node: Node): void;
    protected WriteDocumentNode(node: Node): void;
    protected WriteCommentNode(node: Node): void;
    protected WriteTextNode(node: Node): void;
    protected WriteProcessingInstructionNode(node: Node): void;
    protected WriteElementNode(node: Element): void;
    protected WriteNamespacesAxis(node: Element): number;
    protected WriteAttributesAxis(node: Element): void;
    protected NormalizeString(input: string | null, type: XmlCore.XmlNodeType): string;
    private IsTextNode;
    private IsNamespaceInclusive;
    private IsNamespaceRendered;
}
