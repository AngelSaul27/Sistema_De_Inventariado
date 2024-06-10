<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\CredentialsRequest;
use App\Http\Requests\User\ProfileRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function index(): Response
    {
        return Inertia::render("User/Profile", ['area' => auth()->user()->area]);
    }

    public function update(ProfileRequest $profileRequest): RedirectResponse
    {
        $profileRequest->update($profileRequest);
        return redirect()->to('/area/perfil');
    }

    public function credentials(CredentialsRequest $credentialsRequest): RedirectResponse
    {
        $credentialsRequest->update($credentialsRequest);
        return redirect()->back();
    }

}
