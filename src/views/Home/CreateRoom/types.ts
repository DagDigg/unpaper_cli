import { RoomType, Visibility } from 'api/proto/v1/chat_pb';

export enum CreateRoomStep {
    Info = 'INFO',
    PaymentDetails = 'PAYMENT_DETAILS',
}

export type InfoDetails = {
    name: string;
    description: string;
    visibility: Visibility.Enum;
    allowedListIds: string[];
};
export type PaymentDetails = {
    price: number;
    roomType: RoomType.Enum;
};
