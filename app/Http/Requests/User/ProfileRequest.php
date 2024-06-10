<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'unique:areas', 'string', Rule::unique('users')->ignore(auth()->id())],
            'email' => ['required', 'email', Rule::unique('users')->ignore(auth()->id())]
        ];
    }

    function update($profile)
    {
        $user = auth()->user();

        if($profile->email !== auth()->user()->email){
            $user->email = $profile->email;
        }

        if($profile->name !== auth()->user()->name){
            $area = auth()->user()->area;
            if($area === null) return false;

            $user->name = $profile->name;
            $area->name = $profile->name;
            $area->save();
        }

        $user->save();
    }
}
