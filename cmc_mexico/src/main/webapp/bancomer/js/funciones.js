$( document ).ready(function() {
 
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
  }

  //SLIDER RANGE Without JQuery
  var slider = new Slider("#ex8", {
    //tooltip: 'always'
  });






  $("#ex8").on("slide", function(slideEvt) {
  
//console.log(slideEvt.value);

  $('#TextIngreso').val('$'+slideEvt.value).trigger('input');
  
  $('#TextMonto').val('$'+slideEvt.value*10).trigger('input');

  $('#IngresoMinimo24').val('$'+(slideEvt.value+(slideEvt.value*0.30))).trigger('output');
  $('#IngresoMinimo36').val('$'+(slideEvt.value+(slideEvt.value*0.15))).trigger('output');
  $('#IngresoMinimo48').val('$'+(slideEvt.value)).trigger('output');

  $('#PagoMensual24').val('$'+Math.ceil(slideEvt.value/24)).trigger('output');
  $('#PagoMensual36').val('$'+Math.ceil(slideEvt.value/36)).trigger('output');
  $('#PagoMensual48').val('$'+Math.ceil(slideEvt.value/48)).trigger('output');


  });






//Ocultar campos

 $("#ImgInferior1").hide();


  $("#DivHeadAviso").hide();
  $("#DivHeadInfoPersonal").hide();
  $("#DivHeadInfoFinanciera").hide();

  $("#DivHeadInfoDemografica").hide();
  $("#DivHeadInfOcupacion").hide();
  $("#DivHeadRecepDoc").hide();

  $("#ObligatorioMonto").hide();
  $("#ObligatorioIngreso").hide();





  $("#BtnCotizacion").hide();
  $("#BtnContinuar1").hide();
  $("#SegundaPage").hide();
  $("#CuerpoAviso").hide();
  $("#CuerpoInfoPersonal").hide();
  $("#ines").hide();
  $("#operationid").hide();
  $("#CuerpoInfoFinanciera").hide();

  $("#DivSelect2Preg1").hide();
  $("#DivTextPreg1").hide();

  $("#DivSelect2Preg2").hide();
  $("#DivTextPreg2").hide();

  $("#DivSelect2Preg3").hide();
  $("#DivTextPreg3").hide();



  $("#BtnContinuar2").hide();
  $("#TerceraPage").hide();
  $("#CuerpoInfoDemografica").hide();
  $("#CuerpoInfOcupacion").hide();
  $("#CuerpoRecepDoc").hide();
  $("#BtnCancelar").hide();
  $("#BtnFinalizar").hide();


  //$("#map-canvas").hide();





  //Funciones de solicitud de crédito
  $("#LinkCredito").click(function(){
    $("#CuerpoCredito").toggle();

      $("#CuerpoAviso").hide("slow");
      $("#CuerpoInfoPersonal").hide("slow");
      $("#CuerpoInfoFinanciera").hide("slow");
      $("#CuerpoInfoDemografica").hide("slow");
      $("#CuerpoInfOcupacion").hide("slow");
      $("#CuerpoRecepDoc").hide("slow");

     //window.scrollTo(0,400);
     //$('html, body').animate({scrollTop:350}, 'slow');
     //$('body').animate({scrollTop: 320},4000);
     
     //$("#myCarousel").hide("slow");
     //$("#DivRecuperar").hide("slow");
     
    // window.scrollTo(0,170);
     //$("html, body").animate({ scrollTop: $(document).height() }, 1);
  });



//Funciones de checkbox de meses

 $('#tabla').iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red',
    //increaseArea: '0%'

  })

 $('input').on('ifClicked', function (event) {
            //var value = $(this).val();
          //alert("You clicked " + value);

    var monto = document.getElementById("TextMonto").value;
    var ingreso = document.getElementById("TextIngreso").value;
    if( monto == null || monto.length == 0 && ingreso == null || ingreso.length == 0 ) {
          
          document.getElementById("TextMonto").style.border = "1px solid red";
          document.getElementById("TextIngreso").style.border = "1px solid red";
          $("#ObligatorioMonto").show();
          $("#ObligatorioIngreso").show();
          //$('input:radio[name=CheckBoxMeses]').prop('checked', true);
          //$("input:radio").attr("checked", false);
          //$("input:radio").removeAttr("checked");
          //$('input[type=radio]').uncheckableRadio();
          document.getElementById("#CheckBoxMeses").disabled = true;
   }

    else{  
         document.getElementById("TextMonto").style.border = "1px solid black";
         $("#ObligatorioMonto").hide();
          document.getElementById("TextIngreso").style.border = "1px solid black"
         $("#ObligatorioIngreso").hide();
        

         /*$("#IngresoMinimo24").show();
         $("#PagoMensual24").show();
         $("#IngresoMinimo36").show();
         $("#PagoMensual36").show();
         $("#IngresoMinimo48").show();
         $("#PagoMensual48").show();*/
           $("#ImgInferior1").show("slow"); 
         $("#BtnCotizacion").show("slow");

         $("#BtnContinuar1").show('slow');

         //window.scrollTo(0,700);
      //   $("CuerpoInfoDemografica").scrollTop(10000);
    //$("#BtnFinalizar").show("slow");        
    //window.scrollTo(0,document.body.scrollHeight);
         

   }
   //$(".panel-body").scrollTop(1200);

   $("#myCarousel").hide("slow");
   $("#DivRecuperar").hide("slow");
   window.scrollTo(0,160);
 });


$("#BtnCotizacion").click(function(){

      $("#ImgInferior1").show("slow");



  }); 

//funciones del enviar cotizacion por email
$("#BtnCotizacionAceptar").click(function(){

    $("#BtnCotizacion").hide();
    
    $("#ImgInferior1").hide();

  var CotizacionNombre=document.getElementById("CotizacionNombre").value;
  $('#nombre').val(CotizacionNombre).trigger('input');

  var CotizacionLastnamematerno=document.getElementById("CotizacionLastnamematerno").value;
  $('#lastnamematerno').val(CotizacionLastnamematerno).trigger('input');

  var CotizacionLastnamepaterno=document.getElementById("CotizacionLastnamepaterno").value;
  $('#lastnamepaterno').val(CotizacionLastnamepaterno).trigger('input');

  var CotizacionCel=document.getElementById("CotizacionCel").value;
  $('#phone').val(CotizacionCel).trigger('input');

  var CotizacionEmail=document.getElementById("CotizacionEmail").value;
  $('#email').val(CotizacionEmail).trigger('input');

  //window.scrollTo(0,165);
    //window.scrollTo(0,160);

  }); 
 


$("#BtnAceptarSusceptible").click(function(){
        $("#CuerpoCredito").hide("slow");
        document.getElementById("DivHeadCredito").style.background = "#3b3a3a";


        

    }); 

  $("#BtnContinuar1").click(function(){
      $("#DivHeadAviso").show("slow");
      $("#CuerpoCredito").hide("slow");
      $("#CuerpoMeses").hide("slow");
      $("#BtnCotizacion").hide();
      $("#CuerpoCredito").hide("slow");
        document.getElementById("DivHeadCredito").style.background = "#3b3a3a";

      $("#ImgInferior1").hide("slow"); 
      $("#SegundaPage"). show("slow");
      $("#BtnContinuar1").hide("slow");
      $("#CuerpoAviso").show("slow");


    });
  

//Funciones Segunda pagina

$("#LinkAviso").click(function(){
        //$("#CuerpoInfoPersonal").hide("slow");
        
        $("#CuerpoAviso").toggle();

       $("#CuerpoCredito").hide("slow");
       $("#CuerpoInfoPersonal").hide("slow");
       $("#CuerpoInfoFinanciera").hide("slow");
       $("#CuerpoInfoDemografica").hide("slow");
       $("#CuerpoInfOcupacion").hide("slow");
       $("#CuerpoRecepDoc").hide("slow");
    });



$("#BtnAceptarAviso").click(function(){

    $("#CuerpoAviso").hide('slow');
    document.getElementById("DivHeadAviso").style.background = "#3b3a3a";
    $("#DivHeadInfoPersonal").show('slow');
    $("#CuerpoInfoPersonal").show('slow');
    $("#ObligatorioNombre").hide();
    $("#ObligatorioLastnamematerno").hide();
    $("#ObligatorioLastnamepaterno").hide();
    $("#ObligatorioNacionalidad").hide();
    $("#ObligatorioNacimiento").hide();
    $("#ObligatorioNacionalidad").hide();
    $("#ObligatorioRfc").hide();
    $("#ObligatorioTel").hide();
    $("#ObligatorioPhone").hide();
    $("#ObligatorioEmail").hide();
    //$("html, body").animate({ scrollTop: $(document).height() }, 320);
     $('html, body').animate({scrollTop:230}, 'slow');
     //$('body').animate({scrollTop: 320},4000);

    });


$("#LinkInfoPersonal").click(function(){      
         
        $("#CuerpoInfoPersonal").toggle();

       $("#CuerpoCredito").hide("slow");
       $("#CuerpoAviso").hide("slow");
       $("#CuerpoInfoFinanciera").hide("slow");
       $("#CuerpoInfoDemografica").hide("slow");
       $("#CuerpoInfOcupacion").hide("slow");
       $("#CuerpoRecepDoc").hide("slow");



        
        $("#ObligatorioNombre").hide();
        $("#ObligatorioLastnamematerno").hide();
        $("#ObligatorioLastnamepaterno").hide();
        $("#ObligatorioNacionalidad").hide();
        $("#ObligatorioNacimiento").hide();
        $("#ObligatorioRfc").hide();
        $("#ObligatorioTel").hide();
        $("#ObligatorioPhone").hide();
        $("#ObligatorioEmail").hide();
        window.scrollTo(0,500);


    });

$("#GuardarInfoPersonal").click(function(){
    var nombre = document.getElementById("nombre").value;
    var lastnamenaterno = document.getElementById("lastnamematerno").value;
    var lastnampaterno = document.getElementById("lastnamepaterno").value;
    var rfc = document.getElementById("rfc").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var cel = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if( nombre == null || nombre.length == 0 && 
        lastnamematerno == null || lastnamematerno.length == 0 &&
        lastnamepaterno == null || lastnamepaterno.length == 0 &&
        rfc == null || rfc.length == 0 &&
        nacimiento == null || nacimiento.length == 0 &&
        nacionalidad == null || nacionalidad.length == 0 &&  
        phone == null || phone.length == 0 && 
        email == null || email.length == 0 ) {
        $("#CuerpoInfoFinanciera").hide("slow");
        $("#CuerpoInfoPersonal").show("slow");
        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("lastnamematerno").style.border = "1px solid red";
        document.getElementById("lastnamepaterno").style.border = "1px solid red";
        document.getElementById("rfc").style.border = "1px solid red";
        document.getElementById("nacimiento").style.border = "1px solid red";
        document.getElementById("nacionalidad").style.border = "1px solid red";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("email").style.border = "1px solid red";
        $("#ObligatorioNombre").show();
        $("#ObligatorioLastnamematerno").show();
        $("#ObligatorioLastnamepaterno").show();
        $("#ObligatorioRfc").show();
        $("#ObligatorioNacimiento").show();
        $("#ObligatorioNacionalidad").show();
        $("#ObligatorioPhone").show();
        $("#ObligatorioEmail").show();
    }

else{
        document.getElementById("nombre").style.border = "1px solid black";
        $("#ObligatorioNombre").hide();
        document.getElementById("lastnamematerno").style.border = "1px solid black";
        $("#ObligatorioLastnamematerno").hide();
        document.getElementById("lastnamepaterno").style.border = "1px solid black";
        $("#ObligatorioLastnamepaterno").hide();
        document.getElementById("rfc").style.border = "1px solid black";
        $("#ObligatorioRfc").hide();
        document.getElementById("nacimiento").style.border = "1px solid black";
        $("#ObligatorioNacimiento").hide();
        document.getElementById("nacionalidad").style.border = "1px solid black";
        $("#ObligatorioNacionalidad").hide();
        
        document.getElementById("phone").style.border = "1px solid black";
        $("#ObligatorioPhone").hide();
        document.getElementById("email").style.border = "1px solid black";
        $("#ObligatorioEmail").hide();


        $("#CuerpoInfoFinanciera").toggle();
        $("#CuerpoInfoPersonal").hide("slow");
         document.getElementById("DivHeadInfoPersonal").style.background = "#3b3a3a";
         $("#Searching_Modal").modal('show');

      setTimeout(function(){
      $('#Searching_Modal').modal('hide');
      //$('#myModalCalificar').modal('show');
      
      

    }, 900);
    $('#DivHeadInfoFinanciera').show("slow");
      $('#CuerpoInfoFinanciera').show("slow"); 
      window.scrollTo(0,267); 

}
  });


$("#LinkInfoFinanciera").click(function(){
    var nombre = document.getElementById("nombre").value;
    var lastnamematerno = document.getElementById("lastnamematerno").value;
    var lastnamepaterno = document.getElementById("lastnamepaterno").value;
    var rfc = document.getElementById("rfc").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var cel = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if( nombre == null || nombre.length == 0 && 
        lastnamematerno == null || lastnamematerno.length == 0 &&
        lastnamepaterno == null || lastnamepaterno.length == 0 &&
        rfc == null || rfc.length == 0 &&
        nacimiento == null || nacimiento.length == 0 && 
        nacionalidad == null || nacionalidad.length == 0 && 
        phone == null || phone.length == 0 && 
        email == null || email.length == 0 ) {
        $("#CuerpoInfoFinanciera").hide();
        $("#CuerpoInfoPersonal").show("slow");
         window.scrollTo(0,1200);

        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("lastnamematerno").style.border = "1px solid red";
        document.getElementById("lastnamepaterno").style.border = "1px solid red";
        document.getElementById("rfc").style.border = "1px solid red";
        document.getElementById("nacimiento").style.border = "1px solid red";
        document.getElementById("nacionalidad").style.border = "1px solid red";
        document.getElementById("phone").style.border = "1px solid red";
        document.getElementById("email").style.border = "1px solid red";
        $("#ObligatorioNombre").show();
        $("#ObligatorioLastnamematerno").show();
        $("#ObligatorioLastnamepaterno").show();
        $("#ObligatorioRfc").show();
        $("#ObligatorioNacimiento").show();
        $("#ObligatorioNacionalidad").show();
        $("#ObligatorioPhone").show();
        $("#ObligatorioEmail").show();
    }

else{  
        document.getElementById("nombre").style.border = "1px solid black";
        $("#ObligatorioNombre").hide();
        document.getElementById("lastnamematerno").style.border = "1px solid black";
        $("#ObligatorioLastnamematerno").hide();
        document.getElementById("lastnamepaterno").style.border = "1px solid black";
        $("#ObligatorioLastnamepaterno").hide();
        document.getElementById("rfc").style.border = "1px solid black";
        $("#ObligatorioRfc").hide();
        document.getElementById("nacimiento").style.border = "1px solid black";
        $("#ObligatorioNacimiento").hide();
        document.getElementById("nacionalidad").style.border = "1px solid black";
        $("#ObligatorioNacionalidad").hide();
        document.getElementById("phone").style.border = "1px solid black";
        $("#ObligatorioPhone").hide();
        document.getElementById("email").style.border = "1px solid black";
        $("#ObligatorioEmail").hide();

        
        $("#CuerpoInfoFinanciera").toggle();

        $("#CuerpoCredito").hide("slow");
        $("#CuerpoAviso").hide("slow");
        $("#CuerpoInfoPersonal").hide("slow");
        $("#CuerpoInfoDemografica").hide("slow");
        $("#CuerpoInfOcupacion").hide("slow");
        $("#CuerpoRecepDoc").hide("slow");

        
         window.scrollTo(0,750);
         document.getElementById("DivHeadInfoPersonal").style.background = "#3b3a3a";

}

    });



$(document).on('change', 'select[Id="Select1Preg1Buro"]', function (e) {
      var valor = document.getElementById("Select1Preg1Buro").value;
      console.log(valor);
       
      if(valor==="Si"){
        $("#DivSelect2Preg1").show("slow");
        $("#DivTextPreg1").show("slow");    
      } 
      if(valor==="No"){
        $("#DivSelect2Preg1").hide("slow");
        $("#DivTextPreg1").hide("slow");
      }

});

$(document).on('change', 'select[Id="Select1Preg2Buro"]', function (e) {
      var valor = document.getElementById("Select1Preg2Buro").value;
      console.log(valor);
       
      if(valor==="Si"){
        $("#DivSelect2Preg2").show("slow");
        $("#DivTextPreg2").show("slow");    
      } 
      if(valor==="No"){
        $("#DivSelect2Preg2").hide("slow");
        $("#DivTextPreg2").hide("slow");
      }

});


$(document).on('change', 'select[Id="Select1Preg3Buro"]', function (e) {
      var valor = document.getElementById("Select1Preg3Buro").value;
      console.log(valor);
       
      if(valor==="Si"){
        $("#DivSelect2Preg3").show("slow");
        $("#DivTextPreg3").show("slow");    
      } 
      if(valor==="No"){
        $("#DivSelect2Preg3").hide("slow");
        $("#DivTextPreg3").hide("slow");
      }

});


//CheckBox Validar Buro
/*$(document).on('change', 'input[Id="CheckConsulta"]', function (e) {
    //alert($(this).val());
    $("#Searching_Modal").modal('show');
    setTimeout(function(){
      $('#Searching_Modal').modal('hide');
      $('#myModalBuro').modal('show');  
      }, 500);   
  });
*/

//check aceptar buro
  $('#CheckConsulta').iCheck({
    checkboxClass: 'icheckbox_flat-red',
    radioClass: 'iradio_flat-red',
    //increaseArea: '0%'

  })

 $('#CheckConsulta').on('ifClicked', function (event) {
  $("#Searching_Modal").modal('show');
    setTimeout(function(){
    $("#BtnContinuar1").hide();
    $("#BtnCotizacion").hide();
      $('#Searching_Modal').modal('hide');
      $('#myModalBuro').modal('show');
      //window.scrollTo(0,290);
  
      }, 900); 

    var TextMonto=document.getElementById("TextMonto").value;
    $('#CreditoFinal').val(TextMonto+" MXN").trigger('output');

    var IngresoMinimo24=document.getElementById("IngresoMinimo24").value;
    $('#IngresoMinimoFinal24').val(IngresoMinimo24+" MXN").trigger('output');

    var IngresoMinimo36=document.getElementById("IngresoMinimo36").value;
    $('#IngresoMinimoFinal36').val(IngresoMinimo36+" MXN").trigger('output');

    var IngresoMinimo48=document.getElementById("IngresoMinimo48").value;
    $('#IngresoMinimoFinal48').val(IngresoMinimo48+" MXN").trigger('output');

    var PagoMensual24=document.getElementById("PagoMensual24").value;
    $('#PagoMensualFinal24').val(PagoMensual24+" MXN").trigger('output');

    var PagoMensual36=document.getElementById("PagoMensual36").value;
    $('#PagoMensualFinal36').val(PagoMensual36+" MXN").trigger('output');

    var PagoMensual48=document.getElementById("PagoMensual48").value;
    $('#PagoMensualFinal48').val(PagoMensual48+" MXN").trigger('output');

 });


$("#BtnNuevaSimulacion").click(function(){
  
    //location.reload();
    //$("html, body").animate({ scrollTop: $(document).height() }, 50000);
    window.location.reload();
    //$("html, body").animate({ scrollTop: $(document).height() }, 50000);
  });


$("#BtnAceptarBuro").click(function(){
   // $("#CuerpoInfoFinanciera").hide("slow");
    $("#CuerpoAviso").hide();
    $("#CuerpoInfoPersonal").hide();
    //document.getElementById("DivHeadInfoFinanciera").style.background = "#3b3a3a";
    $("#BtnContinuar2").hide();
    $("#CuerpoInfoFinanciera").hide("slow");
    document.getElementById("DivHeadInfoFinanciera").style.background = "#3b3a3a";
    $("#DivHeadInfoDemografica").show("slow");
    $("#CuerpoInfoDemografica").show("slow");
    
     window.scrollTo(0,270);
    });







$("#BtnContinuar2").click(function(){
  
    $("#CuerpoInfoFinanciera").hide("slow");
    
    $("#BtnContinuar1").hide();
    $("#BtnCotizacion").hide();
   
    $("#BtnContinuar2").hide("slow");
    document.getElementById("DivHeadInfoFinanciera").style.background = "#3b3a3a";

    $("#TerceraPage").show("slow");

    $("#BtnContinuar2").hide("slow");
    $("#DivHeadInfoDemografica").show("slow");        
     $("#CuerpoInfoDemografica").show("slow");        
    //window.scrollTo(0,5000);
    //$("CuerpoInfoDemografica").scrollTop(10000);
    //$("#BtnFinalizar").show("slow");        
    //window.scrollTo(0,document.body.scrollHeight);
     $("html, body").animate({ scrollTop: $(document).height() }, 700);
    });

//Funciones tercera pagina
$("#LinkInfoDemografica").click(function(){
        $("#CuerpoInfoDemografica").toggle();

        $("#CuerpoCredito").hide("slow");
        $("#CuerpoAviso").hide("slow");
        $("#CuerpoInfoPersonal").hide("slow");
        $("#CuerpoInfoFinanciera").hide("slow");
        $("#CuerpoInfOcupacion").hide("slow");
        $("#CuerpoRecepDoc").hide("slow");



        $("#BtnContinuar2").hide();
         window.scrollTo(0,5000);
       


    });

$("#GuardarInfoDemografica").click(function(){
      document.getElementById("DivHeadInfoDemografica").style.background = "#3b3a3a";
      $("#CuerpoInfoDemografica").hide("slow");
      $("#DivHeadInfOcupacion").show("slow");
      $("#CuerpoInfOcupacion").show("slow");
      window.scrollTo(0,320);


  });

$("#LinkInfOcupacion").click(function(){
        $("#CuerpoInfOcupacion").toggle();

        $("#CuerpoCredito").hide("slow");
        $("#CuerpoAviso").hide("slow");
        $("#CuerpoInfoPersonal").hide("slow");
        $("#CuerpoInfoFinanciera").hide("slow");
        $("#CuerpoInfoDemografica").hide("slow");
        $("#CuerpoRecepDoc").hide("slow");
        
    });


$("#GuardarInfOcupacion").click(function(){
      document.getElementById("DivHeadInfOcupacion").style.background = "#3b3a3a";
      $("#CuerpoInfOcupacion").hide("slow");
      $("#DivHeadRecepDoc").show("slow");
      $("#CuerpoRecepDoc").show("slow");

  });

$("#LinkRecepDoc").click(function(){
        $("#CuerpoRecepDoc").toggle();

        $("#CuerpoCredito").hide("slow");
        $("#CuerpoAviso").hide("slow");
        $("#CuerpoInfoPersonal").hide("slow");
        $("#CuerpoInfoFinanciera").hide("slow");
        $("#CuerpoInfoDemografica").hide("slow");
        $("#CuerpoInfOcupacion").hide("slow");
        
        
    });

$( "#CuerpoPdf" ).change(function() {
  //window.scrollTo(0,1200);
     //$('html, body').animate({scrollTop:350}, 'slow');
     //$('body').animate({scrollTop: 320},4000);
     $("html, body").animate({ scrollTop: $(document).height() }, 1500);
     console.log("hola");
});

$("#the-canvas").click(function(){
$("#myModalPdf").modal('show');
 });

$("#BtnPopFinalizar").click(function(){
        document.getElementById("DivHeadRecepDoc").style.background = "#3b3a3a";
        $("#CuerpoInfoDemografica").hide();
        $("#CuerpoInfOcupacion").hide();
        $("#CuerpoRecepDoc").hide();
        $("#BtnContinuar1").hide();
        $("#BtnContinuar2").hide();
        $("#BtnFinalizar").hide("slow");
        $("#BtnCotizacionAceptar").hide("slow");
        window.scrollTo(0, 300);
    });


$("#BtnFirmarSucursal").click(function(){
 document.getElementById("DivHeadRecepDoc").style.background = "#3b3a3a";
        $("#CuerpoInfoDemografica").hide();
        $("#CuerpoInfOcupacion").hide();
        $("#CuerpoRecepDoc").hide();
        $("#BtnContinuar1").hide();
        $("#BtnContinuar2").hide();
        $("#BtnFinalizar").hide("slow");
        $("#BtnCotizacionAceptar").hide("slow");
    });

$("#BtnAceptarMapa").click(function(){
 
        window.scrollTo(0, 300);
  });

/*

$("#BtnFirmarSucursal").click(function(){
  //funciones para localizar tu sucursal

var map;
  var service;
  function HandleSearchResults(results,  status){
    console.log(results);
    for(var i=0; i<results.length; i++){
      var marker = new google.maps.Marker({
        position: results[i].geometry.location,
        map: map,
        icon:'Images/SucursalHsbc.png'
        //icon:results[i].icon
        //title: 'Click to zoom'
        });
    }
  }

  function performSearch(){
      var request = {
        bounds: map.getBounds(), 
        //location: pyrmont,
        //radius: '500',
        //types: ['store']
        name:"HSBC"
      }

    service.nearbySearch(request, HandleSearchResults);
    //performSearch();
    
  }

  function initialise(location){
    console.log(location);

    var currentLocation=new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

    var mapOptions = {
      center:currentLocation ,
      zoom: 15,
      mapTYpeId:google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

    var marker = new google.maps.Marker({
      position: currentLocation,
      map: map
      //title: 'Click to zoom'
      });

      service = new google.maps.places.PlacesService(map);
      google.maps.event.addListenerOnce(map, 'bounds_changed', performSearch);

  }

  $(document).ready(function(){
    navigator.geolocation.getCurrentPosition(initialise);
  });
    $( "#map-canvas" ).dialog();
});


*/



//FECHA DEL CHECKBOX DE BURO

var fecha=new Date();
  var mes=fecha.getMonth()+1; 
  var minutos = fecha.getUTCMinutes();
  var dia= fecha.getDate();
  if(mes<10){mes='0'+mes}
  if(dia<10){dia='0'+dia}  
  if(minutos<10){minutos='0'+minutos}
    var f=$("#fecha").val(dia+" / "+mes + " / "+fecha.getFullYear()+" a las "+
      fecha.getHours()+":"+minutos).trigger('input');  


//Funciones del Operationid automatico
 var fecha=new Date();
  var mes=fecha.getMonth()+1; 
  var minutos = fecha.getUTCMinutes();
  var dia= fecha.getDate();

  if(mes<10){mes='0'+mes}
  if(dia<10){dia='0'+dia}  

  if(minutos<10){minutos='0'+minutos}
    $("#operationid").val(fecha.getFullYear()+""+mes+""+dia+""+fecha.getHours()+""+minutos).trigger('input');  

//funcion para el input file "cargar archivo"
$(document).on('change', '.btn-file :file', function() {
  var input = $(this),
      numFiles = input.get(0).files ? input.get(0).files.length : 1,
      label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
  input.trigger('fileselect', [numFiles, label]);
});


    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;
        
        if( input.length ) {
            input.val(log);
        } else {
            //if( log ) alert(log);
        }
        
    });










});
