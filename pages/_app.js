import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/header/Layout'
import '../styles/homecss/categories.module.css'
import '../styles/homecss/footer.module.css'
import '../styles/marketcss/market.module.css'
import '../styles/marketcss/ListProducts.module.css'
import '../styles/marketcss/sale.module.css'

import '../styles/marketcss/Sell.module.css'
import '../styles/rankingscss/rankings.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />
      
    </Layout>
  )
}

export default MyApp