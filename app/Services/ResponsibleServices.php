<?php

namespace App\Services;

use App\Models\Responsible;
use Exception;

class ResponsibleServices
{

    /**
     * @throws Exception
     */
    public function RegisterOrGetResponsible($REQUEST): ?Responsible
    {
        if(is_numeric($REQUEST->responsible_id)){
            return Responsible::findOrFail($REQUEST->responsible_id);
        }

        if($REQUEST->responsible_id === null){
            return null;
        }

        if(Responsible::where("name", "=", $REQUEST->responsible_id)->first()){
            throw new Exception("Error: Responsable Registrado");
        }

        $responsible = new Responsible();
        $responsible->area_id = auth()->user()->area->id;
        $responsible->name = $REQUEST->responsible_id;
        $responsible->save();
        return $responsible;
    }

    /**
     * @throws Exception
     */
    public function RegisterOrGetResponsibleWithAreaId($REQUEST): ?Responsible
    {
        if(is_numeric($REQUEST->responsible_id)){
            return Responsible::findOrFail($REQUEST->responsible_id);
        }

        if($REQUEST->responsible_id === null){
            return null;
        }

        if(Responsible::where("name", "=", $REQUEST->responsible_id)->first()){
            throw new Exception("Error: Responsable Registrado");
        }

        $responsible = new Responsible();
        $responsible->area_id = $REQUEST->area_id;
        $responsible->name = $REQUEST->responsible_id;
        $responsible->save();
        return $responsible;
    }

}
