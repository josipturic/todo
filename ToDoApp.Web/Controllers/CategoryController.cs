using Application.Categories.Commands.DeleteCategory;
using Application.Categories.Commands.EditCategory;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using ToDoApp.Application.Categories.Commands.AddNewCategory;
using ToDoApp.Application.Categories.Queries.GetAllCategories;
using Web.Controllers;

namespace ToDoApp.Web.Controllers
{
    [AllowAnonymous]
    public class CategoryController : ApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            return Ok(await Mediator.Send(new GetAllCategoriesQuery()));
        }

        [HttpPost]
        public async Task<IActionResult> CreateNewCategory(AddNewCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }

        [HttpDelete("{serviceId}")]
        public async Task<IActionResult> DeleteCategory(int serviceId)
        {
            return Ok(await Mediator.Send(new DeleteCategoryCommand { Id = serviceId }));
        }

        [HttpPost("{serviceId}")]
        public async Task<IActionResult> UpdateCategory(int serviceId, EditCategoryCommand command)
        {
            return Ok(await Mediator.Send(command));
        }
    }
}
