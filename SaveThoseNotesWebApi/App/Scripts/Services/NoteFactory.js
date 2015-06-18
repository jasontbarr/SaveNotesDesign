app.factory('NoteFactory', ['$http', '$q', '$location', function ($http, $q, $location) {    
    var o = {
        notes:[]
    };

    o.getNotes = function () {
        var q = $q.defer();
        $http({
            url: '/api/apinote',
            method: 'GET',
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).success(function (data) {
            o.notes.length = 0;
            for (var i = 0; i < data.length; i++) {
                o.notes[i] = data[i];
            }
            $location.path('/UserNoteIndex');            
        }).error(function (data) {
        });
        return q.promise;        
    };

    o.getNoteDetail = function (i) {
        var q = $q.defer();
        $http({
            url: '/api/apinote' + o.notes[i].Id,
            method: 'GET',
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
        }).success(function (data) {
            o.notes.length = 0;
            for (var i = 0; i < data.length; i++) {
                o.notes[i] = data[i];
            }
            $location.path('/UserNoteIndex');
        }).error(function (data) {
        });
        return q.promise;
    };

    o.addNote = function (newNote) {
        $http({
            url: 'api/apinote',
            method: 'POST',
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            data: newNote
        }).success(function (response) {
            //window.location.replace('/usernoteindex');
            //window.location.replace('#/UserNoteIndex');
            o.getNotes();
            $location.path("/UserNoteIndex");
        });

    };

    o.deleteNote = function(i){
        $http({
            url: 'api/apinote/'+ o.notes[i].Id,
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            method:'DELETE'
        }).success(function(response){
            o.notes.splice(i, 1);
        }).error(function(response){
            console.error(response);
        });
    };

    o.updateNote = function (i, editNote) {
        $http({
            url: 'api/apinote/' + o.notes[i].Id,
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            method: 'PUT',
            data: editNote
        }).success(function (editNote, response) {
            //o.notes.splice(i, 1);
            o.getNotes();
            $location.path("/UserNoteIndex");
        }).error(function (response) {
            console.error(response);
        });
    };

    return o;
}]);
//var addNote = function (Note) {
//    $http({
//        url: '/api/apinote',
//        method: 'POST',
//        data: bug
//    }).success(function (response) {
//        bug.key = response.name;
//        bugs.push(bug);
//    }).error(function (response) {
//        console.error(response);
//    });
//};

//var deleteNote = function (note, index) {
//    $http({
//        url: '/api/apinote' + note.key + '/.json',
//        method: 'DELETE'
//    }).success(function (response) {
//        bugs.splice(index, 1);
//    }).error(function (response) {
//        console.error(response);
//    })
//};
//var addNote = function (Note) {
//    $http({
//        url: '/api/apinote',
//        method: 'POST',
//        data: bug
//    }).success(function (response) {
//        bug.key = response.name;
//        bugs.push(bug);
//    }).error(function (response) {
//        console.error(response);
//    });
//};
//var editNote = function (Note)
