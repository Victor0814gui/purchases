import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { DashboardPage } from './pages/dashboard-page/index.tsx'
import { CheckoutPage } from './pages/checkout-page/index.tsx'
import { ShopPage } from './pages/shop-page/index.tsx'
import { CreateCustomerPage } from './pages/create-customer-page/index.tsx'
import { SuccessPage } from './pages/success-page/index.tsx'
import { Elements } from '@stripe/react-stripe-js'
import { Stripe, loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { api } from './service/api.ts'
import { CreateProductPage } from './pages/create-product-page/index.tsx'

type PublishableKey = {
  client_secret: string;
}

export function UserRoutes() {
  // const [stripePromise, setStripePromise] = useState<any>("");
  // const [clientSecret, setClientSecret] = useState<string>("");
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true)
  //   api.get("/config").then(async (r) => {
  //     const data = await r.data as PublishableKey;

  //     setStripePromise(await loadStripe(data.client_secret));
  //     setClientSecret(data.client_secret);
  //   }).catch(err => console.log({ err_routes: err }))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div>
  //       <h1>loading...</h1>
  //     </div>
  //   )
  // }
  // console.log(stripePromise);

  return (
    <BrowserRouter>
      {/* <Elements stripe={stripePromise}>
      </Elements> */}
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='/me' element={<CreateCustomerPage />} />
        <Route path='/create-product' element={<CreateProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}