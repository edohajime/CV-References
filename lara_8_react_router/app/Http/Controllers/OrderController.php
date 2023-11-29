<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AnonymousOrder;
use App\Models\ColorSize;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $rules = [
            'color' => 'required',
            'size' => 'required',
            'quantity' => 'required|integer|min:1'
        ];

        $messages = [
            'color.required' => 'Phải chọn màu sắc!',
            'size.required' => 'Phải chọn size!',
            'quantity.required' => 'Phải chọn số lượng!',
            'quantity.min' => 'Số lượng phải ít nhất từ 1!',
        ];

        $validate = validator($request->all(), $rules, $messages);
        if ($validate->fails()) {
            $data = [
                'status' => false,
                'messages' => $validate->errors()->first(),
            ];
            return response()->json($data, 200);
        }

        try {
            $colorSize = ColorSize::where([
                ['color_id', '=', $request->color],
                ['size_id', '=', $request->size]
            ])->first();

            // Nếu order này đã được lưu từ trước
            // Làm thế nào để tìm được anonymous orders
            

            // Khi người dùng chưa đăng nhập
            if (!$request->has('user_id')) {
                AnonymousOrder::create([
                    'quantity' => $request->quantity,
                    'color_size_id' => $colorSize->id,
                ]);
                $data = [
                    'status' => true,
                    'messages' => 'Thêm vào giỏ hàng thành công! Vui lòng đến giỏ hàng để xem chi tiết!'
                ];
                return response()->json($data, 200);
            } else {
                // Khi người dùng đã đăng nhập
                Order::create([
                    'quantity' => $request->quantity,
                    'color_size_id' => $colorSize->id,
                ]);

            }
        } catch (\Throwable $th) {
            $data = [
                'status' => false,
                'messages' => $th->getMessage(),
            ];

            return response()->json($data, 200);
        }
    }
}