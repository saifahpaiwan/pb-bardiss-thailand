<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class brochure extends Model
{
    use HasFactory;
    protected $fillable = [
        'id ',
        'images_name',   
        'description',
        'status'
    ];
}
