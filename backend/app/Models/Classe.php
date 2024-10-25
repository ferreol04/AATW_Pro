<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Classe extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom_classe',
        'etablissement_id',
    ];

    // Relation avec l'établissement
    public function etablissement()
    {
        return $this->belongsTo(Etablissement::class);
    }

    // Relation avec les enfants
    public function enfants()
    {
        return $this->hasMany(Enfant::class);
    }
}
