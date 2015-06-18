using Microsoft.AspNet.Identity;
using SaveThoseNotesWebApi.Data.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity.Migrations;
using Microsoft.AspNet.Identity.EntityFramework;

namespace SaveThoseNotesWebApi.Data
{
    public static class Seeder
    {
        public static void Seed(ApplicationDbContext db, bool roles = true, bool users = true, bool notes = true, bool comments = true)
        {
            if (roles) SeedRoles(db);
            if (users) SeedUsers(db);
            if (notes) SeedNotes(db);
            if (comments) SeedComments(db);            
        }

        private static void SeedRoles(ApplicationDbContext db)
        {
            var manager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(db));

            if (!manager.RoleExists(Roles.User)) manager.Create(new IdentityRole() { Name = Roles.User });
            if (!manager.RoleExists(Roles.Admin)) manager.Create(new IdentityRole() { Name = Roles.Admin });
        }

        private static void SeedUsers(ApplicationDbContext db)
        {
            var manager = new UserManager<ApplicationUser>(new UserStore<ApplicationUser>(db));

            if (!db.Users.Any(x => x.UserName == "test"))
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = "test",
                    Email = "test@test.com"
                };
                manager.Create(user, "123123");
                manager.AddToRole(user.Id, Roles.User);
            }
            if (!db.Users.Any(x => x.UserName == "admin"))
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = "admin",
                    Email = "admin@test.com"
                };
                manager.Create(user, "123123");
                manager.AddToRole(user.Id, Roles.Admin);
            }
        }

        private static void SeedNotes(ApplicationDbContext db)
        {
            string user = db.Users.FirstOrDefault(x => x.UserName == "test").Id;
            string admin = db.Users.FirstOrDefault(x => x.UserName == "admin").Id;

            db.Notes.AddOrUpdate(x => x.Id,
                new Note() { Id = 1, NoteDate = DateTime.Now, Title = "Three Ways to Define Objects", Subject = "Javascript", NoteText = "You know, being a test pilot isn't always the healthiest business in the world.", School = "CoderCamps", IsPublic = false, IsTeaching = false, UserId = user },
                new Note() { Id = 2, NoteDate = DateTime.Now, Title = "Name The Muscles", Subject = "Biology 101", NoteText = "name the muscles", School = "USC", IsPublic = false, IsTeaching = false, UserId = user },
                new Note() { Id = 3, NoteDate = DateTime.Now, Title = "How To Install a Window", Subject = "Home Repair", NoteText = "build frame, install windows", School = null, IsPublic = false, IsTeaching = false, UserId = user },
                new Note() { Id = 4, NoteDate = DateTime.Now, Title = "Name the Datatypes", Subject = "CSharp", NoteText = "int, string,etc", School = "Microsoft Virtual Academy", IsPublic = false, IsTeaching = false, UserId = admin },
                new Note() { Id = 5, NoteDate = DateTime.Now, Title = "How To Install a Window", Subject = "OTS Exam", NoteText = "push ups, situps, run for a mile", School = "Air Force School", IsPublic = false, IsTeaching = false, UserId = admin }
                );
        }

        private static void SeedComments(ApplicationDbContext db)
        {
            db.Comments.AddOrUpdate(x => x.Id,
                new Comment() { Id = 1, Date = DateTime.Now, UserComment = "Nice Notes" },
                new Comment() { Id = 2, Date = DateTime.Now, UserComment = "I would like to add this note to your note" },
                new Comment() { Id = 3, Date = DateTime.Now, UserComment = "You should build a wood frame first" }
                );
        }
        
    }
}


