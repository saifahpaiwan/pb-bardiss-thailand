<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('brochures', function (Blueprint $table) {
            $table->id();
            $table->string('images_name')->nullable()->comment("ชื่อรูป Brochures"); 
            $table->text('description')->nullable()->comment("คำอธิบาย");
            $table->char('status')->default(1)->comment("สถานะการแสดผล : 0=Disable, 1=Enable"); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('brochures');
    }
};
