function EnabledAssignmentsController(UserService,$state,$rootScope,$scope,$stateParams){
    let vm = this;
   vm.list = [];
   vm.assignment = [];
   vm.class_id = $stateParams.id;
   vm.isAdmin = UserService.isAdmin();
  //  vm.assignment_id = $stateParams.id;

   vm.listassignments = function(){
    if (Number($stateParams.id)) UserService.getAssignments($stateParams.id).then(
      resp =>{
        vm.list = resp.data;
        console.log (resp.data)

      }).catch(error=>{ console.log(error)})
   }
   vm.listassignments();

   vm.deleteassignment = function(id) {
     UserService.deleteAssignment(id).then(
         resp =>{
           vm.listassignments();
         })
   }

   vm.updateassignment = function(id) {
     UserService.updateAssignment(id).then(
         resp =>{
           vm.updateassignments();
         })
   }

}
EnabledAssignmentsController.$inject = ['UserService', '$state', '$rootScope','$scope', '$stateParams'];

export { EnabledAssignmentsController };
