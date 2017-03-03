(function() {
	'use strict';

	angular
		.module('formlyApp')
		.factory('plataformaService', PlataformaService)
		.controller('MainController', MainController);

		function MainController($http, $scope, form, templates, plataformaService) {
			var vm = this;
			$scope.loading = false;
			$scope.ready = false;

			vm.onSubmit = onSubmit;

			// Banderas para indicar si un panel debe verse o no en la pantalla.
			$scope.showCarrusel = true;
			$scope.simulacion = true;
			$scope.aviso = false;
			$scope.personal = false;
			$scope.financiera = false;
			$scope.demograficos = false;
			$scope.ocupacion = false;
			$scope.consultaBuro = false;
			$scope.cotizacionEmail = true;

			// Configuracion de las plantillas para los paneles que se muestran en la pantalla
			$scope.templates = templates.configuration;

			// Configuraciion de los datos del credito del usuario
			$scope.credito = {
				ingreso : '',
				monto : '',
				min24 : '',
				min36 : '',
				min48 : '',
				checkMeses : '',
				pago24 : '',
				pago36 : '',
				pago48 : ''
			}

			// Detemina si el boton de Continuar, debe ser visible en el panel de simulacion.
			$scope.showButtonContinue = function() {
				return !$scope.myform.$pristine && $scope.myform.TextMonto.$valid && $scope.myform.TextIngreso.$valid && $scope.credito.checkMeses
			}

			// Determina si el panel de 'Aviso de privacidad' debe mostrarse o no en la pantalla
			$scope.showAviso = function() {
				$scope.aviso = true;
				$scope.showCarrusel = false;

				// Se da un timeout a la ejecucion del click sobre el panel, para dar tiempo a que termine la ejecucion de la animacion.
				setTimeout(function() {$("#link-aviso").click()}, 1500);
			}

			$scope.showPersonal = function() {
				$scope.personal = true;
				setTimeout(function() {
					$("#link-personal").click();
				}, 1500);

			}

			// Inicializa los desplazamientos en la pantalla para cada uno de los paneles de la cotizacion.
			$scope.$on('$includeContentLoaded', function () {
			    console.log("inicializando los valores de scroll para los paneles.");

					$("#collapse-simulacion").on("shown.bs.collapse", function(){
						console.log("show collapse simulacion")
						window.scrollTo(0,175);
					});

					$("#collapse-aviso").on("shown.bs.collapse", function(){
						console.log("show collapse aviso")
						window.scrollTo(0,220);
					});

					$("#collapse-personal").on("shown.bs.collapse", function(){
						console.log("show collapse personal")
						window.scrollTo(0,265);
					});

					$("#collapse-financiera").on("shown.bs.collapse", function(){
						console.log("show collapse financiera")
						window.scrollTo(0, 310);
					});

					$("#collapse-demograficos").on("shown.bs.collapse", function(){
						console.log("show collapse demograficos")
						window.scrollTo(0, 355);
					});

					$("#collapse-ocupacion").on("shown.bs.collapse", function(){
						console.log("show collapse ocupacion")
						window.scrollTo(0, 400);
					});
			});

			$scope.showFinanciera = function() {
				$scope.financiera = true;

				setTimeout(function() {
					$("#link-financiera").click();
				}, 1500);
			}

			$scope.changeConsulta = function() {
				if ($scope.consultaBuro) {
					$("#BlockModal").modal('show');

					setTimeout(function(){
				    $("#BtnCotizacion").hide();
			      $('#BlockModal').modal('hide');
			      $('#myModalBuro').modal('show');
			      //window.scrollTo(0,290);

			    }, 900);
				}
			}

			$scope.scrollCheckMeses = function() {
				setTimeout(function() {
					window.scrollTo(0,350);
				}, 1500);
			}

			$scope.sendBuro = function() {
				$scope.demograficos = true;

				setTimeout(function() {
					$("#link-demograficos").click();
				}, 1500);
			}

			$scope.showOcupacion = function() {
				$scope.ocupacion = true;
				setTimeout(function() {
					$("#link-ocupacion").click()
					window.scrollTo(0,320);
				}, 1500);
			}

			$scope.showCreateOp = function() {
				$("#link-ocupacion").click()
				$scope.completeForm = true;
			}

			$scope.hideButtonEmail = function() {
				$scope.cotizacionEmail=false;
			}

			$scope.updateData = function() {
				var ingreso = parseInt($scope.credito.ingreso);
				$scope.credito.monto = ingreso * 10;

				$scope.credito.min24 = (ingreso+(ingreso*0.30));
				$scope.credito.min36 = (ingreso+(ingreso*0.15));
				$scope.credito.min48 = ingreso;

				$scope.credito.pago24 = Math.ceil(ingreso/24);
				$scope.credito.pago36 = Math.ceil(ingreso/36);
				$scope.credito.pago48 = Math.ceil(ingreso/48);
			}

			// The model object that we reference
			// on the <formly-form> element in index.html
			vm.datos = {};

			// An array of our form fields with configuration
			// and options set. We make reference to this in
			// the 'fields' attribute on the <formly-form> element
			vm.datosFields = form.fields;

			function onSubmit() {
				console.log(JSON.stringify(vm.datos, null, 4));
				plataformaService.version();
				plataformaService.connect($scope, vm);
			}
		}

		function PlataformaService($http, $sce, config) {
			return {
				version : function() {
					$http({
						method: 'GET',
						url: config.url.repomanager.version
					}).then(function(successResponse) {
						console.log( successResponse.data.version);
					}).catch(function(response) {
	          if(response.status === 403)
	          	errorLogin = true;
	          console.log("Error version " + response.status);
					});
				},
				connect : function($scope, vm) {
					var token="";
					var objectToSend = new FormData();
					var ds = (new Date()).toISOString().replace(/[^0-9]/g, "");

					var operationData = {
						opClass : config.opClass,
						domainid : config.domainId,
						operationid : "XX" + ds
					};

					console.log(operationData.operationid);

					var files = [];
					var staticDocNames = [
						{
							block:1,
							code:config.templateName,
							description:"Plantilla",
							mandatory:1,
							name:"Plantilla Hazte Cliente",
							order:1,
							signmultiple:0,
							signorupload:0,
							transferible:0,
							uploadMandatory:1,
							visiblesign:1
						}
					];
					// var staticDocNames ="[{\"block\":1,\"code\":\"STATIC PLANTILLAHazteCliente\",\"description\":\"Plantilla\",\"mandatory\":1,\"name\":\"Plantilla Hazte Cliente\",\"order\":1,\"signmultiple\":0,\"signorupload\":0,\"transferible\":0,\"uploadMandatory\":1,\"visiblesign\":1}]";

					var boxLabels ="[]";
					objectToSend.append('staticDocNames', "[]");
					objectToSend.append('documentsdata', JSON.stringify(staticDocNames));
					var operationDataToSend = angular.copy(operationData);

					objectToSend.append('operationdata', JSON.stringify(operationDataToSend));

					var levelArray = [];
					var oneLevel = {};
					var signers=[];

					var signer = {};
					signer.data = vm.datos;
					signer.data.operationType= config.operationType;
					signer.signaturetypes = config.signatureTypes;
					signer.boxLabels= boxLabels;

					signers.push(signer);
					oneLevel.order = 1;
					oneLevel.signers = signers;

					levelArray.push(oneLevel);

					files[0] = new File([config.templateName], config.templateName);
			 		angular.forEach(files, function(file){
						 objectToSend.append('file', file);
					});
			 		objectToSend.append("signersdata", JSON.stringify(levelArray));

					var usertoLogin = {};
	        var errorLogin = false;
					usertoLogin.username = config.user.username;
					var pwdHashed = CryptoJS.SHA256(config.user.password);
					var pwdHashedB64= pwdHashed.toString(CryptoJS.enc.Base64);
					usertoLogin.userpassword = pwdHashedB64;

					$scope.loading = true;
					$http({
						method: 'POST',
						url: config.url.repomanager.login,
						data: JSON.stringify(usertoLogin),
						headers: {
							'Content-Type': "application/json"
						}
					}).then(function successCallback(response) {

						token = response.data;
						console.log(token);

						$http({
							method: 'POST',
							url: config.url.repomanager.operations.newoperationmultilevel + '/' + config.domainId ,
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
							$scope.detailFrame = $sce.trustAsResourceUrl(config.url.esign.signop + "/"+uuid + "/" + uuid);
							$scope.ready = true;
							console.log(".....");
							$scope.loading = false;

						}, function errorCallback(response) {
							$scope.loading = false;
							if(response.status === 403)
						    errorLogin = true;

	            console.log("Error newop " + response.status);
						});
					}, function errorCallback(response) {
		        if(response.status === 403)
		          errorLogin = true;
		        console.log("Error login " + response.status);
					});
				}
			}
		}
})();
