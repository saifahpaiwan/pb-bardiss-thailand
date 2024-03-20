<?php

namespace App\Http\Controllers;

use App\Models\brochure;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrochureController extends Controller
{ 
    public function index($id = null)
    {
        $currentId = $id;
        $oldestId = $id;
        $currentQuery = brochure::where('status', 1)->where('id', '>', $currentId)->orderBy('id')->first();
        $oldestQuery  = brochure::where('status', 1)->where('id', '<', $oldestId)->orderBy('id')->first();
        $brochure = brochure::find($id);
        return Inertia::render('Brochure/IndexTest', [
            'brochure' => $brochure,
            'currentQuery' => $currentQuery,
            'oldestQuery'  => $oldestQuery,
        ]);
    } 
}
