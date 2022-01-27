import React, { useState, useContext } from 'react'

export const ShowAddProductContext = React.createContext<any>(undefined)
export const ShowAddProductUpdateContext = React.createContext<any>(undefined)

export function useShowAddProduct() {
    return useContext(ShowAddProductContext)
}
export function useShowAddProductUpdate() {
    return useContext(ShowAddProductUpdateContext)
}

export function ShowAddProductProvider({ children }: any) {
    const [ShowAddProduct, setShowAddProduct] = useState(false)

    return (
        <ShowAddProductContext.Provider value={ShowAddProduct}>
            <ShowAddProductUpdateContext.Provider value={(showAddProduct: boolean) => setShowAddProduct(showAddProduct)}>
                {children}
            </ShowAddProductUpdateContext.Provider>
        </ShowAddProductContext.Provider>
    )
}