import { Product } from "../models/products";

export const resolvers = {
  Query: {
    getProducts: (_: any, { count, page }: any) => {
    const skip = count ? count : 5
    const limit = (page - 1) * count;

    return Product.find().skip(skip).limit(limit)
      .lean()
      .exec((error, products) => {
        if (error) {
          console.log(error)
        } else {
          return products
        }
      });
    },
    getProductInfo: (_: any, {productId}: any) => {
      return Product.findOne({ id: productId }, {}, { hint: 'id_1' })
        .lean()
        .exec((error, product) => {
          if (error) {
            console.log(error)
          } else {
            return product
          }
        })
    },
    getProductStyles: (_: any, id: Number) => {
      const productID = Number(id)
      Product.findOne({ "id": productID }, {}, { hint: 'id_1' })
      .lean()
      .exec((error, styles) => {
        if (error) {
          console.log(error)
        } else {
          return styles
        }
      })
    }
  },
};