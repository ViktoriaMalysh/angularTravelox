export interface CheckoutSession {
  id: string;
  cancelUrl: string;
  successUrl: string;
  amount: number;
  userId: string;
}
