using Application.Common.Interfaces;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Identity.Commands.Login
{
    public class LoginCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }

        public class Handler : IRequestHandler<LoginCommand, string>
        {
            private readonly IIdentityService _identityService;

            public Handler(IIdentityService identityService)
            {
                _identityService = identityService;
            }

            public async Task<string> Handle(LoginCommand request, CancellationToken cancellationToken)
            {
                return await _identityService.Login(request.Email, request.Password, false);
            }
        }
    }
}
