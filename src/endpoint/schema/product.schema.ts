import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  quantity: number;

  @Prop()
  availability: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);