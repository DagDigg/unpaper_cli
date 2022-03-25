import * as jspb from 'google-protobuf'



export class StripeWebhookRequest extends jspb.Message {
  getRaw(): Uint8Array | string;
  getRaw_asU8(): Uint8Array;
  getRaw_asB64(): string;
  setRaw(value: Uint8Array | string): StripeWebhookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StripeWebhookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StripeWebhookRequest): StripeWebhookRequest.AsObject;
  static serializeBinaryToWriter(message: StripeWebhookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StripeWebhookRequest;
  static deserializeBinaryFromReader(message: StripeWebhookRequest, reader: jspb.BinaryReader): StripeWebhookRequest;
}

export namespace StripeWebhookRequest {
  export type AsObject = {
    raw: Uint8Array | string,
  }
}

export class Customer extends jspb.Message {
  getId(): string;
  setId(value: string): Customer;

  getCustomerId(): string;
  setCustomerId(value: string): Customer;

  getFirstName(): string;
  setFirstName(value: string): Customer;

  getLastName(): string;
  setLastName(value: string): Customer;

  getSubscriptionsList(): Array<Subscription>;
  setSubscriptionsList(value: Array<Subscription>): Customer;
  clearSubscriptionsList(): Customer;
  addSubscriptions(value?: Subscription, index?: number): Subscription;

  getDefaultPaymentMethod(): PaymentMethod | undefined;
  setDefaultPaymentMethod(value?: PaymentMethod): Customer;
  hasDefaultPaymentMethod(): boolean;
  clearDefaultPaymentMethod(): Customer;

  getAccountId(): string;
  setAccountId(value: string): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    id: string,
    customerId: string,
    firstName: string,
    lastName: string,
    subscriptionsList: Array<Subscription.AsObject>,
    defaultPaymentMethod?: PaymentMethod.AsObject,
    accountId: string,
  }
}

export class CustomerInfoRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): CustomerInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerInfoRequest): CustomerInfoRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerInfoRequest;
  static deserializeBinaryFromReader(message: CustomerInfoRequest, reader: jspb.BinaryReader): CustomerInfoRequest;
}

export namespace CustomerInfoRequest {
  export type AsObject = {
    api: string,
  }
}

export class Subscription extends jspb.Message {
  getId(): string;
  setId(value: string): Subscription;

  getCustomerId(): string;
  setCustomerId(value: string): Subscription;

  getCurrentPeriodEnd(): number;
  setCurrentPeriodEnd(value: number): Subscription;

  getStatus(): SubscriptionStatus;
  setStatus(value: SubscriptionStatus): Subscription;

  getPrice(): Price | undefined;
  setPrice(value?: Price): Subscription;
  hasPrice(): boolean;
  clearPrice(): Subscription;

  getLatestInvoice(): Invoice | undefined;
  setLatestInvoice(value?: Invoice): Subscription;
  hasLatestInvoice(): boolean;
  clearLatestInvoice(): Subscription;

  getItemsList(): Array<SubscriptionItem>;
  setItemsList(value: Array<SubscriptionItem>): Subscription;
  clearItemsList(): Subscription;
  addItems(value?: SubscriptionItem, index?: number): SubscriptionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscription.AsObject;
  static toObject(includeInstance: boolean, msg: Subscription): Subscription.AsObject;
  static serializeBinaryToWriter(message: Subscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscription;
  static deserializeBinaryFromReader(message: Subscription, reader: jspb.BinaryReader): Subscription;
}

export namespace Subscription {
  export type AsObject = {
    id: string,
    customerId: string,
    currentPeriodEnd: number,
    status: SubscriptionStatus,
    price?: Price.AsObject,
    latestInvoice?: Invoice.AsObject,
    itemsList: Array<SubscriptionItem.AsObject>,
  }
}

export class RoomSubscription extends jspb.Message {
  getId(): string;
  setId(value: string): RoomSubscription;

  getCustomerId(): string;
  setCustomerId(value: string): RoomSubscription;

  getCurrentPeriodEnd(): number;
  setCurrentPeriodEnd(value: number): RoomSubscription;

  getStatus(): SubscriptionStatus;
  setStatus(value: SubscriptionStatus): RoomSubscription;

  getLatestInvoice(): Invoice | undefined;
  setLatestInvoice(value?: Invoice): RoomSubscription;
  hasLatestInvoice(): boolean;
  clearLatestInvoice(): RoomSubscription;

  getRoomId(): string;
  setRoomId(value: string): RoomSubscription;

  getRoomSubscriptionType(): RoomSubcriptionType.Enum;
  setRoomSubscriptionType(value: RoomSubcriptionType.Enum): RoomSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: RoomSubscription): RoomSubscription.AsObject;
  static serializeBinaryToWriter(message: RoomSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomSubscription;
  static deserializeBinaryFromReader(message: RoomSubscription, reader: jspb.BinaryReader): RoomSubscription;
}

export namespace RoomSubscription {
  export type AsObject = {
    id: string,
    customerId: string,
    currentPeriodEnd: number,
    status: SubscriptionStatus,
    latestInvoice?: Invoice.AsObject,
    roomId: string,
    roomSubscriptionType: RoomSubcriptionType.Enum,
  }
}

export class RoomSubcriptionType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomSubcriptionType.AsObject;
  static toObject(includeInstance: boolean, msg: RoomSubcriptionType): RoomSubcriptionType.AsObject;
  static serializeBinaryToWriter(message: RoomSubcriptionType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomSubcriptionType;
  static deserializeBinaryFromReader(message: RoomSubcriptionType, reader: jspb.BinaryReader): RoomSubcriptionType;
}

export namespace RoomSubcriptionType {
  export type AsObject = {
  }

  export enum Enum { 
    ONE_TIME = 0,
    SUBSCRIPTION_MONTHLY = 1,
  }
}

export class GetRoomSubscriptionsResponse extends jspb.Message {
  getRoomSubscriptionsList(): Array<RoomSubscription>;
  setRoomSubscriptionsList(value: Array<RoomSubscription>): GetRoomSubscriptionsResponse;
  clearRoomSubscriptionsList(): GetRoomSubscriptionsResponse;
  addRoomSubscriptions(value?: RoomSubscription, index?: number): RoomSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomSubscriptionsResponse): GetRoomSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomSubscriptionsResponse;
  static deserializeBinaryFromReader(message: GetRoomSubscriptionsResponse, reader: jspb.BinaryReader): GetRoomSubscriptionsResponse;
}

export namespace GetRoomSubscriptionsResponse {
  export type AsObject = {
    roomSubscriptionsList: Array<RoomSubscription.AsObject>,
  }
}

export class ConfirmRoomSubscriptionRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): ConfirmRoomSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmRoomSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmRoomSubscriptionRequest): ConfirmRoomSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmRoomSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmRoomSubscriptionRequest;
  static deserializeBinaryFromReader(message: ConfirmRoomSubscriptionRequest, reader: jspb.BinaryReader): ConfirmRoomSubscriptionRequest;
}

export namespace ConfirmRoomSubscriptionRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ConfirmRoomSubscriptionResponse extends jspb.Message {
  getSubscription(): RoomSubscription | undefined;
  setSubscription(value?: RoomSubscription): ConfirmRoomSubscriptionResponse;
  hasSubscription(): boolean;
  clearSubscription(): ConfirmRoomSubscriptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmRoomSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmRoomSubscriptionResponse): ConfirmRoomSubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmRoomSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmRoomSubscriptionResponse;
  static deserializeBinaryFromReader(message: ConfirmRoomSubscriptionResponse, reader: jspb.BinaryReader): ConfirmRoomSubscriptionResponse;
}

export namespace ConfirmRoomSubscriptionResponse {
  export type AsObject = {
    subscription?: RoomSubscription.AsObject,
  }
}

export class GetRoomSubscriptionByRoomIDRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): GetRoomSubscriptionByRoomIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomSubscriptionByRoomIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomSubscriptionByRoomIDRequest): GetRoomSubscriptionByRoomIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomSubscriptionByRoomIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomSubscriptionByRoomIDRequest;
  static deserializeBinaryFromReader(message: GetRoomSubscriptionByRoomIDRequest, reader: jspb.BinaryReader): GetRoomSubscriptionByRoomIDRequest;
}

export namespace GetRoomSubscriptionByRoomIDRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class GetRoomSubscriptionByRoomIDResponse extends jspb.Message {
  getSubscription(): RoomSubscription | undefined;
  setSubscription(value?: RoomSubscription): GetRoomSubscriptionByRoomIDResponse;
  hasSubscription(): boolean;
  clearSubscription(): GetRoomSubscriptionByRoomIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomSubscriptionByRoomIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomSubscriptionByRoomIDResponse): GetRoomSubscriptionByRoomIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomSubscriptionByRoomIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomSubscriptionByRoomIDResponse;
  static deserializeBinaryFromReader(message: GetRoomSubscriptionByRoomIDResponse, reader: jspb.BinaryReader): GetRoomSubscriptionByRoomIDResponse;
}

export namespace GetRoomSubscriptionByRoomIDResponse {
  export type AsObject = {
    subscription?: RoomSubscription.AsObject,
  }
}

export class RetryRoomSubscriptionRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): RetryRoomSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryRoomSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryRoomSubscriptionRequest): RetryRoomSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: RetryRoomSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryRoomSubscriptionRequest;
  static deserializeBinaryFromReader(message: RetryRoomSubscriptionRequest, reader: jspb.BinaryReader): RetryRoomSubscriptionRequest;
}

export namespace RetryRoomSubscriptionRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class SubscriptionItem extends jspb.Message {
  getId(): string;
  setId(value: string): SubscriptionItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionItem.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionItem): SubscriptionItem.AsObject;
  static serializeBinaryToWriter(message: SubscriptionItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionItem;
  static deserializeBinaryFromReader(message: SubscriptionItem, reader: jspb.BinaryReader): SubscriptionItem;
}

export namespace SubscriptionItem {
  export type AsObject = {
    id: string,
  }
}

export class Price extends jspb.Message {
  getId(): string;
  setId(value: string): Price;

  getActive(): boolean;
  setActive(value: boolean): Price;

  getPlan(): Plan;
  setPlan(value: Plan): Price;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Price.AsObject;
  static toObject(includeInstance: boolean, msg: Price): Price.AsObject;
  static serializeBinaryToWriter(message: Price, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Price;
  static deserializeBinaryFromReader(message: Price, reader: jspb.BinaryReader): Price;
}

export namespace Price {
  export type AsObject = {
    id: string,
    active: boolean,
    plan: Plan,
  }
}

export class SubscribeToPlanRequest extends jspb.Message {
  getPlan(): Plan;
  setPlan(value: Plan): SubscribeToPlanRequest;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): SubscribeToPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToPlanRequest): SubscribeToPlanRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeToPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToPlanRequest;
  static deserializeBinaryFromReader(message: SubscribeToPlanRequest, reader: jspb.BinaryReader): SubscribeToPlanRequest;
}

export namespace SubscribeToPlanRequest {
  export type AsObject = {
    plan: Plan,
    paymentMethodId: string,
  }
}

export class SubscribeToPlanResponse extends jspb.Message {
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): SubscribeToPlanResponse;
  hasSubscription(): boolean;
  clearSubscription(): SubscribeToPlanResponse;

  getInvoice(): Invoice | undefined;
  setInvoice(value?: Invoice): SubscribeToPlanResponse;
  hasInvoice(): boolean;
  clearInvoice(): SubscribeToPlanResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToPlanResponse): SubscribeToPlanResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeToPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToPlanResponse;
  static deserializeBinaryFromReader(message: SubscribeToPlanResponse, reader: jspb.BinaryReader): SubscribeToPlanResponse;
}

export namespace SubscribeToPlanResponse {
  export type AsObject = {
    subscription?: Subscription.AsObject,
    invoice?: Invoice.AsObject,
  }
}

export class GetSubscriptionByIDRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): GetSubscriptionByIDRequest;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): GetSubscriptionByIDRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionByIDRequest): GetSubscriptionByIDRequest.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionByIDRequest;
  static deserializeBinaryFromReader(message: GetSubscriptionByIDRequest, reader: jspb.BinaryReader): GetSubscriptionByIDRequest;
}

export namespace GetSubscriptionByIDRequest {
  export type AsObject = {
    api: string,
    subscriptionId: string,
  }
}

export class GetSubscriptionByIDResponse extends jspb.Message {
  getSubscription(): Subscription | undefined;
  setSubscription(value?: Subscription): GetSubscriptionByIDResponse;
  hasSubscription(): boolean;
  clearSubscription(): GetSubscriptionByIDResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubscriptionByIDResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubscriptionByIDResponse): GetSubscriptionByIDResponse.AsObject;
  static serializeBinaryToWriter(message: GetSubscriptionByIDResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubscriptionByIDResponse;
  static deserializeBinaryFromReader(message: GetSubscriptionByIDResponse, reader: jspb.BinaryReader): GetSubscriptionByIDResponse;
}

export namespace GetSubscriptionByIDResponse {
  export type AsObject = {
    subscription?: Subscription.AsObject,
  }
}

export class UpdateSubscriptionRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): UpdateSubscriptionRequest;

  getCustomerId(): string;
  setCustomerId(value: string): UpdateSubscriptionRequest;

  getPlan(): Plan;
  setPlan(value: Plan): UpdateSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSubscriptionRequest): UpdateSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSubscriptionRequest;
  static deserializeBinaryFromReader(message: UpdateSubscriptionRequest, reader: jspb.BinaryReader): UpdateSubscriptionRequest;
}

export namespace UpdateSubscriptionRequest {
  export type AsObject = {
    api: string,
    customerId: string,
    plan: Plan,
  }
}

export class PaymentIntent extends jspb.Message {
  getStatus(): PaymentIntentStatus.Enum;
  setStatus(value: PaymentIntentStatus.Enum): PaymentIntent;

  getClientSecret(): string;
  setClientSecret(value: string): PaymentIntent;

  getId(): string;
  setId(value: string): PaymentIntent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentIntent.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentIntent): PaymentIntent.AsObject;
  static serializeBinaryToWriter(message: PaymentIntent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentIntent;
  static deserializeBinaryFromReader(message: PaymentIntent, reader: jspb.BinaryReader): PaymentIntent;
}

export namespace PaymentIntent {
  export type AsObject = {
    status: PaymentIntentStatus.Enum,
    clientSecret: string,
    id: string,
  }
}

export class PaymentIntentStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentIntentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentIntentStatus): PaymentIntentStatus.AsObject;
  static serializeBinaryToWriter(message: PaymentIntentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentIntentStatus;
  static deserializeBinaryFromReader(message: PaymentIntentStatus, reader: jspb.BinaryReader): PaymentIntentStatus;
}

export namespace PaymentIntentStatus {
  export type AsObject = {
  }

  export enum Enum { 
    REQUIRES_PAYMENT_METHOD = 0,
    REQUIRES_CONFIRMATION = 1,
    REQUIRES_ACTION = 2,
    PROCESSING = 3,
    REQUIRES_CAPTURE = 4,
    CANCELED = 5,
    SUCCEEDED = 6,
  }
}

export class Invoice extends jspb.Message {
  getId(): string;
  setId(value: string): Invoice;

  getAmountDue(): number;
  setAmountDue(value: number): Invoice;

  getPaymentIntent(): PaymentIntent | undefined;
  setPaymentIntent(value?: PaymentIntent): Invoice;
  hasPaymentIntent(): boolean;
  clearPaymentIntent(): Invoice;

  getPlan(): Plan;
  setPlan(value: Plan): Invoice;

  getSubtotal(): number;
  setSubtotal(value: number): Invoice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
  export type AsObject = {
    id: string,
    amountDue: number,
    paymentIntent?: PaymentIntent.AsObject,
    plan: Plan,
    subtotal: number,
  }
}

export class RetryInvoiceRequest extends jspb.Message {
  getCustomerId(): string;
  setCustomerId(value: string): RetryInvoiceRequest;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): RetryInvoiceRequest;

  getInvoiceId(): string;
  setInvoiceId(value: string): RetryInvoiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryInvoiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryInvoiceRequest): RetryInvoiceRequest.AsObject;
  static serializeBinaryToWriter(message: RetryInvoiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryInvoiceRequest;
  static deserializeBinaryFromReader(message: RetryInvoiceRequest, reader: jspb.BinaryReader): RetryInvoiceRequest;
}

export namespace RetryInvoiceRequest {
  export type AsObject = {
    customerId: string,
    paymentMethodId: string,
    invoiceId: string,
  }
}

export class InvoicePreviewRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): InvoicePreviewRequest;

  getPlan(): Plan;
  setPlan(value: Plan): InvoicePreviewRequest;

  getCustomerId(): string;
  setCustomerId(value: string): InvoicePreviewRequest;

  getSubscriptionId(): string;
  setSubscriptionId(value: string): InvoicePreviewRequest;

  getSubscriptionItemId(): string;
  setSubscriptionItemId(value: string): InvoicePreviewRequest;

  getCoupon(): string;
  setCoupon(value: string): InvoicePreviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoicePreviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InvoicePreviewRequest): InvoicePreviewRequest.AsObject;
  static serializeBinaryToWriter(message: InvoicePreviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoicePreviewRequest;
  static deserializeBinaryFromReader(message: InvoicePreviewRequest, reader: jspb.BinaryReader): InvoicePreviewRequest;
}

export namespace InvoicePreviewRequest {
  export type AsObject = {
    api: string,
    plan: Plan,
    customerId: string,
    subscriptionId: string,
    subscriptionItemId: string,
    coupon: string,
  }
}

export class CreateSetupIntentRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): CreateSetupIntentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSetupIntentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSetupIntentRequest): CreateSetupIntentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSetupIntentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSetupIntentRequest;
  static deserializeBinaryFromReader(message: CreateSetupIntentRequest, reader: jspb.BinaryReader): CreateSetupIntentRequest;
}

export namespace CreateSetupIntentRequest {
  export type AsObject = {
    api: string,
  }
}

export class CreateSetupIntentResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateSetupIntentResponse;

  getClientSecret(): string;
  setClientSecret(value: string): CreateSetupIntentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSetupIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSetupIntentResponse): CreateSetupIntentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateSetupIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSetupIntentResponse;
  static deserializeBinaryFromReader(message: CreateSetupIntentResponse, reader: jspb.BinaryReader): CreateSetupIntentResponse;
}

export namespace CreateSetupIntentResponse {
  export type AsObject = {
    id: string,
    clientSecret: string,
  }
}

export class AttachPaymentMethodRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): AttachPaymentMethodRequest;

  getPaymentMethodId(): string;
  setPaymentMethodId(value: string): AttachPaymentMethodRequest;

  getCustomerId(): string;
  setCustomerId(value: string): AttachPaymentMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachPaymentMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachPaymentMethodRequest): AttachPaymentMethodRequest.AsObject;
  static serializeBinaryToWriter(message: AttachPaymentMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachPaymentMethodRequest;
  static deserializeBinaryFromReader(message: AttachPaymentMethodRequest, reader: jspb.BinaryReader): AttachPaymentMethodRequest;
}

export namespace AttachPaymentMethodRequest {
  export type AsObject = {
    api: string,
    paymentMethodId: string,
    customerId: string,
  }
}

export class SetupIntentStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetupIntentStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SetupIntentStatus): SetupIntentStatus.AsObject;
  static serializeBinaryToWriter(message: SetupIntentStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetupIntentStatus;
  static deserializeBinaryFromReader(message: SetupIntentStatus, reader: jspb.BinaryReader): SetupIntentStatus;
}

export namespace SetupIntentStatus {
  export type AsObject = {
  }

  export enum Enum { 
    REQUIRES_PAYMENT_METHOD = 0,
    REQUIRES_CONFIRMATION = 1,
    REQUIRES_ACTION = 2,
    PROCESSING = 3,
    CANCELED = 4,
    SUCCEEDED = 5,
  }
}

export class PaymentMethod extends jspb.Message {
  getId(): string;
  setId(value: string): PaymentMethod;

  getUserId(): string;
  setUserId(value: string): PaymentMethod;

  getLastFour(): string;
  setLastFour(value: string): PaymentMethod;

  getExpMonth(): number;
  setExpMonth(value: number): PaymentMethod;

  getExpYear(): number;
  setExpYear(value: number): PaymentMethod;

  getIsDefault(): boolean;
  setIsDefault(value: boolean): PaymentMethod;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentMethod.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentMethod): PaymentMethod.AsObject;
  static serializeBinaryToWriter(message: PaymentMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentMethod;
  static deserializeBinaryFromReader(message: PaymentMethod, reader: jspb.BinaryReader): PaymentMethod;
}

export namespace PaymentMethod {
  export type AsObject = {
    id: string,
    userId: string,
    lastFour: string,
    expMonth: number,
    expYear: number,
    isDefault: boolean,
  }
}

export class CouponCheckRequest extends jspb.Message {
  getApi(): string;
  setApi(value: string): CouponCheckRequest;

  getId(): string;
  setId(value: string): CouponCheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouponCheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CouponCheckRequest): CouponCheckRequest.AsObject;
  static serializeBinaryToWriter(message: CouponCheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouponCheckRequest;
  static deserializeBinaryFromReader(message: CouponCheckRequest, reader: jspb.BinaryReader): CouponCheckRequest;
}

export namespace CouponCheckRequest {
  export type AsObject = {
    api: string,
    id: string,
  }
}

export class CouponCheckResponse extends jspb.Message {
  getValid(): boolean;
  setValid(value: boolean): CouponCheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CouponCheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CouponCheckResponse): CouponCheckResponse.AsObject;
  static serializeBinaryToWriter(message: CouponCheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CouponCheckResponse;
  static deserializeBinaryFromReader(message: CouponCheckResponse, reader: jspb.BinaryReader): CouponCheckResponse;
}

export namespace CouponCheckResponse {
  export type AsObject = {
    valid: boolean,
  }
}

export class GetConnectAccountLinkResponse extends jspb.Message {
  getLink(): string;
  setLink(value: string): GetConnectAccountLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectAccountLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectAccountLinkResponse): GetConnectAccountLinkResponse.AsObject;
  static serializeBinaryToWriter(message: GetConnectAccountLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectAccountLinkResponse;
  static deserializeBinaryFromReader(message: GetConnectAccountLinkResponse, reader: jspb.BinaryReader): GetConnectAccountLinkResponse;
}

export namespace GetConnectAccountLinkResponse {
  export type AsObject = {
    link: string,
  }
}

export class GetDashboardLinkResponse extends jspb.Message {
  getLink(): string;
  setLink(value: string): GetDashboardLinkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDashboardLinkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDashboardLinkResponse): GetDashboardLinkResponse.AsObject;
  static serializeBinaryToWriter(message: GetDashboardLinkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDashboardLinkResponse;
  static deserializeBinaryFromReader(message: GetDashboardLinkResponse, reader: jspb.BinaryReader): GetDashboardLinkResponse;
}

export namespace GetDashboardLinkResponse {
  export type AsObject = {
    link: string,
  }
}

export class MakeDonationRequest extends jspb.Message {
  getReceiverUserId(): string;
  setReceiverUserId(value: string): MakeDonationRequest;

  getAmount(): number;
  setAmount(value: number): MakeDonationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakeDonationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MakeDonationRequest): MakeDonationRequest.AsObject;
  static serializeBinaryToWriter(message: MakeDonationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakeDonationRequest;
  static deserializeBinaryFromReader(message: MakeDonationRequest, reader: jspb.BinaryReader): MakeDonationRequest;
}

export namespace MakeDonationRequest {
  export type AsObject = {
    receiverUserId: string,
    amount: number,
  }
}

export class PayRoomEntranceRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): PayRoomEntranceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayRoomEntranceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PayRoomEntranceRequest): PayRoomEntranceRequest.AsObject;
  static serializeBinaryToWriter(message: PayRoomEntranceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayRoomEntranceRequest;
  static deserializeBinaryFromReader(message: PayRoomEntranceRequest, reader: jspb.BinaryReader): PayRoomEntranceRequest;
}

export namespace PayRoomEntranceRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class ConnectedPaymentIntentResponse extends jspb.Message {
  getPaymentIntent(): PaymentIntent | undefined;
  setPaymentIntent(value?: PaymentIntent): ConnectedPaymentIntentResponse;
  hasPaymentIntent(): boolean;
  clearPaymentIntent(): ConnectedPaymentIntentResponse;

  getAccountId(): string;
  setAccountId(value: string): ConnectedPaymentIntentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedPaymentIntentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedPaymentIntentResponse): ConnectedPaymentIntentResponse.AsObject;
  static serializeBinaryToWriter(message: ConnectedPaymentIntentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedPaymentIntentResponse;
  static deserializeBinaryFromReader(message: ConnectedPaymentIntentResponse, reader: jspb.BinaryReader): ConnectedPaymentIntentResponse;
}

export namespace ConnectedPaymentIntentResponse {
  export type AsObject = {
    paymentIntent?: PaymentIntent.AsObject,
    accountId: string,
  }
}

export class CheckRoomEntrancePIRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): CheckRoomEntrancePIRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRoomEntrancePIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRoomEntrancePIRequest): CheckRoomEntrancePIRequest.AsObject;
  static serializeBinaryToWriter(message: CheckRoomEntrancePIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRoomEntrancePIRequest;
  static deserializeBinaryFromReader(message: CheckRoomEntrancePIRequest, reader: jspb.BinaryReader): CheckRoomEntrancePIRequest;
}

export namespace CheckRoomEntrancePIRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class CheckRoomEntrancePIResponse extends jspb.Message {
  getPiStatus(): PaymentIntentStatus.Enum;
  setPiStatus(value: PaymentIntentStatus.Enum): CheckRoomEntrancePIResponse;

  getPiFound(): boolean;
  setPiFound(value: boolean): CheckRoomEntrancePIResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRoomEntrancePIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRoomEntrancePIResponse): CheckRoomEntrancePIResponse.AsObject;
  static serializeBinaryToWriter(message: CheckRoomEntrancePIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRoomEntrancePIResponse;
  static deserializeBinaryFromReader(message: CheckRoomEntrancePIResponse, reader: jspb.BinaryReader): CheckRoomEntrancePIResponse;
}

export namespace CheckRoomEntrancePIResponse {
  export type AsObject = {
    piStatus: PaymentIntentStatus.Enum,
    piFound: boolean,
  }
}

export class SubscribeToRoomRequest extends jspb.Message {
  getRoomId(): string;
  setRoomId(value: string): SubscribeToRoomRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToRoomRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToRoomRequest): SubscribeToRoomRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeToRoomRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToRoomRequest;
  static deserializeBinaryFromReader(message: SubscribeToRoomRequest, reader: jspb.BinaryReader): SubscribeToRoomRequest;
}

export namespace SubscribeToRoomRequest {
  export type AsObject = {
    roomId: string,
  }
}

export class SubscribeToRoomResponse extends jspb.Message {
  getSubscription(): RoomSubscription | undefined;
  setSubscription(value?: RoomSubscription): SubscribeToRoomResponse;
  hasSubscription(): boolean;
  clearSubscription(): SubscribeToRoomResponse;

  getAccountId(): string;
  setAccountId(value: string): SubscribeToRoomResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeToRoomResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeToRoomResponse): SubscribeToRoomResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeToRoomResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeToRoomResponse;
  static deserializeBinaryFromReader(message: SubscribeToRoomResponse, reader: jspb.BinaryReader): SubscribeToRoomResponse;
}

export namespace SubscribeToRoomResponse {
  export type AsObject = {
    subscription?: RoomSubscription.AsObject,
    accountId: string,
  }
}

export class ConnectedCustomer extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ConnectedCustomer;

  getCustomerId(): string;
  setCustomerId(value: string): ConnectedCustomer;

  getConnectedCustomerId(): string;
  setConnectedCustomerId(value: string): ConnectedCustomer;

  getAccountId(): string;
  setAccountId(value: string): ConnectedCustomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedCustomer.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedCustomer): ConnectedCustomer.AsObject;
  static serializeBinaryToWriter(message: ConnectedCustomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedCustomer;
  static deserializeBinaryFromReader(message: ConnectedCustomer, reader: jspb.BinaryReader): ConnectedCustomer;
}

export namespace ConnectedCustomer {
  export type AsObject = {
    userId: string,
    customerId: string,
    connectedCustomerId: string,
    accountId: string,
  }
}

export class ConnectedAccount extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): ConnectedAccount;

  getCustomerId(): string;
  setCustomerId(value: string): ConnectedAccount;

  getAccountId(): string;
  setAccountId(value: string): ConnectedAccount;

  getCanReceivePayments(): boolean;
  setCanReceivePayments(value: boolean): ConnectedAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectedAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectedAccount): ConnectedAccount.AsObject;
  static serializeBinaryToWriter(message: ConnectedAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectedAccount;
  static deserializeBinaryFromReader(message: ConnectedAccount, reader: jspb.BinaryReader): ConnectedAccount;
}

export namespace ConnectedAccount {
  export type AsObject = {
    userId: string,
    customerId: string,
    accountId: string,
    canReceivePayments: boolean,
  }
}

export class GetOwnConnectedAccountResponse extends jspb.Message {
  getCanReceivePayments(): boolean;
  setCanReceivePayments(value: boolean): GetOwnConnectedAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOwnConnectedAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOwnConnectedAccountResponse): GetOwnConnectedAccountResponse.AsObject;
  static serializeBinaryToWriter(message: GetOwnConnectedAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOwnConnectedAccountResponse;
  static deserializeBinaryFromReader(message: GetOwnConnectedAccountResponse, reader: jspb.BinaryReader): GetOwnConnectedAccountResponse;
}

export namespace GetOwnConnectedAccountResponse {
  export type AsObject = {
    canReceivePayments: boolean,
  }
}

export enum SubscriptionStatus { 
  ACTIVE = 0,
  INCOMPLETE = 1,
  INCOMPLETE_EXPIRED = 2,
  TRIALING = 3,
  PAST_DUE = 4,
  CANCELED = 5,
  UNPAID = 6,
}
export enum Plan { 
  UNPAPER_FREE = 0,
  UNPAPER_PLUS_MONTHLY = 1,
  UNPAPER_PLUS_YEARLY = 2,
}
