
(function() {

	'use strict';

	angular
		.module('formlyApp')
		.controller('MainController', MainController)
		.factory('equipoService', EquipoService)
		.factory('paqueteService', PaqueteService);

		function MainController($http, $scope, $sce, province, equipoService, paqueteService) {

			var vm = this;
			$scope.loading = false;
			$scope.ready = false;
			$scope.items = equipoService.getItems();
			$scope.packages = paqueteService.getItems();


			vm.onSubmit = onSubmit;
			vm.continuar = onContinue;
			vm.valido = valido;

			function valido() {
				console.log(vm.paquete && vm.periodo && vm.equipo)
				return vm.paquete && vm.periodo && vm.equipo
			}

			function onContinue() {
				$("#CuerpoCredito").hide("slow");
				$("#DivHeadAviso").show("slow");
				$("#CuerpoAviso").show("slow");
				document.getElementById("DivHeadCredito").style.background = "#3b3a3a";
			}
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

				// operationData.opClass = 644;
				// operationData.domainid = 147;

				operationData.opClass = 650;
				operationData.domainid = 152;
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
        //signatureTypes.push( "AVANZADA_VIDEO");

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
				usertoLogin.username = 'crivas152';
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
						url: 'https://cmcmexico.galeonsoftware.com/repomanager/services/operations/newoperationmultilevel/152',
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
