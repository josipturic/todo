using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Application.Identity.Commands.Login;
using System.Threading.Tasks;

namespace Web.Controllers
{
    [Authorize]
    public class IdentityController : ApiController
    {
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<string> Login(LoginCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}
