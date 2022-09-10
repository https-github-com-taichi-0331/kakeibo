<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\TodoForm;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller
{
  // show todo
  public function home() {
    $todos = DB::table('todos')->select('content', 'importance')->get();

    // resources/view配下のテンプレート名
    return view('todo.index', compact('todos'));
  }

  // add todo
  public function add(Request $request) {
    // DBに登録
    // タスク、作成日、更新日、優先度
    DB::table('todos')->insert([
      'content' => $request->content,
      'importance' => $request->importance
    ]);

    // 画面返却用変数作成($request)
    $todos = DB::table('todos')->select('content', 'importance')->get();

    return response()->json($todos);
    // return redirect()->route('todo.home');
  }
}
