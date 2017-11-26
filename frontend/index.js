$(function(){
    moment.locale('th');
    loadAllPost();
});

$('#search').click(function(){
    loadPostByUser();
});

function loadAllPost() {
    $('#posts').empty();
    //Get all posts
    var url = '/api/posts/';
    axios.get(url)
        .then(function (response) {
            console.log(response);
            $.get('post.mst', function (template) {
                for(var i=0;i<=response.data.length-1;i++){
                    var time_display = moment(response.data[i].create_date).format('LLL');
                    response.data[i].time_display = time_display;
                    var rendered = Mustache.render(template, response.data[i]);                      
                    $('#posts').append(rendered);
                }
            });
        })
        .catch(function (error) {
            console.log(error);
        });
}

function loadPostByUser() {
        $('#posts').empty();
        //Get all posts
        var url = '/api/posts/pkorawit';
        axios.get(url)
            .then(function (response) {
                console.log(response);
                $.get('post.mst', function (template) {
                    for(var i=0;i<=response.data.length-1;i++){
                        var rendered = Mustache.render(template, response.data[i]);                        
                        $('#posts').append(rendered);
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    

