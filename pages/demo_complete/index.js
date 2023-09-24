import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DemoComplete() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <div className="mb-6">
                {/* モバイル用の画像 */}
                <div className="block md:hidden">
                    <Image src="/stripe-complete-mobile.jpg" alt="Stripe for Mobile" width={375} height={812} />
                </div>

                {/* デスクトップ用の画像 */}
                <div className="hidden md:block">
                    <Image src="/stripe-complete-desktop.jpg" alt="Stripe for Desktop" width={1440} height={900} />
                </div>
            </div>

            <Link href="/demo">
                <div className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2">
                    お支払い画面へ戻る
                </div>
            </Link>
        </div>
    );
}
