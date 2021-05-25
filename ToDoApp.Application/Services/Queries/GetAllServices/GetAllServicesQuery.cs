using MediatR;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using ToDoApp.Application.Services.Models;
using Application.Extensions;
using System.Linq;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ToDoApp.Application.Services.Queries.GetAllServices
{
    public class GetAllServicesQuery : IRequest<IEnumerable<ServiceModel>>
    {
        public class Handler : IRequestHandler<GetAllServicesQuery, IEnumerable<ServiceModel>>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<IEnumerable<ServiceModel>> Handle(GetAllServicesQuery request, CancellationToken cancellationToken)
            {
                var service = await _context.Services.ToListAsync();
                return _mapper.Map<IEnumerable<ServiceModel>>(service);
            }
        }
    }
}
