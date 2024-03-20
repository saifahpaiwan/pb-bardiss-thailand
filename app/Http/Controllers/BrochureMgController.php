<?php

namespace App\Http\Controllers;

use App\Models\brochure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BrochureMgController extends Controller
{ 
     // function __construct()
    // {
    //     $this->middleware('permission:brochure-list|brochure-create|brochure-edit|brochure-delete', ['only' => ['index', 'store']]);
    //     $this->middleware('permission:brochure-create', ['only' => ['create', 'store']]);
    //     $this->middleware('permission:brochure-edit', ['only' => ['edit', 'update']]);
    //     $this->middleware('permission:brochure-delete', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        $query = brochure::query(); 
        if (isset($request->keyword) && !empty($request->keyword)) {
            $query->where('description', 'like', "%$request->keyword%");
        }

        if (isset($request->status['id']) && !empty($request->status['id'])) {
            $status = ($request->status['id'] == -1) ? '0' : $request->status['id'];
            $query->where('status', $status);
        }

        $brochure = $query->orderBy('id', 'DESC')->get();
        return Inertia::render('ManageData/Brochure/Index', [
            'brochures' => $brochure
        ]);
    }

    public function create()
    {
        return Inertia::render('ManageData/Brochure/Create');
    }

    public function store(Request $request)
    { 
        $validate = [ 
            'images_name' => 'required', 
            'status'      => 'required'
        ];

        request()->validate($validate);

        $images_name = null;
        if (isset($request->images_name) && !empty($request->images_name)) {
            $base64_image = $request->images_name;
            if (preg_match('/^data:image\/(\w+);base64,/', $base64_image)) {
                $file = substr($base64_image, strpos($base64_image, ',') + 1);
                $file = base64_decode($file);
                $images_name = hexdec(uniqid()) . '.jpg';
                Storage::disk('public')->put('images/brochures/' . $images_name, $file);
            }
        }
 
        $input = $request->all(); 
        $input['images_name'] = $images_name; 
        brochure::create($input); 
        Log::info('username : ' . auth()->user()->username . ' IP : ' . request()->ip() . ' | Brochure created successfully' . json_encode($request->all(), true));
        return redirect()->route('brochures.index')->with('success', 'Brochure created successfully');  
    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        $brochure = brochure::find($id);
        return Inertia::render('ManageData/Brochure/Edit', [
            'brochures' => $brochure
        ]); 
    }

    public function update(Request $request, string $id)
    {
        $validate = [ 
            'images_name' => 'required', 
            'status'      => 'required'
        ];
        
        request()->validate($validate);
        
        $brochure = brochure::find($id);  
        $images_name = $brochure->images_name;
        if (isset($request->images_name) && !empty($request->images_name)) {
            if (isset($brochure->images_name) && !empty($brochure->images_name)) {
                $uploade_location = 'storage/images/brochures/';
                if (!empty($brochure->images_name)) {
                    @unlink($uploade_location . $brochure->images_name);
                }
            }

            $base64_image = $request->images_name;
            if (preg_match('/^data:image\/(\w+);base64,/', $base64_image)) {
                $file = substr($base64_image, strpos($base64_image, ',') + 1);
                $file = base64_decode($file);
                $images_name = hexdec(uniqid()) . '.jpg';
                Storage::disk('public')->put('images/brochures/' . $images_name, $file);
            }
        }
 
        $input = $request->all(); 
        $input['images_name'] = $images_name; 
        $brochure->update($input);
        Log::info('username : ' . auth()->user()->username . ' IP : ' . request()->ip() . ' | Brochure updated successfully' . json_encode($request->all(), true));
        return redirect()->route('brochures.index')->with('success', 'Brochure updated successfully'); 
    }

    public function destroy(string $id)
    {
        $brochure = brochure::find($id);
        Log::info('username : ' . auth()->user()->username . ' IP : ' . request()->ip() . ' | Brochure deleted successfully : ' . json_encode($brochure, true)); 
        $uploade_location = 'storage/images/brochures/';
        if (!empty($brochure->images_name)) {
            @unlink($uploade_location . $brochure->images_name);
        }
        $brochure->delete(); 
        return redirect()->route('brochures.index')->with('success', 'Brochure deleted successfully');
    }
}
