<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
  function login (Request $request) {
    return response()->json($request->all(), 200);
  }
}

