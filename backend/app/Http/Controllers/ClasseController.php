<?php

namespace App\Http\Controllers;

use App\Models\Classe;
use App\Models\Etablissement; // Ajout pour la relation
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClasseController extends Controller
{
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nom_classe' => 'required|string|max:255',
            'etablissement_id' => 'required|exists:etablissements,id', // Assurez-vous que l'établissement existe
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => $validator->errors(),
            ], 400);
        }

        // Créer une nouvelle classe
        $classe = Classe::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Classe créée avec succès!',
            'data' => $classe
        ], 201);
    }

    public function index()
    {
        $classes = Classe::with('etablissement')->get(); // Récupérer les classes avec l'établissement associé
        return response()->json($classes);
    }
}
