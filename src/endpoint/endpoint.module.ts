import { Module } from '@nestjs/common';
import { EndpointService } from './endpoint.service';
import { EndpointController } from './endpoint.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
  controllers: [EndpointController],
  providers: [EndpointService],
})
export class EndpointModule {}
