using NUnit.Framework;
using System.Threading.Tasks;
using ToDoApp.Application.Services.Queries.GetAllServices;
using FluentAssertions;
using System.Collections.Generic;
using Domain.Entities;

namespace ToDoApp.Tests.Services.Queries
{
    using static Testing;
    public class GetServicesQueryTest : TestBase
    {
        [Test]
        public async Task ShouldReturnList()
        {
            // Arrange
            await AddAsync(new Service
            {
                Address = "Address",
                Categories = new List<ServiceCategory>(),
                ContactEmail = "email@email.com",
                ContactPhoneNumber = "099123456",
                Description = "Description",
                Name = "New Service",
                ServicePrice = "0"
            });

            var query = new GetAllServicesQuery();

            // Act
            var result = await SendAsync(query);

            // Assert
            result.Should().NotBeNull();
            result.Should().HaveCount(1);
        }
    }
}
