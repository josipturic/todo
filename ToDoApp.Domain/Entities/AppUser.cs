using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public abstract class AppUser : IdentityUser
    {
        public string Address { get; set; }
        public bool TOSAccepted { get; set; }
        public string Oib { get; set; }
    }
}
