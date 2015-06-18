using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaveThoseNotesWebApi.Models
{
    public class NoteViewModel
    {
        public int Id { get; set; }
        public DateTime NoteDate { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public string School { get; set; } // Are these notes specific to course at a specifi school?
        public bool IsPublic { get; set; } //  Do you want to make your notes public for all to see or private
        public bool IsTeaching { get; set; } // Are these notes for a class that you are teaching
        public string NoteText { get; set; } // This is the text the note will contain.
    }
}