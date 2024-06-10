<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class AreaMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if(!Auth::check()){
            return redirect()->route('login');
        }

        $userRole=Auth::user()->role;

        if($userRole === "AREA"){
            return $next($request);
        }else if($userRole === "ADMIN"){
            return redirect()->to('/admin');
        }else{
            abort(403, 'Unauthorized action.');
        }
    }
}
