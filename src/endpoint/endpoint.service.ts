import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { UpdateEndpointDto } from './dto/update-endpoint.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model, isValidObjectId } from 'mongoose';

@Injectable()
export class EndpointService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<ProductDocument>,
  ) {}
  async create(createEndpointDto: CreateEndpointDto) {
    const createdProduct = await this.productModule.create(createEndpointDto);
    return createdProduct.save();
  }
  async findAll() {
    const products = await this.productModule.find({});
    return products;
  }
  async findOne(id: string) {
    let product = Product;
    if (!isNaN(Number(id)))
      product = await this.productModule.findOne({ number: id });

    if (product && isValidObjectId(id)) {
      product = await this.productModule.findById(id);
    }

    if (!product)
      throw new NotFoundException(`Product with id ${id} not found`);

    return product;
  }
  async update(id: string, updateEndpointDto: UpdateEndpointDto) {
    if (isValidObjectId(id)) {
      return await this.productModule.findByIdAndUpdate(id, updateEndpointDto, {
        new: true,
      });
    } else {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
  async remove(id: string) {
    if (isValidObjectId(id)) {
      return await this.productModule.findByIdAndDelete(id);
    } else {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
  }
}
