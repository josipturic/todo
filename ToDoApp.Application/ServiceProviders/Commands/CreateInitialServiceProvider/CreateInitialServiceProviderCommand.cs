using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ServiceProviders.Commands.CreateInitialServiceProvider
{
    public class CreateInitialServiceProviderCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool TOSAccepted { get; set; }
        public class Handler : IRequestHandler<CreateInitialServiceProviderCommand, string>
        {
            private readonly IIdentityService _identityService;

            public Handler(IIdentityService identityService)
            {
                _identityService = identityService;
            }

            public async Task<string> Handle(CreateInitialServiceProviderCommand request, CancellationToken cancellationToken)
            {
                var user = new RegisteredUser
                {
                    Email = request.Email,
                    TOSAccepted = request.TOSAccepted,
                };

                await _identityService.CreateUserAsync(user, RoleEnum.ServiceProvider, request.Password);
                return await _identityService.Login(user.Email, request.Password, false);
            }
        }
    }
}
