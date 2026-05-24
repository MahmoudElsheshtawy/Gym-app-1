
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title'

const CartTotal = () => {
  const { currency, getCartAmount, delivry_free, products, cartItems } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);

  // دالة للتحقق من صلاحية الخصم بناءً على التاريخ
  const isDiscountValid = (product) => {
    // إذا مفيش خصم أصلاً
    if (!product.discountPercentage || product.discountPercentage <= 0) return false;
    
    // إذا كان في تاريخ انتهاء
    if (product.discountEnd) {
      const now = new Date().getTime();
      const endTime = new Date(product.discountEnd).getTime();
      // الخصم صالح فقط إذا لم ينتهِ الوقت
      return now <= endTime;
    }
    
    // لو مفيش تاريخ انتهاء، الخصم صالح إذا كان السعر بعد الخصم أقل
    return product.finalPrice && product.finalPrice < product.price;
  };

  // حساب الإجمالي مع مراعاة الخصم
  useEffect(() => {
    if (!products.length || !cartItems) return;

    let calculatedSubtotal = 0;
    let calculatedDiscount = 0;

    // حساب المجموع الفرعي مع الخصم
    for (const productId in cartItems) {
      const product = products.find(p => p._id === productId);
      if (!product) continue;

      for (const size in cartItems[productId]) {
        const quantity = cartItems[productId][size];
        if (quantity > 0) {
          // السعر الأصلي
          const originalPrice = product.price || 0;
          
          // السعر بعد الخصم (إذا كان ساري)
          let finalPrice = originalPrice;
          if (isDiscountValid(product)) {
            finalPrice = product.finalPrice || originalPrice;
          }

          // إضافة للسعر النهائي
          calculatedSubtotal += finalPrice * quantity;
          
          // حساب قيمة الخصم (الفرق بين السعر الأصلي والنهائي)
          if (finalPrice < originalPrice) {
            calculatedDiscount += (originalPrice - finalPrice) * quantity;
          }
        }
      }
    }

    setSubtotal(calculatedSubtotal);
    setTotalDiscount(calculatedDiscount);
  }, [products, cartItems]);

  // استخدام getCartAmount كاحتياطي
  const displaySubtotal = subtotal > 0 ? subtotal : getCartAmount();
  const shipping = displaySubtotal === 0 ? 0 : delivry_free;
  const total = displaySubtotal + shipping;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        {/* <Title text1={'المبلغ  '} text2={'اجمالي '} /> */}
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm mr-0">
        {/* عرض التوفير إذا كان موجود */}
        {totalDiscount > 0 && (
          <>
            <div className="flex justify-between text-green-600">
              <p>توفير من الخصم</p>
              <p>- {totalDiscount.toFixed(2)}{currency}</p>
            </div>
            <hr />
          </>
        )}

        <div className="flex justify-between">
          <p>المجموع الفرعي</p>
          <p>{displaySubtotal.toFixed(2)}{currency}</p>
        </div>
        <hr />
        
        <div className="flex justify-between">
          <p>مصاريف الشحن</p>
          <p>{shipping.toFixed(2)}{currency}</p>
        </div>
        <hr />
        
        <div className="flex justify-between">
          <b>الإجمالي</b>
          <b>{total.toFixed(2)} {currency}</b>
        </div>

        {/* عرض تفاصيل الخصم إذا كان موجود (اختياري) */}
        {totalDiscount > 0 && (
          <div className="text-xs text-gray-500 mt-2">
            * شامل الخصم: وفرت {totalDiscount.toFixed(2)}{currency}
          </div>
        )}
      </div>
    </div>
  )
}

export default CartTotal
