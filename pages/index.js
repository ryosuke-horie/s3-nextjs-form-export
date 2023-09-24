import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 本来はここにLambdaAPIを叩く処理を書く
    alert('登録完了しました。クレジットカードの登録を行ってください。');
    // クレジットカード登録用の画面に遷移
    router.push('/demo');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-4 text-gray-700">ヒデズキックユーザー向けサイトデモ</h1>
      <h2 className="text-xl md:text-2xl lg:text-2xl font-semibold mb-4 text-gray-600">会員登録</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            ユーザー名
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            className="w-full px-3 py-2 border rounded-md outline-none transition duration-150 ease-in-out hover:border-blue-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            パスワード
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="w-full px-3 py-2 border rounded-md outline-none transition duration-150 ease-in-out hover:border-blue-300 focus:border-blue-300 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
