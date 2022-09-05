<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

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
    return view('welcome');
});

// Todo関連のルーティング
Route::controller(TodoController::class)->group(function () {
    // Route::xxx('yyy', 'zzz');
    // xxx: http request
    // yyy: URL
    // zzz: method name

    // show todo
    Route::get('/home', 'home');
    // add todo

    // delete todo

});