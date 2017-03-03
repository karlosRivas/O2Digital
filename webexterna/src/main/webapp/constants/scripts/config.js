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
			opClass : 608,
			domainId : 111,
			operationType : "WEB",
			signatureTypes : ["AVANZADA_VIDEO_1PASO"],
			user : {
				username : "crivas111",
				password : "Carlos123"
			}
		});
})();
