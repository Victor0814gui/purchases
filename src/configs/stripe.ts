import Stripe from "stripe";


export const stripe = new Stripe(
  "sk_test_51NpF68Gx9zfdiazs2jYIgXmeLneVQM0YhVDYS3Td7NYIzfivWupL23VVLpdGWcIdJvR2ESwCfVEgWN5uF5c1MfUh00PHuF7T97",
  {
    apiVersion: "2023-10-16",
    appInfo: {
      name: "purchases",
      version: "1.0.0",
    },
  }
)