export interface Payment {
    cardNumber: string;
    cardHolder: string;
    expirationDate: Date;
    securityCode?: string;
    amount: number;
}
