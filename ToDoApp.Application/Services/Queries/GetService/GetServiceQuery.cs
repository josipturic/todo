using MediatR;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using ToDoApp.Application.Services.Models;
using Application.Extensions;

namespace ToDoApp.Application.Services.Queries.GetService
{
    public class GetServiceQuery : IRequest<ServiceModel>
    {
        public int ServiceId { get; set; }
        public class Handler : IRequestHandler<GetServiceQuery, ServiceModel>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<ServiceModel> Handle(GetServiceQuery request, CancellationToken cancellationToken)
            {
                var service =  await _context.Services.FindByKeyAsync(request.ServiceId, cancellationToken);
                return _mapper.Map<ServiceModel>(service);
            }
        }
    }
}
