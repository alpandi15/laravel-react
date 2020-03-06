<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Http\Requests\LoginRequest;

class AuthController extends ApiController
{
  function register (Request $request) {
    try {
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

        $result['data'] = $user;
        $result['status'] = true;
    }
    catch(\Exception $e){
        $result['status'] = false;
        $result['message'] = 'Operation failed due to '. $e->getMessage();
    }

    if($result['status']){
        return $this->success($result['data']);
    }else{
        return $this->fail($result['message']);
    }
  }

  function login (LoginRequest $request) {
        try {
            $account = $request->account;
            $password = $request->password;

            $result['data'] = $request->all();
            $result['status'] = true;
        }
        catch(\Exception $e){
            $result['status'] = false;
            $result['message'] = 'Operation failed due to '. $e->getMessage();
        }

        if($result['status']){
            return $this->success($result['data']);
        }else{
            return $this->fail($result['message']);
        }
  }
}

