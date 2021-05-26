using Application.Services.Commands.CreateService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoApp.Application.Services.Models;
using ToDoApp.Application.Services.Queries.GetAllServices;
using ToDoApp.Application.Services.Queries.GetAllServicesForServiceProvider;
using ToDoApp.Application.Services.Queries.GetService;

namespace Web.Controllers
{
    [AllowAnonymous]
    public class ServiceController : ApiController
    {
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        [AllowAnonymous]
        public async Task<IActionResult> Create(CreateServiceCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }

        [HttpGet("/service-provider/{serviceProviderId}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceModel>>> GetServiceProviderServices(string serviceProviderId)
        {
            return Ok(await Mediator.Send(new GetAllServicesForServiceProviderQuery { ServiceProviderId = serviceProviderId }));
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceModel>>> GetAllServices()
        {
            return Ok(await Mediator.Send(new GetAllServicesQuery()));
        }

        [HttpGet("{serviceId}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceModel>>> GetService(string serviceId)
        {
            return Ok(await Mediator.Send(new GetServiceQuery { ServiceId = int.Parse(serviceId)}));
        }
    }
}
