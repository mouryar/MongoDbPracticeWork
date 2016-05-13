/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies')
  .insert(doc,
    (error, result) => {
      if(error)
      {
          console.log(error);
          process.exit(1);
      }
  });
  callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  var fetechedDirector = db.collection('movies')
            .find({director:director})
            .sort({title:1})
            .toArray((err,docs)=>{
               if(err)
               {
                  callback(err, null); 
               } 
              callback(null, docs);
           });
  
};