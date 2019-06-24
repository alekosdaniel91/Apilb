module.exports = function(app) {
  var userApp =app.models.AppUser;
  var typeDoc =app.models.TypeDocument;
  // __create__relatedModelName

  userApp.prototype.test = function (name, cb) {
        cb(null, {"name": name});
    }


};










// module.exports = function(app) {
  // var modelNames = Object.keys(app.models);
  // var models = [];
  // modelNames.forEach(function(m) {
  //   var modelName = app.models[m].modelName;
  //   if (models.indexOf(modelName) === -1) {
  //     models.push(modelName);
  //   }
  // });
  // console.log('Models:', models);
// };