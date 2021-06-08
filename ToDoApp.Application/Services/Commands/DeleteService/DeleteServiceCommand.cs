using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace ToDoApp.Application.Services.Commands.DeleteService
{
    public class DeleteServiceCommand : IRequest
    {
        public int Id { get; set; }

        public class Handler : IRequestHandler<DeleteServiceCommand>
        {
            private readonly IApplicationDbContext _context;

            public Handler(IApplicationDbContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(DeleteServiceCommand request, CancellationToken cancellationToken)
            {
                var service = await _context.Services
                    .FindAsync(request.Id);

                if (service is null)
                {
                    throw new NotFoundException(nameof(Service), request.Id);
                }

                service.Deleted = true;

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
