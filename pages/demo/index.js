import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Demo() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <div className="mb-6">
                {/* モバイル用の画像 */}
                <div className="block md:hidden">
                    <Image src="/stripe-mobile.jpg" alt="Stripe for Mobile" width={375} height={812} />
                </div>

                {/* デスクトップ用の画像 */}
                <div className="hidden md:block">
                    <Image src="/stripe-desktop.jpg" alt="Stripe for Desktop" width={1440} height={900} />
                </div>
            </div>

            {/* /demo_completeへのリンクを追加 */}
            <Link href="/demo_complete">
                <div className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
                    完了へ進む
                </div>
            </Link>
        </div>
    );
}
