(function() {
	'use strict';

	angular
		.module('formlyApp')
		.factory('equipoService', EquipoService)
		.factory('paqueteService', PaqueteService)
		.factory('plataformaService', PlataformaService)
		.controller('MainController', MainController);

		function MainController($http, $scope, form, templates, plataformaService, equipoService, paqueteService) {
			var vm = this;
			$scope.loading = false;
			$scope.ready = false;

			vm.onSubmit = onSubmit;

			$scope.items = equipoService.getItems();
			$scope.packages = paqueteService.getItems();

			// Banderas para indicar si un panel debe verse o no en la pantalla.
			$scope.showCarrusel = true;
			$scope.personalizar = true;
			$scope.aviso = false;
			$scope.personal = false;
			$scope.financiera = false;
			$scope.demograficos = false;
			$scope.consultaBuro = false;
			$scope.cotizacionEmail = true;
			$scope.completeForm = false;

			// Configuracion de las plantillas para los paneles que se muestran en la pantalla
			$scope.templates = templates.configuration;

			$scope.checkItem = function(element) {
				$(".img-check").removeClass("check");
        $(element).toggleClass("check");
			}

			// Detemina si el boton de Continuar, debe ser visible en el panel de simulacion.
			$scope.showButtonContinue = function valido() {
				return vm.paquete && vm.periodo && vm.equipo
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
					$(".img-check").click(function(){
		      	$(".img-check").removeClass("check");
		        $(this).toggleClass("check");

		 			});

					$("#collapse-personalizar").on("shown.bs.collapse", function(){
						console.log("show collapse simulacion")
						window.scrollTo(0,370);
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

			$scope.hideButtonEmail = function() {
				$scope.cotizacionEmail=false;
			}

			$scope.showCreateOp = function() {
				$scope.completeForm = true;
				$("#link-demograficos").click();
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

		function EquipoService() {
			return {
				getItems : function() {
					return [
						{id : 1, name: "Equipo 1", description: "Descripion detallada del equipo 1", img:"Images/img-phone.png"},
						{id : 2, name: "Equipo 2", description: "Descripion detallada del equipo 2", img:"Images/img-iphone02.png"},
						{id : 3, name: "Equipo 3", description: "Descripion detallada del equipo 3", img:"Images/img-iphone03.png"},
						{id : 4, name: "Equipo 4", description: "Descripion detallada del equipo 4", img:"Images/img-iphone04.png"}
					]
				}
			}
		}

		function PaqueteService() {
			return {
				getItems : function() {
					return [
						{id : 1, name:"Paquete 1", price: "$349", internet: "1 GB", promoInternet:"1 GB", totalInternet:"2 GB", sms:"Ilimitado", socialNetwork:"Incluido", radio:"Incluido"},
						{id : 2, name:"Paquete 2", price: "$449", internet: "1.5 GB", promoInternet:"1.5 GB", totalInternet:"3 GB", sms:"Ilimitado", socialNetwork:"Incluido", radio:"Incluido"},
						{id : 3, name:"Paquete 3", price: "$549", internet: "2.75 GB", promoInternet:"2.75 GB", totalInternet:"5.5 GB", sms:"Ilimitado", socialNetwork:"Incluido", radio:"Incluido"},
						{id : 4, name:"Paquete 4", price: "$849", internet: "4.25 GB", promoInternet:"4.25 GB", totalInternet:"8.5 GB", sms:"Ilimitado", socialNetwork:"Incluido", radio:"Incluido"}
					]
				}
			}
		}
})();
