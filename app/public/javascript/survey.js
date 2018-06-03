var survey = [];
  var questions = [
      'Do you like sci-fi settings?', 
      'Do you like fantasy settings?', 
      'Do you like fast-paced games?', 
      'Do you like gory games?',
      'Do you like strategy games?',
      'Do you like FPS games?',
      'Do you like competing against other teams?',
      'Do you like exploring virtual worlds?',
      'Do you like unlocking achievements and reaching goals?',
      'Do you like socializing while playing?'
  ]

  for (var idx = 0; idx < 10; idx++) {
      var newQuestion = $(`<div class='questionBar' id='question${idx}'><h6>${questions[idx]}</h6></div>`);

      var newAnswers = $(`
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active">
                  <input type="radio" name="options-${idx}" value='1' autocomplete="off" checked> No way!
              </label>
              <label class="btn btn-secondary">
                  <input type="radio" name="options-${idx}" value='2' autocomplete="off"> I'd rather not
              </label>
              <label class="btn btn-secondary">
                  <input type="radio" name="options-${idx}" value='3' autocomplete="off"> No preference
              </label>
              <label class="btn btn-secondary">
                  <input type="radio" name="options-${idx}" value='4' autocomplete="off"> Yes, kinda
              </label>
              <label class="btn btn-secondary">
                  <input type="radio" name="options-${idx}" value='5' autocomplete="off"> Absolutely!
              </label>
          </div>
          <br>
      `);

      $('#quizField').append(newQuestion);
      $('#quizField').append(newAnswers);
  }

  $('#submitBtn').on('click', function(){
    event.preventDefault();
    var userName = $('#nameInput').val();
    var userPhoto = $('#photoInput').val();
    var ansArr = [];
    for (var idx = 0; idx<10; idx++) {
      ansArr.push(parseInt($(`input[name=options-${idx}]:checked`).val()))
    }
    
    var newFriend = {
        name: userName,
        photo: userPhoto,
        scores: ansArr,
    }

    $.post("/api/friends", newFriend)
        .then(function(data) {
          console.log("posting response data: ", data);
    });
})