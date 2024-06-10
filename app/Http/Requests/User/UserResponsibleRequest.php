<?php

namespace App\Http\Requests\User;

use App\Models\Responsible;
use Illuminate\Foundation\Http\FormRequest;

class UserResponsibleRequest extends FormRequest
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

    public function register($request): void
    {
        $responsible = new Responsible();
        $responsible->area_id = auth()->user()->area->id;
        $responsible->name = $request->name;
        $responsible->save();
    }

    public function update($request): void
    {
        $responsible = Responsible::where("id", "=", $request->id)
            ->where("area_id", "=", auth()->user()->area->id)
            ->first();

        if($responsible){
            $responsible->name = $request->name;
            $responsible->save();
        }
    }

}
