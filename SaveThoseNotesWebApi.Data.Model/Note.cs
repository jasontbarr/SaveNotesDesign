using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaveThoseNotesWebApi.Data.Model
{
    public class Note
    {
        public int Id { get; set; }
        public DateTime NoteDate { get; set; }
        public string Title { get; set; }
        public string Subject { get; set; }
        public string School { get; set; } // Are these notes specific to a course at a specific school?
        public bool IsPublic { get; set; } //  Do you want to make your note private or public for all to see 
        public bool IsTeaching { get; set; } // Are these notes for a class that you are teaching?
        public string NoteText { get; set; } // This is the text the note will contain.        
        public string UserId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual List<Comment> Comments { get; set; }
    }
}
