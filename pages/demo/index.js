import React from 'react';
import Image from 'next/image';

export default function Demo() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            {/* モバイル用の画像 */}
            <div className="block md:hidden">
                <Image src="/stripe-mobile.jpg" alt="Stripe for Mobile" width={375} height={812} />
            </div>

            {/* デスクトップ用の画像 */}
            <div className="hidden md:block">
                <Image src="/stripe-desktop.jpg" alt="Stripe for Desktop" width={1440} height={900} />
            </div>
        </div>
    );
}
