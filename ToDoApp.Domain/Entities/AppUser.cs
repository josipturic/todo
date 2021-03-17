using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public abstract class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [NotMapped]
        public string FullName
        {
            get => FirstName + " " + LastName;
        }
        public string Address { get; set; }
        public string DateOfBirth { get; set; }
        public bool TOSAccepted { get; set; }
        public string Oib { get; set; }
    }
}
