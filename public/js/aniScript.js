$(document).ready(function ($) {
  var $userForm = $('.createAni')

    $userForm.on('submit', function (e) {
    e.preventDefault()
    // console.log($(this).serializeArray())
    var formdata = $(this).serializeArray()

    // console.log(data[0].name)

    var breed = $('#breed').val()
    var name = $('#name').val()
    var gender = $('#gender').val()
    var family = $('#family').val()
    var date = $('#date').val()

    // console.log(user_name, user_password, user_email)
    alert('ajax call now')
    $.ajax({
      type: 'POST',
      url: '/api/animal',
      data: formdata
    }).done(doSomething)
  })

  function doSomething (data) {
    alert('form submitted, new animals created')
    $('#all-animal-list').append('<li>' + data.breed + data.family + data.name + data.gender + data.date + '</li>')
  }
})
