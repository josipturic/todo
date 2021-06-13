using Application.Services.Commands.CreateService;
using Application.Services.Commands.UpdateService;
using FluentAssertions;
using NUnit.Framework;
using System.Linq;
using System.Threading.Tasks;
using ToDoApp.Application.Services.Commands.DeleteService;
using ToDoApp.Application.Services.Queries.GetService;

namespace ToDoApp.Tests.Services.Commands.UpdateService
{
    using static Testing;
    public class UpdateServiceCommandTest : TestBase
    {
        [Test]
        public async Task ShouldUpdateService() 
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

            var updateCommand = new UpdateServiceCommand { 
                Id = serviceId.ToString(),
                Address = "New address",
                ContactEmail = "email@email.com",
                ContactPhoneNumber = "099123456",
                Description = "Description",
                Name = "New Service",
                ServicePrice = "0",
                CategoryIds = categoryIds.Select(s => s.ToString()).ToArray()
            };

            await SendAsync(updateCommand);

            var getServicesQuery = new GetServiceQuery
            {
                ServiceId = serviceId
            };

            var result = await SendAsync(getServicesQuery);

            result.Address.Should().Be("New address");
        }
    }
}
