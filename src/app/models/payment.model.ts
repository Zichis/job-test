export interface Payment {
    id: number;
    cardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    securityCode?: string;
    amount: number;
}
