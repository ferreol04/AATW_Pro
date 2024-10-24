<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('welcome');  // Charge la vue 'welcome'
});

// Route pour la connexion
Route::post('/login', [AuthController::class, 'login']);

// Route pour l'inscription
Route::post('/register', [AuthController::class, 'register']);

// Route pour la déconnexion
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth');

// Route pour demander la réinitialisation de mot de passe (envoyer un email)
Route::post('/password/forgot', [AuthController::class, 'forgotPassword']);

// Route pour réinitialiser le mot de passe (avec le token)
Route::post('/password/reset', [AuthController::class, 'resetPassword']);



require __DIR__.'/auth.php';
