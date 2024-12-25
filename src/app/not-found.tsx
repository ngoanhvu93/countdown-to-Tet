'use client'

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold">Không tìm thấy trang</h2>
      <p className="p-4 text-center ">
        Xin lỗi, chúng tôi không thể tìm thấy trang bạn yêu cầu.
      </p>
      <Link className="rounded-md bg-primary p-2 text-white" href="/">
        Trở về Trang chủ
      </Link>
    </div>
  );
}
