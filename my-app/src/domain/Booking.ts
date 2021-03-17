export interface Booking {
    id: number;
    roomId: number;
    userId: number;
    startSlot: number;
    endSlot: number;
    date: Date;
}