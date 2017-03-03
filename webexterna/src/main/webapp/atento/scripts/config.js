(function(){

	'use strict';

	angular
		.module('formlyApp')
		.constant('config', {
			url : {
				repomanager : {
					version : "https://cmcmexico.galeonsoftware.com/repomanager/services/repository/version",
					login : "https://cmcmexico.galeonsoftware.com/repomanager/services/repository/login",
					operations : {
						newoperationmultilevel : "https://cmcmexico.galeonsoftware.com/repomanager/services/operations/newoperationmultilevel"
					}
				},
				esign : {
					signop : "https://cmcmexico.galeonsoftware.com/ESign/esignservices/esign/signop"
				}
			},
			templateName : "STATIC PLANTILLAHazteCliente",
			opClass : 644,
			domainId : 147,
			operationType : "WEB",
			signatureTypes : ["AVANZADA_VIDEO_1PASO"],
			user : {
				username : "crivas111",
				password : "Carlos123"
			}
		}).constant('form', {
		    fields : [

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
								// Tests the input based on a helpful regular expression
								// gratefully borrowed from jQuery.formance by Omar Shammas
								// https://github.com/omarshammas/jquery.formance
								function validateDriversLicence(value) {
									//return /[A-Za-z]\d{4}[\s|\-]*\d{5}[\s|\-]*\d{5}$/.test(value);
									return true;
								}
                var value = $modelValue || $viewValue;
                if(value) {
                  // call the validateDriversLicense function
                  // which either returns true or false
                  // depending on whether the entry is valid
                  return validateDriversLicence(value)
                }
              }
            },
		      }
		    ]
		}).constant('templates', {
		    configuration : {
				  simulacion: {url : "templates/simulacion.html", name:"simulacion"},
				  aviso: {url : "templates/aviso.html", name:"aviso"},
				  personal: {url : "templates/personal.html", name:"personal"},
				  financiera: {url : "templates/financiera.html", name:"financiera"},
				  ocupacion: {url : "templates/ocupacion.html", name:"ocupacion"},
				  demograficos: {url : "templates/demograficos.html", name:"demograficos"}
				}
		}).directive('icheck', function($timeout, $parse) {
		    return {
		        require: 'ngModel',
		        link: function($scope, element, $attrs, ngModel) {
		            return $timeout(function() {
		                var value;
		                value = $attrs['value'];

		                $scope.$watch($attrs['ngModel'], function(newValue){
		                    $(element).iCheck('update');
		                })

		                return $(element).iCheck({
		                    checkboxClass: 'icheckbox_flat-blue',
		                    radioClass: 'iradio_flat-blue'

		                }).on('ifChanged', function(event) {
		                    if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
		                        $scope.$apply(function() {
		                            return ngModel.$setViewValue(event.target.checked);
		                        });
		                    }
		                    if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
		                        return $scope.$apply(function() {
															console.log(value)
		                            return ngModel.$setViewValue(value);
		                        });
		                    }
		                });
		            });
		        }
		    };
		}).directive('slider', function($timeout, $parse) {

		    return {
		        require: 'ngModel',
		        link: function($scope, element, $attrs, ngModel) {
		            return $timeout(function() {
		                var value = $attrs['value'];
										var  id = $attrs['id'];

		                return new Slider("#" + id);
		            });
		        }
		    };
		})
})();
