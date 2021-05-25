using Application.Common.Interfaces;
using Domain.Entities;
using System.Linq;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Application.Common.ExtensionMethods;

namespace Application.ServiceProviders.Commands.CreateServiceProvider
{
    public class CreateServiceProviderCommand : IRequest<Unit>
    {
        public string Id { get; set; }
        public string Oib { get; set; }
        public string CompanyName { get; set; }
        public string Address { get; set; }
        public string BusinessDescription { get; set; }
        public string[] CategoryIds { get; set; }
        public class Handler : IRequestHandler<CreateServiceProviderCommand, Unit>
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

            public async Task<Unit> Handle(CreateServiceProviderCommand request, CancellationToken cancellationToken)
            {
                var serviceProvider = await _context.ServiceProviders.FirstOrDefaultAsync(s => s.Id == request.Id);

                serviceProvider.Oib = request.Oib;
                serviceProvider.CompanyName = request.CompanyName;
                serviceProvider.Address = request.Address;
                serviceProvider.BusinessDescription = request.BusinessDescription;

                //_context.TryUpdateManyToMany(serviceProvider.Categories,
                //    request.CategoryIds.Select(c => new ServiceCategory
                //    {
                //        CategoryId = int.Parse(c),
                //        ServiceProviderId = _currentUserService.UserId
                //    }), x => x.CategoryId);

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
