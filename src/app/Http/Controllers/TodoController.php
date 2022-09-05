<?php

namespace App\Http\Controllers;

use App\Http\Request\TodoForm;

class TodoController extends Controller
{
  // show todo
  public function home() {
    // resources/view配下のテンプレート名
    return view('todo.index');
  }

  // add todo
  public function add(TodoForm $request) {
    return redirect()->route('todo.home');
  }
}
