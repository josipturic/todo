using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class RegisteredUser : AppUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [NotMapped]
        public string FullName
        {
            get => FirstName + " " + LastName;
        }
        public string DateOfBirth { get; set; }
    }
}
