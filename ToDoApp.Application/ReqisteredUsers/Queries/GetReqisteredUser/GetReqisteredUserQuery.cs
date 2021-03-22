using MediatR;
using Application.ReqisteredUsers.Models;
using Application.Common.Interfaces;
using AutoMapper;
using System.Threading.Tasks;
using System.Threading;
using Application.Extensions;

namespace ToDoApp.Application.ReqisteredUsers.Queries.GetReqisteredUser
{
    public class GetReqisteredUserQuery : IRequest<RegisteredUserModel>
    {
        public string Id { get; set; }

        public class Handler : IRequestHandler<GetReqisteredUserQuery, RegisteredUserModel>
        {
            private readonly IApplicationDbContext _context;
            private readonly IMapper _mapper;

            public Handler(IApplicationDbContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<RegisteredUserModel> Handle(GetReqisteredUserQuery request, CancellationToken cancellationToken)
            {
                var serviceProvider = await _context.ServiceProviders.FindByKeyAsync(request.Id, cancellationToken);
                return _mapper.Map<RegisteredUserModel>(serviceProvider);
            }
        }
    }
}
