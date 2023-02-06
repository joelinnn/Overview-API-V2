export const typeDefs = `#graphql
  type Products {
    id: Int
    name: String
    slogan: String
    description: String
    category: String
    default_price: String
  }

  type ProductInfo {
    id: Int
    name: String
    slogan: String
    description: String
    category: String
    default_price: String
    features: [FeatureInfo]
  }

  type FeatureInfo {
    feature: String
    value: String
  }

  type ProductStyles {
    product_id: String
    results: [StyleResults]
  }

  type StyleResults {
    style_id: Int
    name: String
    original_price: String
    sale_price: String
    default: Boolean
    photos: [PhotoInfo]
  }

  type PhotoInfo {
    thumbnail_url: String
    url: String
  }

  type Sku {
    quantity: Int
    size: String
  }

  type Query {
    getProducts(id: String): [Products]!
    getProductInfo(id: String): ProductInfo!
    getProductStyles(id: String): ProductStyles!
  }

  input ProductInput {
    id: String
  }
`;