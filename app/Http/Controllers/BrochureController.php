<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class BrochureController extends Controller
{ 
    public function index($id = null, $code = null)
    {
        return Inertia::render('Brochure/Index');
    } 
}
