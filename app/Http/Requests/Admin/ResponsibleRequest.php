<?php

namespace App\Http\Requests\Admin;

use App\Models\Responsible;
use Illuminate\Foundation\Http\FormRequest;

class ResponsibleRequest extends FormRequest
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
        return ['name' => ['required', 'unique:responsibles', 'string']];
    }

    public function update($request): void
    {
        $responsible = Responsible::where("id", "=", $request->id)->first();

        if($responsible){
            $responsible->name = $request->name;
            $responsible->save();
        }
    }

}
