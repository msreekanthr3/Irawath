using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace Iriavath.Models
{
    public class UserInfo
    {
        
        
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool Gender { get; set; }
        public DateTime? Dob { get; set; }
        public string PhNumber { get; set; }
        public string ImagePath { get; set; }
        public DateTime? RegDate { get; set; }
        public string Email { get; set; }
    }
}