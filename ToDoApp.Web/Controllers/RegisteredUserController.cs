using Application.ReqisteredUsers.Commands.RegisterUser;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoApp.Application.ReqisteredUsers.Queries.GetReqisteredUser;
using Web.Controllers;

namespace ToDoApp.Web.Controllers
{
    [Authorize]
    public class RegisteredUserController : ApiController
    {
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        [AllowAnonymous]
        public async Task<IActionResult> Create (RegisterUserCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Get(string id)
        {
            return Ok(await Mediator.Send(new GetReqisteredUserQuery { Id = id }));
        }

    }
}
