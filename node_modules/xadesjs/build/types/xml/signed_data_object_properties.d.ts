import { CommitmentTypeIndication } from "./commitment_type_indication";
import { DataObjectFormat } from "./data_object_format";
import { XAdESTimeStamp } from "./xades_time_stamp";
import { XadesCollection, XadesObject } from "./xml_base";
/**
 *
 * <xsd:element name="SignedDataObjectProperties" type="SignedDataObjectPropertiesType"/>
 * <xsd:complexType name="SignedDataObjectPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="DataObjectFormat" type="DataObjectFormatType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="CommitmentTypeIndication" type="CommitmentTypeIndicationType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="AllDataObjectsTimeStamp" type="XAdESTimeStampType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="IndividualDataObjectsTimeStamp" type="XAdESTimeStampType" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
export declare class IndividualDataObjectsTimeStamp extends XAdESTimeStamp {
}
export declare class IndividualDataObjectsTimeStampCollection extends XadesCollection<IndividualDataObjectsTimeStamp> {
}
export declare class AllDataObjectsTimeStamp extends XAdESTimeStamp {
}
export declare class DataObjectFormatCollection extends XadesCollection<DataObjectFormat> {
}
export declare class CommitmentTypeIndicationCollection extends XadesCollection<CommitmentTypeIndication> {
}
export declare class AllDataObjectsTimeStampCollection extends XadesCollection<AllDataObjectsTimeStamp> {
}
export declare class SignedDataObjectProperties extends XadesObject {
    Id: string;
    DataObjectFormats: DataObjectFormatCollection;
    CommitmentTypeIndications: CommitmentTypeIndicationCollection;
    AllDataObjectsTimeStamps: AllDataObjectsTimeStampCollection;
    IndividualDataObjectsTimeStamps: IndividualDataObjectsTimeStampCollection;
}
