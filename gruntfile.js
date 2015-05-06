var _=require('lodash');

/*--------------------------------------------*/
	//Setup js libs
/*--------------------------------------------*/

var bower=__dirname + '/bower_components/';
var js_libs=(function(base){
	var libs=[
		'jquery/dist/jquery.min.js',
		'livereload-js/dis/livereload.js',
		'materialize/dist/js/materialize.min.js',
		'modernizr/modernizr.js'
	];
	return _.map( libs, function(lb){ return base + '/' + lb; } );
})(bower);

/*--------------------------------------------*/
	//Grunt tasks
/*--------------------------------------------*/
module.exports=function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy:{
			fonts:{
				expand: true,
				flatten: true,
    		filter: 'isFile',
				cwd : 'bower_components/',
				src: ['**/*.ttf', '**/*.woff' ],
				dest: 'public/fonts/',
			}
		},
    sass: {                              // Task 
      dist: {                            // Target 
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },
		watch: {
      options:{
        livereload:true
      },
      sass : {
        files : [ 'sass/**/*.scss' ],
        tasks : [ 'sass:dist' ]
      }
    },    		
	});

	 grunt.loadNpmTasks('grunt-contrib-copy');
	 grunt.loadNpmTasks('grunt-contrib-sass');
	 grunt.loadNpmTasks('grunt-contrib-watch');

	 grunt.registerTask('setup', ['copy']);
};