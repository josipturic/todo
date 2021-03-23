using Application.ServiceProviders.Queries.GetServiceProvider;
using Application.ServiceProviders.Queries.GetServiceProviders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ServiceProviders.Commands.CreateServiceProvider;
using Application.ServiceProviders.Models;
using Web.Controllers;
using Application.ServiceProviders.Queries.FilterServiceProviders;

namespace ToDoApp.Web.Controllers
{
    [Authorize]
    public class ServiceProviderController : ApiController
    {
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesDefaultResponseType]
        [AllowAnonymous]
        public async Task<IActionResult> Create(CreateServiceProviderCommand command)
        {
            await Mediator.Send(command);
            return NoContent();
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceProviderModel>>> GetAll()
        {
            return Ok(await Mediator.Send(new GetServiceProvidersQuery()));
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<ActionResult<ServiceProviderModel>> Get(string id)
        {
            return Ok(await Mediator.Send(new GetServiceProviderQuery { Id = id }));
        }

        [HttpGet("filter/category/{categoryId}/subcategory/{subcategoryIds}")]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ServiceProviderModel>>> FilterServiceProviders (string categoryId, string subcategoryIds)
        {
            return Ok(await Mediator.Send(new FilterServiceProvidersQuery { CategoryId = categoryId, SubCategoryIds = subcategoryIds }));
        }
    }
}
