using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SaveThoseNotesWebApi.Controllers;
using SaveThoseNotesWebApi.Data.Model;
using SaveThoseNotesWebApi.Models;


namespace SaveThoseNotesWebApi.Adapters.Interfaces
{
    public interface INoteAdapter
    {

        List<NoteViewModel> GetUserNotes(string userId);

        Note GetUserNote(string userId, int id);

        void AddNote(string userId, PostNoteViewModel model);
        void UpdateNote(int id, NoteViewModel model);

        void DeleteNote(int id);

    }
}
