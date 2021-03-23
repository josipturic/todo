using Application.Common.Interfaces;
using AutoMapper;
using MediatR;
using System.Threading;
using System.Threading.Tasks;
using Application.ServiceProviders.Models;
using Application.Extensions;

namespace Application.ServiceProviders.Queries.GetServiceProvider
{
    public class GetServiceProviderQuery : IRequest<ServiceProviderModel>
    {
        public string Id { get; set; }

        public class Handler : IRequestHandler<GetServiceProviderQuery, ServiceProviderModel>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ServiceProviderModel> Handle(GetServiceProviderQuery request, CancellationToken cancellationToken)
            {
                var serviceProvider = await _context.ServiceProviders.FindByKeyAsync(request.Id, cancellationToken);
                return _mapper.Map<ServiceProviderModel>(serviceProvider);
            }
        }
    }
}
