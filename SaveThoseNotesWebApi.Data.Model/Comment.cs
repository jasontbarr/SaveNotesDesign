using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SaveThoseNotesWebApi.Data.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string UserComment { get; set; }
        public string UserId { get; set; }
        public string NoteId { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual Note Note { get; set; }

    }
}
