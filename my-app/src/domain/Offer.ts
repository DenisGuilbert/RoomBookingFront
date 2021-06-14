export interface Offer {
    id: number;
    title: string;
    company: string;
    area: string;
    activity: boolean;
    freeInput: boolean;
    finalCustomer: boolean;
    gondolaHead: boolean;
    idFunction: number;
    technologiesIds: number[];
    idContract: number;
    location: string;
    shortDescription: string;
    description: string;
}