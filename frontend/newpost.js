$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var newpost = {
        username:'pkorawit',
        title:$('#title').val(),
        comment:$('#comment').val(),
        image_url:$('#photo').val(),
        create_date:new Date()
    };

    console.log(newpost);

    var url = 'http://localhost:8080/api/posts';
    axios.post(url, newpost)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function previewPhoto(src){
    $('#preview').attr('src', src);
}