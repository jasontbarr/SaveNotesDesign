using SaveThoseNotesWebApi.Adapters.Interfaces;
using SaveThoseNotesWebApi.Data;
using SaveThoseNotesWebApi.Data.Model;
using SaveThoseNotesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SaveThoseNotesWebApi.Adapters.Data_Adapters
{
    public class NoteAdapter: INoteAdapter
    {
        public List<NoteViewModel> GetUserNotes(string userId)
        {
            List<NoteViewModel> notes;
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                notes = db.Notes.Where(x => x.UserId == userId).Select(x => new NoteViewModel()
                {
                    Id = x.Id,
                    NoteDate = x.NoteDate,
                    Title = x.Title,
                    Subject = x.Subject,
                    School = x.School,
                    IsPublic = x.IsPublic,
                    IsTeaching = x.IsTeaching,
                    NoteText = x.NoteText
                }).ToList();
            }
            return notes;
        }

        public Note GetUserNote(string userId, int id)
        {
            Note note = new Note();
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                note = db.Notes.Where(x => x.UserId == userId && x.Id == id).FirstOrDefault();
                return note;
            }
        }

        public void AddNote(string userId, PostNoteViewModel model)
        {
            Note note = new Note();            
            note.NoteDate = DateTime.Now;
            note.Title = model.Title;
            note.Subject = model.Subject;
            note.School = model.School;
            note.IsPublic = model.IsPublic;
            note.IsTeaching = model.IsTeaching;
            note.NoteText = model.NoteText;
            note.UserId = userId;
            using (ApplicationDbContext db = new ApplicationDbContext())
            {
                db.Notes.Add(note);
                db.SaveChanges();
            }
        }
        public void UpdateNote(int id, NoteViewModel model)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            Note note = db.Notes.Where(b => b.Id == id).FirstOrDefault();
            note.NoteDate = DateTime.Now;
            note.Title = model.Title;
            note.Subject = model.Subject;
            note.School = model.School;
            note.IsPublic = model.IsPublic;
            note.IsTeaching = model.IsTeaching;
            note.NoteText = model.NoteText;
            db.SaveChanges();
        }

        public void DeleteNote(int id)
        {
            ApplicationDbContext db = new ApplicationDbContext();
            Note note = db.Notes.Where(n => n.Id == id).FirstOrDefault();
            db.Notes.Remove(note);
            db.SaveChanges();
        }
    }
}