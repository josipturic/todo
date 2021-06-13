using Domain.Entities;
using Microsoft.AspNetCore.Identity;

namespace ToDoApp.Infrastructure.Persistance
{
    public static class ApplicationDbInitializer
    {
        public static void SeedUsers(UserManager<AppUser> userManager)
        {
            if (userManager.FindByEmailAsync("abc@xyz.com").Result == null)
            {
                Admin user = new Admin
                {
                    UserName = "admin@todoapp.com",
                    Email = "admin@todoapp.com"
                };

                IdentityResult result = userManager.CreateAsync(user, "Pass123#").Result;

                if (result.Succeeded)
                {
                    userManager.AddToRoleAsync(user, "Admin").Wait();
                }
            }
        }
    }
}
