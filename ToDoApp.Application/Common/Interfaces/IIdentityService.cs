using Domain.Entities;
using Domain.Enums;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    public interface IIdentityService
    {
        Task<string> Login(string userEmail, string password, bool rememberMe);
        Task<string> CreateUserAsync(AppUser newUser, RoleEnum role, string password);
        Task<string> GetUserNameAsync(string userId);
    }
}
