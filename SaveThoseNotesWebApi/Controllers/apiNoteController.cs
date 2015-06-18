using SaveThoseNotesWebApi.Adapters.Data_Adapters;
using SaveThoseNotesWebApi.Adapters.Interfaces;
using SaveThoseNotesWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Microsoft.AspNet.Identity;
using SaveThoseNotesWebApi.Data.Model;

namespace SaveThoseNotesWebApi.Controllers
{
    public class apiNoteController : ApiController
    {
        private INoteAdapter _adapter;

        public apiNoteController()
        {
            _adapter = new NoteAdapter();
        }

        public apiNoteController(INoteAdapter a)
        {
            _adapter = a;
        }

        [Authorize]        
        public IHttpActionResult Get()
        {
            string userId = User.Identity.GetUserId();
            if (userId == null)
            {
                return BadRequest("Could not find user");
            }
            List<NoteViewModel> notes = _adapter.GetUserNotes(userId);
            return Ok(notes);
        }

        [Authorize]
        public IHttpActionResult Get(int id)
        {
            string userId = User.Identity.GetUserId();
            if (userId == null)
            {
                return BadRequest("Could not find user");
            }
            List<NoteViewModel> notes = _adapter.GetUserNotes(userId);
            return Ok(notes);
        }

        [Authorize]     
        public IHttpActionResult Post(PostNoteViewModel model)
        {
            string userId = User.Identity.GetUserId();
            if (userId == null)
            {
                return BadRequest("Could not find user");
            }
            _adapter.AddNote(userId, model);
            return Ok();
        }

        [Authorize]     
        public IHttpActionResult Put(int id, NoteViewModel model)
        {
            string userId = User.Identity.GetUserId();
            if (userId == null)
            {
                return BadRequest("Could not find user");
            }
            _adapter.UpdateNote(id, model);
            return Ok();
        }

        [Authorize]     
        public IHttpActionResult Delete(int id)
        {
            string userId = User.Identity.GetUserId();
            if (userId == null)
            {
                return BadRequest("Could not find user");
            }
            _adapter.DeleteNote(id);
            return Ok();
        }
    }
}
