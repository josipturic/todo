using Application.Common.Interfaces;
using Domain.Entities;
using System.Linq;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.ExtensionMethods;
using Application.Extensions;
using Microsoft.EntityFrameworkCore;

namespace Application.Services.Commands.UpdateService
{
    public class UpdateServiceCommand : IRequest<Unit>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string ServicePrice { get; set; }
        public string Description { get; set; }
        public string ContactEmail { get; set; }
        public string ContactPhoneNumber { get; set; }
        public string[] CategoryIds { get; set; }
        public class Handler : IRequestHandler<UpdateServiceCommand, Unit>
        {
            private readonly IApplicationDbContext _context;
            private readonly ICurrentUserService _currentUserService;

            public Handler(IApplicationDbContext context, ICurrentUserService currentUserService)
            {
                _context = context;
                _currentUserService = currentUserService;
            }

            public async Task<Unit> Handle(UpdateServiceCommand request, CancellationToken cancellationToken)
            {
                var service = await _context.Services.Include(s => s.Categories).FirstOrDefaultAsync(o => o.Id == int.Parse(request.Id), cancellationToken);

                service.Address = request.Address;
                service.Name = request.Name;
                service.Description = request.Description;
                service.ContactEmail = request.ContactEmail;
                service.ContactPhoneNumber = request.ContactPhoneNumber;
                service.ServiceProviderId = _currentUserService.UserId;
                service.ServicePrice = request.ServicePrice;

                await _context.SaveChangesAsync(cancellationToken);

                _context.TryUpdateManyToMany(service.Categories,
                    request.CategoryIds.Select(c => new ServiceCategory
                    {
                        CategoryId = int.Parse(c),
                        ServiceId = service.Id
                    }), x => x.CategoryId);

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
