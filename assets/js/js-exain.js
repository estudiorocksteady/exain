$(document).ready(function(){ 
    $('input[name="flexRadioDefault"]').on('change', function() {
      $('.tarjCre').toggle(+this.value === 1 && this.checked);
    }).change();
    $('input[name="flexRadioDefault"]').on('change', function() {
      $('.tarjDeb').toggle(+this.value === 2 && this.checked);
    }).change();
    $('input[name="flexRadioDefault"]').on('change', function() {
      $('.cajaVecina').toggle(+this.value === 3 && this.checked);
    }).change();
     //
    var offset2 = 40;
    var duration2 = 50;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset2) {
        $('.navbar-expand-lg').addClass('nav-top');
      } else {
        $('.navbar-expand-lg').removeClass('nav-top');
      }
    });
    //send
    $("#Send").click(function(){
      $("#DatGen").addClass('no-visible');
      $("#Send").addClass('no-visible');
      $("#Enviado").addClass('enviar');
      $("#closeticket").addClass('enviar');
    });
    $("#Send2").click(function(){
      $("#DatGen2").addClass('no-visible');
      $("#Send2").addClass('no-visible');
      $("#Enviado2").addClass('enviar');
      $("#closecontacto").addClass('enviar');
    });
    $("#agendar").click(function(){
      $("#formHora").addClass('no-visible');
      $("#agendar").addClass('no-visible');
      $("#horaOK").addClass('enviar');
    });
  //up
    var offset = 400;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });         
    $('.counter').addClass('animated fadeInDownBig');
    $('h3').addClass('animated fadeIn');
    
      //mensajes tooltip 
        $(function () {
          $('[data-toggle="tooltip"]').tooltip()
        });
      // fade .navbar
      $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 50) {
                $(".navbar").addClass("navtop shadow-sm");
            } else {
                $(".navbar").removeClass("navtop shadow-sm");
            }
        });
      });
      
      //selección de imagen
      $("#upload_link").on('click', function(e){
          e.preventDefault();
          $("#upload:hidden").trigger('click');
      });
      //selección de doc
      $("#upload_doc").on('click', function(e){
          e.preventDefault();
          $("#upload2:hidden").trigger('click');
      });
    

    //
    (function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    
    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);
      
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      
      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      
      $self.data('countTo', data);
      
      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      
      // initialize the element with the starting value
      render(value);
      
      function updateTimer() {
        value += increment;
        loopCount++;
        
        render(value);
        
        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }
        
        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          
          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  
  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };
  
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
  formatter: function (value, options) {
    return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, '.');
  }
  });
  
  // start all the timers
     $('.timer').each(count);
    
  
  function count(options) {
  var $this = $(this);
  options = $.extend({}, options || {}, $this.data('countToOptions') || {});
  $this.countTo(options);
  }
});
//beneficios
        $("#Benef1Img").hover(
         function() {
            $('#Benef1').collapse('show');
          }, function() {
            $('#Benef1').collapse('hide');
          }
        );
        $("#Benef2Img").hover(
         function() {
            $('#Benef2').collapse('show');
          }, function() {
            $('#Benef2').collapse('hide');
          }
        );
        $("#Benef3Img").hover(
         function() {
            $('#Benef3').collapse('show');
          }, function() {
            $('#Benef3').collapse('hide');
          }
        );
        $("#Benef4Img").hover(
         function() {
            $('#Benef4').collapse('show');
          }, function() {
            $('#Benef4').collapse('hide');
          }
        );
        $("#Benef5Img").hover(
         function() {
            $('#Benef5').collapse('show');
          }, function() {
            $('#Benef5').collapse('hide');
          }
        );
        $("#Benef6Img").hover(
         function() {
            $('#Benef6').collapse('show');
          }, function() {
            $('#Benef6').collapse('hide');
          }
        );
    });