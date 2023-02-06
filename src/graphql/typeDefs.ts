export const typeDefs = `#graphql
  type Products {
    id: Int,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: String
  }

  type ProductInfo {
    id: Int,
    name: String,
    slogan: String,
    description: String,
    category: String,
    default_price: String,
    features: [{
      feature: String,
      value: String
    }]
  }

  type ProductStyles {
    product_id: String,
    results: [{
      style_id: Int,
      name: String,
      original_price: String,
      sale_price: String,
      default?: Boolean,
      photos: [{
        thumbnail_url: String,
        url: String
      }],
      skus: {sku}
    }]
  }

  type Query {
    getProducts(id: id!): Products!
    getProductInfo(id: id!): ProductInfo!
    getProductStyles(id: id!): ProductStyles!
  }

  type Sku {
    quantity: Int,
    size: String,
  }

  input ProductInput {
    id: String
  }
`;