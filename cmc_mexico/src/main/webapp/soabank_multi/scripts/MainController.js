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
    checkboxClass: 'icheckbox_flat-orange',
    radioClass: 'iradio_flat-orange',
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
    checkboxClass: 'icheckbox_flat-orange',
    radioClass: 'iradio_flat-orange',
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






(function() {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController);





		function MainController($http, $scope, $sce, province) {

			var vm = this;
			$scope.loading = false;
			$scope.ready = false;
			vm.onSubmit = onSubmit;
			//vm.Prueba = onSubmit;

			

			
			




			//$scope.detailFrame = $sce.trustAsResourceUrl("https://localhost:8443/repomanager");
			// The model object that we reference
			// on the <formly-form> element in index.html
			vm.datos = {};



			// An array of our form fields with configuration
			// and options set. We make reference to this in
			// the 'fields' attribute on the <formly-form> element
			vm.datosFields = [
			
				{
					key: 'name',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'Nombre',
						placeholder: 'Nombre',
						required: true,
				
					}
				},
				{
					key: 'lastname',
					type: 'input',
					templateOptions: {
						type: 'text',
						label: 'Apellidos',
						placeholder: 'Apellidos',
						required: true
					}
				},
				{
					key: 'email',
					type: 'input',
					templateOptions: {
						type: 'email',
						label: 'Email',
						placeholder: 'Email',
						required: true
					}
				},
				{
					key: 'cellphone',
					type: 'input',
					templateOptions: {
						type: 'phone',
						label: 'Celular',
						placeholder: 'Celular',
						required: true
					}
				},
				/*{
					key: 'mayor18',
					type: 'checkbox',
					templateOptions: {
						label: 'Tienes 18 años o más?',
					},
					// Hide this field if we don't have
					// any valid input in the email field
					hideExpression: '!model.email'
				},*/
				
				/*{
					key: 'province',
					type: 'select',
					templateOptions: {
						label: 'Tipo de documento',
						// Call our province service to get a list
						// of provinces and territories
						options: province.getProvinces()		        
					},
					hideExpression: '!model.email'
				},*/
				{
					key: 'nif',
					type: 'input',
					templateOptions: {
						label: 'INE',
						placeholder: 'Documento de identidad',
						required: true
					},
					//hideExpression: '!model.province',
					validators: {
						// Custom validator to check whether the driver's license
						// number that the user enters is valid or not
		          		driversLicense: function($viewValue, $modelValue, scope) {
		          			var value = $modelValue || $viewValue;
		          			if(value) {
		          				// call the validateDriversLicense function
		          				// which either returns true or false
		          				// depending on whether the entry is valid
		          				return validateDriversLicence(value)
		          			}
		          		}
		          	},
		          	/*expressionProperties: {
		          		// We currently only have a driver's license pattern for Ontario
		          		// so we need to disable this field if we've picked a province/territory
		          		// other than Ontario
		          		'templateOptions.disabled': function($viewValue, $modelValue, scope) {
		          			if(scope.model.province === 'nif') {
		          				return false;
		          			}
		          			return true;
		          		}
		          	}*/
				},
				{
					key: 'insurance',
					type: 'input',
					templateOptions: {
						label: 'Insurance Policy Number',
						placeholder: 'Enter your insurance policy number'
					},
					hideExpression: '!model.under25 || !model.province',
				},


			];

			// Tests the input based on a helpful regular expression
			// gratefully borrowed from jQuery.formance by Omar Shammas
			// https://github.com/omarshammas/jquery.formance
			function validateDriversLicence(value) {
				//return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
				return true;
			}



			function onSubmit() {



				console.log(JSON.stringify(vm.datos, null, 4));
				
				var token="";

				$http({
					method: 'GET',

					//url: 'https://demos3.galeonsoftware.com/repomanager/services/repository/version',
					url: 'https://cmcmexico.galeonsoftware.com/repomanager/services/repository/version'
				}).then(function(successResponse) {
					console.log( successResponse.data.version);
				}).catch(function(response) {
                    if(response.status === 403)
                        errorLogin = true;
                    console.log("Error version " + response.status);

				});


				var objectToSend = new FormData();
				var operationData ={};
		
				//operationData.opClass = 593;
				//operationData.domainid = 107;

				operationData.opClass = 608;
				operationData.domainid = 111;
				var ds = (new Date()).toISOString().replace(/[^0-9]/g, "");
				
				operationData.operationid = "XX" + ds;
        console.log(operationData.operationid);

				var files =[];
				var staticDocNames ="[{\"block\":1,\"code\":\"STATIC PLANTILLAHazteCliente\",\"description\":\"Plantilla\",\"mandatory\":1,\"name\":\"Plantilla Hazte Cliente\",\"order\":1,\"signmultiple\":0,\"signorupload\":0,\"transferible\":0,\"uploadMandatory\":1,\"visiblesign\":1}]";

				var boxLabels ="[]";
				objectToSend.append('staticDocNames', "[]");
				objectToSend.append('documentsdata', staticDocNames);
				var operationDataToSend = angular.copy(operationData);

				objectToSend.append('operationdata', JSON.stringify(operationDataToSend));

				var levelArray = [];
				var oneLevel = {};
				var signers=[];

				var signer = {};
				signer.data = vm.datos;
				signer.data.operationType= "WEB";
				var signatureTypes = [];
				//signatureTypes.push( "SIMPLE");
				//signatureTypes.push( "VIDEOCONFERENCIA");
				signatureTypes.push( "AVANZADA_VIDEO_1PASO");
				signer.signaturetypes = signatureTypes;
				signer.boxLabels= boxLabels;
				signers.push(signer);
				oneLevel.order = 1;
				oneLevel.signers = signers;
				
				levelArray.push(oneLevel);
				//alert(JSON.stringify(levelArray), null, 2);


				files[0] = new File(["STATIC PLANTILLAHazteCliente"], "STATIC PLANTILLAHazteCliente");
		 		angular.forEach(files, function(file){
					 objectToSend.append('file', file);
				});
		 		objectToSend.append("signersdata", JSON.stringify(levelArray));
				
				var usertoLogin = {};
                var errorLogin = false;
				usertoLogin.username = 'crivas111';
				var pwdHashed = CryptoJS.SHA256("Carlos123");
				var pwdHashedB64= pwdHashed.toString(CryptoJS.enc.Base64);
				usertoLogin.userpassword = pwdHashedB64;

				$scope.loading = true;
				$http({
					method: 'POST',
					url: 'https://cmcmexico.galeonsoftware.com/repomanager/services/repository/login',
					data: JSON.stringify(usertoLogin),
					headers: {
						'Content-Type': "application/json"
					}
				}).then(function successCallback(response) {

					token = response.data;
					console.log(token);




					$http({
						method: 'POST',
						url: 'https://cmcmexico.galeonsoftware.com/repomanager/services/operations/newoperationmultilevel/111',
						data: objectToSend,
						headers: {
							'Content-Type': undefined,
                            'Authorization': 'Bearer ' +  token
						},
                        transformRequest: angular.identity,
                        params: {
                            objectToSend
                        }
					}).then(function successCallback(response) {
						
						var uuid = response.data.firstuuid;
						//$scope.loading = true;
						console.log(uuid);
						$scope.detailFrame = $sce.trustAsResourceUrl("https://cmcmexico.galeonsoftware.com/ESign/esignservices/esign/signop/"+uuid+"/" + uuid );
						$scope.ready = true;
						console.log(".....");
						$scope.loading = false;

					}, function errorCallback(response) {
						$scope.loading = false;
						if(response.status === 403)
						    errorLogin = true;
                        console.log("Error  newop " + response.status);
					});



				}, function errorCallback(response) {
                    if(response.status === 403)
                        errorLogin = true;
                    console.log("Error login " + response.status);
				});




				}


		}


})();