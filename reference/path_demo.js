const path = require ('path')

//BASE FILE NAME
console.log(path.basename(__filename));

//Directory Name 
console.log(path.dirname(__filename));

//FILE EXTENSION
console.log(path.extname(__filename));

//CREATE PATH OBJECT
console.log( path.parse(__filename) );

/* DIRNAME */
console.log('__DIRNAME: ',__dirname);
/* CONCATENATE PATHS */
console.log( 'PATH.JOIN: ', path.join(__dirname, path.basename(__filename)) );
