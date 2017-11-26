$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var newpost = {
        username:$('#username').val(),
        title:$('#title').val(),
        comment:$('#comment').val(),
        image_url:$('#photo').val(),
        create_date: moment()
    };

    console.log(newpost);

    var url = 'http://localhost:8080/api/posts';
    axios.post(url, newpost)
      .then(function (response) {
        console.log(response);
        window.location.href = 'index.html';
      })
      .catch(function (error) {
        console.log(error);
      });
}

function previewPhoto(src){
    $('#preview').attr('src', src);
}