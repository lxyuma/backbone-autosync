module.exports = function(grunt) {
  grunt.initConfig({
    qunit: {
      all: ['test/*.html']
    },
    jshint: {
      all: ['backbone-autosync.js'],
      options: {
        eqnull: true,
        undef: true,
        boss: true,
        //force: true,
        globals: {
          // QUnit
          ok: true,
          test: true,
          module: true,
          raises: true,
          deepEqual: true,
          strictEqual: true,

          // Dependencies
          _: true,
          $: true,
          document: true,
          jQuery: true,
          exports: true,
          require: true,
          Backbone: true,
          Supermodel: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['qunit']);
  grunt.registerTask('test', ['qunit']);
};
