(function (window, document, $) {
  'use strict';

  var fullEditor = new Quill('#full-container .editor', {
    bounds: '#full-container .editor',
    modules: {
      'formula': true,
      'syntax': true,
      'toolbar': [
        [{
          'size': []
        }],
        ['bold', 'italic', 'underline'],
        [{
          'color': []
        }, {
          'background': []
        }],
        [{
          'script': 'super'
        }, {
          'script': 'sub'
        }],
        [{
          'header': '1'
        }, {
          'header': '2'
        }, 'blockquote', 'code-block'],
        [{
          'list': 'ordered'
        }, {
          'list': 'bullet'
        }],
        ['direction', {
          'align': []
        }],
        ['link', 'image', 'video', 'formula']
      ],
    },
    theme: 'snow'
  });

  var editors = [fullEditor];

})(window, document, jQuery);
