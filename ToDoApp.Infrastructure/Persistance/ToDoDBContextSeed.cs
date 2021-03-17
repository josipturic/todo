using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Infrastructure.Persistence
{
    public class ToDoDBContextSeed
    {
        public static async Task SeedDefaultRolesAsync(RoleManager<IdentityRole> roleManager, string[] roles)
        {
            foreach (var roleName in roles)
            {
                if (!await roleManager.RoleExistsAsync(roleName))
                {
                    await roleManager.CreateAsync(new IdentityRole(roleName));
                }
            }
        }
    }
}
