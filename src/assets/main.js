$(function() {

  var reportUrl = 'https://www.codeschool.com/users/bnggge.json';
  var courses = [];
  $.ajax({
    url: reportUrl,
    dataType: 'jsonp',
    success: function(response) {
      courses = response.courses.completed;
      //console.log(response.courses.completed);
      for (let course of courses) {
        console.log(course.title);
        $("#badges").append('<div class="course"><h3>'+course.title+'</h3><img src="'+course.badge+'"><a href="'+course.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      }
    }
  });

  // your code will go here

});
