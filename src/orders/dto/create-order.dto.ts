import { OrderStatus } from '@prisma/client';

export class CreateOrderDto {
  asset_id: string;
  price: number;
  status: OrderStatus;
}
