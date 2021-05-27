using Application.Common.Interfaces;
using Domain.Entities;
using System.Linq;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.ExtensionMethods;
using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Application.Services.Commands.UpdateNumOfViews
{
    public class UpdateNumOfViewsCommand : IRequest<Unit>
    {
        public int ServiceId { get; set; }
        public class Handler : IRequestHandler<UpdateNumOfViewsCommand, Unit>
        {
            private readonly IIdentityService _identityService;
            private readonly IApplicationDbContext _context;
            private readonly ICurrentUserService _currentUserService;

            public Handler(IIdentityService identityService, IApplicationDbContext context, ICurrentUserService currentUserService)
            {
                _identityService = identityService;
                _context = context;
                _currentUserService = currentUserService;
            }

            public async Task<Unit> Handle(UpdateNumOfViewsCommand request, CancellationToken cancellationToken)
            {
                var service = await _context.Services.FirstOrDefaultAsync(s => s.Id == request.ServiceId);

                if (_currentUserService.UserId is null || _currentUserService.UserId != service.ServiceProviderId)
                {
                    service.NumOfViews = service.NumOfViews+1;

                    await _context.SaveChangesAsync(cancellationToken);
                }

                return Unit.Value;
            }
        }
    }
}
