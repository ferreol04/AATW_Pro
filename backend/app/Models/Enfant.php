<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enfant extends Model
{
    use HasFactory;

    protected $fillable = [
        'nom',
        'prenom',
        'date_naissance',
        'parent_id',
        'classe_id',
    ];

    // Relation avec le parent
    public function parent()
    {
        return $this->belongsTo(Parent::class);
    }

    // Relation avec la classe
    public function classe()
    {
        return $this->belongsTo(Classe::class);
    }
}
