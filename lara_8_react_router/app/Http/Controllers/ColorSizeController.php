<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Color;
use App\Models\ColorSize;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;

class ColorSizeController extends Controller
{
    public function listOfProd(Product $product)
    {
        $id = $product->id;
        $colorSizes = ColorSize::listColorSizesOfProduct($id);

        $results = [];

        foreach ($colorSizes as $colorSize) {
            $color = Color::where('id', $colorSize->color_id)->first();
            $size = Size::where('id', $colorSize->size_id)->first();
            $result = [
                'id' => $colorSize->id,
                'sku' => $colorSize->sku,
                'quantity' => $colorSize->quantity,
                'color_id' => $colorSize->color_id,
                'color' => $color->color,
                'size_id' => $colorSize->size_id,
                'size' => $size->size,
                'prod_name' => $product->name,
                'prod_id' => $product->id,
            ];

            $results[] = $result;
        }

        $data = [
            'status' => true,
            'color_sizes' => $results,
        ];

        return response()->json($data, 200);
    }

    public function listColorsOfProd(Product $product)
    {
        $colors = Color::where('product_id', $product->id)->get();

        $data = [
            'status' => true,
            'colors' => $colors,
        ];

        return response()->json($data, 200);
    }

    public function listSizesOfProd(Product $product)
    {
        $sizes = Size::where('product_id', $product->id)->get();
        return response()->json([
            'status' => true,
            'sizes' => $sizes,
        ], 200);
    }

    public function update(Request $request, Product $product)
    {
        $skus = $request->sku;
        $proIds = $request->product_id;
        $colIds = $request->color_id;
        $sizIds = $request->size_id;

        if (in_array(null, $skus)) {
            $data = [
                'status' => false,
                'messages' => 'Không được để trống SKU',
            ];

            return response()->json($data, 200);
        }

        $data = [$skus, $proIds, $colIds, $sizIds];
        $colorSizes = [];
        for ($i = 0; $i < count($data[0]); $i++) {
            // Gán dữ liệu của cột thứ $i trong mảng 2 chiều $data cho $packages[$i]
            $colorSizes[] = array_column($data, $i);
        }

        // Lấy result ColorSize từ database của product hiện tại
        $resultCoSis = $product->colorsizes;

        // Duyệt từng dữ liệu truy vấn trả về
        foreach ($resultCoSis as $resultCoSi) {
            // Nếu $resultCoSi->sku != null thì không cho phép sửa (chỉ được sửa 1 lần)
            if ($resultCoSi->sku === null) {
                foreach ($colorSizes as $colorSize) {
                    // Nếu product_id, color_id và size_id đều trùng khớp thì lưu lại sku
                    if (
                        $resultCoSi->color->product->id === intval($colorSize[1]) &&
                        $resultCoSi->color->id === intval($colorSize[2]) &&
                        $resultCoSi->size->id === intval($colorSize[3])
                    ) {
                        $resultCoSi->sku = $colorSize[0];
                        $resultCoSi->save();
                    }
                }
            }
        }

        $data = [
            'status' => true,
            'messages' => 'Cập nhật thành công!',
        ];

        return response()->json($data, 200);
    }

    public function show(ColorSize $colorSize)
    {
        // dd($colorSize);
        // dd($colorSize->size->product->name);
        // $color = $colorSize->color->color;
        // dd($colorSize);
        // $prodName = '';
        // $color = Color::where('id', $colorSize->color_id)->first();
        // $size = Size::where('id', $colorSize->size_id)->first();
        $specifics = [
            $colorSize->color->product->name,
            $colorSize->color->color,
            $colorSize->size->size,
        ];
        $nameSpecific = implode(', ', $specifics);
        $colorSize->name_specific = $nameSpecific;

        $result = [
            'id' => $colorSize->id,
            'sku' => $colorSize->sku,
            'quantity' => $colorSize->quantity,
            'name_specific' => $nameSpecific,
        ];

        $data = [
            'status' => true,
            'color_size' => $result,
        ];

        return response()->json($data, 200);
    }
}