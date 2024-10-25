<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etablissement extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_etablissement',
        'adresse',
    ];

    // Relation avec les classes
    public function classes()
    {
        return $this->hasMany(Classe::class);
    }
}
