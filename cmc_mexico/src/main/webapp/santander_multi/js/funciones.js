 $( document ).ready(function() {

  $("#DivDatos").hide();
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
  $("#BtnContinuar").hide();
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
  $("#BtnFirmarSucursal").hide();
  $("#BtnCrearOperacion").hide();



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




$("#LinkCredito").click(function(){
  
    //$("#CuerpoCredito").show("slow");  
    $("#CuerpoCredito").toggle("slow"); 
    $("#CuerpoAviso").hide();
    $("#CuerpoInfoPersonal").hide();
    $("#CuerpoInfoFinanciera").hide();
    $("#CuerpoInfoDemografica").hide();
    $("#CuerpoInfOcupacion").hide();
  });

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
         $("#BtnCotizacion").show("slow");
          $("#ImgInferior1").show("slow"); 
         

         $("#BtnContinuar").show('slow');

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


$("#BtnCotizacionAceptar").click(function(){
  document.getElementById("BtnCotizacion").style.display = "none";
  document.getElementById("ImgInferior1").style.display = "none";
    //$("#BtnCotizacion").hide();
    
    //$("#ImgInferior1").hide();

  var CotizacionNombre=document.getElementById("CotizacionNombre").value;
  $('#nombre').val(CotizacionNombre).trigger('input');

  var CotizacionLastname=document.getElementById("CotizacionLastname").value;
  $('#apellidos').val(CotizacionLastname).trigger('input');

  var CotizacionCel=document.getElementById("CotizacionCel").value;
  $('#cel').val(CotizacionCel).trigger('input');

  var CotizacionEmail=document.getElementById("CotizacionEmail").value;
  $('#email').val(CotizacionEmail).trigger('input');

  //window.scrollTo(0,165);
    //window.scrollTo(0,160);

  }); 


$("#BtnAceptarSusceptible").click(function(){
        $("#CuerpoCredito").hide("slow");
        document.getElementById("DivHeadCredito").style.background = "#3b3a3a";        
    }); 

$("#BtnContinuar").click(function(){
      $("#CuerpoCredito").hide("slow");
      $("#DivHeadAviso").show("slow");
      $("#CuerpoAviso").show("slow");
        document.getElementById("DivHeadCredito").style.background = "#3b3a3a";
    });

//Funciones Segunda pagina

$("#LinkAviso").click(function(){
   
    //$("#CuerpoAviso").show("slow");
    $("#CuerpoAviso").toggle("slow");
    $("#CuerpoCredito").hide();
    $("#CuerpoInfoPersonal").hide();
    $("#CuerpoInfoFinanciera").hide();
    $("#CuerpoInfoDemografica").hide();
    $("#CuerpoInfOcupacion").hide();
});

$("#BtnAceptarAviso").click(function(){

    $("#CuerpoAviso").hide('slow');
    document.getElementById("DivHeadAviso").style.background = "#3b3a3a";
    $("#DivHeadInfoPersonal").show('slow');
    $("#CuerpoInfoPersonal").show('slow');
    $("#ObligatorioNombre").hide();
    $("#ObligatorioLastname").hide();
    $("#ObligatorioIne").hide();
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

  

  $("#GuardarInfoPersonal").click(function(){
      
       $("#CuerpoInfoPersonal").hide("slow");
       
        
         document.getElementById("DivHeadInfoPersonal").style.background = "#3b3a3a";
        $('#DivHeadInfoFinanciera').show("slow");
        $('#CuerpoInfoFinanciera').show("slow"); 

        $("#CuerpoCredito").hide();
        $("#CuerpoAviso").hide();
        $("#CuerpoInfoDemografica").hide();
        $("#CuerpoInfOcupacion").hide();

        
        
        //var nombre=document.getElementById("nombre").value;
      //$('#nombres').val(nombre).trigger('input');



  });

$("#LinkInfoPersonal").click(function(){      
         
       //$("#CuerpoInfoPersonal").show("slow");
       $("#CuerpoInfoPersonal").toggle("slow"); 
       $("#CuerpoCredito").hide();
       $("#CuerpoAviso").hide();
       $("#CuerpoInfoFinanciera").hide();
       $("#CuerpoInfoDemografica").hide();
       $("#CuerpoInfOcupacion").hide();
        window.scrollTo(0,500);


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






  $("#LinkInfoFinanciera").click(function(){
             
        //$("#CuerpoInfoFinanciera").show("slow");
        $("#CuerpoInfoFinanciera").toggle("slow");  
        $("#CuerpoCredito").hide();
        $("#CuerpoAviso").hide();
        $("#CuerpoInfoPersonal").hide();
        $("#CuerpoInfoDemografica").hide();
        $("#CuerpoInfOcupacion").hide();
        
         window.scrollTo(0,750);
    });


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
    $("#CuerpoInfoFinanciera").hide("slow");
    document.getElementById("DivHeadInfoFinanciera").style.background = "#3b3a3a";
     $("#CuerpoCredito").hide();
    $("#CuerpoAviso").hide();
    $("#CuerpoInfoPersonal").hide();
    $("#CuerpoInfoFinanciera").hide();
    $("#CuerpoInfOcupacion").hide();
    //document.getElementById("DivHeadInfoFinanciera").style.background = "#3b3a3a";
    $("#DivHeadInfoDemografica").show("slow");
    $("#CuerpoInfoDemografica").show("slow");
     window.scrollTo(0,270);
    });



$("#GuardarInfoDemografica").click(function(){
      document.getElementById("DivHeadInfoDemografica").style.background = "#3b3a3a";
      $("#CuerpoInfoDemografica").hide("slow");
      $("#DivHeadInfOcupacion").show("slow");
      $("#CuerpoInfOcupacion").show("slow");
      window.scrollTo(0,320);


  });


$("#LinkInfoDemografica").click(function(){
        //$("#CuerpoInfoDemografica").show("slow");
        $("#CuerpoInfoDemografica").toggle("slow");
        $("#CuerpoCredito").hide();
        $("#CuerpoAviso").hide();
        $("#CuerpoInfoPersonal").hide();
        $("#CuerpoInfoFinanciera").hide();
        $("#CuerpoInfOcupacion").hide();
        
    });

$("#LinkInfOcupacion").click(function(){
        //$("#CuerpoInfOcupacion").show("slow");
        $("#CuerpoInfOcupacion").toggle("slow");
        $("#CuerpoCredito").hide();
        $("#CuerpoAviso").hide();
        $("#CuerpoInfoPersonal").hide();
        $("#CuerpoInfoFinanciera").hide();
        $("#CuerpoInfoDemografica").hide();        
    });


$("#GuardarInfOcupacion").click(function(){
      document.getElementById("DivHeadInfOcupacion").style.background = "#3b3a3a";
      $("#CuerpoInfOcupacion").hide("slow");
      $("#BtnFirmarSucursal").show("slow");
      $("#BtnCrearOperacion").show("slow");
      
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



$("#BtnCrearOperacion").click(function(){

  $("#ImgInferior1").hide();

  /*$("#DivHeadCredito").hide();
  $("#DivHeadCredito").hide();
  $("#DivHeadInfoPersonal").hide();
  $("#DivHeadInfoFinanciera").hide();
  $("#DivHeadInfoDemografica").hide();
  $("#DivHeadInfOcupacion").hide();
 */

 /* document.getElementById("DivHeadCredito").style.display= "none";
  document.getElementById("DivHeadAviso").style.display= "none";
  document.getElementById("DivHeadInfoPersonal").style.display= "none";
  document.getElementById("DivHeadInfoFinanciera").style.display= "none";
  document.getElementById("DivHeadInfoDemografica").style.display= "none";
  document.getElementById("DivHeadInfOcupacion").style.display= "none";*/



  $("#ObligatorioMonto").hide("slow");
  $("#ObligatorioIngreso").hide();

  $("#BtnCotizacion").hide("slow");
  $("#BtnContinuar").hide("slow");
  $("#SegundaPage").hide("slow");
  $("#CuerpoAviso").hide("slow");
  $("#CuerpoInfoPersonal").hide("slow");
  $("#ines").hide("slow");
  $("#operationid").hide("slow");
  $("#CuerpoInfoFinanciera").hide("slow");

  $("#DivSelect2Preg1").hide("slow");
  $("#DivTextPreg1").hide("slow");

  $("#DivSelect2Preg2").hide("slow");
  $("#DivTextPreg2").hide("slow");

  $("#DivSelect2Preg3").hide("slow");
  $("#DivTextPreg3").hide("slow");

  $("#BtnContinuar2").hide("slow");
  $("#TerceraPage").hide("slow");
  $("#CuerpoInfoDemografica").hide("slow");
  $("#CuerpoInfOcupacion").hide("slow");
  $("#CuerpoRecepDoc").hide("slow");
  $("#BtnCancelar").hide("slow");
  $("#BtnFinalizar").hide("slow");
//$("#BtnFirmarSucursal").hide();
//$("#BtnCrearOperacion").hide();



$("#DivDatos").show('slow');
  });

});
