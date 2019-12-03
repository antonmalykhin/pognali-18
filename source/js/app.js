    ymaps.ready(init);
    function init() {
      var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        controls: [],
        zoom: 17,
      }, { suppressMapOpenBlock: true });
    }
