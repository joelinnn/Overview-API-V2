import { Product } from "../models/products";
export const resolvers = {
  Query: {
    async getProducts (id: number) {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' })
    }
  },
};