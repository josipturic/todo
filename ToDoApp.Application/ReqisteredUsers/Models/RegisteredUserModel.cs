using Application.Common.Mappings;
using Domain.Entities;

namespace Application.ReqisteredUsers.Models
{
    public class RegisteredUserModel : IMapFrom<RegisteredUser>
    {
        public string Id { get; set; }
        public string CompanyName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public bool TOSAccepted { get; set; }
    }
}
