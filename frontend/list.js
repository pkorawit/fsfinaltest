$(function () {
    var userid = getUrlParameter('userid');
    loadPost(userid);
});


function loadPost(userid) {

    //Get all posts
    var url = 'http://localhost:8080/api/posts/' + userid;
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

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};