<?php

namespace App\Http\Controllers;

class TodoController extends Controller
{
  public function home() {
    // resources/view配下のテンプレート名
    return view('todo.index');
  }
}
