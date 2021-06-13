using Domain.Common;
using Microsoft.AspNetCore.Identity;

namespace Domain.Entities
{
    public abstract class AppUser : IdentityUser
    {
        public string Address { get; set; }
        public bool TOSAccepted { get; set; }
        public string Oib { get; set; }
    }
}
