<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [UserController::class, 'register']);


// Routes pour l'Enfant
Route::post('/enfant/create', [EnfantController::class, 'create']);

// Routes pour la Classe
Route::post('/classe/create', [ClasseController::class, 'create']);

// Routes pour l'Établissement
Route::post('/etablissement/create', [EtablissementController::class, 'create']);


