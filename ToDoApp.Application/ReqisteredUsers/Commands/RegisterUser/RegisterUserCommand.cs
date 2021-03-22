using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.ReqisteredUsers.Commands.RegisterUser
{
    public class RegisterUserCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Oib { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool TOSAccepted { get; set; }
        public class Handler : IRequestHandler<RegisterUserCommand, string>
        {
            private readonly IIdentityService _identityService;

            public Handler(IIdentityService identityService)
            {
                _identityService = identityService;
            }

            public async Task<string> Handle(RegisterUserCommand request, CancellationToken cancellationToken)
            {
                var payer = new RegisteredUser
                {
                    Email = request.Email,
                    Oib = request.Oib,
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    TOSAccepted = request.TOSAccepted,
                };

                await _identityService.CreateUserAsync(payer, RoleEnum.RegisteredUser, request.Password);
                return await _identityService.Login(payer.Email, request.Password, false);
            }
        }
    }
}
