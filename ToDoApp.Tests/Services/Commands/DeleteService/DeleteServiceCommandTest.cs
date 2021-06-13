using Application.Services.Commands.CreateService;
using FluentAssertions;
using NUnit.Framework;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Application.Services.Commands.DeleteService;
using ToDoApp.Application.Services.Queries.GetAllServices;

namespace ToDoApp.Tests.Services.Commands.DeleteService
{
    using static Testing;
    public class DeleteServiceCommandTest : TestBase
    {
        [Test]
        public async Task ShouldDeleteService()
        {
            var categoryIds = await AddCategories();

            var createCommand = new CreateServiceCommand
            {
                Address = "Address",
                ContactEmail = "email@email.com",
                ContactPhoneNumber = "099123456",
                Description = "Description",
                Name = "New Service",
                ServicePrice = "0",
                CategoryIds = categoryIds.Select(s => s.ToString()).ToArray()
            };

            var serviceId = await SendAsync(createCommand);

            var getServicesCommand = new GetAllServicesQuery();

            var services = await SendAsync(getServicesCommand);

            services.Should().HaveCount(1);

            var deleteCommand = new DeleteServiceCommand { Id = serviceId };

            await SendAsync(deleteCommand);

            var getServices = new GetAllServicesQuery();

            var result = await SendAsync(getServices);

            result.Should().HaveCount(0);
        }
    }
}
