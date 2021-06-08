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
    }
}
