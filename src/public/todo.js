var ajaxPost = function () {
  $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
    }
  });

  let url = $('#todoForm').attr('action');
  let data = {
    content: $('#todoInput').val(),
    importance: $(this).val()
  };

  $.ajax({
    type: "POST",
    url: url,
    data: data
  }).done((res) => {
    let list = '';
    $.each(res, function(i, v) {
      list += '<li>' + v.content + '</li>';
    });
    $('ul').html(list);
  });
}

$('.todoSubmit').click(ajaxPost);