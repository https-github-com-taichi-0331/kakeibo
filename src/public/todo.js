// 非同期通信に必要なトークンの設定
$.ajaxSetup({
  headers: {
      'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
  }
});

// 非同期通信の雛形を定義
var customAjax = function (url, data, successCallBack) {
  $.ajax({
    type: "POST",
    url: url,
    data: data
  }).done((res) => {
    successCallBack(res);
  });
}

// 送信ボタンを押した時の処理
$('.todoSubmit').click(function () {
  // 非同期通信の為のパラメータを生成
  let url = $('#todoForm').attr('action');
  let data = {
    content: $('#todoInput').val(),
    importance: $(this).val()
  };
  let successCallBack = function(res) {
    updateList(res);
  };
  // 生成したパラメータを使用して非同期通信を実行
  customAjax(url, data, successCallBack);
});

// todoの削除ボタンを押したときの処理
$(document).on('click', '.delete-btn', function() {
  // パラメータ生成
  let url = $(this).closest('#bucketArea').data('action');
  let data = {
    id: $(this).next('.hiddenId').val()
  }
  let successCallBack = function(res) {
    updateList(res);
  }
  // ajax実行
  customAjax(url, data, successCallBack);
});

function updateList(res) {
  // 更新するバケツの中身を変数に格納
  let list = '';
  $.each(res, function(i, v) {
    list += '<li>';
    list += '<span>' + v.content + '</span>';
    list += '<span class="delete-btn">×</span>';
    list += '<input type="hidden" class="hiddenId" value=' + v.id + '>';
    list += '<input type="hidden" class="hiddenImportance" value=' + v.importance + '>'
    list += '</li>';
  });
  // バケツの中身を確認
  $('ul').html(list);
}

function formaTodoSize() {
  // $('ul').each(function(i, v) {
  //   let target = v.find('.hiddenImportance').val();
  //   switch(target) {
  //     case '1':
  //       break;
  //     case '2':
  //       break;
  //       case '3':
  //         break;
  //         case '4':
  //       break;
  //   }
  // });
}