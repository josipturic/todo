using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoApp.Application.Admin.Queries.GetAdminDashboardData;
using Web.Controllers;

namespace ToDoApp.Web.Controllers
{
    [AllowAnonymous]
    public class AdminController : ApiController
    {
        [HttpGet("dashboard")]
        public async Task<IActionResult> GetDashboardData()
        {
            return Ok(await Mediator.Send(new GetAdminDashboardDataQuery()));
        }
    }
}
