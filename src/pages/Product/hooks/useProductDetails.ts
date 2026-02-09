import { useState } from "react"
import type { Product } from "../../../types/Product"

const useProductDetails = () => {
    const [productDetails, setProductDetails] = useState<Product>()

    return {
        productDetails
    }
}

export default useProductDetails