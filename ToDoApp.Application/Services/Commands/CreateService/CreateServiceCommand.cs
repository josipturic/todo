using Application.Common.Interfaces;
using Domain.Entities;
using System.Linq;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Application.Common.ExtensionMethods;

namespace Application.Services.Commands.CreateService
{
    public class CreateServiceCommand : IRequest<Unit>
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string ServicePrice { get; set; }
        public string Description { get; set; }
        public string ContactEmail { get; set; }
        public string ContactPhoneNumber { get; set; }
        public string[] CategoryIds { get; set; }
        public class Handler : IRequestHandler<CreateServiceCommand, Unit>
        {
            private readonly IApplicationDbContext _context;
            private readonly ICurrentUserService _currentUserService;

            public Handler(IApplicationDbContext context, ICurrentUserService currentUserService)
            {
                _context = context;
                _currentUserService = currentUserService;
            }

            public async Task<Unit> Handle(CreateServiceCommand request, CancellationToken cancellationToken)
            {
                var service = new Service
                {
                    Address = request.Address,
                    Name = request.Name,
                    Description = request.Description,
                    ContactEmail = request.ContactEmail,
                    ContactPhoneNumber = request.ContactPhoneNumber,
                    ServiceProviderId = _currentUserService.UserId,
                    ServicePrice = request.ServicePrice
                };

                await _context.Services.AddAsync(service);

                var serviceId = await _context.SaveChangesAsync(cancellationToken);

                _context.TryUpdateManyToMany(service.Categories,
                    request.CategoryIds.Select(c => new ServiceCategory
                    {
                        CategoryId = int.Parse(c),
                        ServiceId = serviceId
                    }), x => x.CategoryId);

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
