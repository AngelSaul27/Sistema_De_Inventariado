<?php

namespace App\Services;

use App\Models\DeviceBrand;
use App\Models\DeviceModel;

class BrandAndModelService
{
    public function RegisterBrandAndModel($REQUEST, $TYPE_ID): ?DeviceBrand
    {
        if($REQUEST->brand_id){
            if(is_numeric($REQUEST->brand_id)){
                $brand = DeviceBrand::findOrFail($REQUEST->brand_id);
            }else{
                $brand = new DeviceBrand();
                $brand->name = $REQUEST->brand_id;
                $brand->type_id = $TYPE_ID;
                $brand->save();
            }

            if($REQUEST->model_id){
                if(is_numeric($REQUEST->model_id)){
                    DeviceModel::findOrFail($REQUEST->model_id);
                }else{
                    $model = new DeviceModel();
                    $model->name = $REQUEST->model_id;
                    $model->brand_id = $brand->id;
                    $model->save();
                }
            }

            return $brand;
        }

        return null;
    }
}
