import * as jspb from 'google-protobuf'



export class FileDescriptorSet extends jspb.Message {
  getFileList(): Array<FileDescriptorProto>;
  setFileList(value: Array<FileDescriptorProto>): FileDescriptorSet;
  clearFileList(): FileDescriptorSet;
  addFile(value?: FileDescriptorProto, index?: number): FileDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorSet.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorSet): FileDescriptorSet.AsObject;
  static serializeBinaryToWriter(message: FileDescriptorSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorSet;
  static deserializeBinaryFromReader(message: FileDescriptorSet, reader: jspb.BinaryReader): FileDescriptorSet;
}

export namespace FileDescriptorSet {
  export type AsObject = {
    fileList: Array<FileDescriptorProto.AsObject>,
  }
}

export class FileDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): FileDescriptorProto;

  getPackage(): string;
  setPackage(value: string): FileDescriptorProto;

  getDependencyList(): Array<string>;
  setDependencyList(value: Array<string>): FileDescriptorProto;
  clearDependencyList(): FileDescriptorProto;
  addDependency(value: string, index?: number): FileDescriptorProto;

  getPublicDependencyList(): Array<number>;
  setPublicDependencyList(value: Array<number>): FileDescriptorProto;
  clearPublicDependencyList(): FileDescriptorProto;
  addPublicDependency(value: number, index?: number): FileDescriptorProto;

  getWeakDependencyList(): Array<number>;
  setWeakDependencyList(value: Array<number>): FileDescriptorProto;
  clearWeakDependencyList(): FileDescriptorProto;
  addWeakDependency(value: number, index?: number): FileDescriptorProto;

  getMessageTypeList(): Array<DescriptorProto>;
  setMessageTypeList(value: Array<DescriptorProto>): FileDescriptorProto;
  clearMessageTypeList(): FileDescriptorProto;
  addMessageType(value?: DescriptorProto, index?: number): DescriptorProto;

  getEnumTypeList(): Array<EnumDescriptorProto>;
  setEnumTypeList(value: Array<EnumDescriptorProto>): FileDescriptorProto;
  clearEnumTypeList(): FileDescriptorProto;
  addEnumType(value?: EnumDescriptorProto, index?: number): EnumDescriptorProto;

  getServiceList(): Array<ServiceDescriptorProto>;
  setServiceList(value: Array<ServiceDescriptorProto>): FileDescriptorProto;
  clearServiceList(): FileDescriptorProto;
  addService(value?: ServiceDescriptorProto, index?: number): ServiceDescriptorProto;

  getExtensionList(): Array<FieldDescriptorProto>;
  setExtensionList(value: Array<FieldDescriptorProto>): FileDescriptorProto;
  clearExtensionList(): FileDescriptorProto;
  addExtension(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

  getOptions(): FileOptions | undefined;
  setOptions(value?: FileOptions): FileDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): FileDescriptorProto;

  getSourceCodeInfo(): SourceCodeInfo | undefined;
  setSourceCodeInfo(value?: SourceCodeInfo): FileDescriptorProto;
  hasSourceCodeInfo(): boolean;
  clearSourceCodeInfo(): FileDescriptorProto;

  getSyntax(): string;
  setSyntax(value: string): FileDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: FileDescriptorProto): FileDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: FileDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileDescriptorProto;
  static deserializeBinaryFromReader(message: FileDescriptorProto, reader: jspb.BinaryReader): FileDescriptorProto;
}

export namespace FileDescriptorProto {
  export type AsObject = {
    name: string,
    pb_package: string,
    dependencyList: Array<string>,
    publicDependencyList: Array<number>,
    weakDependencyList: Array<number>,
    messageTypeList: Array<DescriptorProto.AsObject>,
    enumTypeList: Array<EnumDescriptorProto.AsObject>,
    serviceList: Array<ServiceDescriptorProto.AsObject>,
    extensionList: Array<FieldDescriptorProto.AsObject>,
    options?: FileOptions.AsObject,
    sourceCodeInfo?: SourceCodeInfo.AsObject,
    syntax: string,
  }
}

export class DescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): DescriptorProto;

  getFieldList(): Array<FieldDescriptorProto>;
  setFieldList(value: Array<FieldDescriptorProto>): DescriptorProto;
  clearFieldList(): DescriptorProto;
  addField(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

  getExtensionList(): Array<FieldDescriptorProto>;
  setExtensionList(value: Array<FieldDescriptorProto>): DescriptorProto;
  clearExtensionList(): DescriptorProto;
  addExtension(value?: FieldDescriptorProto, index?: number): FieldDescriptorProto;

  getNestedTypeList(): Array<DescriptorProto>;
  setNestedTypeList(value: Array<DescriptorProto>): DescriptorProto;
  clearNestedTypeList(): DescriptorProto;
  addNestedType(value?: DescriptorProto, index?: number): DescriptorProto;

  getEnumTypeList(): Array<EnumDescriptorProto>;
  setEnumTypeList(value: Array<EnumDescriptorProto>): DescriptorProto;
  clearEnumTypeList(): DescriptorProto;
  addEnumType(value?: EnumDescriptorProto, index?: number): EnumDescriptorProto;

  getExtensionRangeList(): Array<DescriptorProto.ExtensionRange>;
  setExtensionRangeList(value: Array<DescriptorProto.ExtensionRange>): DescriptorProto;
  clearExtensionRangeList(): DescriptorProto;
  addExtensionRange(value?: DescriptorProto.ExtensionRange, index?: number): DescriptorProto.ExtensionRange;

  getOneofDeclList(): Array<OneofDescriptorProto>;
  setOneofDeclList(value: Array<OneofDescriptorProto>): DescriptorProto;
  clearOneofDeclList(): DescriptorProto;
  addOneofDecl(value?: OneofDescriptorProto, index?: number): OneofDescriptorProto;

  getOptions(): MessageOptions | undefined;
  setOptions(value?: MessageOptions): DescriptorProto;
  hasOptions(): boolean;
  clearOptions(): DescriptorProto;

  getReservedRangeList(): Array<DescriptorProto.ReservedRange>;
  setReservedRangeList(value: Array<DescriptorProto.ReservedRange>): DescriptorProto;
  clearReservedRangeList(): DescriptorProto;
  addReservedRange(value?: DescriptorProto.ReservedRange, index?: number): DescriptorProto.ReservedRange;

  getReservedNameList(): Array<string>;
  setReservedNameList(value: Array<string>): DescriptorProto;
  clearReservedNameList(): DescriptorProto;
  addReservedName(value: string, index?: number): DescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: DescriptorProto): DescriptorProto.AsObject;
  static serializeBinaryToWriter(message: DescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DescriptorProto;
  static deserializeBinaryFromReader(message: DescriptorProto, reader: jspb.BinaryReader): DescriptorProto;
}

export namespace DescriptorProto {
  export type AsObject = {
    name: string,
    fieldList: Array<FieldDescriptorProto.AsObject>,
    extensionList: Array<FieldDescriptorProto.AsObject>,
    nestedTypeList: Array<DescriptorProto.AsObject>,
    enumTypeList: Array<EnumDescriptorProto.AsObject>,
    extensionRangeList: Array<DescriptorProto.ExtensionRange.AsObject>,
    oneofDeclList: Array<OneofDescriptorProto.AsObject>,
    options?: MessageOptions.AsObject,
    reservedRangeList: Array<DescriptorProto.ReservedRange.AsObject>,
    reservedNameList: Array<string>,
  }

  export class ExtensionRange extends jspb.Message {
    getStart(): number;
    setStart(value: number): ExtensionRange;

    getEnd(): number;
    setEnd(value: number): ExtensionRange;

    getOptions(): ExtensionRangeOptions | undefined;
    setOptions(value?: ExtensionRangeOptions): ExtensionRange;
    hasOptions(): boolean;
    clearOptions(): ExtensionRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExtensionRange.AsObject;
    static toObject(includeInstance: boolean, msg: ExtensionRange): ExtensionRange.AsObject;
    static serializeBinaryToWriter(message: ExtensionRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExtensionRange;
    static deserializeBinaryFromReader(message: ExtensionRange, reader: jspb.BinaryReader): ExtensionRange;
  }

  export namespace ExtensionRange {
    export type AsObject = {
      start: number,
      end: number,
      options?: ExtensionRangeOptions.AsObject,
    }
  }


  export class ReservedRange extends jspb.Message {
    getStart(): number;
    setStart(value: number): ReservedRange;

    getEnd(): number;
    setEnd(value: number): ReservedRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReservedRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReservedRange): ReservedRange.AsObject;
    static serializeBinaryToWriter(message: ReservedRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReservedRange;
    static deserializeBinaryFromReader(message: ReservedRange, reader: jspb.BinaryReader): ReservedRange;
  }

  export namespace ReservedRange {
    export type AsObject = {
      start: number,
      end: number,
    }
  }

}

export class ExtensionRangeOptions extends jspb.Message {
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): ExtensionRangeOptions;
  clearUninterpretedOptionList(): ExtensionRangeOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionRangeOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionRangeOptions): ExtensionRangeOptions.AsObject;
  static serializeBinaryToWriter(message: ExtensionRangeOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionRangeOptions;
  static deserializeBinaryFromReader(message: ExtensionRangeOptions, reader: jspb.BinaryReader): ExtensionRangeOptions;
}

export namespace ExtensionRangeOptions {
  export type AsObject = {
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class FieldDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): FieldDescriptorProto;

  getNumber(): number;
  setNumber(value: number): FieldDescriptorProto;

  getLabel(): FieldDescriptorProto.Label;
  setLabel(value: FieldDescriptorProto.Label): FieldDescriptorProto;

  getType(): FieldDescriptorProto.Type;
  setType(value: FieldDescriptorProto.Type): FieldDescriptorProto;

  getTypeName(): string;
  setTypeName(value: string): FieldDescriptorProto;

  getExtendee(): string;
  setExtendee(value: string): FieldDescriptorProto;

  getDefaultValue(): string;
  setDefaultValue(value: string): FieldDescriptorProto;

  getOneofIndex(): number;
  setOneofIndex(value: number): FieldDescriptorProto;

  getJsonName(): string;
  setJsonName(value: string): FieldDescriptorProto;

  getOptions(): FieldOptions | undefined;
  setOptions(value?: FieldOptions): FieldDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): FieldDescriptorProto;

  getProto3Optional(): boolean;
  setProto3Optional(value: boolean): FieldDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: FieldDescriptorProto): FieldDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: FieldDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldDescriptorProto;
  static deserializeBinaryFromReader(message: FieldDescriptorProto, reader: jspb.BinaryReader): FieldDescriptorProto;
}

export namespace FieldDescriptorProto {
  export type AsObject = {
    name: string,
    number: number,
    label: FieldDescriptorProto.Label,
    type: FieldDescriptorProto.Type,
    typeName: string,
    extendee: string,
    defaultValue: string,
    oneofIndex: number,
    jsonName: string,
    options?: FieldOptions.AsObject,
    proto3Optional: boolean,
  }

  export enum Type { 
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18,
  }

  export enum Label { 
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3,
  }
}

export class OneofDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): OneofDescriptorProto;

  getOptions(): OneofOptions | undefined;
  setOptions(value?: OneofOptions): OneofDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): OneofDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: OneofDescriptorProto): OneofDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: OneofDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofDescriptorProto;
  static deserializeBinaryFromReader(message: OneofDescriptorProto, reader: jspb.BinaryReader): OneofDescriptorProto;
}

export namespace OneofDescriptorProto {
  export type AsObject = {
    name: string,
    options?: OneofOptions.AsObject,
  }
}

export class EnumDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): EnumDescriptorProto;

  getValueList(): Array<EnumValueDescriptorProto>;
  setValueList(value: Array<EnumValueDescriptorProto>): EnumDescriptorProto;
  clearValueList(): EnumDescriptorProto;
  addValue(value?: EnumValueDescriptorProto, index?: number): EnumValueDescriptorProto;

  getOptions(): EnumOptions | undefined;
  setOptions(value?: EnumOptions): EnumDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): EnumDescriptorProto;

  getReservedRangeList(): Array<EnumDescriptorProto.EnumReservedRange>;
  setReservedRangeList(value: Array<EnumDescriptorProto.EnumReservedRange>): EnumDescriptorProto;
  clearReservedRangeList(): EnumDescriptorProto;
  addReservedRange(value?: EnumDescriptorProto.EnumReservedRange, index?: number): EnumDescriptorProto.EnumReservedRange;

  getReservedNameList(): Array<string>;
  setReservedNameList(value: Array<string>): EnumDescriptorProto;
  clearReservedNameList(): EnumDescriptorProto;
  addReservedName(value: string, index?: number): EnumDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: EnumDescriptorProto): EnumDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: EnumDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumDescriptorProto;
  static deserializeBinaryFromReader(message: EnumDescriptorProto, reader: jspb.BinaryReader): EnumDescriptorProto;
}

export namespace EnumDescriptorProto {
  export type AsObject = {
    name: string,
    valueList: Array<EnumValueDescriptorProto.AsObject>,
    options?: EnumOptions.AsObject,
    reservedRangeList: Array<EnumDescriptorProto.EnumReservedRange.AsObject>,
    reservedNameList: Array<string>,
  }

  export class EnumReservedRange extends jspb.Message {
    getStart(): number;
    setStart(value: number): EnumReservedRange;

    getEnd(): number;
    setEnd(value: number): EnumReservedRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnumReservedRange.AsObject;
    static toObject(includeInstance: boolean, msg: EnumReservedRange): EnumReservedRange.AsObject;
    static serializeBinaryToWriter(message: EnumReservedRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnumReservedRange;
    static deserializeBinaryFromReader(message: EnumReservedRange, reader: jspb.BinaryReader): EnumReservedRange;
  }

  export namespace EnumReservedRange {
    export type AsObject = {
      start: number,
      end: number,
    }
  }

}

export class EnumValueDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): EnumValueDescriptorProto;

  getNumber(): number;
  setNumber(value: number): EnumValueDescriptorProto;

  getOptions(): EnumValueOptions | undefined;
  setOptions(value?: EnumValueOptions): EnumValueDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): EnumValueDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValueDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValueDescriptorProto): EnumValueDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: EnumValueDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValueDescriptorProto;
  static deserializeBinaryFromReader(message: EnumValueDescriptorProto, reader: jspb.BinaryReader): EnumValueDescriptorProto;
}

export namespace EnumValueDescriptorProto {
  export type AsObject = {
    name: string,
    number: number,
    options?: EnumValueOptions.AsObject,
  }
}

export class ServiceDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): ServiceDescriptorProto;

  getMethodList(): Array<MethodDescriptorProto>;
  setMethodList(value: Array<MethodDescriptorProto>): ServiceDescriptorProto;
  clearMethodList(): ServiceDescriptorProto;
  addMethod(value?: MethodDescriptorProto, index?: number): MethodDescriptorProto;

  getOptions(): ServiceOptions | undefined;
  setOptions(value?: ServiceOptions): ServiceDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): ServiceDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceDescriptorProto): ServiceDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: ServiceDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceDescriptorProto;
  static deserializeBinaryFromReader(message: ServiceDescriptorProto, reader: jspb.BinaryReader): ServiceDescriptorProto;
}

export namespace ServiceDescriptorProto {
  export type AsObject = {
    name: string,
    methodList: Array<MethodDescriptorProto.AsObject>,
    options?: ServiceOptions.AsObject,
  }
}

export class MethodDescriptorProto extends jspb.Message {
  getName(): string;
  setName(value: string): MethodDescriptorProto;

  getInputType(): string;
  setInputType(value: string): MethodDescriptorProto;

  getOutputType(): string;
  setOutputType(value: string): MethodDescriptorProto;

  getOptions(): MethodOptions | undefined;
  setOptions(value?: MethodOptions): MethodDescriptorProto;
  hasOptions(): boolean;
  clearOptions(): MethodDescriptorProto;

  getClientStreaming(): boolean;
  setClientStreaming(value: boolean): MethodDescriptorProto;

  getServerStreaming(): boolean;
  setServerStreaming(value: boolean): MethodDescriptorProto;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodDescriptorProto.AsObject;
  static toObject(includeInstance: boolean, msg: MethodDescriptorProto): MethodDescriptorProto.AsObject;
  static serializeBinaryToWriter(message: MethodDescriptorProto, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodDescriptorProto;
  static deserializeBinaryFromReader(message: MethodDescriptorProto, reader: jspb.BinaryReader): MethodDescriptorProto;
}

export namespace MethodDescriptorProto {
  export type AsObject = {
    name: string,
    inputType: string,
    outputType: string,
    options?: MethodOptions.AsObject,
    clientStreaming: boolean,
    serverStreaming: boolean,
  }
}

export class FileOptions extends jspb.Message {
  getJavaPackage(): string;
  setJavaPackage(value: string): FileOptions;

  getJavaOuterClassname(): string;
  setJavaOuterClassname(value: string): FileOptions;

  getJavaMultipleFiles(): boolean;
  setJavaMultipleFiles(value: boolean): FileOptions;

  getJavaGenerateEqualsAndHash(): boolean;
  setJavaGenerateEqualsAndHash(value: boolean): FileOptions;

  getJavaStringCheckUtf8(): boolean;
  setJavaStringCheckUtf8(value: boolean): FileOptions;

  getOptimizeFor(): FileOptions.OptimizeMode;
  setOptimizeFor(value: FileOptions.OptimizeMode): FileOptions;

  getGoPackage(): string;
  setGoPackage(value: string): FileOptions;

  getCcGenericServices(): boolean;
  setCcGenericServices(value: boolean): FileOptions;

  getJavaGenericServices(): boolean;
  setJavaGenericServices(value: boolean): FileOptions;

  getPyGenericServices(): boolean;
  setPyGenericServices(value: boolean): FileOptions;

  getPhpGenericServices(): boolean;
  setPhpGenericServices(value: boolean): FileOptions;

  getDeprecated(): boolean;
  setDeprecated(value: boolean): FileOptions;

  getCcEnableArenas(): boolean;
  setCcEnableArenas(value: boolean): FileOptions;

  getObjcClassPrefix(): string;
  setObjcClassPrefix(value: string): FileOptions;

  getCsharpNamespace(): string;
  setCsharpNamespace(value: string): FileOptions;

  getSwiftPrefix(): string;
  setSwiftPrefix(value: string): FileOptions;

  getPhpClassPrefix(): string;
  setPhpClassPrefix(value: string): FileOptions;

  getPhpNamespace(): string;
  setPhpNamespace(value: string): FileOptions;

  getPhpMetadataNamespace(): string;
  setPhpMetadataNamespace(value: string): FileOptions;

  getRubyPackage(): string;
  setRubyPackage(value: string): FileOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): FileOptions;
  clearUninterpretedOptionList(): FileOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FileOptions): FileOptions.AsObject;
  static serializeBinaryToWriter(message: FileOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileOptions;
  static deserializeBinaryFromReader(message: FileOptions, reader: jspb.BinaryReader): FileOptions;
}

export namespace FileOptions {
  export type AsObject = {
    javaPackage: string,
    javaOuterClassname: string,
    javaMultipleFiles: boolean,
    javaGenerateEqualsAndHash: boolean,
    javaStringCheckUtf8: boolean,
    optimizeFor: FileOptions.OptimizeMode,
    goPackage: string,
    ccGenericServices: boolean,
    javaGenericServices: boolean,
    pyGenericServices: boolean,
    phpGenericServices: boolean,
    deprecated: boolean,
    ccEnableArenas: boolean,
    objcClassPrefix: string,
    csharpNamespace: string,
    swiftPrefix: string,
    phpClassPrefix: string,
    phpNamespace: string,
    phpMetadataNamespace: string,
    rubyPackage: string,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum OptimizeMode { 
    SPEED = 1,
    CODE_SIZE = 2,
    LITE_RUNTIME = 3,
  }
}

export class MessageOptions extends jspb.Message {
  getMessageSetWireFormat(): boolean;
  setMessageSetWireFormat(value: boolean): MessageOptions;

  getNoStandardDescriptorAccessor(): boolean;
  setNoStandardDescriptorAccessor(value: boolean): MessageOptions;

  getDeprecated(): boolean;
  setDeprecated(value: boolean): MessageOptions;

  getMapEntry(): boolean;
  setMapEntry(value: boolean): MessageOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): MessageOptions;
  clearUninterpretedOptionList(): MessageOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MessageOptions): MessageOptions.AsObject;
  static serializeBinaryToWriter(message: MessageOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageOptions;
  static deserializeBinaryFromReader(message: MessageOptions, reader: jspb.BinaryReader): MessageOptions;
}

export namespace MessageOptions {
  export type AsObject = {
    messageSetWireFormat: boolean,
    noStandardDescriptorAccessor: boolean,
    deprecated: boolean,
    mapEntry: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class FieldOptions extends jspb.Message {
  getCtype(): FieldOptions.CType;
  setCtype(value: FieldOptions.CType): FieldOptions;

  getPacked(): boolean;
  setPacked(value: boolean): FieldOptions;

  getJstype(): FieldOptions.JSType;
  setJstype(value: FieldOptions.JSType): FieldOptions;

  getLazy(): boolean;
  setLazy(value: boolean): FieldOptions;

  getDeprecated(): boolean;
  setDeprecated(value: boolean): FieldOptions;

  getWeak(): boolean;
  setWeak(value: boolean): FieldOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): FieldOptions;
  clearUninterpretedOptionList(): FieldOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldOptions.AsObject;
  static toObject(includeInstance: boolean, msg: FieldOptions): FieldOptions.AsObject;
  static serializeBinaryToWriter(message: FieldOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FieldOptions;
  static deserializeBinaryFromReader(message: FieldOptions, reader: jspb.BinaryReader): FieldOptions;
}

export namespace FieldOptions {
  export type AsObject = {
    ctype: FieldOptions.CType,
    packed: boolean,
    jstype: FieldOptions.JSType,
    lazy: boolean,
    deprecated: boolean,
    weak: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum CType { 
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2,
  }

  export enum JSType { 
    JS_NORMAL = 0,
    JS_STRING = 1,
    JS_NUMBER = 2,
  }
}

export class OneofOptions extends jspb.Message {
  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): OneofOptions;
  clearUninterpretedOptionList(): OneofOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OneofOptions.AsObject;
  static toObject(includeInstance: boolean, msg: OneofOptions): OneofOptions.AsObject;
  static serializeBinaryToWriter(message: OneofOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OneofOptions;
  static deserializeBinaryFromReader(message: OneofOptions, reader: jspb.BinaryReader): OneofOptions;
}

export namespace OneofOptions {
  export type AsObject = {
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class EnumOptions extends jspb.Message {
  getAllowAlias(): boolean;
  setAllowAlias(value: boolean): EnumOptions;

  getDeprecated(): boolean;
  setDeprecated(value: boolean): EnumOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): EnumOptions;
  clearUninterpretedOptionList(): EnumOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumOptions): EnumOptions.AsObject;
  static serializeBinaryToWriter(message: EnumOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumOptions;
  static deserializeBinaryFromReader(message: EnumOptions, reader: jspb.BinaryReader): EnumOptions;
}

export namespace EnumOptions {
  export type AsObject = {
    allowAlias: boolean,
    deprecated: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class EnumValueOptions extends jspb.Message {
  getDeprecated(): boolean;
  setDeprecated(value: boolean): EnumValueOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): EnumValueOptions;
  clearUninterpretedOptionList(): EnumValueOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumValueOptions.AsObject;
  static toObject(includeInstance: boolean, msg: EnumValueOptions): EnumValueOptions.AsObject;
  static serializeBinaryToWriter(message: EnumValueOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumValueOptions;
  static deserializeBinaryFromReader(message: EnumValueOptions, reader: jspb.BinaryReader): EnumValueOptions;
}

export namespace EnumValueOptions {
  export type AsObject = {
    deprecated: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class ServiceOptions extends jspb.Message {
  getDeprecated(): boolean;
  setDeprecated(value: boolean): ServiceOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): ServiceOptions;
  clearUninterpretedOptionList(): ServiceOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceOptions.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceOptions): ServiceOptions.AsObject;
  static serializeBinaryToWriter(message: ServiceOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceOptions;
  static deserializeBinaryFromReader(message: ServiceOptions, reader: jspb.BinaryReader): ServiceOptions;
}

export namespace ServiceOptions {
  export type AsObject = {
    deprecated: boolean,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }
}

export class MethodOptions extends jspb.Message {
  getDeprecated(): boolean;
  setDeprecated(value: boolean): MethodOptions;

  getIdempotencyLevel(): MethodOptions.IdempotencyLevel;
  setIdempotencyLevel(value: MethodOptions.IdempotencyLevel): MethodOptions;

  getUninterpretedOptionList(): Array<UninterpretedOption>;
  setUninterpretedOptionList(value: Array<UninterpretedOption>): MethodOptions;
  clearUninterpretedOptionList(): MethodOptions;
  addUninterpretedOption(value?: UninterpretedOption, index?: number): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MethodOptions.AsObject;
  static toObject(includeInstance: boolean, msg: MethodOptions): MethodOptions.AsObject;
  static serializeBinaryToWriter(message: MethodOptions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MethodOptions;
  static deserializeBinaryFromReader(message: MethodOptions, reader: jspb.BinaryReader): MethodOptions;
}

export namespace MethodOptions {
  export type AsObject = {
    deprecated: boolean,
    idempotencyLevel: MethodOptions.IdempotencyLevel,
    uninterpretedOptionList: Array<UninterpretedOption.AsObject>,
  }

  export enum IdempotencyLevel { 
    IDEMPOTENCY_UNKNOWN = 0,
    NO_SIDE_EFFECTS = 1,
    IDEMPOTENT = 2,
  }
}

export class UninterpretedOption extends jspb.Message {
  getNameList(): Array<UninterpretedOption.NamePart>;
  setNameList(value: Array<UninterpretedOption.NamePart>): UninterpretedOption;
  clearNameList(): UninterpretedOption;
  addName(value?: UninterpretedOption.NamePart, index?: number): UninterpretedOption.NamePart;

  getIdentifierValue(): string;
  setIdentifierValue(value: string): UninterpretedOption;

  getPositiveIntValue(): number;
  setPositiveIntValue(value: number): UninterpretedOption;

  getNegativeIntValue(): number;
  setNegativeIntValue(value: number): UninterpretedOption;

  getDoubleValue(): number;
  setDoubleValue(value: number): UninterpretedOption;

  getStringValue(): Uint8Array | string;
  getStringValue_asU8(): Uint8Array;
  getStringValue_asB64(): string;
  setStringValue(value: Uint8Array | string): UninterpretedOption;

  getAggregateValue(): string;
  setAggregateValue(value: string): UninterpretedOption;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UninterpretedOption.AsObject;
  static toObject(includeInstance: boolean, msg: UninterpretedOption): UninterpretedOption.AsObject;
  static serializeBinaryToWriter(message: UninterpretedOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UninterpretedOption;
  static deserializeBinaryFromReader(message: UninterpretedOption, reader: jspb.BinaryReader): UninterpretedOption;
}

export namespace UninterpretedOption {
  export type AsObject = {
    nameList: Array<UninterpretedOption.NamePart.AsObject>,
    identifierValue: string,
    positiveIntValue: number,
    negativeIntValue: number,
    doubleValue: number,
    stringValue: Uint8Array | string,
    aggregateValue: string,
  }

  export class NamePart extends jspb.Message {
    getNamePart(): string;
    setNamePart(value: string): NamePart;

    getIsExtension(): boolean;
    setIsExtension(value: boolean): NamePart;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NamePart.AsObject;
    static toObject(includeInstance: boolean, msg: NamePart): NamePart.AsObject;
    static serializeBinaryToWriter(message: NamePart, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NamePart;
    static deserializeBinaryFromReader(message: NamePart, reader: jspb.BinaryReader): NamePart;
  }

  export namespace NamePart {
    export type AsObject = {
      namePart: string,
      isExtension: boolean,
    }
  }

}

export class SourceCodeInfo extends jspb.Message {
  getLocationList(): Array<SourceCodeInfo.Location>;
  setLocationList(value: Array<SourceCodeInfo.Location>): SourceCodeInfo;
  clearLocationList(): SourceCodeInfo;
  addLocation(value?: SourceCodeInfo.Location, index?: number): SourceCodeInfo.Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceCodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SourceCodeInfo): SourceCodeInfo.AsObject;
  static serializeBinaryToWriter(message: SourceCodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceCodeInfo;
  static deserializeBinaryFromReader(message: SourceCodeInfo, reader: jspb.BinaryReader): SourceCodeInfo;
}

export namespace SourceCodeInfo {
  export type AsObject = {
    locationList: Array<SourceCodeInfo.Location.AsObject>,
  }

  export class Location extends jspb.Message {
    getPathList(): Array<number>;
    setPathList(value: Array<number>): Location;
    clearPathList(): Location;
    addPath(value: number, index?: number): Location;

    getSpanList(): Array<number>;
    setSpanList(value: Array<number>): Location;
    clearSpanList(): Location;
    addSpan(value: number, index?: number): Location;

    getLeadingComments(): string;
    setLeadingComments(value: string): Location;

    getTrailingComments(): string;
    setTrailingComments(value: string): Location;

    getLeadingDetachedCommentsList(): Array<string>;
    setLeadingDetachedCommentsList(value: Array<string>): Location;
    clearLeadingDetachedCommentsList(): Location;
    addLeadingDetachedComments(value: string, index?: number): Location;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      pathList: Array<number>,
      spanList: Array<number>,
      leadingComments: string,
      trailingComments: string,
      leadingDetachedCommentsList: Array<string>,
    }
  }

}

export class GeneratedCodeInfo extends jspb.Message {
  getAnnotationList(): Array<GeneratedCodeInfo.Annotation>;
  setAnnotationList(value: Array<GeneratedCodeInfo.Annotation>): GeneratedCodeInfo;
  clearAnnotationList(): GeneratedCodeInfo;
  addAnnotation(value?: GeneratedCodeInfo.Annotation, index?: number): GeneratedCodeInfo.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratedCodeInfo.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratedCodeInfo): GeneratedCodeInfo.AsObject;
  static serializeBinaryToWriter(message: GeneratedCodeInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratedCodeInfo;
  static deserializeBinaryFromReader(message: GeneratedCodeInfo, reader: jspb.BinaryReader): GeneratedCodeInfo;
}

export namespace GeneratedCodeInfo {
  export type AsObject = {
    annotationList: Array<GeneratedCodeInfo.Annotation.AsObject>,
  }

  export class Annotation extends jspb.Message {
    getPathList(): Array<number>;
    setPathList(value: Array<number>): Annotation;
    clearPathList(): Annotation;
    addPath(value: number, index?: number): Annotation;

    getSourceFile(): string;
    setSourceFile(value: string): Annotation;

    getBegin(): number;
    setBegin(value: number): Annotation;

    getEnd(): number;
    setEnd(value: number): Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Annotation.AsObject;
    static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
    static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Annotation;
    static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
  }

  export namespace Annotation {
    export type AsObject = {
      pathList: Array<number>,
      sourceFile: string,
      begin: number,
      end: number,
    }
  }

}

