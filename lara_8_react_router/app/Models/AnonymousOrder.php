<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AnonymousOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'status',
        'guest_fullname',
        'guest_province',
        'guest_district',
        'guest_ward',
        'guest_address',
        'guest_phone',
        'staff_id',
        'color_size_id',
    ];

    public function colorsize(): BelongsTo
    {
        return $this->belongsTo(ColorSize::class, 'color_size_id');
    }
}
