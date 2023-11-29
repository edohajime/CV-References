<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WarehouseInventory extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'person_in_charge',
        'position',
        'completed',
        'status',
        'warehouse_id',
        'staff_id',
    ];

    public function warehouse(): BelongsTo
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id');
    }

    public function inventoryproducts(): HasMany
    {
        return $this->hasMany(InventoryProduct::class, 'warehouse_inventorie_id');
    }
}
