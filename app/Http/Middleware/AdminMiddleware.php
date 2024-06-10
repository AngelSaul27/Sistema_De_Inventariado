<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if(!Auth::check()){
            return redirect()->route('login');
        }

        $userRole=Auth::user()->role;

        if($userRole === "ADMIN"){
            return $next($request);
        }else if($userRole === "AREA"){
            return redirect()->to('/area');
        }else{
            abort(403, 'Unauthorized action.');
        }
    }
}
