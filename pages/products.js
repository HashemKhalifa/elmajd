import { Layout } from '../components/Layout'
import {Products} from '../components/Products'

const ProductsPage = () => {
    return (
        <Products/>

    )
}
export default function productsPage() {
    return <Layout title="Our Values" children={<ProductsPage />} />
}
