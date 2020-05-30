import { Any } from "./any";
import { ObjectIdentifier } from "./object_identifier";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="CommitmentTypeIndication" type="CommitmentTypeIndicationType"/>
 * <xsd:complexType name="CommitmentTypeIndicationType">
 *     <xsd:sequence>
 *         <xsd:element name="CommitmentTypeId" type="ObjectIdentifierType"/>
 *         <xsd:choice>
 *             <xsd:element name="ObjectReference" type="xsd:anyURI" maxOccurs="unbounded"/>
 *             <xsd:element name="AllSignedDataObjects"/>
 *         </xsd:choice>
 *         <xsd:element name="CommitmentTypeQualifiers" type="CommitmentTypeQualifiersListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CommitmentTypeQualifiersListType">
 *     <xsd:sequence>
 *         <xsd:element name="CommitmentTypeQualifier" type="AnyType" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
export declare class CommitmentTypeQualifier extends Any {
}
export declare class CommitmentTypeQualifiers extends XadesCollection<CommitmentTypeQualifier> {
}
export declare class ObjectReference extends XadesObject {
    Value: string;
}
export declare class ObjectReferenceCollection extends XadesCollection<ObjectReference> {
}
export declare class CommitmentTypeIndication extends XadesObject {
    CommitmentTypeId: ObjectIdentifier;
    ObjectReference: ObjectReferenceCollection;
    AllSignedDataObjects: boolean;
    CommitmentTypeQualifiers: CommitmentTypeQualifiers;
}
