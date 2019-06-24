'use strict';

module.exports = function(AppUser) {
/**
 * metodo de prueba
 * @param {array} data data
 * @param {Function(Error, array)} callback
 */

AppUser.prototype.prueba = function(data, callback) {
    let res=[];

    let User = new Promise((resolve, reject)=>{
        res.push(AppUser.create(data))
        resolve (res)});

    let contact = new Promise((resolve, reject)=>{
        res.push(AppUser.prototype.contactinfo.create(data))
        resolve (res)
    });
    
    let document = new Promise((resolve, reject)=>{
        res.push(AppUser.prototype.userdocument.create(data))
        resolve (res)
    });
    User.then(contact.then(document)).catch(e=>console.log(e));
    callback(null, [res]);
};

};
