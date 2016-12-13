function NotesController (UserService){

  let vm = this
  vm.note = {};
  vm.notes = [];

  vm.createNote = function (note) {
    UserService.addNote(note).then(resp => {
      vm.note = resp.data
    })
  }

  vm.readNotes = function () {
    UserService.getNotes().then(resp => {
      vm.notes = resp.data
    })
  }
  vm.readNotes();

}

NotesController.$inject = ['UserService'];

export { NotesController };
