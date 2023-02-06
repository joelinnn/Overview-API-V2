import { Product } from "../models/products";

export const resolvers = {
  Query: {
    getProducts: async (id: string) => {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    },
    getProductInfo: async (id: string) => {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    },
    getProductStyles: async (id: string) => {
      const productID = Number(id)
      return await Product.find({ id: productID }, {}, { hint: 'id_1' }).lean()
    }
  },
};