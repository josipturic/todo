using Application.Services.Commands.CreateService;
using Application.Services.Commands.UpdateService;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ToDoApp.Application.Services.Commands.DeleteService;
using ToDoApp.Application.Services.Commands.UpdateNumOfViews;
using ToDoApp.Application.Services.Models;
using ToDoApp.Application.Services.Queries.GetAllServices;
using ToDoApp.Application.Services.Queries.GetAllServicesForServiceProvider;
using ToDoApp.Application.Services.Queries.GetService;
using ToDoApp.Application.Services.Queries.GetServiceProviderServices;

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
            var serviceId = await Mediator.Send(command);
            return Ok(serviceId);
        }

        [HttpGet("service-provider/{serviceProviderId}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceModel>>> GetServiceProviderServices(string serviceProviderId)
        {
            return Ok(await Mediator.Send(new GetAllServicesForServiceProviderQuery { ServiceProviderId = serviceProviderId }));
        }

        [HttpGet("user/{serviceProviderId}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceModel>>> GetServiceProviderServicesForUser(string serviceProviderId)
        {
            return Ok(await Mediator.Send(new GetServiceProviderServicesQuery { ServiceProviderId = serviceProviderId }));
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
            return Ok(await Mediator.Send(new GetServiceQuery { ServiceId = int.Parse(serviceId) }));
        }

        [HttpGet("update-num-of-views/{serviceId}")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateNumOfViews(string serviceId)
        {
            return Ok(await Mediator.Send(new UpdateNumOfViewsCommand { ServiceId = int.Parse(serviceId) }));
        }

        [HttpPost("{serviceId}/update-service")]
        [AllowAnonymous]
        public async Task<IActionResult> UpdateService(string serviceId, UpdateServiceCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpDelete("{serviceId}")]
        [AllowAnonymous]
        public async Task<IActionResult> DeleteService(string serviceId)
        {
            return Ok(await Mediator.Send(new DeleteServiceCommand { Id = int.Parse(serviceId) }));
        }
    }
}
