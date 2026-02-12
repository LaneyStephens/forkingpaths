$(document).ready(function(){

    function getRotationDegrees(obj) {
        var matrix = obj.css("-webkit-transform") ||
        obj.css("-moz-transform")    ||
        obj.css("-ms-transform")     ||
        obj.css("-o-transform")      ||
        obj.css("transform");
        if(matrix !== 'none') {
            var values = matrix.split('(')[1].split(')')[0].split(',');
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        } else { var angle = 0; }
        return (angle < 0) ? angle + 360 : angle;
    }

    deg = getRotationDegrees($('.clock'));

    count = 0;
    count2 = 0;
    var lastScrollTop = 0;

    $(document).bind('scroll mousewheel touchscroll DOMMouseScroll', function(event){

      if (event.originalEvent.wheelDelta >= 0) {
          count--;
          count2++;
          if(count <= '-360'){
            count = 0;
            count2 = 0;
          }
      }
      else {
          count++;
          count2--;
          if(count >= '360'){
            count = 0;
            count2 = 0;
          }
      }

      deg = getRotationDegrees($('.clock'));

      $('.clock').css({'transform': 'rotate(' + (count*5) + 'deg)'})
      $('.name').css({'transform': 'rotate(' + (count2*15) + 'deg)'})
      $('.time.active').css({'transform': 'rotate(' + count2*5 + 'deg)', 'transition':'all 0s linear'})

      $('.time img').not('.active').each(function(){
        var length = Math.floor(Math.random() * data[0].length)
        var item = data[0][length];
        var item2 = data[1][length];
        var item3 = data[2][length];
        $(this).attr('src', item).attr('alt', item3).attr('data-src', item2);
      })

      clearTimeout($.data(this, 'scrollTimer'));

      $.data(this, 'scrollTimer', setTimeout(function() {
        $('.time img.active').each(function(){
          var length = Math.floor(Math.random() * data[0].length)
          var item = data[0][length];
          var item2 = data[1][length];
          var item3 = data[2][length];
          $(this).attr('src', item2).attr('alt', item3).attr('data-src', item2);
        })

        var desc = $('img.active').attr('alt');
        $('.description').html(desc);

      }, 100));

    })

    $('.time img').on('mouseenter', function(){
      var desc = $(this).attr('alt');
      $('.description').html(desc);
    })

    $('.time img').on('mouseleave', function(){
      $('.description').html(' ');
    })

    $('.time img').on('click', function(){

      if(!$(this).hasClass('active')){
        var datasrc = $(this).attr('data-src');
        var src = $(this).attr('src');

        $(this).attr('src', datasrc);

        $('img').not($(this)).removeClass('active').removeAttr('style');
        $('img').not($(this)).parent().removeClass('active').removeAttr('style');
        $(this).parent().addClass('active');
        $(this).addClass('active');
        if(count >= 0){
          $(this).parent().css({'transform':'rotate(-' + count*5 + 'deg)', 'z-index': '-1'});
        } else {
          $(this).parent().css({'transform':'rotate(' + count*-5 + 'deg)', 'z-index': '-1'});
        }
        $(this).addClass('active')
      } else {
        $('img').removeClass('active').removeAttr('style');
        $('img').parent().removeClass('active').removeAttr('style');
      }

    })

    $('#home').on('click', function(){
      location.reload();
    })

    $('#info').on('click', function(){
      if($(this).text() != 'Close'){
        $(this).text('Close');
        $('img').css({'transform':'rotateY(90deg)'});
        $('.infotext').addClass('active');
        $('.imprinttext').removeClass('active');
      } else {
        $(this).text('Info');
        $('img').removeAttr('style')
        $('.infotext, .imprinttext').removeClass('active');
        $('.imprinttext').removeClass('active');
      }

    })

    $('#imprint').on('click', function(){
        $('.active').removeClass('active').removeAttr('style');
        $('.imprinttext').addClass('active');
    })

});


      var data=[];
      data[0]=new Array('https://annaley.de/media/site/3f295cadc8-1596543794/12-150x.jpg','https://annaley.de/media/site/fd4bdb94a5-1749803169/anna-ley-hawaiihemd-2018-150x.jpg','https://annaley.de/media/site/32890850b2-1749805609/anna-ley-palfys-2018-150x.jpg','https://annaley.de/media/site/ff658763f1-1749804844/anna-ley-peloponnes-2018-150x.jpg','https://annaley.de/media/site/0739781a64-1749803801/fliegenfangerjpg-150x.jpg','https://annaley.de/media/site/d19f65dc59-1597157787/floraplatzjpg-150x.jpg','https://annaley.de/media/site/ddec3637d6-1749802963/heinrich-boell-gymnasium-150x.jpg','https://annaley.de/media/site/0fb27690f2-1596790750/j0a7642-150x.jpg','https://annaley.de/media/site/0be01a8dcc-1596790767/j0a7643-150x.jpg','https://annaley.de/media/site/a285f9fad1-1596790822/j0a7644-150x.jpg','https://annaley.de/media/site/3896e27d62-1596790758/j0a7650-150x.jpg','https://annaley.de/media/site/fe676fce3a-1749805138/j0a7653-150x.jpg','https://annaley.de/media/site/bbc86af77e-1596790924/j0a7662-150x.jpg','https://annaley.de/media/site/2acb386a1e-1749804990/kippenberger-150x.jpg','https://annaley.de/media/site/28c4a1bf6f-1749803046/kontrolle-150x.jpg','https://annaley.de/media/site/25af74d004-1596703974/kotzmuehlchen-anna-ley-2018-150x.png','https://annaley.de/media/site/00602340e5-1749805369/untitled-150x.jpg',);
      data[1]=new Array('https://annaley.de/media/site/3f295cadc8-1596543794/12-1500x.jpg','https://annaley.de/media/site/fd4bdb94a5-1749803169/anna-ley-hawaiihemd-2018-1500x.jpg','https://annaley.de/media/site/32890850b2-1749805609/anna-ley-palfys-2018-1500x.jpg','https://annaley.de/media/site/ff658763f1-1749804844/anna-ley-peloponnes-2018-1500x.jpg','https://annaley.de/media/site/0739781a64-1749803801/fliegenfangerjpg-1500x.jpg','https://annaley.de/media/site/d19f65dc59-1597157787/floraplatzjpg-1500x.jpg','https://annaley.de/media/site/ddec3637d6-1749802963/heinrich-boell-gymnasium-1500x.jpg','https://annaley.de/media/site/0fb27690f2-1596790750/j0a7642-1500x.jpg','https://annaley.de/media/site/0be01a8dcc-1596790767/j0a7643-1500x.jpg','https://annaley.de/media/site/a285f9fad1-1596790822/j0a7644-1500x.jpg','https://annaley.de/media/site/3896e27d62-1596790758/j0a7650-1500x.jpg','https://annaley.de/media/site/fe676fce3a-1749805138/j0a7653-1500x.jpg','https://annaley.de/media/site/bbc86af77e-1596790924/j0a7662-1500x.jpg','https://annaley.de/media/site/2acb386a1e-1749804990/kippenberger-1500x.jpg','https://annaley.de/media/site/28c4a1bf6f-1749803046/kontrolle-1500x.jpg','https://annaley.de/media/site/25af74d004-1596703974/kotzmuehlchen-anna-ley-2018-1500x.png','https://annaley.de/media/site/00602340e5-1749805369/untitled-1500x.jpg',);
      data[2]=new Array(' "Familienausflug, Troisdorf, 1996", 160x180, Acryl auf Leinwand, 2019', ' "THIS WAY TO FUN", Acryl auf Leinwand, 100x135, 2020', ' "Morgen scheint die Sonne", Acryl auf Leinwand, 30x40, 2024', ' "Anna Maria", Acryl auf Leinwand, 90x70, 2025', ' "Litro-Pinte", Acryl auf Leinwand, 130x90, 2021', ' "Floraplatz", 150x120, Acryl auf Leinwand, 2018', ' "Heinrich-Böll-Gymnasium" Acryl auf Leinwand, 140x90, 2024', ' "HÖLLENPFORTE", 145x95, Acryl auf Leinwand, 2020', ' "19:18 Uhr Bonn-Beuel; 19:24 Uhr Friedrich-Wilhelms-Hütte", 100x145, Acryl auf Leinwand, 2020', ' "Reisepass, Kölner Straße 176", 2006, 95x45, Acryl auf Leinwand', ' "ZOLLAMT 1972", 70x50, Acryl auf Leinwand, 2020', ' "Hunde", 40x30, Acryl auf Leinwand, 2024', ' "THIS WAY TU FUN", 100x135, Acryl auf Leinwand, 2020', ' "eine sechste Mandarine", 47x49, Acryl auf Leinwand, 2023', ' "KONTROLLE", Acryl auf Leinwand, 80X60, 2025', ' "Kotzmühlchen", 150x170, Acryl auf Leinwand, 2016', ' "2001-2007" Acryl auf Leinwand, 40x62, 2024', );
      data[3]=new Array(true,false);

    