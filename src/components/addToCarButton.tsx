'use client'

import { useCart } from '@/app/contexts/cart-context'
import React from 'react'

const AddToCarButton = ({ productId }: { productId: number }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(productId)
  }
  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 fle h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}

export default AddToCarButton
