/**
 * Created by admin on 02.11.16.
 */
var tempJSON = '[{"name":"DIIT","libraries":[{"libraryId":2,"name":"DIIT_main"}],"faculties":[{"name":"Fil_faq","groups":[{"groupId":7,"name":"ff-16-2"},{"groupId":8,"name":"ff-15-1"}]},{"name":"Ist_faq","groups":[{"groupId":9,"name":"if-16-1"},{"groupId":10,"name":"if-13-2"}]},{"name":"Fiz_tech","groups":[{"groupId":11,"name":"ft-14-1"},{"groupId":12,"name":"ft-13-2"}]}]},{"name":"DNU","libraries":[{"libraryId":1,"name":"DNU_main"}],"faculties":[{"name":"Fil_faq","groups":[{"groupId":1,"name":"ff-16-1"},{"groupId":2,"name":"ff-14-2"}]},{"name":"Ist_Faq","groups":[{"groupId":3,"name":"if-15-1"},{"groupId":4,"name":"if-16-2"}]},{"name":"Primat","groups":[{"groupId":5,"name":"pm-15-1"},{"groupId":6,"name":"pa-16-1"}]}]}';
var result = JSON.parse(tempJSON);

var nameUniver = result.name;
alert(nameUniver);