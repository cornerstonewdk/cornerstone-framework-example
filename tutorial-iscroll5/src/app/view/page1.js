define([ 'backbone', 'template!view/page1', '../../vendor/iscroll-infinite' ], function (Backbone, template) {

  return Backbone.View.extend({

    el: 'section#page1',

    render: function () {
      // page1.template 템플릿을 렌더링한 결과를 el의 하부에 추가한다.
      this.$el.html(template());

      setTimeout(function () {

        // iScroll 5 Infinite Scrolling 적용
        /******************************************************************************
         *
         * For the sake of keeping the script dependecy free I'm including a custom
         * AJAX function. You should probably use a third party plugin
         *
         */
        function ajax(url, parms) {
          parms = parms || {};
          var req = new XMLHttpRequest(),
            post = parms.post || null,
            callback = parms.callback || null,
            timeout = parms.timeout || null;

          req.onreadystatechange = function () {
            if (req.readyState != 4) return;

            // Error
            if (req.status != 200 && req.status != 304) {
              if (callback) callback(false);
              return;
            }

            if (callback) callback(req.responseText);
          };

          if (post) {
            req.open('POST', url, true);
            req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          } else {
            req.open('GET', url, true);
          }

          req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

          req.send(post);

          if (timeout) {
            setTimeout(function () {
              req.onreadystatechange = function () {
              };
              req.abort();
              if (callback) callback(false);
            }, timeout);
          }
        }

        /*
         *****************************************************************************/

        var myScroll = new IScroll('#wrapper', {
          mouseWheel: true,
          infiniteElements: '#scroller .item',
          //infiniteLimit: 2000,
          dataset: requestData,
          dataFiller: updateContent,
          cacheSize: 1000
        });

        function requestData(start, count) {
          ajax('vendor/dataset.php?start=' + +start + '&count=' + +count, {
            callback: function (data) {
              data = JSON.parse(data);
              myScroll.updateCache(start, data);
            }
          });
        }

        function updateContent(el, data) {
          el.innerHTML = data;
        }

        document.addEventListener('touchmove', function (e) {
          e.preventDefault();
        }, false);
      }, 200);
      return this;
    },

    events: {
      'click button.next': 'nextPage'
    },

    nextPage: function () {
      location.href = '#page2';
    }
  });
});
