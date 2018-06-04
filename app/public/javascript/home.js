$.get('/api/friends').then(function(err, data) {
    if (err) throw err;
    console.log(data);
    $('#numEntries').text(data.length)
})