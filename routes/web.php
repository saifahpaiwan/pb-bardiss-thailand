<?php

use App\Http\Controllers\BrochureController;
use App\Http\Controllers\CategctsController;
use App\Http\Controllers\DispensingMedicineController;
use App\Http\Controllers\ImportStockController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductsItemsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UnitsController;
use App\Http\Controllers\UsersController;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/brochure/{id}', [BrochureController::class, 'index'])->name('brochure.index');
 

Route::middleware('auth')->group(function () {  
    
    Route::post('set-selected-option', function (Request $request) {   
        $request->session()->put("setSeletePlant", $request->selectedOption['id']);
        return back()->with('success', 'Set session Plant ('.$request->selectedOption['plant'].')');
    })->name('set.selected.option');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('users', UsersController::class);
    Route::resource('roles', RoleController::class);  
});

require __DIR__ . '/auth.php';
