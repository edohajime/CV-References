<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'status',
        'staff_id',
        'address_id',
        'color_size_id',
    ];

    public function colorsize(): BelongsTo
    {
        return $this->belongsTo(ColorSize::class, 'color_size_id');
    }
}
