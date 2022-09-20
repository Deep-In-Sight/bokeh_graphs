(function() {
  const fn = function() {
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
    
    const element = document.getElementById("a80a60f2-573f-4945-982e-145749cb1099");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a80a60f2-573f-4945-982e-145749cb1099' but no matching script tag was found.")
        }
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.3.min.js"];
      const css_urls = [];
    
      const inline_js = [    function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                  const docs_json = '{"1f6ec287-f825-44af-a724-687f17f8283e":{"defs":[],"roots":{"references":[{"attributes":{"line_color":"gray","x":{"field":"x"},"y":{"field":"y"}},"id":"1901","type":"Line"},{"attributes":{"data":{"top":[450,628,488,210,287,791,508,639,397,943],"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEA=","dtype":"float64","order":"little","shape":[10]}},"selected":{"id":"1896"},"selection_policy":{"id":"1895"}},"id":"1882","type":"ColumnDataSource"},{"attributes":{"source":{"id":"1900"}},"id":"1905","type":"CDSView"},{"attributes":{},"id":"1858","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"gray","x":{"field":"x"},"y":{"field":"y"}},"id":"1902","type":"Line"},{"attributes":{},"id":"1895","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"1900"},"glyph":{"id":"1901"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1903"},"nonselection_glyph":{"id":"1902"},"view":{"id":"1905"}},"id":"1904","type":"GlyphRenderer"},{"attributes":{},"id":"1893","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Cumulative"},"renderers":[{"id":"1904"}]},"id":"1918","type":"LegendItem"},{"attributes":{"below":[{"id":"1860"}],"center":[{"id":"1863"},{"id":"1867"},{"id":"1898"}],"height":400,"left":[{"id":"1864"}],"renderers":[{"id":"1886"},{"id":"1904"}],"title":{"id":"1850"},"toolbar":{"id":"1875"},"toolbar_location":null,"width":700,"x_range":{"id":"1852"},"x_scale":{"id":"1856"},"y_range":{"id":"1854"},"y_scale":{"id":"1858"}},"id":"1849","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"blue"},"hatch_color":{"value":"blue"},"line_color":{"value":"blue"},"top":{"field":"top"},"width":{"value":0.75},"x":{"field":"x"}},"id":"1883","type":"VBar"},{"attributes":{},"id":"1896","type":"Selection"},{"attributes":{},"id":"1856","type":"LinearScale"},{"attributes":{},"id":"1916","type":"Selection"},{"attributes":{},"id":"1865","type":"BasicTicker"},{"attributes":{},"id":"1873","type":"HelpTool"},{"attributes":{"axis":{"id":"1864"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"1867","type":"Grid"},{"attributes":{},"id":"1915","type":"UnionRenderers"},{"attributes":{"source":{"id":"1882"}},"id":"1887","type":"CDSView"},{"attributes":{},"id":"1871","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAA8D8AAAAAAAAAQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAUQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAgQAAAAAAAACJAAAAAAAAAJEA=","dtype":"float64","order":"little","shape":[10]},"y":[450,1078,1566,1776,2063,2854,3362,4001,4398,5341]},"selected":{"id":"1916"},"selection_policy":{"id":"1915"}},"id":"1900","type":"ColumnDataSource"},{"attributes":{},"id":"1890","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"blue"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"blue"},"line_alpha":{"value":0.1},"line_color":{"value":"blue"},"top":{"field":"top"},"width":{"value":0.75},"x":{"field":"x"}},"id":"1884","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"text":"My Tutorial Progress"},"id":"1850","type":"Title"},{"attributes":{},"id":"1868","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"items":[{"id":"1899"},{"id":"1918"}],"location":"top_left"},"id":"1898","type":"Legend"},{"attributes":{"axis_label":"Words Written","coordinates":null,"formatter":{"id":"1890"},"group":null,"major_label_policy":{"id":"1891"},"ticker":{"id":"1865"}},"id":"1864","type":"LinearAxis"},{"attributes":{},"id":"1891","type":"AllLabels"},{"attributes":{},"id":"1852","type":"DataRange1d"},{"attributes":{"num_minor_ticks":2},"id":"1861","type":"BasicTicker"},{"attributes":{},"id":"1894","type":"AllLabels"},{"attributes":{"axis_label":"Day Number","coordinates":null,"formatter":{"id":"1893"},"group":null,"major_label_policy":{"id":"1894"},"ticker":{"id":"1861"}},"id":"1860","type":"LinearAxis"},{"attributes":{"label":{"value":"Daily"},"renderers":[{"id":"1886"}]},"id":"1899","type":"LegendItem"},{"attributes":{},"id":"1872","type":"ResetTool"},{"attributes":{"end":6000},"id":"1854","type":"Range1d"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"blue"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"blue"},"line_alpha":{"value":0.2},"line_color":{"value":"blue"},"top":{"field":"top"},"width":{"value":0.75},"x":{"field":"x"}},"id":"1885","type":"VBar"},{"attributes":{"overlay":{"id":"1874"}},"id":"1870","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"data_source":{"id":"1882"},"glyph":{"id":"1883"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"1885"},"nonselection_glyph":{"id":"1884"},"view":{"id":"1887"}},"id":"1886","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1860"},"coordinates":null,"group":null,"ticker":null},"id":"1863","type":"Grid"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"1874","type":"BoxAnnotation"},{"attributes":{},"id":"1869","type":"WheelZoomTool"},{"attributes":{"tools":[{"id":"1868"},{"id":"1869"},{"id":"1870"},{"id":"1871"},{"id":"1872"},{"id":"1873"}]},"id":"1875","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"gray","x":{"field":"x"},"y":{"field":"y"}},"id":"1903","type":"Line"}],"root_ids":["1849"]},"title":"Bokeh Application","version":"2.4.3"}}';
                  const render_items = [{"docid":"1f6ec287-f825-44af-a724-687f17f8283e","root_ids":["1849"],"roots":{"1849":"a80a60f2-573f-4945-982e-145749cb1099"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
    function(Bokeh) {
        }
      ];
    
      function run_inline_js() {
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();