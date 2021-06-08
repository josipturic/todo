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
        public class Handler : IRequestHandler<CreateServiceProviderCommand, Unit>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(CreateServiceProviderCommand request, CancellationToken cancellationToken)
            {
                var serviceProvider = await _context.ServiceProviders.FirstOrDefaultAsync(s => s.Id == request.Id);

                serviceProvider.Oib = request.Oib;
                serviceProvider.CompanyName = request.CompanyName;
                serviceProvider.Address = request.Address;

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
