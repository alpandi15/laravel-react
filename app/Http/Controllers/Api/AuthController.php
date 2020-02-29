<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class AuthController extends Controller
{
  function register (Request $request) {
    $file_name = "";
    if($file = $request->file('img_profil')){
        $location_file = 'images/member/profile/';
        $extensi = $file->getClientOriginalExtension();
        $rand = rand(111, 999);
        $name_file = $rand.'.'.$extensi;
        $file->move($location_file, $name_file);
        $file_name = $location_file.$name_file;
    }
    // return $file_name;
    $user = User::create([
        'name' => $request['name'],
        'email' => $request['email'],
        'username' => $request['username'],
        'password' => bcrypt($request['password']),
    ]);

    return response()->json($user, 201);
  }

  function login (Request $request) {
    $this->validate($request, [
        'account'   => 'required',
        'password' => 'required|min:6'
    ]);

    $account = $request->account;
    $password = $request->password;

  }
}

