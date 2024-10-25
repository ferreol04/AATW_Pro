<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassesTable extends Migration
{
    public function up()
    {
        Schema::create('classes', function (Blueprint $table) {
            $table->id();
            $table->string('nom_classe');
            $table->unsignedBigInteger('etablissement_id'); // Clé étrangère vers établissement
            $table->timestamps();

            // Définir la clé étrangère
            $table->foreign('etablissement_id')->references('id')->on('etablissements')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('classes');
    }
}
