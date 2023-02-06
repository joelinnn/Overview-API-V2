import { Product } from "../models/products";
export const resolvers = {
  Query: {
    async getProducts (id: string) {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    },
    async getProductInfo (id: string) {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    },
    async getProductStyles(id: string) {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    }
  },
};