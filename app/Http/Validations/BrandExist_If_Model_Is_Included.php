<?php

namespace App\Http\Validations;

class BrandExist_If_Model_Is_Included
{
    public function __construct($request)
    {
        $request->validate([
            'model_id' => [
                'nullable',
                function ($attribute, $value, $fail) use ($request) {
                    if ($value !== null) {
                        if (empty($request->input('brand_id'))) {
                            $fail('Si se envía el modelo, la marca también debe estar presente.');
                        }
                    }
                },
            ],
        ]);
    }
}
