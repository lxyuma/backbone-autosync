module.exports = function(grunt) {
  grunt.initConfig({
    qunit: {
      all: ['test/index.html']
    },
    jshint: {
      all: ['supermodel.js', './test/*.js'],
      options: {
        eqnull: true,
        undef: true,
        boss: true,
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

  grunt.registerTask('default', ['jshint', 'qunit']);
};
