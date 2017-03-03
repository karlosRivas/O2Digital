 $( document ).ready(function() {

  
  $("#ImgInferior1").hide();


  //$("#DivHeadAviso").hide();
  $("#DivHeadInfoPersonal").hide();
  $("#DivHeadInfoFinanciera").hide();

  $("#DivHeadInfoDemografica").hide();
  $("#DivHeadInfOcupacion").hide();
  

  $("#ObligatorioMonto").hide();
  $("#ObligatorioIngreso").hide();


  $("#BtnCotizacion").hide();
  $("#BtnContinuar").hide();
  $("#SegundaPage").hide();
  //$("#CuerpoAviso").hide();
  $("#CuerpoInfoPersonal").hide();
 
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
 
 
  $("#BtnFinalizar").hide();
  $("#BtnFirmarSucursal").hide();
  $("#BtnCrearOperacion").hide();



$("#LinkAviso").click(function(){
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
    $('html, body').animate({scrollTop:230}, 'slow');
});

  $("#GuardarInfoPersonal").click(function(){ 
    $("#CuerpoInfoPersonal").hide("slow");
    document.getElementById("DivHeadInfoPersonal").style.background = "#3b3a3a";        
    $("#DivHeadInfoDemografica").show("slow");
    $("#CuerpoInfoDemografica").show("slow");
  });

$("#LinkInfoPersonal").click(function(){      
       $("#CuerpoInfoPersonal").toggle("slow"); 
       $("#CuerpoCredito").hide();
       $("#CuerpoAviso").hide();
       $("#CuerpoInfoFinanciera").hide();
       $("#CuerpoInfoDemografica").hide();
       $("#CuerpoInfOcupacion").hide();
        window.scrollTo(0,500);
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

