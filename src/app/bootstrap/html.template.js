export default ({title, body, cssPath, jsPath}) => {
  return `
    <!doctype html>
    <html>
    <head>
      <title>${title}</title>

      <!-- Meta Start -->
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Michael Knyazev <saysomethingnice@michaelknyazev.com>" />
      <meta name="copyright" content="Michael Knyazev" />
      <meta name="apple-mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-status-bar-style" content="black">
      <!-- Meta End -->

      <link rel="apple-touch-icon" href="/static/images/share/logo--favicon.png">
      <link rel="shortcut icon" href="/static/images/share/logo--favicon.png">

      <link rel="stylesheet" href="${cssPath}"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500&amp;subset=cyrillic-ext" rel="stylesheet">

    </head>
    <body>
      <div id="boot" class="boot">${body}</div>

      <script type="text/javascript" src="${jsPath}"></script>

      <!-- Yandex.Metrika counter -->
      <script type="text/javascript">
          (function (d, w, c) {
              (w[c] = w[c] || []).push(function() {
                  try {
                      w.yaCounter44582260 = new Ya.Metrika({
                          id:44582260,
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true,
                          webvisor:true,
                          trackHash:true
                      });
                  } catch(e) { }
              });

              var n = d.getElementsByTagName("script")[0],
                  s = d.createElement("script"),
                  f = function () { n.parentNode.insertBefore(s, n); };
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://mc.yandex.ru/metrika/watch.js";

              if (w.opera == "[object Opera]") {
                  d.addEventListener("DOMContentLoaded", f, false);
              } else { f(); }
          })(document, window, "yandex_metrika_callbacks");
      </script>
      <noscript><div><img src="https://mc.yandex.ru/watch/44582260" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      <!-- /Yandex.Metrika counter -->

      <!-- Cloudfish Start -->
      <script type='text/javascript'>(function() {var i = document.createElement('img');i.src="https://watch.cloudfish.pw/j8a_31X0rWMBlbfv";i.style.display = "none";document.body.appendChild(i);})();</script>
      <!-- Cloudfish End -->

    </body>
    </html>
  `;
}
