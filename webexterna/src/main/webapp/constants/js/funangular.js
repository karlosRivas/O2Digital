angular.module('telefonicaMexico', []);
  angular.module('telefonicaMexico').controller('CreateOperationController', 
    function($scope, $http){
      
$scope.continuar1 = function (user) {
      $("#Searching_Modal").modal('show');
      setTimeout(function(){
      $('#Searching_Modal').modal('hide');
      //$('#myModalCalificar').modal('show');
      $('#myModal').modal('show'); 
    }, 900);   
    };



$scope.validarHsbc = function (user) {
      $("#Searching_Modal").modal('show');
      setTimeout(function(){
      $('#Searching_Modal').modal('hide');
      $('#myModalHsbc').modal('show');
      
    }, 3500);   
    };

$scope.validarBuro = function (user) {
      $("#Searching_Modal").modal('show');
      setTimeout(function(){
      $('#Searching_Modal').modal('hide');
      $('#myModalBuro').modal('show');
      
    }, 3500);   
    };


      $scope.prova = function(){
        $("#Searching_Modal").modal('show');
      };
      
      $scope.user = {
          opClass : 557,
          domainId: 100,
          nif:"31738656j",
          operationType: "EMAIL"
          
      };
    
    var files = [];
    $scope.uploadedFile = function(file){
      console.log(file.files[0]);
      files.splice(0, 1, file.files[0]);
      //$("#myModalPdf").modal('show');
      $("#BtnFinalizar").show("slow");
      
      window.scrollTo(0,document.body.scrollHeight);
    };

    $scope.creatOperation = function (user) {
      console.log(user);
      //var url = 'http://104.155.70.22:8080/ESign/esignservices/esign/newoperationwithfiles2';
      //var url = 'https://cmcmexico.galeonsoftware.com/ESign/esignservices/esign/newoperationwithfiles2';
      //var url = 'https://www.demos2.galeonsoftware.com/ESign/esignservices/esign/newoperationwithfiles2';
      var url = 'https://demos3.galeonsoftware.com/ESign/esignservices/esign/newoperationwithfiles2';
      var fd = new FormData();
      angular.forEach(files,function(file, index){
        fd.append('file', file);
      });
      user.mandatories = [1];

      fd.append("datos", JSON.stringify(user));
      $("#Searching_Modal").modal('show');
      $.ajax({
        url: url,
        data: fd,
        processData: false,
        contentType: false,
        timeout:15000,
        type: 'POST',
        success: function(data){
          alert("Operacion exitosa");
          $("#Searching_Modal").modal('hide');
          
        },
        error: function (err){
          console.log(JSON.stringify(err));
          if( err.status = 200){
             $("#myModalFinalizar").modal('show');
            //alert("!Se han guardado correctamente los datos!");
            //window.location.assign("solicitud.html");  
          }
          else{
            console.log(err.status);
            alert("Operacion fallida");
          }          
          $("#Searching_Modal").modal('hide');
          
        }
      });
    };





  });

