import * as React from 'react';

export default function PolicyPage() {
  return (
    <div className="mx-auto prose prose-2xl text-center mt-10">
      <div className="p-4">
        <h1>Điều Khoản Dịch Vụ</h1>
        <p>
          - Khi bắt đầu dự án, khách hàng thanh toán trước 50% chi phí dự án, và
          thanh toán 50% còn lại khi hoàn thành dự án.
        </p>
        <p>
          - Chúng tôi triển khai dự án ngay khi khách hàng gửi yêu cầu và mô tả
          dự án, trường hợp khách hàng muốn dừng dự án, hoàn tiền 100% tiền cọc
          dự án trong 1 ngày đầu tiên kể từ khi bắt đầu và hoàn 50% tiền cọc
          trong 1 ngày tiếp theo. Sau 2 ngày đầu, nếu hủy, khách hàng sẽ mất
          tiền cọc, còn chúng tôi thì mất thời gian làm việc.
        </p>
        <p>
          - Chúng tôi nhận feedback và chỉnh sửa đến khi nào hoàn thành dự án.
          Khách hàng trả thêm 20% chi phí dự án nếu muốn hoàn thành sớm hơn 1
          ngày, vì chúng tôi sẽ ưu tiên tập trung hoàn thành dự án của bản so
          với các dự án khác. Khách hàng vui lòng thanh toán 100% chi phí dự án
          cũ trước khi bắt đầu dự án mới.
        </p>
      </div>
    </div>
  );
}
