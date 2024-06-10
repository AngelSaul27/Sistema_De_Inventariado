<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('area_id')->constrained('areas')->onDelete('cascade');
            $table->foreignId('types_id')->constrained('devices_types')->onDelete('cascade');
            $table->foreignId('responsible_id')->nullable()->constrained('responsibles')->onDelete('cascade');
            $table->string('serial_number')->nullable();
            $table->string('condition')->nullable();
            $table->date('acquisition')->nullable();
            $table->date('warranty')->nullable();
            $table->text('comments')->nullable();
            $table->timestamps();
        });

        // Tabla de almacenamiento
        Schema::create('devices_storages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('type');
            $table->string('capacity');
            $table->timestamps();
        });

        // Tabla de computers
        Schema::create('devices_computers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('processor')->nullable();
            $table->string('ram')->nullable();
            $table->string('storage')->nullable();
            $table->string('operating_system')->nullable();
            $table->string('antivirus')->nullable();
            $table->string('ofimatica')->nullable();
            $table->timestamps();
        });

        // Tabla de network
        Schema::create('devices_network', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('type');
            $table->string('speed')->nullable();
            $table->string('bandwidth')->nullable();
            $table->string('security_protocol')->nullable();
            $table->timestamps();
        });

        // Tabla de printers
        Schema::create('devices_printers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('type');
            $table->string('printing_technology')->nullable();
            $table->string('paper_sizes_supported')->nullable();
            $table->string('duplex_printing')->nullable();
            $table->string('ink_or_toner')->nullable();
            $table->timestamps();
        });

        // Tabla de monitor
        Schema::create('devices_monitor', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('resolution')->nullable();
            $table->string('panel_type')->nullable();
            $table->string('connections')->nullable();
            $table->timestamps();
        });

        // Tabla de Peripherals
        Schema::create('devices_peripherals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('type');
            $table->string('connection_type')->nullable();
            $table->timestamps();
        });

        // Tabla de Projector
        Schema::create('devices_projector', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('brightness')->nullable();
            $table->string('input_ports')->nullable();
            $table->string('wireless_capabilities')->nullable();
            $table->timestamps();
        });

        // Tabla de Telephony
        Schema::create('devices_telephony', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('phone_lines')->nullable();
            $table->string('voicemail_support')->nullable();
            $table->string('call_forwarding')->nullable();
            $table->string('caller_id')->nullable();
            $table->string('speed_dial')->nullable();
            $table->timestamps();
        });

        // Tabla de Tablets
        Schema::create('devices_tablets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('screen_size')->nullable();
            $table->string('operating_system')->nullable();
            $table->string('processor')->nullable();
            $table->string('storage_capacity')->nullable();
            $table->timestamps();
        });

        // Tabla de Others
        Schema::create('devices_others', function (Blueprint $table) {
            $table->id();
            $table->foreignId('device_id')->constrained('devices')->onDelete('cascade');
            $table->string('information')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devices');
        Schema::dropIfExists('devices_storages');
        Schema::dropIfExists('devices_computers');
        Schema::dropIfExists('devices_network');
        Schema::dropIfExists('devices_printers');
        Schema::dropIfExists('devices_monitor');
        Schema::dropIfExists('devices_peripherals');
        Schema::dropIfExists('devices_projector');
        Schema::dropIfExists('devices_telephony');
        Schema::dropIfExists('devices_tablets');
    }
};
