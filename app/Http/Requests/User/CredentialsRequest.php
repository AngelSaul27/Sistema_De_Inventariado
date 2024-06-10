<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CredentialsRequest extends FormRequest
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
            'old_password' => ['required', 'string',
                function ($attribute, $value, $fail) {
                    if (!Auth::attempt(['email' => auth()->user()->email, 'password' => $value])) {
                        $fail('La contraseña anterior es incorrecta.');
                    }
                },
            ],
            'password' => 'required|min:8',
            'password_confirmation' => 'required|same:password',
        ];
    }

    public function messages()
    {
        return [
            'old_password.required' => 'El campo contraseña anterior es obligatorio.',
            'old_password.string' => 'El campo contraseña anterior debe ser una cadena de caracteres.',
            'password.required' => 'El campo nueva contraseña es obligatorio.',
            'password.min' => 'El campo nueva contraseña debe tener al menos :min caracteres.',
            'password_confirmation.required' => 'El campo confirmación de contraseña es obligatorio.',
            'password_confirmation.same' => 'La confirmación de contraseña debe coincidir con la nueva contraseña.'
        ];
    }

    public function update($request)
    {
        $user = auth()->user();

        $user->password = Hash::make($request->password);
        $user->save();

        return $user;
    }
}
