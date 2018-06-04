$.get('/api/friends').then(function(data) {
    console.log(data);
    $('#numEntries').text(data.length)
})