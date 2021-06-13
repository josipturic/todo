using Application.Services.Commands.CreateService;
using Domain.Entities;
using FluentAssertions;
using NUnit.Framework;
using System.Linq;
using System.Threading.Tasks;

namespace ToDoApp.Tests.Services.Commands.CreateService
{
    using static Testing;
    public class CreateServiceCommandTest : TestBase
    {
        [Test]
        public async Task ShouldCreateService()
        {
            var categoryIds = await AddCategories();

            var command = new CreateServiceCommand
            {
                Address = "Address",
                ContactEmail = "email@email.com",
                ContactPhoneNumber = "099123456",
                Description = "Description",
                Name = "New Service",
                ServicePrice = "0",
                CategoryIds = categoryIds.Select(s => s.ToString()).ToArray()
            };

            var serviceId = await SendAsync(command);

            var service = await FindAsync<Service>(serviceId);

            service.Should().NotBeNull();
            service.Address.Should().Be("Address");
            service.ContactEmail.Should().Be("email@email.com");
            service.Description.Should().Be("Description");
            service.Name.Should().Be("New Service");
            service.ServicePrice.Should().Be("0");
        }
    }
}
