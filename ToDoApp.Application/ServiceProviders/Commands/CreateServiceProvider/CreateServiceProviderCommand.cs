using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ServiceProviders.Commands.CreateServiceProvider
{
    public class CreateServiceProviderCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Oib { get; set; }
        public string CompanyName { get; set; }
        public string BusinessDescription { get; set; }
        public int MainCategoryId { get; set; }
        public bool TOSAccepted { get; set; }
        public class Handler : IRequestHandler<CreateServiceProviderCommand, string>
        {
            private readonly IIdentityService _identityService;

            public Handler(IIdentityService identityService)
            {
                _identityService = identityService;
            }

            public async Task<string> Handle(CreateServiceProviderCommand request, CancellationToken cancellationToken)
            {
                var serviceProvider = new ServiceProvider
                {
                    Email = request.Email,
                    Oib = request.Oib,
                    CompanyName = request.CompanyName,
                    BusinessDescription = request.BusinessDescription,
                    TOSAccepted = request.TOSAccepted,
                };

                await _identityService.CreateUserAsync(serviceProvider, RoleEnum.ServiceProvider, request.Password);
                return await _identityService.Login(serviceProvider.Email, request.Password, false);
            }
        }
    }
}
